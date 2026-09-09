# TO-BE PROCESS DOCUMENT

## Care to Cure Patient Retention & Follow-up Management System

**Organization:** Care to Cure
**Country:** Philippines
**Document Type:** TO-BE Process Document
**Version:** 1.0
**Status:** Draft
**Prepared By:** Business Analyst

---

## 1. Purpose

The purpose of the TO-BE process is to define the improved future-state patient journey for Care to Cure.

The proposed process will provide a structured and centralized way to manage:

* Patient appointments
* Appointment confirmations and reminders
* Cancellations and no-shows
* Rescheduling
* Consultation outcomes
* Procedure recommendations and completion
* Follow-up recommendations and appointments
* Patient feedback
* Doctor and department performance
* Patient retention and drop-off analytics

The TO-BE process is designed to address the gaps identified in the AS-IS process and provide better visibility into **where, why, and when patients drop off from their care journey.**

---

# 2. TO-BE Patient Journey

The proposed future-state journey is:

**Patient Request**
↓
**Appointment Booking**
↓
**Appointment Confirmation**
↓
**Automated Reminder**
↓
**Patient Attends?**
↓
**Consultation**
↓
**Procedure Required?**
↓
**Procedure Scheduled**
↓
**Procedure Completed?**
↓
**Follow-up Required?**
↓
**Follow-up Appointment**
↓
**Follow-up Completed?**
↓
**Patient Feedback**
↓
**Retention & Drop-off Analytics**

At every important stage, the system will capture the patient's status and relevant reason codes.

---

# 3. TO-BE Process Flow

## Step 1 — Patient Appointment Request

The patient requests an appointment through an available hospital booking channel.

The system should capture:

* Patient ID
* Patient name
* Contact information
* Department
* Preferred doctor
* Appointment type
* Preferred date
* Preferred time
* Booking channel
* Reason for visit

### Expected Improvement

Instead of relying on fragmented information, appointment information will be stored in a centralized system.

---

# 4. Step 2 — Appointment Booking

The Front Desk or authorized staff creates the appointment in the system.

The system generates a unique appointment ID.

### Appointment Status

The appointment can have statuses such as:

* Requested
* Scheduled
* Confirmed
* Rescheduled
* Cancelled
* No-show
* Completed

### Expected Improvement

A standardized appointment status allows the organization to accurately measure appointment outcomes.

---

# 5. Step 3 — Appointment Confirmation

Once an appointment is scheduled, the system records the confirmation status.

The patient receives confirmation through the configured communication channel.

The system records:

* Confirmation date
* Confirmation status
* Communication method
* Confirmation response

### Example

Patient receives appointment confirmation and selects:

**Confirm Appointment**

The system updates:

**Appointment Status = Confirmed**

---

# 6. Step 4 — Automated Appointment Reminder

Before the appointment, the system generates a reminder.

The reminder may be sent through configured communication channels such as:

* SMS
* Email
* Patient portal
* Other approved communication channels

The system records:

* Reminder date/time
* Reminder status
* Communication channel
* Patient response, where available

### Expected Improvement

The reminder process is intended to reduce avoidable no-shows, particularly forgotten appointments.

---

# 7. Step 5 — Appointment Attendance

On the appointment date, the Front Desk updates the patient's attendance status.

The system should distinguish between:

### Completed

Patient attended the appointment.

### No-show

Patient did not attend and did not cancel beforehand.

### Cancelled

Patient cancelled the appointment.

### Rescheduled

Patient requested another appointment date/time.

---

# 8. Step 6 — No-show and Cancellation Reason Capture

If the appointment is cancelled or marked as a no-show, the system prompts staff to capture a standardized reason.

### Example Reason Categories

* Forgot appointment
* Transportation problem
* Scheduling conflict
* Personal reasons
* Patient feeling better
* Doctor unavailable
* Long waiting time
* Communication/reminder issue
* Other

Where appropriate, staff can capture additional comments.

### Expected Improvement

Previously, the hospital may only know that a patient did not attend.

The TO-BE process captures:

**What happened + Why it happened + Whether the patient was recovered/rescheduled.**

---

# 9. Step 7 — Rescheduling

If a patient cancels or misses an appointment but wishes to continue treatment, staff can create a new appointment.

The system maintains the relationship between the original appointment and the rescheduled appointment.

### Example

Original:

**Appointment ID: AP-1001**
Status: No-show

New:

**Appointment ID: AP-1054**
Status: Rescheduled

This allows management to distinguish between:

**Lost Patient**

and

**Recovered Patient**

---

# 10. Step 8 — Consultation

When the patient attends the appointment, the doctor conducts the consultation.

The system records the consultation outcome.

Possible outcomes include:

* Consultation completed
* Follow-up required
* Procedure recommended
* No further action
* Referral required

The system should link the consultation to:

* Patient
* Appointment
* Doctor
* Department

---

# 11. Step 9 — Procedure Recommendation

If a procedure is recommended, the doctor or authorized staff records the recommendation.

