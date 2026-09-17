const db = require('./db');

console.log('Running migration: add medical_history, doctor_availability, prescriptions...');

// Add medical_history column to patients if it doesn't already exist
const patientCols = db.prepare(`PRAGMA table_info(patients)`).all().map(c => c.name);
if (!patientCols.includes('medical_history')) {
  db.exec(`ALTER TABLE patients ADD COLUMN medical_history TEXT`);
  console.log('Added medical_history column to patients');
} else {
  console.log('medical_history column already exists, skipping');
}

// Create doctor_availability if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS doctor_availability (
    availability_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    doctor_id        INTEGER NOT NULL,
    day_of_week      TEXT NOT NULL CHECK (
                        day_of_week IN ('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday')
                     ),
    start_time       TIME NOT NULL,
    end_time         TIME NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
  )
`);
console.log('doctor_availability table ready');

// Create prescriptions if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS prescriptions (
    prescription_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id       INTEGER NOT NULL,
    appointment_id   INTEGER,
    original_filename TEXT NOT NULL,
    stored_filename  TEXT NOT NULL,
    notes            TEXT,
    uploaded_date    DATETIME NOT NULL DEFAULT (DATETIME('now')),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id)
  )
`);
console.log('prescriptions table ready');

db.exec(`CREATE INDEX IF NOT EXISTS idx_availability_doctor ON doctor_availability(doctor_id)`);
db.exec(`CREATE INDEX IF NOT EXISTS idx_prescriptions_patient ON prescriptions(patient_id)`);

console.log('Migration complete.');