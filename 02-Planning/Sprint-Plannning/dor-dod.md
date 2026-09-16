# DEFINITION OF READY (DoR) & DEFINITION OF DONE (DoD)
## Care to Cure Patient Retention & Follow-up Management System

---

## Definition of Ready (DoR)

A user story is considered **Ready** for sprint planning when:

1. The story is written in "As a / I want / So that" format.
2. Acceptance criteria are written in Gherkin (Given/When/Then) format.
3. The story maps to at least one Functional Requirement (FR) in the FRD.
4. The story's priority (MoSCoW) has been assigned.
5. Dependencies on other stories or data (e.g., a required entity like Patient or Appointment) are identified.
6. The story is small enough to be completed within a single sprint.
7. Any open questions or assumptions have been flagged to the Business Analyst or Product Owner for resolution.

---

## Definition of Done (DoD)

A user story is considered **Done** when:

1. All acceptance criteria in the story pass.
2. The relevant functionality is implemented and matches the mapped FR(s).
3. Data used has been validated against the schema (`05-database/schema.sql`).
4. Any relevant KPI/report affected by the story has been checked for correctness.
5. The story has been reviewed against the FRD/BRD traceability table to confirm no scope drift.
6. Documentation (README, relevant .md files) is updated if the story changes how a module works.
7. Changes are committed to the repository with a clear commit message referencing the story ID (e.g., "US-009: Add cancellation reason capture").
8. The Product Owner (or, for this portfolio, the Business Analyst acting as PO) has reviewed and accepted the story.

---

## Notes

* For this portfolio project, "sprint" simulates a 1-week or 2-week cycle even though there is no live development team — this demonstrates familiarity with Agile ceremonies and artifacts expected in a real BA/PO role.
* DoR and DoD are intentionally kept lightweight and reusable across all epics rather than customized per story, consistent with standard Agile practice.