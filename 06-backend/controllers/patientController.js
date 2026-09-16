const createCrudController = require('./genericController');
const db = require('../db/db');

const base = createCrudController('patients', 'patient_id');

// FR-002: Search patient by ID, name, or contact info
base.search = (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Query parameter "q" is required' });

  const rows = db
    .prepare(
      `SELECT * FROM patients
       WHERE patient_id = ? OR name LIKE ? OR contact_info LIKE ?`
    )
    .all(q, `%${q}%`, `%${q}%`);
  res.json(rows);
};

// FR-003: Consolidated patient journey view
base.getJourney = (req, res) => {
  const patientId = req.params.id;

  const patient = db.prepare('SELECT * FROM patients WHERE patient_id = ?').get(patientId);
  if (!patient) return res.status(404).json({ error: 'Patient not found' });

  const appointments = db
    .prepare('SELECT * FROM appointments WHERE patient_id = ? ORDER BY appointment_date')
    .all(patientId);
  const consultations = db
    .prepare('SELECT * FROM consultations WHERE patient_id = ? ORDER BY consultation_date')
    .all(patientId);
  const procedures = db
    .prepare('SELECT * FROM procedures WHERE patient_id = ? ORDER BY recommendation_date')
    .all(patientId);
  const followUps = db
    .prepare('SELECT * FROM follow_ups WHERE patient_id = ? ORDER BY required_date')
    .all(patientId);
  const feedback = db
    .prepare('SELECT * FROM feedback WHERE patient_id = ? ORDER BY submitted_date')
    .all(patientId);

  res.json({ patient, appointments, consultations, procedures, followUps, feedback });
};

module.exports = base;