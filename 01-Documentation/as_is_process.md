# AS-IS PROCESS DOCUMENT

## Care to Cure Patient Retention & Follow-up Management System

**Organization:** Care to Cure
**Country:** Philippines
**Document Type:** AS-IS Process Document
**Version:** 1.0
**Status:** Draft
**Prepared By:** Business Analyst

---

# 1. Purpose

The purpose of this document is to describe the **current-state (AS-IS) patient journey and operational processes** at Care to Cure.

The AS-IS analysis identifies how appointments, consultations, procedures, follow-ups, and patient feedback are currently managed and highlights the existing process gaps that contribute to patient drop-offs.

The analysis will serve as the baseline for designing the future-state **TO-BE process**.

---

# 2. Current Patient Journey

The current patient journey can be represented as:

**Appointment Request**
↓
**Appointment Booked**
↓
**Appointment Confirmation**
↓
**Patient Attends?**

### If NO

**No-show / Cancellation**
↓
**Reason Captured?**
↓
**Information may be lost**

### If YES

**Consultation**
↓
**Procedure Required?**

### If NO

**Follow-up Required?**

### If YES

**Procedure Scheduled**
↓
**Procedure Completed?**

### If NO

**Patient Drop-off**

### If YES

**Follow-up Required**
↓
**Follow-up Scheduled**
↓
**Patient Attends?**

### If NO

**Follow-up Drop-off**

### If YES

**Patient Continues Care / Retained**

---

# 3. AS-IS Process Flow

## Step 1 — Appointment Request

The patient contacts Care to Cure to request an appointment.

The request may be received through different channels depending on the hospital's operating process.

The patient provides basic information such as:

* Patient details
* Department
* Doctor preference
* Preferred date
* Preferred time
* Reason for visit

### Current-State Issue

Because appointment requests may originate from different channels, information may not always be captured consistently.

---

# 4. Step 2 — Appointment Booking

The Front Desk or relevant hospital staff creates the appointment.

The appointment information generally includes:

* Patient
* Doctor
* Department
* Date
* Time
* Appointment type

### Current-State Issue

Patient and appointment information may be incomplete or inconsistent.

There may also be limited visibility of the complete patient journey from one centralized view.

---

# 5. Step 3 — Appointment Confirmation

The hospital confirms the appointment with the patient.

The confirmation process may involve manual communication by staff.

### Current-State Issue

The organization may not have complete visibility into:

* Whether the patient received the confirmation
* Whether the patient confirmed attendance
* Whether a reminder was sent
* Whether the patient responded to the reminder

This makes it difficult to determine whether communication failures contribute to no-shows.

---

# 6. Step 4 — Appointment Day

On the appointment date, the patient either attends or does not attend.

The appointment may be recorded as:

* Completed
* Cancelled
* No-show
* Rescheduled

### Current-State Issue

The hospital may know that the patient did not attend, but the reason may not always be captured in a standardized format.

For example:

**Patient did not attend**

does not explain whether the reason was:

* Forgot appointment
* Transportation problem
* Scheduling conflict
* Personal reason
* Patient feeling better
* Doctor unavailable
* Long waiting time
* Communication issue

---

# 7. Step 5 — Consultation

If the patient attends the appointment, the doctor conducts the consultation.

The doctor assesses the patient and determines the next appropriate action.

Possible outcomes include:

* No further treatment required
* Follow-up required
* Procedure recommended
* Referral required

### Current-State Issue

The consultation outcome may not always be consistently connected to the patient's appointment and future care journey for analytical purposes.

---

# 8. Step 6 — Procedure Recommendation

If a procedure is required, the doctor recommends the procedure to the patient.

The patient may:

* Accept the recommendation
* Decline
* Defer the decision
* Request additional information

### Current-State Issue

The organization may have limited visibility into the number of patients who receive procedure recommendations but do not proceed.

For example:

