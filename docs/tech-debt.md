# Technical Debt Register

Date: 2026-04-24  
Project: Software Implementation Management (SIAM)

## Listed Technical Debts
1. `validateQueryParam` relied on `Array.includes()` for each check (`O(n)` per lookup), which scales poorly with large allowlists.
2. `src/auth/auth.js` authentication flow is still a stub and not connected to a real user store.
3. Token generation/validation is a placeholder format, not a signed JWT implementation.
4. Test coverage focused on module behavior; API-level integration coverage was limited.
5. Deployment path used a temporary tunnel-based URL (good for demo, weak for persistent production).

## Selected Debt To Fix
Selected debt: **#1 query-parameter allowlist lookup performance**.

Reason for selection:
- High impact under repeated validation calls.
- Low-risk refactor with no behavior change in success/error semantics.
- Easy to verify using a reproducible benchmark.

## Refactor Summary
Updated `src/validation/validate.js`:
- Replaced direct linear array lookup on every call with cached `Set` lookup.
- Added support for both `Array` and `Set` allowlists.
- Added explicit error for unsupported allowlist types.

Quality updates:
- Added unit tests in `src/validation/validate.unit.test.js`.
- Added benchmark harness: `benchmarks/validate-query.bench.js`.
