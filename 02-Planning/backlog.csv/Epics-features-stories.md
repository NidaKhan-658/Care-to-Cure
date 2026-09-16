# EPICS, FEATURES & USER STORIES
## Care to Cure Patient Retention & Follow-up Management System

---

## EPIC 1: Patient Management
**Goal:** Centralize patient records and enable a consolidated view of the patient journey.

### Feature 1.1 — Patient Record Management
- **US-001:** As a Front Desk Staff member, I want to create a patient record with a unique Patient ID, so that I can register new patients accurately.
  - *Acceptance Criteria (Gherkin):*

  Given I am an authorized Front Desk user
When I submit a new patient's name, date of birth, gender, and contact info
Then the system creates a patient record with a unique Patient ID

  - **Maps to:** FR-001 | **Priority:** Must Have

- **US-002:** As a Front Desk Staff member, I want to search for a patient by ID, name, or contact info, so that I can quickly find existing records.
  - *Acceptance Criteria:*

  Given a patient record exists
When I search using their name, ID, or phone number
Then the matching patient record is returned

  - **Maps to:** FR-002 | **Priority:** Must Have

### Feature 1.2 — Patient Journey View
- **US-003:** As a Doctor, I want to view a patient's full journey (appointments → consultations → procedures → follow-ups → feedback) in one screen, so that I can make informed care decisions.
  - *Acceptance Criteria:*

  Given a patient has appointment, consultation, procedure, and follow-up history
When I open their patient journey view
Then all events are displayed in chronological order

  - **Maps to:** FR-003 | **Priority:** Must Have

---

## EPIC 2: Appointment Lifecycle Management
**Goal:** Track appointments from booking through completion, including cancellations and rescheduling.

### Feature 2.1 — Appointment Creation & Status
- **US-004:** As a Front Desk Staff member, I want to create an appointment with patient, doctor, department, date/time, and type, so that visits are scheduled correctly.
  - **Maps to:** FR-007 | **Priority:** Must Have

- **US-005:** As a system, I want to support appointment statuses (Requested, Scheduled, Confirmed, Rescheduled, Cancelled, No-show, Completed), so that appointment progress is trackable.
  - **Maps to:** FR-008 | **Priority:** Must Have

- **US-006:** As a Front Desk Staff member, I want to update appointment details before the visit occurs, so that changes are reflected accurately.
  - **Maps to:** FR-009 | **Priority:** Must Have

### Feature 2.2 — Confirmation & Reminders
- **US-007:** As a Front Desk Staff member, I want to record whether a patient confirmed their appointment, so that attendance can be anticipated.
  - **Maps to:** FR-010 | **Priority:** Must Have

- **US-008:** As a system, I want to generate and track appointment reminders (sent, delivered, failed), so that no-show risk is reduced.
  - **Maps to:** FR-011, FR-012 | **Priority:** Should Have

### Feature 2.3 — Cancellations & No-shows
- **US-009:** As a Front Desk Staff member, I want to cancel an appointment and record a standardized reason, so that cancellation patterns can be analyzed.
  - **Maps to:** FR-013, FR-014 | **Priority:** Must Have

- **US-010:** As a Front Desk Staff member, I want to mark an appointment as a no-show and capture the reason, so that no-show patterns can be tracked.
  - **Maps to:** FR-015, FR-016, FR-017 | **Priority:** Must Have

### Feature 2.4 — Rescheduling
- **US-011:** As a Front Desk Staff member, I want to reschedule an appointment while preserving a link to the original, so that history isn't lost.
  - **Maps to:** FR-018, FR-019 | **Priority:** Must Have

---

## EPIC 3: Consultation & Procedure Management
**Goal:** Track clinical outcomes and procedure recommendations through to completion.

### Feature 3.1 — Consultation Recording
- **US-012:** As a Doctor, I want to record that a consultation occurred and its outcome, so that next steps are documented.
  - **Maps to:** FR-020, FR-021 | **Priority:** Must Have

### Feature 3.2 — Procedure Tracking
- **US-013:** As a Doctor, I want to recommend a procedure and record the patient's decision (Accepted/Declined/Deferred), so that procedure uptake can be measured.
  - **Maps to:** FR-022, FR-023 | **Priority:** Must Have