**Procedure Recommended → Patient Declined**

may not be consistently tracked with a standardized reason.

---

# 9. Step 7 — Procedure Scheduling

If the patient agrees to proceed, the procedure is scheduled.

The process may include:

**Procedure Recommended → Procedure Scheduled**

### Current-State Issue

There may be limited visibility into what happens between procedure recommendation and completion.

For example, the hospital may not easily determine:

* How many procedures were recommended
* How many were scheduled
* How many were cancelled
* How many were no-shows
* How many were completed
* Why patients did not complete the procedure

---

# 10. Step 8 — Procedure

The patient attends the scheduled procedure.

The procedure may be:

* Completed
* Cancelled
* No-show
* Declined
* Deferred

### Current-State Issue

Procedure non-completion may represent an important patient drop-off point, but the organization may not have a centralized way to analyze these events.

---

# 11. Step 9 — Follow-up Recommendation

Following a consultation or procedure, the doctor may recommend a follow-up.

The follow-up recommendation may include:

* Follow-up date
* Follow-up type
* Responsible doctor
* Department
* Reason for follow-up

### Current-State Issue

A follow-up recommendation does not necessarily mean that the patient actually schedules or attends the follow-up.

There may be limited tracking between:

**Follow-up Recommended → Follow-up Scheduled → Follow-up Attended**

---

# 12. Step 10 — Follow-up Booking

The patient may schedule a follow-up appointment.

If the patient does not schedule the follow-up, the hospital may have limited visibility into the reason.

### Current-State Issue

Patients who do not book their recommended follow-up may effectively disappear from the active care journey.

---

# 13. Step 11 — Follow-up Appointment

The patient either attends or misses the follow-up appointment.

Possible outcomes:

* Completed
* Cancelled
* No-show
* Rescheduled

### Current-State Issue

The organization may not have a systematic process for identifying patients who repeatedly miss follow-ups or fail to return for continued care.

---

# 14. Step 12 — Patient Feedback

Patients may provide feedback about their experience.

Feedback may include:

* Overall satisfaction
* Doctor experience
* Staff experience
* Waiting time
* Appointment experience
* Communication
* Comments
* Complaints

### Current-State Issue

Feedback may not always be directly connected to the patient's appointment, procedure, or subsequent retention behavior.

For example, the organization may know that:

**Patient Satisfaction = Low**

but may not easily determine whether the same patient subsequently:

**Cancelled → Missed Procedure → Missed Follow-up**

---

# 15. AS-IS Swimlane Process

| Activity                 | Patient                 | Front Desk           | Doctor                | Existing System/Records           |
| ------------------------ | ----------------------- | -------------------- | --------------------- | --------------------------------- |
| Request appointment      | Provides request        | Receives request     |                       |                                   |
| Book appointment         |                         | Creates appointment  |                       | Appointment information recorded  |
| Confirmation             | Receives confirmation   | Contacts patient     |                       | Confirmation may be recorded      |
| Appointment day          | Attends / No-show       | Updates attendance   |                       | Status recorded                   |
| Consultation             | Participates            |                      | Conducts consultation | Consultation information recorded |
| Procedure decision       | Accepts / Declines      |                      | Recommends procedure  | Recommendation may be recorded    |
| Procedure scheduling     | Confirms date           | Schedules procedure  |                       | Procedure information recorded    |
| Procedure                | Attends / No-show       | Updates status       | Performs procedure    | Procedure status recorded         |
| Follow-up recommendation | Receives recommendation |                      | Recommends follow-up  | May be recorded                   |
| Follow-up booking        | Books / does not book   | Schedules            |                       | Appointment recorded              |
| Follow-up                | Attends / No-show       | Updates status       | Conducts follow-up    | Status recorded                   |
| Feedback                 | Provides feedback       | May collect feedback |                       | Feedback may be stored            |

---

# 16. AS-IS Patient Drop-off Points

