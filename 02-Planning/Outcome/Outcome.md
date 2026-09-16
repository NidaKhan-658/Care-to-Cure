# PROJECT OUTCOMES
## Care to Cure Patient Retention & Follow-up Management System

**Document Type:** Outcomes Summary
**Version:** 1.0
**Status:** Draft

---

## 1. Purpose

This document defines the intended outcomes of the Care to Cure Patient Retention & Follow-up Management System — what success looks like once the system is in place — and connects each outcome back to the business objectives in the BRD and the KPIs defined in the FRD.

---

## 2. Outcome Statement

Before this system, Care to Cure had no consolidated way to see where patients disengaged from care — whether at booking, attendance, procedure completion, or follow-up. Decisions about staffing, reminders, and patient communication were made without reliable data on *why* patients dropped off.

After this system, Care to Cure can see the full patient journey in one place, measure drop-off at each stage with standardized reasons, and act on retention issues with evidence rather than guesswork.

---

## 3. Outcomes by Business Objective

| Business Objective (BRD) | Outcome | How It's Measured |
|---|---|---|
| Gain end-to-end visibility into the patient journey | Every patient's path from booking to follow-up is viewable in one consolidated view | US-003: Patient Journey View |
| Reduce patient drop-off at key stages | Drop-off points (appointment, procedure, follow-up) are identified and quantified rather than anecdotal | FR-034 to FR-037; Drop-off Dashboard (FR-048) |
| Identify reasons patients disengage | Standardized reason codes are captured for every cancellation, no-show, and non-completion | FR-014, FR-016, FR-026, FR-031 |
| Provide reliable, consistent KPIs | Attendance, no-show, cancellation, procedure completion, follow-up compliance, and retention rates calculated using agreed formulas | FR-038 to FR-043 |
| Establish a data foundation for analytics | Structured schema and reporting layer ready for Power BI/Tableau | Section 32 of FRD (Future Reporting & Analytics) |
| Support doctor/department performance review | Standardized, comparable metrics available per doctor and department | FR-044, FR-045 |

---

## 4. Before / After Comparison

| Area | Before (As-Is) | After (To-Be) |
|---|---|---|
| Appointment tracking | Inconsistent, no standardized reason capture | Full lifecycle tracked with standardized cancellation/no-show reasons |
| Patient journey visibility | Fragmented across appointments, procedures, follow-ups | Single consolidated view per patient |
| Drop-off identification | Not systematically tracked | Identified at appointment, procedure, and follow-up stages |
| Performance metrics | No standardized doctor/department comparison | Standardized KPIs per doctor and department |
| Retention measurement | No retention rate calculated | Retention rate calculated on an agreed measurement window |
| Reporting | Manual, ad hoc | Management dashboard with filters (date, department, doctor, status) |

---

## 5. Who Benefits and How

* **Hospital Management** — gains a single dashboard to monitor retention and drop-off trends instead of relying on anecdotal reports.
* **Department Heads** — can compare department-level performance using consistent metrics.
* **Front Desk Staff** — has a structured workflow for recording cancellations, no-shows, and reschedules with clear reason categories.
* **Doctors** — can see a patient's full history in one place before consultations, and their own performance metrics are based on standardized, fair definitions.
* **Patient Experience Team** — can connect feedback data directly to the care events that generated it.
* **BI/Analytics Team** — inherits a clean, structured data foundation instead of having to reconcile fragmented records before analysis can begin.

---

## 6. Long-Term Value

Beyond the initial build, this system is designed to be the data foundation for deeper analytics work (SQL, Power BI, Tableau — see FRD Section 32), answering questions like which departments have the highest no-show rates, why patients cancel, and whether waiting-time satisfaction correlates with retention. The functional system captures the data; the analytics layer built on top of it turns that data into decisions.

---

## Document Status

**Document:** Project Outcomes
**Project:** Care to Cure Patient Retention & Follow-up Management System
**Version:** 1.0
**Status:** Draft