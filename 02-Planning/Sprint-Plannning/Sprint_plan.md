# SPRINT PLAN
## Care to Cure Patient Retention & Follow-up Management System

---

## Sprint 0 — Foundation

**Goal:** Establish requirements, backlog, database schema, and data foundation before feature development begins.

| Activity | Output |
|---|---|
| Finalize BRD/FRD | `01-Documentation/BRD.docx`, `FRD.docx` |
| Build backlog and prioritization | `02-Planning/backlog.csv`, `prioritization-moscow.md` |
| Define compliance requirements | `02-Planning/Compliance/regulations.md` |
| Define success metrics | `02-Planning/Outcome/sucess-metrics` |
| Design database schema | `05-database/schema.sql` |
| Generate synthetic data | `04-data/*.csv` |

**Status:** In Progress

---

## Sprint 1 — Core Patient & Appointment Management

**Goal:** Deliver the foundational Must Have stories covering patient records and the appointment lifecycle.

| Story ID | Story | Priority |
|---|---|---|
| US-001 | Create patient record | Must Have |
| US-002 | Search patient | Must Have |
| US-004 | Create appointment | Must Have |
| US-005 | Appointment status tracking | Must Have |
| US-006 | Update appointment | Must Have |
| US-007 | Record appointment confirmation | Must Have |
| US-009 | Cancel appointment + reason | Must Have |
| US-010 | Record no-show + reason | Must Have |
| US-011 | Reschedule appointment | Must Have |

**Sprint Goal Statement:** By the end of this sprint, a patient can be registered and an appointment can move through its full lifecycle (scheduled → confirmed → cancelled/no-show/completed) with reasons captured.

---

## Sprint 2 — Consultation, Procedure & Follow-up Tracking

**Goal:** Extend tracking into clinical outcomes and continuity of care.

| Story ID | Story | Priority |
|---|---|---|
| US-003 | View patient journey | Must Have |
| US-012 | Record consultation + outcome | Must Have |
| US-013 | Procedure recommendation + decision | Must Have |
| US-014 | Schedule & track procedure | Must Have |
| US-015 | Capture procedure non-completion reason | Must Have |
| US-016 | Follow-up required flag | Must Have |
| US-017 | Create & track follow-up | Must Have |

**Sprint Goal Statement:** By the end of this sprint, the full patient journey — appointment through follow-up — is visible in one consolidated view.

---

## Sprint 3 — Retention Analytics & Dashboard

**Goal:** Deliver the KPIs and dashboard that turn tracked data into decision-ready insight.

| Story ID | Story | Priority |
|---|---|---|
| US-021 | Identify appointment drop-offs | Must Have |
| US-022 | Identify procedure/follow-up drop-offs | Must Have |
| US-024 | Attendance/no-show/cancellation rates | Must Have |
| US-025 | Procedure completion & follow-up compliance rates | Must Have |
| US-026 | Patient retention rate | Must Have |
| US-028 | Management dashboard | Must Have |
| US-029 | Drop-off dashboard | Must Have |

**Sprint Goal Statement:** By the end of this sprint, Hospital Management can view retention, drop-off, and compliance KPIs on a filterable dashboard.

---

## Sprint 4 (Stretch) — Should Have Enhancements

**Goal:** Layer in feedback capture, reminders, and performance metrics if time permits.

| Story ID | Story | Priority |
|---|---|---|
| US-008 | Reminder generation & tracking | Should Have |
| US-018 | Follow-up non-attendance reason | Should Have |
| US-019 | Capture patient feedback | Should Have |
| US-020 | Link feedback to care journey | Should Have |
| US-023 | Identify repeat drop-off patients | Should Have |
| US-027 | Doctor/department performance metrics | Should Have |

**Sprint Goal Statement:** By the end of this sprint, patient feedback and reminder tracking are integrated, and management can compare doctor/department performance.