The current process has several potential drop-off points.

| Stage                           | Drop-off Event          | Possible Reason           | Current Challenge                     |
| ------------------------------- | ----------------------- | ------------------------- | ------------------------------------- |
| Appointment → Attendance        | No-show                 | Forgot appointment        | Reason may not be standardized        |
| Appointment → Attendance        | No-show                 | Transportation            | Limited analysis                      |
| Appointment → Attendance        | Cancellation            | Scheduling conflict       | Reason may be inconsistently captured |
| Consultation → Procedure        | Procedure declined      | Patient decision          | Limited visibility                    |
| Procedure Scheduled → Completed | Cancellation            | Personal/scheduling issue | Limited reason analysis               |
| Procedure Scheduled → Completed | No-show                 | Patient did not attend    | May not be linked to journey          |
| Procedure → Follow-up           | Follow-up not booked    | Patient did not schedule  | Difficult to track                    |
| Follow-up Scheduled → Attended  | No-show                 | Forgot appointment        | Reason may not be captured            |
| Follow-up → Future Care         | Patient does not return | Satisfaction/other reason | Retention risk may not be identified  |

---

# 17. AS-IS Business Pain Points

## Pain Point 1 — No Centralized Patient Journey

Patient information may exist across different operational activities.

It can therefore be difficult to view the complete journey:

**Appointment → Consultation → Procedure → Follow-up → Feedback**

from a single perspective.

---

## Pain Point 2 — Inconsistent Reason Capture

No-shows and cancellations may be recorded without standardized reason categories.

As a result, management may know:

> "100 appointments were missed."

but may not know:

> "40 were due to scheduling conflicts, 25 were forgotten appointments, 15 were transportation problems, etc."

---

## Pain Point 3 — Limited Procedure Drop-off Visibility

There may be insufficient visibility into the complete procedure funnel:

**Recommended → Scheduled → Confirmed → Attended → Completed**

This makes it difficult to determine where patients stop progressing.

---

## Pain Point 4 — Follow-up Tracking Gap

A doctor may recommend a follow-up, but the organization may not consistently track whether the patient:

1. Booked the follow-up
2. Confirmed the follow-up
3. Attended the follow-up
4. Completed the follow-up
5. Returned for future care

---

## Pain Point 5 — Feedback Not Fully Connected to Retention

Patient feedback may exist separately from operational data.

Therefore, it may be difficult to analyze relationships such as:

**Low Satisfaction → Cancellation → No Follow-up → Patient Drop-off**

---

## Pain Point 6 — Limited Management Dashboard

Management may not have a single view showing:

* Appointment performance
* No-show trends
* Cancellation trends
* Procedure completion
* Follow-up compliance
* Patient satisfaction
* Retention
* Department performance

---

## Pain Point 7 — Limited Doctor/Department Comparison

There may be limited standardized KPIs for comparing operational performance across doctors and departments.

Doctor-level metrics should be interpreted carefully because a higher cancellation or no-show rate does not necessarily mean the doctor caused the outcome.

---

## Pain Point 8 — No Systematic At-Risk Identification

Patients who repeatedly:

* Miss appointments
* Cancel
* Decline procedures
* Miss follow-ups

may not be systematically identified as potential drop-off risks.

---

# 18. AS-IS Business Gaps

| Gap ID  | Business Gap                                       | Impact                                              | Priority |
| ------- | -------------------------------------------------- | --------------------------------------------------- | -------- |
| GAP-001 | No centralized patient journey view                | Difficult to understand complete patient journey    | High     |
| GAP-002 | No standardized no-show/cancellation reasons       | Difficult to identify root causes                   | High     |
| GAP-003 | Limited procedure drop-off visibility              | Procedure completion cannot be analyzed effectively | High     |
| GAP-004 | Follow-up recommendations not consistently tracked | Patients may be lost after treatment                | High     |
| GAP-005 | Feedback not fully connected to outcomes           | Difficult to understand satisfaction vs retention   | Medium   |
| GAP-006 | No centralized retention dashboard                 | Limited management visibility                       | High     |
| GAP-007 | Limited standardized doctor/department KPIs        | Difficult to compare performance                    | Medium   |
| GAP-008 | No systematic at-risk patient identification       | Missed opportunity for intervention                 | High     |

