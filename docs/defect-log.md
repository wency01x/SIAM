# Defect Log

Date Opened: 2026-04-24
Date Updated: 2026-04-24

| ID | Title | Severity | Status | Module |
|---|---|---|---|---|
| BUG-001 | `validateToken` truncates user IDs that contain hyphens | Medium | Closed | `src/auth/auth.js` |

## BUG-001 Details
- Description:
  - `validateToken` extracted `userId` using `token.split('-')[3]`.
  - For IDs like `user-42-alpha`, only `user` was returned.
- Impact:
  - Incorrect identity parsing for valid stub tokens with hyphenated IDs.
  - Could break authorization mapping in downstream consumers.
- Reproduction:
  - Generate token with `generateToken('user-42-alpha')`.
  - Validate token and inspect `userId`.
- Root Cause:
  - Positional split logic assumed fixed `-` segment structure.
- Fix Implemented:
  - Parse using known prefix + last `-` separator before timestamp.
  - Validate timestamp segment is numeric.
- Verification:
  - Added unit test: `validateToken extracts full userId when it contains hyphens`.
  - All tests pass after fix.
- Closure Notes:
  - Defect resolved and status set to Closed on 2026-04-24.
