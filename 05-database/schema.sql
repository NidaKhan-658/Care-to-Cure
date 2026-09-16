-- =====================================================================
-- DATABASE SCHEMA
-- Care to Cure Patient Retention & Follow-up Management System
-- Matches entities defined in FRD Section 27 and used in
-- 03-analytics/retention_analysis.sql
-- Dialect: SQLite (portable for portfolio demo; adjust types for
-- PostgreSQL/MySQL if deployed elsewhere)
-- =====================================================================

-- -----------------------------------------------------------------
-- DEPARTMENTS  (FR-004)
-- -----------------------------------------------------------------
CREATE TABLE departments (
    department_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT NOT NULL UNIQUE,
    is_emergency    BOOLEAN NOT NULL DEFAULT 0   -- BR-010: emergency tracked separately
);

-- -----------------------------------------------------------------
-- DOCTORS  (FR-005)
-- -----------------------------------------------------------------
CREATE TABLE doctors (
    doctor_id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name             TEXT NOT NULL,
    department_id    INTEGER NOT NULL,
    specialty        TEXT,
    availability_status TEXT CHECK (availability_status IN ('Available','Unavailable')) DEFAULT 'Available',
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- -----------------------------------------------------------------
-- PATIENTS  (FR-001)
-- -----------------------------------------------------------------
CREATE TABLE patients (
    patient_id       INTEGER PRIMARY KEY AUTOINCREMENT,
    name             TEXT NOT NULL,
    date_of_birth    DATE,
    gender           TEXT,
    contact_info     TEXT,
    preferred_communication_method TEXT CHECK (preferred_communication_method IN ('SMS','Email','Call','App')),
    registration_date DATE NOT NULL DEFAULT (DATE('now'))
);

-- -----------------------------------------------------------------
-- APPOINTMENTS  (FR-007 to FR-019)
-- -----------------------------------------------------------------
CREATE TABLE appointments (
    appointment_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id       INTEGER NOT NULL,                         -- BR-001
    doctor_id        INTEGER,                                  -- BR-002 (nullable only where process allows)
    department_id    INTEGER NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME,
    appointment_type TEXT,                                     -- e.g. 'New Consultation', 'Procedure', 'Follow-up'
    booking_channel  TEXT,                                     -- e.g. 'Phone', 'Walk-in', 'App'
    status           TEXT NOT NULL CHECK (
                        status IN ('Requested','Scheduled','Confirmed','Rescheduled',
                                   'Cancelled','No-show','Completed')
                     ) DEFAULT 'Requested',                     -- FR-008
    confirmation_status TEXT CHECK (confirmation_status IN ('Confirmed','Pending','Unable to Confirm')),
    confirmation_datetime DATETIME,                             -- FR-010
    cancellation_reason TEXT,                                   -- FR-014, BR-004
    no_show_reason   TEXT,                                      -- FR-016, BR-005
    original_appointment_id INTEGER,                            -- FR-019, BR-006: traceability for reschedules
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id),
    FOREIGN KEY (original_appointment_id) REFERENCES appointments(appointment_id)
);

-- Enforce BR-003: an appointment cannot be Completed without an attendance record.
-- (Attendance is implied by status transition to 'Completed' or 'No-show';
--  enforced at application layer since SQLite triggers add complexity beyond
--  portfolio scope. Documented here for traceability.)

-- -----------------------------------------------------------------
-- APPOINTMENT REMINDERS  (FR-011, FR-012)
-- -----------------------------------------------------------------
CREATE TABLE appointment_reminders (
    reminder_id      INTEGER PRIMARY KEY AUTOINCREMENT,
    appointment_id   INTEGER NOT NULL,
    patient_id       INTEGER NOT NULL,
    reminder_datetime DATETIME NOT NULL,
    communication_channel TEXT,                                 -- e.g. 'SMS', 'Email', 'Call'
    reminder_status  TEXT CHECK (reminder_status IN ('Sent','Delivered','Failed','Responded')) DEFAULT 'Sent',
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);

-- -----------------------------------------------------------------
-- CONSULTATIONS  (FR-020, FR-021)
-- -----------------------------------------------------------------
CREATE TABLE consultations (
    consultation_id  INTEGER PRIMARY KEY AUTOINCREMENT,
    appointment_id   INTEGER NOT NULL,
    patient_id       INTEGER NOT NULL,
    doctor_id        INTEGER NOT NULL,
    department_id    INTEGER NOT NULL,
    outcome          TEXT CHECK (
                        outcome IN ('No further action','Follow-up required',
                                    'Procedure recommended','Referral required')
                     ),
    consultation_date DATE NOT NULL DEFAULT (DATE('now')),
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- -----------------------------------------------------------------
-- PROCEDURES  (FR-022 to FR-026)
-- -----------------------------------------------------------------
CREATE TABLE procedures (
    procedure_id     INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id       INTEGER NOT NULL,
    doctor_id        INTEGER NOT NULL,
    department_id    INTEGER NOT NULL,
    consultation_id  INTEGER NOT NULL,                          -- BR-007: must link to a consultation
    procedure_type   TEXT NOT NULL,
    recommendation_date DATE NOT NULL DEFAULT (DATE('now')),
    scheduled_date   DATE,
    patient_decision TEXT CHECK (
                        patient_decision IN ('Accepted','Declined','Deferred','Needs more information')
                     ) DEFAULT 'Needs more information',         -- FR-023
    status           TEXT CHECK (
                        status IN ('Recommended','Scheduled','Confirmed','Completed',
                                   'Cancelled','No-show','Declined','Deferred')
                     ) DEFAULT 'Recommended',                    -- FR-025
    non_completion_reason TEXT,                                  -- FR-026
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id),
    FOREIGN KEY (consultation_id) REFERENCES consultations(consultation_id)
);

