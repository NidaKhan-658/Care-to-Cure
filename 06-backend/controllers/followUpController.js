const createCrudController = require('./genericController');
const db = require('../db/db');

const base = createCrudController('follow_ups', 'follow_up_id');

// FR-030/FR-031: Record attendance and, if missed, the reason
base.recordAttendance = (req, res) => {
  const { attendance_status, non_attendance_reason } = req.body;
  const valid = ['Attended', 'Not Attended'];
  if (!valid.includes(attendance_status)) {
    return res.status(400).json({ error: `attendance_status must be one of: ${valid.join(', ')}` });
  }

  const status = attendance_status === 'Attended' ? 'Completed' : 'No-show';

  db.prepare(`
    UPDATE follow_ups
    SET attendance_status = ?, status = ?, non_attendance_reason = ?
    WHERE follow_up_id = ?
  `).run(attendance_status, status, attendance_status === 'Not Attended' ? (non_attendance_reason || null) : null, req.params.id);

  res.json(db.prepare('SELECT * FROM follow_ups WHERE follow_up_id = ?').get(req.params.id));
};

module.exports = base;