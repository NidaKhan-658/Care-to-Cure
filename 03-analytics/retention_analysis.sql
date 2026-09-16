-- =====================================================================
-- RETENTION & DROP-OFF ANALYSIS
-- Care to Cure Patient Retention & Follow-up Management System
-- Companion to: KPI_definitions.md
-- Assumes schema defined in 05-database/schema.sql
-- =====================================================================

-- -----------------------------------------------------------------
-- 1. ATTENDANCE RATE, NO-SHOW RATE, CANCELLATION RATE (overall)
-- -----------------------------------------------------------------
SELECT
    COUNT(*) AS total_scheduled_appointments,
    SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count,
    SUM(CASE WHEN status = 'No-show' THEN 1 ELSE 0 END) AS no_show_count,
    SUM(CASE WHEN status = 'Cancelled' THEN 1 ELSE 0 END) AS cancelled_count,
    ROUND(100.0 * SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) / COUNT(*), 2) AS attendance_rate_pct,
    ROUND(100.0 * SUM(CASE WHEN status = 'No-show' THEN 1 ELSE 0 END) / COUNT(*), 2) AS no_show_rate_pct,
    ROUND(100.0 * SUM(CASE WHEN status = 'Cancelled' THEN 1 ELSE 0 END) / COUNT(*), 2) AS cancellation_rate_pct
FROM appointments
WHERE status <> 'Requested';  -- exclude appointments that never reached scheduling


-- -----------------------------------------------------------------
-- 2. TOP CANCELLATION / NO-SHOW REASONS
-- -----------------------------------------------------------------
SELECT
    cancellation_reason AS reason,
    'Cancellation' AS reason_type,
    COUNT(*) AS occurrence_count
FROM appointments
WHERE status = 'Cancelled' AND cancellation_reason IS NOT NULL
GROUP BY cancellation_reason

UNION ALL

SELECT
    no_show_reason AS reason,
    'No-show' AS reason_type,
    COUNT(*) AS occurrence_count
FROM appointments
WHERE status = 'No-show' AND no_show_reason IS NOT NULL
GROUP BY no_show_reason

ORDER BY occurrence_count DESC;


-- -----------------------------------------------------------------
-- 3. PROCEDURE COMPLETION RATE (Option A: recommended/accepted-based)
-- -----------------------------------------------------------------
SELECT
    COUNT(*) AS accepted_procedures,
    SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_procedures,
    ROUND(100.0 * SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) / COUNT(*), 2) AS procedure_completion_rate_pct
FROM procedures
WHERE patient_decision = 'Accepted';


-- -----------------------------------------------------------------
-- 4. PROCEDURE NON-COMPLETION REASONS
-- -----------------------------------------------------------------
SELECT
    non_completion_reason,
    COUNT(*) AS occurrence_count
FROM procedures
WHERE patient_decision = 'Accepted'
  AND status NOT IN ('Completed')
  AND non_completion_reason IS NOT NULL
GROUP BY non_completion_reason
ORDER BY occurrence_count DESC;


-- -----------------------------------------------------------------
-- 5. FOLLOW-UP COMPLIANCE RATE
-- -----------------------------------------------------------------
SELECT
    COUNT(*) AS required_follow_ups,
    SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_follow_ups,
    ROUND(100.0 * SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) / COUNT(*), 2) AS follow_up_compliance_pct
FROM follow_ups;


-- -----------------------------------------------------------------
-- 6. PATIENT RETENTION RATE
-- Default measurement window: 90 days (adjust @window_days as needed)
-- -----------------------------------------------------------------
WITH patient_events AS (
    SELECT patient_id, appointment_date AS event_date FROM appointments WHERE status = 'Completed'
    UNION ALL
    SELECT patient_id, scheduled_date AS event_date FROM procedures WHERE status = 'Completed'
    UNION ALL
    SELECT patient_id, scheduled_date AS event_date FROM follow_ups WHERE status = 'Completed'
),
first_events AS (
    SELECT patient_id, MIN(event_date) AS first_event_date
    FROM patient_events
    GROUP BY patient_id
),
eligible_patients AS (
    -- Patients whose first event was long enough ago to have had a chance to return
    SELECT patient_id, first_event_date
    FROM first_events
    WHERE first_event_date <= DATE('now', '-90 days')  -- @window_days = 90
),
returning_patients AS (
    SELECT DISTINCT e.patient_id
    FROM eligible_patients e
    JOIN patient_events pe ON pe.patient_id = e.patient_id
    WHERE pe.event_date > DATE(e.first_event_date, '+0 days')
      AND pe.event_date <= DATE(e.first_event_date, '+90 days')
)
SELECT
    (SELECT COUNT(*) FROM eligible_patients) AS eligible_patient_count,
    (SELECT COUNT(*) FROM returning_patients) AS returning_patient_count,
    ROUND(100.0 * (SELECT COUNT(*) FROM returning_patients) / NULLIF((SELECT COUNT(*) FROM eligible_patients), 0), 2) AS retention_rate_pct;


