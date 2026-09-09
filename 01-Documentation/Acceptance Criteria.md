# BUSINESS REQUIREMENTS DOCUMENT (BRD)

## Care to Cure Patient Retention & Follow-up Management System

**Organization:** Care to Cure
**Country:** Philippines
**Document Type:** Business Requirements Document
**Version:** 1.0
**Status:** Draft
**Prepared By:** Business Analyst

---

# 1. Document Purpose

The purpose of this Business Requirements Document (BRD) is to define the business need, objectives, scope, stakeholders, high-level requirements, and expected outcomes for the proposed **Care to Cure Patient Retention & Follow-up Management System**.

The project aims to improve visibility into patient drop-offs throughout the healthcare journey, including:

**Appointment → Consultation → Procedure → Follow-up → Continued Care**

The solution will help Care to Cure understand:

* Why patients do not attend appointments
* Why patients cancel appointments
* Why patients do not complete recommended procedures
* Why patients miss required follow-ups
* Where patients drop off from the care journey
* How patient experience affects continued care
* Which departments have higher drop-off rates
* Which operational areas require improvement

---

# 2. Project Overview

Care to Cure is a healthcare organization in the Philippines providing services across multiple medical departments.

The proposed project focuses on creating a centralized system to monitor and analyze the patient journey from appointment booking through follow-up care.

The system will consolidate information related to:

* Patients
* Doctors
* Departments
* Appointments
* Appointment confirmations
* Reminders
* Cancellations
* No-shows
* Rescheduling
* Consultations
* Procedures
* Follow-ups
* Patient feedback
* Retention
* Drop-offs

The system will also provide analytical capabilities for management through dashboards and reports.

---

# 3. Business Problem Statement

Care to Cure needs better visibility into patient drop-offs across different stages of the healthcare journey.

Currently, knowing that a patient missed an appointment does not necessarily explain:

* Why the patient did not attend
* Whether the patient was contacted
* Whether the appointment was rescheduled
* Whether the patient eventually returned
* Whether the patient completed recommended treatment
* Whether the patient attended the required follow-up

Similarly, if a doctor recommends a procedure, the organization may not have sufficient visibility into whether the patient:

**Accepted → Scheduled → Confirmed → Attended → Completed**

The same challenge exists for follow-ups:

**Follow-up Recommended → Scheduled → Confirmed → Attended → Completed**

Without connected information, management may find it difficult to identify the root causes of patient drop-offs and determine where process improvements are required.

---

# 4. Business Opportunity

The project provides an opportunity to move from basic appointment tracking toward a **patient-journey management and analytics approach**.

Instead of asking only:

> "How many patients returned?"

the organization should be able to answer:

> "At which stage are patients dropping off, why are they dropping off, and what can we do to improve retention?"

The proposed solution will provide a foundation for data-driven operational improvement.

---

# 5. Business Objectives

The primary objectives are to:

1. Improve appointment attendance.
2. Reduce avoidable appointment no-shows.
3. Understand cancellation and no-show reasons.
4. Improve rescheduling visibility.
5. Track recommended procedures through completion.
6. Identify procedure-related patient drop-offs.
7. Track required follow-ups.
8. Improve follow-up compliance.
9. Capture and analyze patient feedback.
10. Monitor doctor and department performance.
11. Identify patients with repeated drop-off behavior.
12. Measure patient retention.
13. Provide management with actionable dashboards.
14. Support continuous process improvement.

---

# 6. Project Scope

## 6.1 In Scope

### Patient Management

The system will maintain relevant patient information required for appointment and retention analysis.

### Appointment Management

The system will support:

* Appointment creation
* Appointment scheduling
* Appointment confirmation
* Appointment reminders
* Appointment cancellation
* No-show tracking
* Rescheduling
* Attendance tracking

### Consultation Management

The system will track consultation outcomes and relevant next steps.

### Procedure Management

