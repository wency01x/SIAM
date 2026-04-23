# SIAM/Lattice Risk Register

Reference: `siam-prd.md` (v1.0, April 2026)

Scoring model:
- Likelihood: `1 (Rare)` to `5 (Almost Certain)`
- Impact: `1 (Low)` to `5 (Critical)`
- Risk Score: `Likelihood x Impact` (max `25`)

| # | Risk | Likelihood (1-5) | Impact (1-5) | Risk Score | Mitigation Plan | Risk Owner |
|---|------|------------------|--------------|------------|-----------------|------------|
| 1 | xpub or derived address data is exposed through logs or insecure storage. | 3 | 5 | 15 | Encrypt xpub at rest, redact wallet identifiers in logs, and add secure-secret scanning in CI. | Contributor 2 (Security & Validation) |
| 2 | CSV import mapping errors corrupt bank transaction history and balances. | 4 | 4 | 16 | Add strict schema validation, preview + confirmation step, and reversible import with rollback. | Contributor 2 (Security & Validation) |
| 3 | Stock price provider outages/rate limits (Yahoo/Polygon) cause stale valuations. | 4 | 3 | 12 | Cache last known values with timestamp, add provider failover, and surface staleness warning in UI. | Contributor 1 (CI/CD & Deployment) |
| 4 | Crypto balance API changes (BlockCypher/Blockstream) break xpub sync. | 3 | 4 | 12 | Implement adapter layer, contract tests against API responses, and health-check alerts for sync failures. | Contributor 1 (CI/CD & Deployment) |
| 5 | FX rate feed failure or delayed refresh distorts net worth in base currency. | 3 | 3 | 9 | Add secondary FX provider fallback, cache with TTL, and display conversion timestamp in dashboard. | Contributor 4 (Testing & QA) |
| 6 | AI fallback to Gemini leaks sensitive household finance data unexpectedly. | 3 | 5 | 15 | Require explicit user consent for cloud fallback, mask sensitive fields before prompt send, and log every fallback event. | Contributor 2 (Security & Validation) |
| 7 | Role-based access control gaps let household members change protected budget/asset settings. | 3 | 5 | 15 | Enforce server-side authorization checks per route/action and add negative permission tests for member role. | Contributor 2 (Security & Validation) |
| 8 | Projection model errors (burn-rate/scenario logic) generate misleading financial forecasts. | 3 | 4 | 12 | Add deterministic unit tests with fixture datasets, publish assumptions in UI, and compare against baseline calculations. | Contributor 4 (Testing & QA) |
| 9 | Self-hosted storage failure (SQLite/Postgres decision) leads to irreversible data loss. | 2 | 5 | 10 | Implement automated encrypted backups, restore drills, and startup integrity checks for financial records. | Contributor 1 (CI/CD & Deployment) |
| 10 | Gemini API key handling is insecure (owner-provided key exposure in client or repo). | 3 | 5 | 15 | Store keys only in secure server-side secrets, block key values in logs, and enforce pre-commit secret detection. | Contributor 2 (Security & Validation) |

Review cadence:
- Re-score risks at each milestone (`M1` to `M7`) and after major dependency/provider changes.
