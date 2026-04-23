# Support Plan

Date: 2026-04-24  
Project: Software Implementation Management (SIAM)

## Scope
Support process for reported issues affecting:
- Service availability
- Authentication and token behavior
- Input validation behavior
- CI/CD and deployment flow

## Issue Reporting Process
1. Reporter opens a GitHub Issue using template `Bug Report`.
2. Required fields:
   - Summary
   - Environment (local/dev/prod URL)
   - Steps to reproduce
   - Expected result
   - Actual result
   - Severity proposal (`P1` to `P4`)
   - Evidence (logs, screenshots, failing command output)
3. Assignee performs triage and confirms final severity.
4. Issue is linked to a fix PR and test evidence before closure.

## Severity Definitions
- `P1 Critical`: Service unavailable or severe security risk.
- `P2 High`: Core endpoint failing with no acceptable workaround.
- `P3 Medium`: Partial degradation or non-critical functional bug.
- `P4 Low`: Cosmetic, documentation, or minor enhancement item.

## Response Time Targets
- `P1`: initial response within **30 minutes**, status updates every **60 minutes**, target workaround/fix within **4 hours**.
- `P2`: initial response within **2 hours**, updates every **4 hours**, target fix within **1 business day**.
- `P3`: initial response within **1 business day**, target fix within **3 business days**.
- `P4`: initial response within **2 business days**, target fix in next planned sprint.

## Communication Channels
- Primary: GitHub Issues and linked Pull Requests.
- Escalation: direct mention/tag of `CI/CD & Deployment` owner in issue.
- Release communication: `docs/release-notes.md` updated for closed incidents impacting users.

## Closure Criteria
- Fix merged to main development branch.
- Relevant tests added/updated and passing.
- Reporter or assignee confirms expected behavior.
- Issue labeled `resolved` and closed with root-cause summary.
