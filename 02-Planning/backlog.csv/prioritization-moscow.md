# MOSCOW PRIORITIZATION
## Care to Cure Patient Retention & Follow-up Management System

This prioritization reflects what is required to deliver the core business objective — visibility into the patient journey and drop-off points — versus what enhances the system but could be deferred to a later release.

---

## MUST HAVE
*Without these, the system cannot deliver its core purpose: tracking the patient journey and measuring retention/drop-off.*

| ID | Story | Epic |
|---|---|---|
| US-001 | Create patient record | Patient Management |
| US-002 | Search patient | Patient Management |
| US-003 | View patient journey | Patient Management |
| US-004 | Create appointment | Appointment Lifecycle |
| US-005 | Appointment status tracking | Appointment Lifecycle |
| US-006 | Update appointment | Appointment Lifecycle |
| US-007 | Record appointment confirmation | Appointment Lifecycle |
| US-009 | Cancel appointment + reason | Appointment Lifecycle |
| US-010 | Record no-show + reason | Appointment Lifecycle |
| US-011 | Reschedule appointment | Appointment Lifecycle |
| US-012 | Record consultation + outcome | Consultation & Procedure |
| US-013 | Procedure recommendation + decision | Consultation & Procedure |
| US-014 | Schedule & track procedure | Consultation & Procedure |
| US-015 | Capture procedure non-completion reason | Consultation & Procedure |
| US-016 | Follow-up required flag | Follow-up Management |
| US-017 | Create & track follow-up | Follow-up Management |
| US-021 | Identify appointment drop-offs | Retention & Drop-off Analytics |
| US-022 | Identify procedure/follow-up drop-offs | Retention & Drop-off Analytics |
| US-024 | Attendance/no-show/cancellation rates | KPIs & Dashboards |
| US-025 | Procedure completion & follow-up compliance rates | KPIs & Dashboards |
| US-026 | Patient retention rate | KPIs & Dashboards |
| US-028 | Management dashboard | KPIs & Dashboards |
| US-029 | Drop-off dashboard | KPIs & Dashboards |

**Rationale:** These stories cover the end-to-end patient journey (appointment → consultation → procedure → follow-up) and the minimum KPIs/dashboard needed to prove retention and drop-off analysis — the entire reason the system exists. Cutting any of these breaks the core traceability chain from FRD Section 33.

---

## SHOULD HAVE
*Important for a complete, credible system, but the system still functions and demonstrates its value without them at launch.*

| ID | Story | Epic |
|---|---|---|
| US-008 | Reminder generation & tracking | Appointment Lifecycle |
| US-018 | Follow-up non-attendance reason | Follow-up Management |
| US-019 | Capture patient feedback | Patient Feedback |
| US-020 | Link feedback to care journey | Patient Feedback |
| US-023 | Identify repeat drop-off patients | Retention & Drop-off Analytics |
| US-027 | Doctor/department performance metrics | KPIs & Dashboards |

**Rationale:** Reminders, feedback, and repeat-offender detection add real value and are explicitly called out in the FRD, but the core retention story (drop-off identification and KPI reporting) works without them. Doctor/department performance is useful for management but secondary to the patient-level retention picture.

---

## COULD HAVE
*Enhancements that would strengthen the system but aren't part of the FRD's core scope for this version.*

- Automated reminder delivery via SMS/email integration (FRD only requires *tracking* reminder status, not sending mechanism)
- Predictive drop-off risk scoring (flagging patients likely to disengage before it happens, versus reporting after the fact)
- Patient self-service portal for confirming/rescheduling appointments

**Rationale:** These extend the system meaningfully but require additional infrastructure (messaging integration, predictive modeling) not specified in the current FRD/BRD scope.

---

## WON'T HAVE (This Release)
*Explicitly out of scope per FRD Section 3.2 and BRD Section 8.2.*

- Billing, invoicing, payment processing
- Insurance claims
- Accounts receivable / revenue management
- Payroll
- Pharmacy management
- Inventory management

**Rationale:** These are explicitly excluded in both the BRD and FRD scope sections. Including them would blur the system's focus from patient retention/follow-up into full hospital ERP territory.

---

## Summary

| Category | Story Count |
|---|---|
| Must Have | 23 |
| Should Have | 6 |
| Could Have | 3 (not user stories — future enhancements) |
| Won't Have | 6 modules (excluded entirely) |

This distribution intentionally front-loads the patient journey and retention/KPI stories as Must Have, since they represent the system's core value proposition — everything else supports or extends that core.