The system captures:

* Procedure type
* Recommendation date
* Doctor
* Department
* Recommended date
* Patient decision
* Procedure status

### Patient Decision

The patient may:

* Accept
* Decline
* Need more information
* Defer decision

---

# 12. Step 10 — Procedure Scheduling

If the patient accepts the recommended procedure, the procedure is scheduled.

The system records:

**Recommended → Scheduled → Confirmed → Attended → Completed**

This creates visibility into the complete procedure journey.

---

# 13. Step 11 — Procedure Completion

The procedure status is updated after the scheduled date.

Possible statuses:

* Scheduled
* Confirmed
* Completed
* Cancelled
* No-show
* Declined
* Deferred

If the procedure is not completed, the system captures the reason.

### Example Reasons

* Patient declined
* Patient postponed
* Scheduling conflict
* Transportation issue
* Communication issue
* Patient unavailable
* Other

---

# 14. Step 12 — Follow-up Recommendation

After consultation or procedure completion, the doctor determines whether follow-up is required.

If required, the system creates a follow-up requirement.

The system records:

* Follow-up required
* Recommended follow-up date
* Follow-up type
* Responsible doctor
* Department
* Reason for follow-up

---

# 15. Step 13 — Follow-up Appointment

The system tracks whether the patient actually books the required follow-up.

The follow-up journey becomes:

**Follow-up Recommended**

↓

**Follow-up Scheduled**

↓

**Follow-up Confirmed**

↓

**Follow-up Reminder**

↓

**Follow-up Attended**

↓

**Follow-up Completed**

---

# 16. Step 14 — Follow-up No-show Management

If the patient does not attend the follow-up appointment, the system records the outcome.

Possible statuses:

* Completed
* Cancelled
* No-show
* Rescheduled

The reason for cancellation/no-show should also be captured where available.

### Expected Improvement

This allows Care to Cure to identify patients who were successfully treated initially but later dropped out of the follow-up process.

---

# 17. Step 15 — Patient Feedback

After an appointment, procedure, or follow-up, the patient may be invited to provide feedback.

The feedback process captures:

* Overall satisfaction
* Doctor rating
* Staff rating
* Waiting-time experience
* Appointment experience
* Communication experience
* Patient comments
* Complaint/issue category

Feedback should be linked to the relevant patient journey event where possible.

---

# 18. Step 16 — Patient Retention Analysis

The system consolidates patient journey information for analytical purposes.

The organization can analyze:

### Appointment Level

* Total appointments
* Completed appointments
* No-shows
* Cancellations
* Rescheduled appointments

### Procedure Level

* Procedures recommended
* Procedures scheduled
* Procedures completed
* Procedure cancellations
* Procedure no-shows
* Procedure declines

### Follow-up Level

* Follow-ups required
* Follow-ups scheduled
* Follow-ups completed
* Follow-up no-shows
* Follow-up cancellations

### Patient Level

* New patients
* Returning patients
* Patients with repeated no-shows
* Patients with incomplete procedures
* Patients with missed follow-ups

---

# 19. TO-BE Drop-off Identification

The system should identify drop-offs at each major stage.

| Patient Journey Stage           | Possible Drop-off                 |
| ------------------------------- | --------------------------------- |
| Appointment Requested → Booked  | Patient does not complete booking |
| Booked → Confirmed              | Patient does not confirm          |
| Confirmed → Attended            | Patient no-show                   |
| Attended → Procedure            | Patient declines procedure        |
| Procedure Scheduled → Completed | Procedure cancellation/no-show    |
| Follow-up Required → Scheduled  | Patient does not book             |
| Follow-up Scheduled → Attended  | Follow-up no-show                 |
| Follow-up → Future Care         | Patient does not return           |

This is one of the most important improvements over the AS-IS process.

---

# 20. TO-BE Management Dashboard

The consolidated data will support dashboards for hospital management.

### Dashboard 1 — Appointment Performance

KPIs:

* Total Appointments
* Attendance Rate
* No-show Rate
* Cancellation Rate
* Rescheduling Rate

### Dashboard 2 — Procedure Performance

KPIs:

* Procedures Recommended
* Procedures Scheduled
* Procedures Completed
* Procedure Completion Rate
* Procedure Drop-off Rate

### Dashboard 3 — Follow-up Performance

KPIs:

* Follow-ups Required
* Follow-ups Scheduled
* Follow-ups Completed
* Follow-up Compliance Rate
* Follow-up Drop-off Rate

### Dashboard 4 — Patient Retention

KPIs:

* New Patients
* Returning Patients
* Retention Rate
* Drop-off Rate
* Repeat Visit Rate
* Patients at Risk of Drop-off

### Dashboard 5 — Doctor & Department Performance

Metrics:

* Appointment volume
* Attendance rate
* No-show rate
* Cancellation rate
* Patient satisfaction
* Procedure completion
* Follow-up compliance

Doctor metrics should be treated as operational indicators and should not automatically imply that the doctor caused a patient's drop-off.

---

