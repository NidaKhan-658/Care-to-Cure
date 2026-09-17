# Care to Cure — Patient Retention & Follow-up Management System

A full-stack business analysis and software portfolio project simulating a real-world healthcare operations system, built to demonstrate the complete BA-to-delivery lifecycle: from business requirements through to a working, data-driven application.

**Care to Cure** is a fictional multi-department clinic in the Philippines. This project tackles a real operational problem healthcare providers face: patients disengage from care at multiple points — missed appointments, declined procedures, skipped follow-ups — and without a system to track *why*, organizations can't act on it.

---

## The Problem

Care to Cure had no centralized way to see where patients dropped out of their care journey. Appointments, cancellations, and no-shows were tracked inconsistently, procedure and follow-up outcomes weren't linked back to the visits that generated them, and there was no reliable way to measure patient retention or compare doctor/department performance.

## The Solution

An end-to-end system that tracks every patient from appointment booking through consultation, procedure, follow-up, and feedback — capturing standardized reasons at every drop-off point — and surfaces the result as retention, attendance, and compliance KPIs on a management dashboard.

---

## Project Structure & BA Deliverables

This repository is organized to mirror a real project lifecycle, from discovery through delivery:

### 📄 [`01-Documentation/`](./01-Documentation)
- **BRD.docx** — Business Requirements Document: problem statement, objectives, stakeholders, as-is/to-be states
- **FRD.docx** — Functional Requirements Document: 48 functional requirements, 14 business rules, data model, and full requirements traceability
- **as_is_process.md / to_be_process.md** — current vs. future state process narratives
- **Acceptance Criteria.md** — high-level, testable acceptance criteria for the full system

### 📋 [`02-Planning/`](./02-Planning)
- **Epics-features-stories.md** — 7 epics, 29 user stories in Gherkin-style acceptance criteria, each traced to a specific FRD requirement
- **backlog.csv** — importable backlog (Jira/Azure DevOps compatible format)
- **prioritization-moscow.md** — Must/Should/Could/Won't Have breakdown with rationale
- **Compliance/regulations.md** — Philippine Data Privacy Act (RA 10173), NPC, and DOH compliance considerations
- **Outcome/** — project outcomes narrative and success metrics tied to business objectives
- **Sprint-Plannning/** — Definition of Ready/Done, a 4-sprint delivery plan, and simulated sprint review/retrospective notes
- **wireframes/** — process flow mapping and wireframe plan for all 9 core screens

### 📊 [`03-analytics/`](./03-analytics)
- **KPI_definitions.md** — precise formulas for every KPI, including flagged open questions (e.g., retention measurement window) that required stakeholder-style decisions
- **retention_analysis.sql** — 12 analytical queries: attendance/no-show/cancellation rates, procedure completion, follow-up compliance, retention rate, doctor/department performance, and drop-off identification

### 🗄️ [`04-data/`](./04-data) & [`05-database/`](./05-database)
- Normalized relational schema (SQLite) modeling patients, appointments, consultations, procedures, follow-ups, and feedback — with full referential integrity and reschedule traceability
- Synthetic dataset covering the full range of outcomes (completed, cancelled, no-show, declined, deferred, missed follow-ups) so the analytics tell a real story

### ⚙️ [`06-backend/`](./06-backend)
- Node.js + Express REST API with full CRUD across all entities
- Business-rule-aware endpoints beyond basic CRUD: cancel/no-show with reason capture, reschedule with original-appointment traceability, procedure decision tracking, follow-up attendance recording
- Dedicated analytics endpoints powering the dashboard directly from SQL

### 🖥️ [`07-frontend/`](./07-frontend)
- **index.html** — patient search and a consolidated, timeline-style patient journey view
- **dashboard.html** — management dashboard: attendance/no-show/cancellation/retention KPIs, department and doctor performance, top drop-off reasons

---

## Tech Stack

| Layer | Technology |
|---|---|
| Documentation | Markdown, Word (BRD/FRD) |
| Planning | CSV (backlog), Markdown |
| Database | SQLite |
| Backend | Node.js, Express, better-sqlite3 |
| Frontend | HTML, CSS, vanilla JavaScript |
| Analytics | SQL |

No frontend framework or build tooling by design — the emphasis of this project is the BA lifecycle and data model, not frontend engineering complexity.

---

## Running the Project Locally

```bash
git clone https://github.com/NidaKhan-658/Care-to-Cure.git
cd Care-to-Cure/06-backend
npm install
npm run init-db   # builds the SQLite database from schema.sql + synthetic CSVs
npm start         # runs the API on http://localhost:3000
```

Then open `07-frontend/index.html` and `07-frontend/dashboard.html` directly in a browser.

---

## What This Project Demonstrates

- **Requirements elicitation & documentation** — BRD/FRD with full traceability from business objective → requirement → user story → KPI
- **Backlog management & prioritization** — Agile artifacts (epics, stories, MoSCoW, sprint planning, DoR/DoD)
- **Regulatory awareness** — jurisdiction-specific compliance research (Philippine Data Privacy Act) rather than a generic/US-only framework
- **Data modeling** — normalized schema derived directly from documented business rules
- **Analytical thinking** — KPI definitions that surface and resolve ambiguity (e.g., explicitly flagging and reasoning through the procedure completion denominator question) rather than hiding it
- **Full-stack delivery** — a working system, not just documentation, proving the requirements are buildable and the data model holds up under real queries

---

## Author


