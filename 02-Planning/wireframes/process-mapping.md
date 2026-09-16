# PROCESS MAPPING
## Care to Cure Patient Retention & Follow-up Management System

---

## Purpose

Maps the end-to-end patient journey process flows that the system must support, based on FRD Section 25 (Functional Workflow). These process maps guide wireframe design by identifying every screen/interaction point needed.

---

## 1. Appointment Process Flow
Patient Requests Appointment
↓
Front Desk Creates Appointment (Scheduled)
↓
Confirmation Requested → Patient Confirms / Pending / Unable to Confirm
↓
Reminder Sent (before appointment date)
↓
Appointment Date Arrives
↓
┌────────────┴────────────┐
↓ ↓
Attended Not Attended
↓ ↓
Consultation Cancelled / No-show
↓
Reason Captured
↓
Reschedule or Close Out


**Screens implied:** Appointment creation form, appointment list/status view, confirmation tracker, cancellation/no-show reason form, reschedule form.

---

## 2. Procedure Process Flow

Consultation Completed → Outcome: Procedure Recommended
↓
Patient Decision Requested
↓
┌────────┬─────────┬────────────┐
↓ ↓ ↓ ↓
Accepted Declined Deferred Needs Info
↓
Procedure Scheduled
↓
Confirmed
↓
┌───────┴───────┐
↓ ↓
Completed Cancelled/No-show
↓
Non-completion Reason Captured


**Screens implied:** Procedure recommendation form, patient decision capture, procedure scheduling view, procedure status tracker.

---

## 3. Follow-up Process Flow

Doctor Marks Follow-up Required
↓
Follow-up Appointment Created (linked to originating event)
↓
Scheduled → Confirmed → Reminder Sent
↓
┌───────┴───────┐
↓ ↓
Attended Not Attended
↓ ↓
Completed Reason Captured → Reschedule or Patient Drop-off


**Screens implied:** Follow-up creation form (linked to prior event), follow-up status tracker, non-attendance reason form.

---

## 4. Retention & Drop-off Analysis Flow (Backend/Analytics — no direct UI interaction)

System scans Appointments, Procedures, Follow-ups
↓
Flags: Cancelled / No-show / Declined / Missed
↓
Aggregates by Patient, Doctor, Department
↓
Calculates: Attendance Rate, No-show Rate, Cancellation Rate,
Procedure Completion Rate, Follow-up Compliance,
Retention Rate
↓
Surfaces on Management Dashboard (filterable)


**Screens implied:** Management dashboard, drop-off dashboard, filter controls (date, department, doctor, status).

---

## 5. Summary of Screens Needed (Feeds into Wireframes)

1. Patient registration / search
2. Patient journey view (consolidated)
3. Appointment creation / list / status update
4. Cancellation / no-show reason capture
5. Reschedule form
6. Consultation recording
7. Procedure recommendation + decision capture
8. Procedure scheduling / status
9. Follow-up creation / status
10. Patient feedback capture
11. Management dashboard (KPIs)
12. Drop-off dashboard (filterable)