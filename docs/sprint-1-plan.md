# Sprint 1 Plan

Sprint window: 2 weeks
Product: Lattice v1.0
Source backlog: `docs/backlog.md`

## Sprint Goal
Establish a secure project foundation with authentication, role enforcement, settings, multi-currency setup, and traceable audit events so the team can safely build asset and budget features in Sprint 2.

## Selected Stories (5)

| ID | Story | Priority | Story Points | Owner |
|---|---|---|---|---|
| US-01 | Session authentication for all data access | P0 | 5 | Contributor 1 |
| US-02 | Role-based access for owner and household member | P0 | 8 | Contributor 2 |
| US-03 | Base currency settings with FX refresh and stale indicator | P0 | 5 | Contributor 1 |
| US-12 | Settings page for user/account config and integration controls | P0 | 5 | Contributor 3 |
| US-13 | Audit log for balance updates, imports, and budget changes | P0 | 5 | Contributor 4 |

Total planned capacity: 28 story points

## Why These Stories
- They map directly to PRD Milestone M1 (foundation, auth, settings, multi-currency).
- They reduce downstream risk by enforcing access control and auditability first.
- They provide reusable platform capabilities needed by assets, budget, and AI features.

## Definition of Done
- All acceptance criteria for selected stories are met.
- Unit and smoke tests pass in CI.
- Security-sensitive paths (auth, RBAC, settings writes) are validated by at least one negative test each.
- Documentation is updated for any new config or role behavior.

## Risks and Mitigations
- Risk: API/provider choice uncertainty for FX source.
- Mitigation: implement provider abstraction and start with Frankfurter default.
- Risk: RBAC gaps between UI and API.
- Mitigation: enforce authorization checks server-side before UI polish.
- Risk: audit logging misses background updates.
- Mitigation: add shared logging middleware/hook for write operations.