The system will track:

* Procedure recommendations
* Patient decisions
* Procedure scheduling
* Procedure confirmation
* Procedure attendance
* Procedure completion
* Procedure cancellation
* Procedure no-show
* Procedure non-completion reasons

### Follow-up Management

The system will track:

* Follow-up recommendations
* Follow-up scheduling
* Follow-up confirmation
* Follow-up reminders
* Follow-up attendance
* Follow-up completion
* Follow-up cancellation/no-show
* Follow-up non-attendance reasons

### Patient Feedback

The system will capture:

* Overall satisfaction
* Doctor rating
* Staff rating
* Waiting-time experience
* Appointment experience
* Communication experience
* Comments
* Complaint/issue categories

### Analytics

The solution will support analysis of:

* Appointment performance
* No-shows
* Cancellations
* Procedure completion
* Follow-up compliance
* Patient retention
* Patient drop-offs
* Doctor performance
* Department performance

---

# 7. Out of Scope

The following areas are specifically excluded from the project:

* Billing
* Invoicing
* Payment processing
* Insurance claims
* Accounts receivable
* Revenue management
* Financial reporting
* Payroll
* Pharmacy management
* Inventory management

The project is focused on **patient journey, retention, follow-up, feedback, and operational analytics** rather than financial management.

---

# 8. Departments

The initial project will consider the following departments:

1. General Medicine
2. Cardiology
3. Orthopedics
4. Pediatrics
5. Obstetrics & Gynecology
6. Dermatology
7. ENT
8. Ophthalmology
9. Neurology
10. Gastroenterology
11. Pulmonology
12. Dental
13. Physiotherapy
14. General Surgery
15. Emergency

### Business Consideration

Emergency encounters should be separately identified in reporting because emergency care does not follow the same appointment and follow-up behavior as scheduled outpatient care.

---

# 9. Patient Journey

The proposed business journey is:

**Appointment Request**

↓

**Appointment Booked**

↓

**Appointment Confirmed**

↓

**Reminder Sent**

↓

**Patient Attends**

↓

**Consultation**

↓

**Procedure Required?**

↓

**Procedure Scheduled**

↓

**Procedure Completed**

↓

**Follow-up Required**

↓

**Follow-up Scheduled**

↓

**Follow-up Completed**

↓

**Patient Feedback**

↓

**Retention / Continued Care**

At each relevant stage, the system should capture the patient's status and, where applicable, the reason for drop-off.

---

# 10. Key Business Questions

The project should enable Care to Cure to answer the following questions:

### Appointment

1. How many appointments are scheduled?
2. What percentage of appointments are completed?
3. What percentage are cancelled?
4. What percentage are no-shows?
5. What are the major reasons for cancellations and no-shows?
6. How many patients reschedule?

### Procedure

7. How many procedures are recommended?
8. How many patients accept recommended procedures?
9. How many procedures are scheduled?
10. How many procedures are completed?
11. Why are procedures not completed?

### Follow-up

12. How many patients require follow-up?
13. How many patients schedule their follow-up?
14. How many patients attend their follow-up?
15. Why do patients miss follow-ups?

### Retention

16. How many patients return for continued care?
17. Which departments have the highest patient drop-off?
18. Which patient segments have repeated drop-offs?
19. Does patient satisfaction influence continued care?
20. Does waiting-time experience influence cancellation or retention?

### Operational Performance

21. Which departments have higher no-show rates?
22. Which departments have lower follow-up compliance?
23. What operational factors may contribute to patient drop-offs?

---

# 11. Stakeholders

| Stakeholder             | Responsibility / Interest                                   |
| ----------------------- | ----------------------------------------------------------- |
| Hospital Management     | Strategic oversight and business performance                |
| Operations Manager      | Operational process management                              |
| Department Heads        | Department-level performance                                |
| Doctors                 | Consultation, procedures and follow-ups                     |
| Front Desk              | Patient and appointment management                          |
| Patient Experience Team | Patient feedback and satisfaction                           |
| Hospital IT             | System implementation and support                           |
| BI/Data Team            | Analytics and reporting                                     |
| Business Analyst        | Requirements, process analysis and stakeholder coordination |
| Patients                | End users/participants in the healthcare journey            |

