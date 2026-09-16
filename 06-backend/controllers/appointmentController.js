const createCrudController = require('./genericController');
const db = require('../db/db');

const base = createCrudController('appointments', 'appointment_id');

const VALID_STATUSES = [
  'Requested', 'Scheduled', 'Confirmed', 'Rescheduled',
  'Cancelled', 'No-show', 'Completed',
];

// FR-013/FR-014: Cancel with reason
base.cancel = (req, res) => {
  const { reason } = req.body;
  if (!reason) return res.status(400).json({ error: 'Cancellation reason is required' });

  const result = db
    .prepare(`UPDATE appointments SET status = 'Cancelled', cancellation_reason = ? WHERE appointment_id = ?`)
    .run(reason, req.params.id);

  if (result.changes === 0) return res.status(404).json({ error: 'Appointment not found' });
  res.json(db.prepare('SELECT * FROM appointments WHERE appointment_id = ?').get(req.params.id));
};

// FR-015/FR-016: Mark no-show with reason
base.markNoShow = (req, res) => {
  const { reason } = req.body;

  const result = db
    .prepare(`UPDATE appointments SET status = 'No-show', no_show_reason = ? WHERE appointment_id = ?`)
    .run(reason || null, req.params.id);

  if (result.changes === 0) return res.status(404).json({ error: 'Appointment not found' });
  res.json(db.prepare('SELECT * FROM appointments WHERE appointment_id = ?').get(req.params.id));
};

// FR-018/FR-019: Reschedule — creates a new appointment linked to the original
base.reschedule = (req, res) => {
  const original = db
    .prepare('SELECT * FROM appointments WHERE appointment_id = ?')
    .get(req.params.id);
  if (!original) return res.status(404).json({ error: 'Original appointment not found' });

  const { appointment_date, appointment_time } = req.body;
  if (!appointment_date) return res.status(400).json({ error: 'New appointment_date is required' });

  const insert = db.prepare(`
    INSERT INTO appointments
      (patient_id, doctor_id, department_id, appointment_date, appointment_time,
       appointment_type, booking_channel, status, original_appointment_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, 'Scheduled', ?)
  `);

  const result = insert.run(
    original.patient_id,
    original.doctor_id,
    original.department_id,
    appointment_date,
    appointment_time || null,
    original.appointment_type,
    original.booking_channel,
    original.appointment_id
  );

  db.prepare(`UPDATE appointments SET status = 'Rescheduled' WHERE appointment_id = ?`)
    .run(original.appointment_id);

  const newAppointment = db
    .prepare('SELECT * FROM appointments WHERE appointment_id = ?')
    .get(result.lastInsertRowid);

  res.status(201).json({ original: { ...original, status: 'Rescheduled' }, newAppointment });
};

// FR-009: Generic status update, validated against allowed statuses
base.updateStatus = (req, res) => {
  const { status } = req.body;
  if (!VALID_STATUSES.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}` });
  }

  const result = db
    .prepare('UPDATE appointments SET status = ? WHERE appointment_id = ?')
    .run(status, req.params.id);

  if (result.changes === 0) return res.status(404).json({ error: 'Appointment not found' });
  res.json(db.prepare('SELECT * FROM appointments WHERE appointment_id = ?').get(req.params.id));
};

module.exports = base;