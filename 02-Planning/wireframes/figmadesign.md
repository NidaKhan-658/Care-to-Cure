# WIREFRAME PLAN (FIGMA)
## Care to Cure Patient Retention & Follow-up Management System

---

## Purpose

Documents the low-fidelity wireframes to be created in Figma for this system, based on the screens identified in `process-mapping.md`. Follows the same approach used in the CareConnect portfolio project: low-fidelity wireframes with a live shareable Figma link and exported PNGs.

---

## Screens to Wireframe

### 1. Patient Search & Registration
- Search bar (by ID, name, contact)
- "New Patient" button → registration form (name, DOB, gender, contact, preferred communication method)

### 2. Patient Journey View
- Timeline layout: Appointments → Consultations → Procedures → Follow-ups → Feedback
- Each timeline entry shows status (color-coded: green = completed, yellow = pending, red = cancelled/no-show)

### 3. Appointment Management
- Appointment list (filterable by status, date, department, doctor)
- "New Appointment" form: patient, doctor, department, date/time, type, booking channel
- Status update controls (Confirm, Cancel, Reschedule, Mark No-show)

### 4. Cancellation / No-show Reason Capture
- Modal/dialog triggered on Cancel or No-show action
- Dropdown of standardized reasons (per FR-014/FR-016) + optional free-text notes

### 5. Consultation & Procedure
- Consultation outcome form (dropdown: No further action / Follow-up required / Procedure recommended / Referral)
- Procedure recommendation form (type, recommended date, patient decision)
- Procedure status tracker (Recommended → Scheduled → Confirmed → Completed/Cancelled/No-show)

### 6. Follow-up Management
- Follow-up creation form (linked to originating appointment/procedure)
- Follow-up status tracker, similar pattern to appointment status

### 7. Patient Feedback
- Simple form: satisfaction rating, doctor rating, staff rating, waiting-time experience, comments

### 8. Management Dashboard
- KPI cards at top: Attendance Rate, No-show Rate, Cancellation Rate, Procedure Completion, Follow-up Compliance, Retention Rate
- Filter bar: date range, department, doctor, appointment type, status
- Charts: trend line for retention over time, bar chart for department comparison

### 9. Drop-off Dashboard
- Funnel visualization: Appointments → Attended → Procedures Recommended → Completed → Follow-ups Required → Completed
- Table of top drop-off reasons per stage

---

## Design Notes

- Keep wireframes **low-fidelity** (grayscale, boxes, and labels) — the goal is to communicate structure and flow, not visual polish, consistent with the BA/PO portfolio approach used in CareConnect.
- Use consistent status color-coding across all screens once moved to high-fidelity (out of scope for wireframe stage).
- Once wireframed in Figma, export each screen as PNG into this folder and add the live shareable Figma link below.

---

## Figma Link

*(Add live shareable Figma link here once created — e.g., `https://www.figma.com/file/...`)*

## Exported Screens

*(List PNG filenames here once exported, e.g., `patient-journey-view.png`, `management-dashboard.png`)*