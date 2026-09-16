# COMPLIANCE & REGULATORY REQUIREMENTS
## Care to Cure Patient Retention & Follow-up Management System

**Jurisdiction:** Philippines
**Document Type:** Compliance Reference
**Version:** 1.0
**Status:** Draft

---

## 1. Purpose

This document identifies the regulatory and compliance requirements applicable to the Care to Cure Patient Retention & Follow-up Management System, given that it stores and processes patient (personal and sensitive personal) information within the Philippines.

---

## 2. Applicable Regulations

### 2.1 Data Privacy Act of 2012 (Republic Act No. 10173)
The primary law governing the collection, processing, and storage of personal data in the Philippines, enforced by the **National Privacy Commission (NPC)**.

Relevant provisions for this system:

* **Sensitive Personal Information (SPI):** Health records, including appointment history, consultations, and procedures, are classified as sensitive personal information under RA 10173 and require a higher standard of protection than general personal data.
* **Consent:** Patients must provide informed consent for the collection and processing of their health information, including its use for retention/drop-off analytics.
* **Data Subject Rights:** Patients have the right to access, correct, and (where applicable) request deletion of their personal data.
* **Security Measures:** The data controller (Care to Cure) must implement organizational, physical, and technical security measures proportional to the sensitivity of the data.
* **Breach Notification:** Any personal data breach affecting sensitive personal information must be reported to the NPC and affected data subjects within 72 hours of discovery.

### 2.2 Implementing Rules and Regulations (IRR) of RA 10173
Provides operational detail on RA 10173, including requirements for:

* Appointment of a Data Protection Officer (DPO)
* Privacy Impact Assessments (PIA) for systems processing sensitive personal information
* Data sharing agreements, if patient data is shared with third parties (e.g., BI/analytics vendors)

### 2.3 Department of Health (DOH) Administrative Orders
DOH issuances relevant to patient records and health information systems, including requirements around:

* Confidentiality of patient medical records
* Retention periods for medical records
* Standards for electronic health information systems, where applicable

*(Specific DOH Administrative Order numbers should be confirmed with Care to Cure's compliance/legal team before production use.)*

### 2.4 Philippine Health Insurance Corporation (PhilHealth) Requirements
Not directly applicable, since billing, claims, and insurance processing are explicitly **out of scope** for this system (see FRD Section 3.2 / BRD Section 8.2). Flagged here only in case future scope expansion reintroduces claims-adjacent data.

---

## 3. Data Classification

| Data Type | Classification | Examples in This System |
|---|---|---|
| Sensitive Personal Information (SPI) | Highest protection | Patient health records, consultation outcomes, procedure history, diagnoses implied by procedure type |
| Personal Information (PI) | Standard protection | Patient name, date of birth, contact information |
| De-identified / Aggregated Data | Lower risk | KPI rollups, department/doctor performance metrics (when not traceable to an individual patient) |

---

## 4. Compliance Requirements Mapped to System Design

| Requirement | System Implication |
|---|---|
| Consent for data collection | Patient record creation (FR-001) should reference consent capture in the real-world process, even if consent workflow itself is out of scope for this portfolio build |
| Role-based access to SPI | Enforced via NFR-002 (Role-based Access) — only authorized roles (Doctor, Front Desk, Admin) can view/edit patient clinical data |
| Auditability of access/changes | Enforced via NFR-003 (Auditability) — all changes to patient, appointment, procedure, and follow-up records should be logged |
| Data minimization | Dashboards and reports should use aggregated/de-identified data wherever individual-level detail isn't required (Section 22-23 of FRD) |
| Breach response readiness | Out of scope for functional build, but should be noted as an operational requirement for any real deployment |
| Data retention limits | Retention period for patient records should be defined per DOH guidance before production use (not yet finalized — see Assumptions) |

---

## 5. Portfolio / Demonstration Scope Note

This system is being built as a **business analysis and technical portfolio project**. Accordingly:

* Only **synthetic, de-identified data** is used — no real patient information is collected, stored, or processed (per FRD NFR-006).
* Consent workflows, DPO appointment, breach notification procedures, and formal Privacy Impact Assessments are **documented as requirements but not implemented**, since they are organizational/legal processes rather than system features.
* This document demonstrates awareness of the applicable regulatory landscape (RA 10173, DOH guidance) rather than serving as a certified compliance artifact for a live production system.

---

## 6. Assumptions

1. Care to Cure, as data controller, is responsible for NPC registration and DPO appointment in a real deployment.
2. Final data retention periods will be confirmed against DOH guidance before production use.
3. Any future integration with billing/insurance systems (currently out of scope) would introduce additional PhilHealth-related compliance requirements.
4. This system does not currently support cross-border data transfer; if analytics/BI tools are hosted outside the Philippines, additional RA 10173 cross-border transfer provisions would apply.

---

## Document Status

**Document:** Compliance & Regulatory Requirements
**Project:** Care to Cure Patient Retention & Follow-up Management System
**Version:** 1.0
**Status:** Draft