---

# 12. High-Level Business Requirements

| Requirement ID | Business Requirement                             | Priority |
| -------------- | ------------------------------------------------ | -------- |
| BR-001         | Track patient appointments                       | High     |
| BR-002         | Identify appointment no-shows                    | High     |
| BR-003         | Capture cancellation and no-show reasons         | High     |
| BR-004         | Track appointment rescheduling                   | High     |
| BR-005         | Track recommended and completed procedures       | High     |
| BR-006         | Track procedure cancellation/non-completion      | High     |
| BR-007         | Track required and completed follow-ups          | High     |
| BR-008         | Capture patient feedback                         | Medium   |
| BR-009         | Provide doctor performance metrics               | Medium   |
| BR-010         | Provide department performance metrics           | High     |
| BR-011         | Calculate patient retention KPIs                 | High     |
| BR-012         | Identify patient journey drop-off points         | High     |
| BR-013         | Provide management dashboards                    | High     |
| BR-014         | Provide filtering by date, department and doctor | High     |

---

# 13. Business Requirements Detail

## BR-001 — Appointment Tracking

The organization requires the ability to track appointments from booking through completion, cancellation, no-show, or rescheduling.

---

## BR-002 — No-show Identification

The organization requires visibility into patients who do not attend scheduled appointments.

---

## BR-003 — Reason Capture

The organization requires standardized cancellation and no-show reasons to support root-cause analysis.

---

## BR-004 — Rescheduling

The organization requires visibility into patients who reschedule appointments and whether those patients eventually attend.

---

## BR-005 — Procedure Tracking

The organization requires the ability to track recommended procedures from recommendation through completion.

---

## BR-006 — Procedure Drop-off

The organization requires visibility into patients who do not complete recommended or scheduled procedures.

---

## BR-007 — Follow-up Tracking

The organization requires the ability to track follow-up requirements through scheduling and completion.

---

## BR-008 — Patient Feedback

The organization requires patient feedback to understand experience and identify potential relationships between satisfaction and retention.

---

## BR-009 — Doctor Performance

The organization requires operational indicators at doctor level, including appointment attendance, no-shows, patient satisfaction and follow-up/procedure metrics.

These metrics should be interpreted carefully and should not automatically imply that a doctor caused a patient outcome.

---

## BR-010 — Department Performance

The organization requires standardized performance metrics at department level.

---

## BR-011 — Retention KPIs

The organization requires the ability to measure returning patients and retention using an approved business definition.

---

## BR-012 — Drop-off Identification

The organization requires visibility into patient drop-offs at different stages of the patient journey.

---

## BR-013 — Management Dashboard

Management requires dashboards showing key patient journey and retention KPIs.

---

## BR-014 — Dashboard Filtering

Users should be able to analyze information using relevant filters such as:

* Date
* Department
* Doctor
* Appointment type
* Status
* Patient segment

---

# 14. Key Performance Indicators

The following KPIs are proposed.

## 14.1 Appointment Attendance Rate

**Completed Appointments ÷ Scheduled Appointments × 100**

Measures the percentage of scheduled appointments that were attended/completed.

---

## 14.2 No-show Rate

**No-show Appointments ÷ Scheduled Appointments × 100**

Measures the percentage of scheduled appointments where the patient did not attend.

---

## 14.3 Cancellation Rate

**Cancelled Appointments ÷ Scheduled Appointments × 100**

Measures the percentage of scheduled appointments that were cancelled.

---

## 14.4 Procedure Completion Rate

**Completed Procedures ÷ Applicable Procedure Population × 100**