- **US-014:** As a Front Desk Staff member, I want to schedule an accepted procedure and track its status, so that completion can be monitored.
  - **Maps to:** FR-024, FR-025 | **Priority:** Must Have

- **US-015:** As a Front Desk Staff member, I want to capture the reason a procedure wasn't completed, so that drop-off causes are visible.
  - **Maps to:** FR-026 | **Priority:** Must Have

---

## EPIC 4: Follow-up Management
**Goal:** Ensure required follow-up care is scheduled, attended, and tracked.

### Feature 4.1 — Follow-up Scheduling & Tracking
- **US-016:** As a Doctor, I want to indicate whether follow-up is required, so that continuity of care is planned.
  - **Maps to:** FR-027 | **Priority:** Must Have

- **US-017:** As a Front Desk Staff member, I want to create and track a follow-up appointment linked to the originating care event, so that follow-up compliance is measurable.
  - **Maps to:** FR-028, FR-029, FR-030 | **Priority:** Must Have

- **US-018:** As a Front Desk Staff member, I want to capture the reason a patient missed a follow-up, so that patterns can be identified.
  - **Maps to:** FR-031 | **Priority:** Should Have

---

## EPIC 5: Patient Feedback
**Goal:** Capture patient experience data linked to their care journey.

- **US-019:** As a Patient Experience Team member, I want to record patient feedback (satisfaction, ratings, comments), so that experience quality is measurable.
  - **Maps to:** FR-032 | **Priority:** Should Have

- **US-020:** As a BI/Analytics User, I want feedback linked to the relevant appointment, procedure, or follow-up, so that experience data connects to outcomes.
  - **Maps to:** FR-033 | **Priority:** Should Have

---

## EPIC 6: Retention & Drop-off Analytics
**Goal:** Identify where and why patients disengage from care.

- **US-021:** As Hospital Management, I want the system to identify appointment drop-offs (cancellations, no-shows, repeated rescheduling), so that at-risk patients are flagged.
  - **Maps to:** FR-034 | **Priority:** Must Have

- **US-022:** As Hospital Management, I want to identify procedure and follow-up drop-offs, so that gaps in care completion are visible.
  - **Maps to:** FR-035, FR-036 | **Priority:** Must Have

- **US-023:** As a BI/Analytics User, I want to identify patients with repeated drop-off events, so that intervention can be targeted.
  - **Maps to:** FR-037 | **Priority:** Should Have

---

## EPIC 7: KPIs, Performance & Dashboards
**Goal:** Provide management with reliable, filterable KPIs on retention and performance.

- **US-024:** As Hospital Management, I want to see attendance, no-show, and cancellation rates, so that operational performance is visible.
  - **Maps to:** FR-038, FR-039, FR-040 | **Priority:** Must Have

- **US-025:** As Hospital Management, I want procedure completion and follow-up compliance rates, so that care continuity is measurable.
  - **Maps to:** FR-041, FR-042 | **Priority:** Must Have

- **US-026:** As Hospital Management, I want an overall patient retention rate using an agreed measurement window, so that retention trends are trackable.
  - **Maps to:** FR-043 | **Priority:** Must Have

- **US-027:** As a Department Head, I want doctor- and department-level performance metrics, so that I can review team performance fairly.
  - **Maps to:** FR-044, FR-045 | **Priority:** Should Have

- **US-028:** As Hospital Management, I want a management dashboard with key KPIs, filterable by date/department/doctor/status, so that I can monitor performance at a glance.
  - **Maps to:** FR-046, FR-047 | **Priority:** Must Have

- **US-029:** As Hospital Management, I want a drop-off dashboard showing where patients disengage across the journey, so that improvement efforts are targeted.
  - **Maps to:** FR-048 | **Priority:** Must Have

---

## Traceability Note
Every story above maps to an FR in FRD.docx. Epics group directly by FRD section (Patient, Appointment, Consultation/Procedure, Follow-up, Feedback, Retention, KPI/Dashboard) so the backlog stays audit-traceable back to requirements — the same pattern used in CareConnect.

