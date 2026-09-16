const createCrudController = require('./genericController');
const db = require('../db/db');

const base = createCrudController('procedures', 'procedure_id');

// FR-023: Record patient decision
base.recordDecision = (req, res) => {
  const { patient_decision } = req.body;
  const valid = ['Accepted', 'Declined', 'Deferred', 'Needs more information'];
  if (!valid.includes(patient_decision)) {
    return res.status(400).json({ error: `patient_decision must be one of: ${valid.join(', ')}` });
  }

  const newStatus = patient_decision === 'Accepted' ? 'Recommended'
    : patient_decision === 'Declined' ? 'Declined'
    : patient_decision === 'Deferred' ? 'Deferred'
    : 'Recommended';

  db.prepare('UPDATE procedures SET patient_decision = ?, status = ? WHERE procedure_id = ?')
    .run(patient_decision, newStatus, req.params.id);

  res.json(db.prepare('SELECT * FROM procedures WHERE procedure_id = ?').get(req.params.id));
};

// FR-026: Capture non-completion reason
base.recordNonCompletion = (req, res) => {
  const { status, non_completion_reason } = req.body;
  const valid = ['Cancelled', 'No-show'];
  if (!valid.includes(status)) {
    return res.status(400).json({ error: `status must be one of: ${valid.join(', ')}` });
  }

  db.prepare('UPDATE procedures SET status = ?, non_completion_reason = ? WHERE procedure_id = ?')
    .run(status, non_completion_reason || null, req.params.id);

  res.json(db.prepare('SELECT * FROM procedures WHERE procedure_id = ?').get(req.params.id));
};

module.exports = base;