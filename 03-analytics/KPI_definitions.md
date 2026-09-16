# KPI DEFINITIONS
## Care to Cure Patient Retention & Follow-up Management System

**Document Type:** Analytics Reference
**Version:** 1.0
**Status:** Draft

---

## Purpose

Defines each KPI referenced in FRD Section 19, including the precise formula, data sources, edge cases, and open questions requiring stakeholder agreement. These definitions drive the SQL in `retention_analysis.sql` and any future Power BI/Tableau measures.

---

## Assumed Schema (see `05-database/schema.sql`)

| Table | Key Columns |
|---|---|
| `patients` | patient_id, name, dob, gender, registration_date |
| `departments` | department_id, name |
| `doctors` | doctor_id, name, department_id, specialty |
| `appointments` | appointment_id, patient_id, doctor_id, department_id, appointment_date, status, original_appointment_id, cancellation_reason, no_show_reason |
| `consultations` | consultation_id, appointment_id, patient_id, doctor_id, outcome |
| `procedures` | procedure_id, patient_id, doctor_id, department_id, consultation_id, status, recommendation_date, scheduled_date, patient_decision, non_completion_reason |
| `follow_ups` | follow_up_id, patient_id, doctor_id, department_id, source_type, source_id, required_date, scheduled_date, status, attendance_status, non_attendance_reason |
| `feedback` | feedback_id, patient_id, appointment_id, procedure_id, follow_up_id, satisfaction_score |

---

## 1. Attendance Rate (FR-038)

**Formula:** Completed Appointments ÷ Scheduled Appointments × 100

**Data source:** `appointments` where `status IN ('Scheduled','Confirmed','Rescheduled','Cancelled','No-show','Completed')` (denominator excludes purely 'Requested' appointments that never reached scheduling).

**Edge cases:**
- Rescheduled appointments should count once in the denominator (the final resulting appointment), not twice (original + new).
- "Scheduled" in the formula name refers to *all appointments that reached scheduled status*, not just those currently in "Scheduled" status.

---

## 2. No-show Rate (FR-039)

**Formula:** No-show Appointments ÷ Scheduled Appointments × 100

**Data source:** `appointments` where `status = 'No-show'` ÷ same denominator as Attendance Rate.

**Edge cases:**
- A no-show that is later rescheduled should still count as a no-show event on the original appointment (traceability via `original_appointment_id`), while the new appointment is tracked separately.

---

## 3. Cancellation Rate (FR-040)

**Formula:** Cancelled Appointments ÷ Scheduled Appointments × 100

**Data source:** `appointments` where `status = 'Cancelled'` ÷ same denominator.

---

## 4. Procedure Completion Rate (FR-041)

**Formula:** Completed Procedures ÷ Applicable Procedure Population × 100

**⚠️ Open question (per FRD FR-041):** The denominator ("Applicable Procedure Population") is not yet finalized. Two candidate definitions:

- **Option A — Recommended-based:** All procedures where `patient_decision = 'Accepted'` (i.e., every procedure the patient agreed to should count against completion).
- **Option B — Scheduled-based:** Only procedures that reached `status = 'Scheduled'` or later (i.e., excludes accepted-but-never-scheduled procedures from the denominator).

**Recommendation:** Use Option A for drop-off analysis (it captures patients who accepted but never followed through at all), and report Option B separately as an "operational completion rate" for scheduling efficiency. Final decision requires stakeholder sign-off — flagged in `sprint-review-notes`.

---

## 5. Follow-up Compliance (FR-042)

**Formula:** Completed Follow-ups ÷ Required Follow-ups × 100

**Data source:** `follow_ups` where `status = 'Completed'` ÷ `follow_ups` where a follow-up record exists at all (i.e., `required = true` was recorded, per FR-027).

---

## 6. Patient Retention Rate (FR-043)

**Formula:** Returning Patients (within measurement window) ÷ Eligible Patients × 100

**⚠️ Open question (per FRD FR-043):** The measurement window (90 days, 180 days, or other) is not yet finalized.

**Working definition used in `retention_analysis.sql`:**
- **Eligible Patients:** Patients with at least one completed appointment, procedure, or follow-up more than [WINDOW] days before the analysis date (i.e., they had an opportunity to return).
- **Returning Patients:** Of those eligible, patients with at least one additional completed appointment, procedure, or follow-up within [WINDOW] days after their prior visit.
- Default window used in queries: **90 days** — clearly marked as a placeholder/parameter, easily changed once confirmed.

---

## 7. Doctor Performance Metrics (FR-044)

Aggregates Attendance Rate, No-show Rate, Cancellation Rate, Procedure Completion, and Follow-up Compliance, grouped by `doctor_id`. Patient satisfaction is averaged from `feedback.satisfaction_score` where `feedback.appointment_id` links to an appointment with that doctor.

---

## 8. Department Performance Metrics (FR-045)

Same metrics as Doctor Performance, grouped by `department_id` instead, plus Retention Rate calculated at the department level (patients whose most recent care episode was in that department).

---

## 9. Drop-off Identification (FR-034 to FR-037)

Three drop-off types, each identified independently:

1. **Appointment drop-off:** `status IN ('Cancelled','No-show')`, or a patient with ≥2 reschedules on the same care need.
2. **Procedure drop-off:** `patient_decision = 'Accepted'` but `status NOT IN ('Completed')` and no future scheduled date exists.
3. **Follow-up drop-off:** Follow-up `required` but `status IN ('Cancelled','No-show')` or no follow-up record created within a reasonable window after it was required.

**Repeat drop-off patients (FR-037):** Patients appearing in 2 or more of the above three drop-off categories, or with 2+ individual drop-off events in the same category.

---

## Document Status

**Document:** KPI Definitions
**Project:** Care to Cure Patient Retention & Follow-up Management System
**Version:** 1.0
**Status:** Draft — pending stakeholder confirmation on Procedure Completion denominator and Retention measurement window