---

# 19. AS-IS Data Capture Gaps

The current process may not consistently capture the following information:

### Appointment

* Confirmation status
* Reminder status
* Cancellation reason
* No-show reason
* Rescheduling relationship

### Procedure

* Recommendation status
* Patient decision
* Cancellation reason
* Non-completion reason
* Completion status

### Follow-up

* Follow-up required
* Follow-up booked
* Follow-up confirmation
* Follow-up attendance
* Follow-up reason for non-attendance

### Feedback

* Satisfaction score
* Waiting-time experience
* Doctor rating
* Staff rating
* Communication experience
* Complaint category

---

# 20. AS-IS KPI Limitations

The organization may be able to calculate basic operational metrics, but consistent definitions and centralized data may be limited.

Potential KPIs include:

**Attendance Rate**

Completed Appointments ÷ Scheduled Appointments × 100

**No-show Rate**

No-show Appointments ÷ Scheduled Appointments × 100

**Cancellation Rate**

Cancelled Appointments ÷ Scheduled Appointments × 100

**Procedure Completion Rate**

Completed Procedures ÷ Recommended/Scheduled Procedures × 100

**Follow-up Compliance**

Completed Follow-ups ÷ Required Follow-ups × 100

**Retention Rate**

Returning Patients ÷ Eligible Patients × 100

The exact retention measurement window, such as **90 days or 180 days**, must be agreed before implementation.

---

# 21. AS-IS Root Cause Categories

The following categories can be used during the future-state analysis to standardize reasons for patient drop-off.

### Patient-related

* Forgot appointment
* Personal reason
* Patient feeling better
* Patient declined
* Patient unavailable

### Operational

* Doctor unavailable
* Scheduling conflict
* Long waiting time
* Appointment availability issue

### Access-related

* Transportation problem
* Distance
* Communication problem

### Other

* Unknown
* Other

These categories should be validated with Care to Cure stakeholders before being implemented as final system values.

---

# 22. AS-IS Summary

The current-state process primarily focuses on **managing individual appointments and patient interactions**.

The major limitation is the lack of a fully connected patient journey.

The organization needs better visibility into:

**What happened?**

**Where did the patient drop off?**

**Why did the patient drop off?**

**Was the patient recovered or rescheduled?**

**Did the patient return for continued care?**

The AS-IS analysis therefore establishes the need for a future-state process that connects:

**Appointment → Consultation → Procedure → Follow-up → Feedback → Retention**

---

# 23. Transition to TO-BE

The key transformation from AS-IS to TO-BE is:

| AS-IS                         | TO-BE                             |
| ----------------------------- | --------------------------------- |
| Appointment-focused           | Patient-journey-focused           |
| Manual/fragmented tracking    | Centralized tracking              |
| Limited reason capture        | Standardized reason capture       |
| Limited reminder visibility   | Reminder tracking                 |
| Basic appointment status      | Complete appointment lifecycle    |
| Limited procedure tracking    | Procedure lifecycle               |
| Follow-up recommendation only | Follow-up tracking to completion  |
| Feedback may be separate      | Feedback linked to journey        |
| Limited retention visibility  | Retention analytics               |
| Reactive management           | Proactive drop-off identification |
| Limited reporting             | Power BI/Tableau dashboards       |

---

## Document Status

**Document:** AS-IS Process
**Project:** Care to Cure Patient Retention & Follow-up Management System
**Version:** 1.0
**Status:** Draft
**Next Document:** TO-BE Process / Functional Requirements Document