-- -----------------------------------------------------------------
-- FOLLOW_UPS  (FR-027 to FR-031)
-- -----------------------------------------------------------------
CREATE TABLE follow_ups (
    follow_up_id     INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id       INTEGER NOT NULL,
    doctor_id        INTEGER NOT NULL,
    department_id    INTEGER NOT NULL,
    source_type      TEXT NOT NULL CHECK (source_type IN ('Consultation','Procedure')),  -- what triggered the follow-up
    source_id        INTEGER NOT NULL,                           -- FK to consultation_id or procedure_id depending on source_type
    required_date    DATE,
    scheduled_date   DATE,
    status           TEXT CHECK (
                        status IN ('Required','Scheduled','Confirmed','Completed',
                                   'Cancelled','No-show','Rescheduled')
                     ) DEFAULT 'Required',                        -- FR-029
    attendance_status TEXT CHECK (attendance_status IN ('Attended','Not Attended')),  -- FR-030
    non_attendance_reason TEXT,                                   -- FR-031
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
    -- Note: source_id intentionally not a strict FK since it can reference
    -- either consultations or procedures depending on source_type.
);

-- -----------------------------------------------------------------
-- FEEDBACK  (FR-032, FR-033)
-- -----------------------------------------------------------------
CREATE TABLE feedback (
    feedback_id      INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id       INTEGER NOT NULL,
    appointment_id   INTEGER,
    procedure_id     INTEGER,
    follow_up_id     INTEGER,
    satisfaction_score INTEGER CHECK (satisfaction_score BETWEEN 1 AND 5),
    doctor_rating    INTEGER CHECK (doctor_rating BETWEEN 1 AND 5),
    staff_rating     INTEGER CHECK (staff_rating BETWEEN 1 AND 5),
    waiting_time_experience TEXT,
    appointment_experience  TEXT,
    communication_experience TEXT,
    comments         TEXT,
    complaint_category TEXT,
    submitted_date   DATE NOT NULL DEFAULT (DATE('now')),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id),
    FOREIGN KEY (procedure_id) REFERENCES procedures(procedure_id),
    FOREIGN KEY (follow_up_id) REFERENCES follow_ups(follow_up_id)
);

-- -----------------------------------------------------------------
-- CANCELLATION / NO-SHOW REASON LOOKUP  (FR-014)
-- Standardized reason list, referenced conceptually by
-- appointments.cancellation_reason / no_show_reason (kept as free TEXT
-- above for portfolio simplicity, but values should be constrained to
-- this list at the application layer).
-- -----------------------------------------------------------------
CREATE TABLE reason_codes (
    reason_code_id   INTEGER PRIMARY KEY AUTOINCREMENT,
    reason_text      TEXT NOT NULL UNIQUE,
    applies_to       TEXT NOT NULL CHECK (
                        applies_to IN ('Cancellation','No-show','Procedure Non-completion','Follow-up Non-attendance')
                     )
);

-- -----------------------------------------------------------------
-- USERS  (system access, NFR-002 Role-based Access)
-- -----------------------------------------------------------------
CREATE TABLE users (
    user_id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name             TEXT NOT NULL,
    role             TEXT NOT NULL CHECK (
                        role IN ('Hospital Administrator','Front Desk Staff','Doctor',
                                 'Department Head','Patient Experience Team',
                                 'Hospital Management','IT Administrator',
                                 'Business Analyst','BI/Analytics User')
                     ),
    email            TEXT UNIQUE,
    is_active        BOOLEAN NOT NULL DEFAULT 1
);

-- -----------------------------------------------------------------
-- AUDIT LOG  (NFR-003 Auditability)
-- -----------------------------------------------------------------
CREATE TABLE audit_log (
    audit_id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id          INTEGER,
    table_name       TEXT NOT NULL,
    record_id        INTEGER NOT NULL,
    action           TEXT NOT NULL CHECK (action IN ('INSERT','UPDATE','DELETE')),
    changed_at       DATETIME NOT NULL DEFAULT (DATETIME('now')),
    old_value        TEXT,
    new_value        TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- -----------------------------------------------------------------
-- INDEXES for common query/filter patterns
-- (dates, statuses, and FKs used heavily in retention_analysis.sql)
-- -----------------------------------------------------------------
CREATE INDEX idx_appointments_patient ON appointments(patient_id);
CREATE INDEX idx_appointments_doctor ON appointments(doctor_id);
CREATE INDEX idx_appointments_department ON appointments(department_id);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_procedures_patient ON procedures(patient_id);
CREATE INDEX idx_procedures_status ON procedures(status);
CREATE INDEX idx_followups_patient ON follow_ups(patient_id);
CREATE INDEX idx_followups_status ON follow_ups(status);