# 21. TO-BE Swimlane Process

| Activity             | Patient              | Front Desk          | Doctor                | System                   |
| -------------------- | -------------------- | ------------------- | --------------------- | ------------------------ |
| Request appointment  | Provides request     | Receives request    |                       |                          |
| Book appointment     |                      | Creates appointment |                       | Generates Appointment ID |
| Confirmation         | Confirms appointment |                     |                       | Records confirmation     |
| Reminder             | Receives reminder    |                     |                       | Sends reminder           |
| Appointment          | Attends / no-show    | Updates attendance  |                       | Stores status            |
| Consultation         | Participates         |                     | Conducts consultation | Records outcome          |
| Procedure decision   | Accepts/declines     |                     | Recommends procedure  | Stores recommendation    |
| Procedure scheduling | Confirms             | Schedules           |                       | Stores procedure         |
| Procedure            | Attends              | Updates status      | Performs procedure    | Stores outcome           |
| Follow-up            | Books/attends        | Schedules           | Recommends follow-up  | Tracks follow-up         |
| Feedback             | Provides feedback    |                     |                       | Stores feedback          |
| Analytics            |                      |                     |                       | Generates KPIs/dashboard |

---

# 22. Key TO-BE Improvements

| AS-IS Problem                         | TO-BE Solution                   |
| ------------------------------------- | -------------------------------- |
| No centralized patient journey        | Centralized patient journey      |
| Manual confirmation                   | Structured confirmation tracking |
| Limited reminder visibility           | Reminder tracking                |
| No standardized reasons               | Standard reason categories       |
| Difficult to track rescheduling       | Linked rescheduled appointments  |
| Procedure drop-offs unclear           | Procedure lifecycle tracking     |
| Follow-up not monitored               | Follow-up tracking and alerts    |
| Feedback disconnected                 | Feedback linked to journey       |
| Limited retention visibility          | Retention analytics              |
| Difficult department comparison       | Standardized department KPIs     |
| Limited management visibility         | Power BI/Tableau dashboards      |
| No systematic drop-off identification | Journey-stage drop-off analysis  |

---

# 23. Expected Business Benefits

The TO-BE process is expected to help Care to Cure:

1. Reduce avoidable appointment no-shows.
2. Improve appointment confirmation and reminder processes.
3. Understand major cancellation and no-show reasons.
4. Improve procedure completion visibility.
5. Improve follow-up compliance.
6. Identify patients who are dropping out of the care journey.
7. Understand patient satisfaction and experience.
8. Compare performance across departments.
9. Monitor operational indicators for doctors.
10. Provide management with actionable analytics.
11. Improve patient continuity of care.
12. Support data-driven process improvement.

---

# 24. Key Business Rules

**BR-TOBE-001:** Every scheduled appointment must have an appointment status.

**BR-TOBE-002:** Cancelled appointments should have a cancellation reason where available.

**BR-TOBE-003:** No-show appointments should have a standardized no-show reason where available.

**BR-TOBE-004:** Rescheduled appointments must be traceable to the original appointment.

**BR-TOBE-005:** Recommended procedures must have a recorded status.

**BR-TOBE-006:** Required follow-ups must be tracked until completion, cancellation, or documented closure.

**BR-TOBE-007:** Patient feedback should be associated with the relevant appointment/procedure/follow-up where possible.

**BR-TOBE-008:** Dashboard KPIs must use standardized definitions.

**BR-TOBE-009:** Emergency encounters should be analyzed separately from normal scheduled appointments.

**BR-TOBE-010:** Retention must use an agreed measurement window, such as 90 or 180 days, before final dashboard implementation.

---

# 25. TO-BE Success Measures

The future-state process will be considered successful when Care to Cure can answer the following questions using system data:

* How many patients are missing appointments?
* Why are patients missing appointments?
* Which departments have the highest no-show rates?
* Which appointment types have the highest drop-offs?
* How many patients reschedule after cancellation/no-show?
* How many recommended procedures are not completed?
* Why are procedures not completed?
* How many required follow-ups are missed?
* Which patients are repeatedly dropping off?
* How does patient satisfaction relate to retention?
* Which process improvements can reduce patient drop-offs?
* Are appointment reminders improving attendance?
* Which departments require operational improvement?

---

# 26. Future-State Summary

The proposed TO-BE process changes Care to Cure from a primarily **transaction-based appointment process** to a **patient-journey-based management process**.

Instead of simply recording:

> **Appointment → Completed/No-show**

the system will track:

> **Appointment → Confirmation → Reminder → Attendance → Consultation → Procedure → Follow-up → Feedback → Retention**

This enables Care to Cure to understand not only **what happened**, but also **where patients dropped off, why they dropped off, and what actions can be taken to improve retention and continuity of care.**

---

## Document Status

**Document:** TO-BE Process
**Project:** Care to Cure Patient Retention & Follow-up Management System
**Version:** 1.0
**Status:** Draft
**Next Documentation Step:** Functional Requirements Document (FRD)