The final denominator must be agreed with stakeholders.

---

## 14.5 Follow-up Compliance

**Completed Follow-ups ÷ Required Follow-ups × 100**

Measures how effectively patients complete required follow-up care.

---

## 14.6 Patient Retention Rate

**Returning Patients ÷ Eligible Patients × 100**

The retention window must be formally agreed.

Possible measurement windows include:

* 90 days
* 180 days

The selected definition must remain consistent across reporting.

---

# 15. Success Criteria

The project will be considered successful when Care to Cure can:

1. Identify major appointment drop-off points.
2. Identify common cancellation and no-show reasons.
3. Track rescheduled patients.
4. Measure procedure completion.
5. Identify procedure drop-offs.
6. Measure follow-up compliance.
7. Identify follow-up drop-offs.
8. Analyze patient feedback.
9. Compare department performance.
10. Monitor doctor operational indicators.
11. Calculate agreed retention KPIs.
12. Identify patients with repeated drop-off behavior.
13. Provide management dashboards.
14. Generate actionable insights for process improvement.

---

# 16. Expected Business Benefits

The proposed solution is expected to provide the following benefits:

### Improved Appointment Attendance

Better visibility into reminders, cancellations and no-shows can support improvements to appointment processes.

### Better Understanding of Drop-offs

Management will be able to identify where patients stop progressing through the care journey.

### Improved Follow-up Compliance

Tracking required follow-ups can help reduce patients being lost after initial treatment.

### Better Patient Experience Insights

Feedback data can be analyzed alongside operational outcomes.

### Improved Operational Visibility

Management can compare standardized metrics across departments.

### Data-driven Decision Making

Power BI and Tableau dashboards can provide management with actionable insights.

### Continuous Process Improvement

The organization can use recurring drop-off patterns to identify areas for process improvement.

---

# 17. Assumptions

The following assumptions have been made for the project:

1. Care to Cure has access to patient and appointment information required for the system.
2. Authorized hospital staff will maintain appointment information.
3. Doctors will provide consultation, procedure and follow-up information.
4. Standardized reason categories will be approved by business stakeholders.
5. The retention measurement period will be agreed before final implementation.
6. Emergency encounters will be separately identified.
7. Dashboard KPI definitions will be approved before reporting development.
8. The portfolio implementation will use synthetic/de-identified patient data.

---

# 18. Constraints

Potential constraints include:

* Data quality
* Incomplete historical information
* Inconsistent reason codes
* Multiple appointment channels
* Manual data entry
* Integration limitations
* User adoption
* Privacy and security requirements
* Lack of historical patient journey data

---

# 19. Risks

| Risk ID | Risk                                   | Potential Impact                | Mitigation                        |
| ------- | -------------------------------------- | ------------------------------- | --------------------------------- |
| R-001   | Incomplete patient data                | Incorrect analysis              | Data validation                   |
| R-002   | Missing cancellation reasons           | Root cause cannot be identified | Standard reason codes             |
| R-003   | Inconsistent KPI definitions           | Conflicting reports             | Approve KPI definitions           |
| R-004   | Poor user adoption                     | Incomplete data                 | User training                     |
| R-005   | Incorrect retention definition         | Misleading KPI                  | Agree measurement window          |
| R-006   | Privacy issues                         | Regulatory/business risk        | Use appropriate security controls |
| R-007   | Emergency data mixed with appointments | Misleading analysis             | Separate emergency encounters     |

---

# 20. High-Level Business Rules

**BR-Rule-001:** Every appointment must have an identifiable patient.

**BR-Rule-002:** Every appointment should have a status.

**BR-Rule-003:** Cancelled appointments should have a standardized cancellation reason where available.

**BR-Rule-004:** No-show appointments should have a standardized reason where available.

**BR-Rule-005:** Rescheduled appointments should be traceable to the original appointment.