-- -----------------------------------------------------------------
-- 7. DOCTOR PERFORMANCE METRICS
-- -----------------------------------------------------------------
SELECT
    d.doctor_id,
    d.name AS doctor_name,
    COUNT(a.appointment_id) AS total_appointments,
    ROUND(100.0 * SUM(CASE WHEN a.status = 'Completed' THEN 1 ELSE 0 END) / COUNT(a.appointment_id), 2) AS attendance_rate_pct,
    ROUND(100.0 * SUM(CASE WHEN a.status = 'No-show' THEN 1 ELSE 0 END) / COUNT(a.appointment_id), 2) AS no_show_rate_pct,
    ROUND(100.0 * SUM(CASE WHEN a.status = 'Cancelled' THEN 1 ELSE 0 END) / COUNT(a.appointment_id), 2) AS cancellation_rate_pct,
    ROUND(AVG(f.satisfaction_score), 2) AS avg_satisfaction_score
FROM doctors d
LEFT JOIN appointments a ON a.doctor_id = d.doctor_id AND a.status <> 'Requested'
LEFT JOIN feedback f ON f.appointment_id = a.appointment_id
GROUP BY d.doctor_id, d.name
ORDER BY attendance_rate_pct DESC;


-- -----------------------------------------------------------------
-- 8. DEPARTMENT PERFORMANCE METRICS
-- -----------------------------------------------------------------
SELECT
    dept.department_id,
    dept.name AS department_name,
    COUNT(a.appointment_id) AS total_appointments,
    ROUND(100.0 * SUM(CASE WHEN a.status = 'Completed' THEN 1 ELSE 0 END) / COUNT(a.appointment_id), 2) AS attendance_rate_pct,
    ROUND(100.0 * SUM(CASE WHEN a.status = 'No-show' THEN 1 ELSE 0 END) / COUNT(a.appointment_id), 2) AS no_show_rate_pct,
    ROUND(100.0 * SUM(CASE WHEN a.status = 'Cancelled' THEN 1 ELSE 0 END) / COUNT(a.appointment_id), 2) AS cancellation_rate_pct
FROM departments dept
LEFT JOIN appointments a ON a.department_id = dept.department_id AND a.status <> 'Requested'
GROUP BY dept.department_id, dept.name
ORDER BY total_appointments DESC;


-- -----------------------------------------------------------------
-- 9. DROP-OFF IDENTIFICATION: APPOINTMENTS
-- -----------------------------------------------------------------
SELECT patient_id, COUNT(*) AS drop_off_events
FROM appointments
WHERE status IN ('Cancelled', 'No-show')
GROUP BY patient_id
HAVING COUNT(*) >= 1
ORDER BY drop_off_events DESC;


-- -----------------------------------------------------------------
-- 10. DROP-OFF IDENTIFICATION: PROCEDURES (accepted but not completed)
-- -----------------------------------------------------------------
SELECT patient_id, procedure_type, status, non_completion_reason
FROM procedures
WHERE patient_decision = 'Accepted'
  AND status NOT IN ('Completed');


-- -----------------------------------------------------------------
-- 11. DROP-OFF IDENTIFICATION: FOLLOW-UPS (required but not completed)
-- -----------------------------------------------------------------
SELECT patient_id, source_type, source_id, status, non_attendance_reason
FROM follow_ups
WHERE status IN ('Cancelled', 'No-show')
   OR (status = 'Required' AND scheduled_date IS NULL);


-- -----------------------------------------------------------------
-- 12. REPEAT DROP-OFF PATIENTS (appear in 2+ drop-off categories)
-- -----------------------------------------------------------------
WITH appt_dropoffs AS (
    SELECT DISTINCT patient_id FROM appointments WHERE status IN ('Cancelled','No-show')
),
procedure_dropoffs AS (
    SELECT DISTINCT patient_id FROM procedures WHERE patient_decision = 'Accepted' AND status NOT IN ('Completed')
),
followup_dropoffs AS (
    SELECT DISTINCT patient_id FROM follow_ups WHERE status IN ('Cancelled','No-show')
),
combined AS (
    SELECT patient_id FROM appt_dropoffs
    UNION ALL
    SELECT patient_id FROM procedure_dropoffs
    UNION ALL
    SELECT patient_id FROM followup_dropoffs
)
SELECT patient_id, COUNT(*) AS drop_off_category_count
FROM combined
GROUP BY patient_id
HAVING COUNT(*) >= 2
ORDER BY drop_off_category_count DESC;