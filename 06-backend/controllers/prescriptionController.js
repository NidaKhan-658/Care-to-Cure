const db = require('../db/db');

exports.upload = (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const { patient_id, appointment_id, notes } = req.body;
  if (!patient_id) return res.status(400).json({ error: 'patient_id is required' });

  const result = db.prepare(`
    INSERT INTO prescriptions (patient_id, appointment_id, original_filename, stored_filename, notes)
    VALUES (?, ?, ?, ?, ?)
  `).run(patient_id, appointment_id || null, req.file.originalname, req.file.filename, notes || null);

  const record = db.prepare('SELECT * FROM prescriptions WHERE prescription_id = ?').get(result.lastInsertRowid);
  res.status(201).json(record);
};

exports.getByPatient = (req, res) => {
  const rows = db.prepare('SELECT * FROM prescriptions WHERE patient_id = ? ORDER BY uploaded_date DESC')
    .all(req.params.patientId);
  res.json(rows);
};

exports.remove = (req, res) => {
  const result = db.prepare('DELETE FROM prescriptions WHERE prescription_id = ?').run(req.params.id);
  if (result.changes === 0) return res.status(404).json({ error: 'Not found' });
  res.status(204).send();
};