**BR-Rule-006:** Recommended procedures should be tracked through their lifecycle.

**BR-Rule-007:** Required follow-ups should be tracked through completion or documented closure.

**BR-Rule-008:** Feedback should be linked to the relevant patient journey event where possible.

**BR-Rule-009:** Emergency encounters should be separately identified for analytics.

**BR-Rule-010:** Retention calculations must use an approved and consistent measurement window.

---

# 21. Reporting Requirements

The project should support the following high-level reports.

### Appointment Performance Report

Includes:

* Appointment volume
* Attendance
* No-shows
* Cancellations
* Rescheduling
* Reasons

### Procedure Performance Report

Includes:

* Procedures recommended
* Procedures accepted
* Procedures scheduled
* Procedures completed
* Procedures cancelled
* Procedure drop-offs

### Follow-up Report

Includes:

* Follow-ups required
* Follow-ups scheduled
* Follow-ups completed
* Follow-up cancellations
* Follow-up no-shows

### Patient Retention Report

Includes:

* New patients
* Returning patients
* Number of visits
* Drop-off status
* Retention status

### Doctor Performance Report

Includes operational indicators such as:

* Appointment volume
* Attendance
* No-show
* Cancellation
* Patient satisfaction
* Procedure completion
* Follow-up compliance

### Department Performance Report

Includes:

* Appointment volume
* Attendance
* No-show
* Cancellation
* Procedure completion
* Follow-up compliance
* Satisfaction
* Retention

---

# 22. High-Level Solution Vision

The proposed solution will provide a centralized view of the patient journey.

### Current Concept

**Appointment**

→ **Consultation**

→ **Procedure**

→ **Follow-up**

Information may be fragmented.

### Future Concept

**Patient**

→ **Appointment**

→ **Confirmation**

→ **Reminder**

→ **Attendance**

→ **Consultation**

→ **Procedure**

→ **Follow-up**

→ **Feedback**

→ **Retention Analytics**

The future solution will connect these stages to enable meaningful patient journey analysis.

---

# 23. Analytics Vision

The system will provide the underlying data required for analytical platforms such as:

* Power BI
* Tableau
* SQL-based analysis

Analytics will help answer:

> Where are patients dropping off?

> Why are they dropping off?

> Which departments are most affected?

> Which patient segments show repeated drop-off behavior?

> What operational changes could improve retention?

---

# 24. Project Deliverables

The planned BA deliverables for the project are:

1. Business Requirements Document (BRD)
2. AS-IS Process Document
3. TO-BE Process Document
4. Functional Requirements Document (FRD)
5. User Stories
6. Acceptance Criteria
7. Requirements Traceability Matrix (RTM)
8. Jira Product Backlog
9. Data Model
10. SQL Queries
11. Power BI Dashboard
12. Tableau Dashboard
13. Test Scenarios
14. UAT Documentation
15. Final BA Portfolio Presentation

---

# 25. Project Success Definition

The project will be considered successful when Care to Cure has a structured process and analytical solution capable of answering:

**Where are patients dropping off?**

**Why are they dropping off?**

**Which departments are most affected?**

**Which process changes could reduce the drop-off?**

**Are patients returning for required or continued care?**

The ultimate business objective is to improve **patient continuity, experience, operational efficiency, and retention** through better data and process visibility.

---

# 26. Document Approval

| Role                      | Name | Status  | Date |
| ------------------------- | ---- | ------- | ---- |
| Business Sponsor          | TBD  | Pending | TBD  |
| Hospital Operations       | TBD  | Pending | TBD  |
| Department Representative | TBD  | Pending | TBD  |
| IT Representative         | TBD  | Pending | TBD  |
| Business Analyst          | TBD  | Drafted | TBD  |

---

# 27. Document Status

**Document:** Business Requirements Document
**Project:** Care to Cure Patient Retention & Follow-up Management System
**Version:** 1.0
**Status:** Draft




