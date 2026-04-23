# Product Backlog - Lattice v1.0

Source: `siam-prd.pdf` (April 2026)

## Story List

| ID | User Story (Summary) | Priority | Story Points |
|---|---|---|---|
| US-01 | Session authentication for all data access | P0 | 5 |
| US-02 | Role-based access for owner and household member | P0 | 8 |
| US-03 | Base currency settings with FX refresh and stale indicator | P0 | 5 |
| US-04 | Manual cash and wallet asset entry with timestamp history | P1 | 3 |
| US-05 | Manual bank account setup and balance updates | P1 | 5 |
| US-06 | CSV import for bank transactions with saved column mapping | P1 | 8 |
| US-07 | Stock holdings with live price polling and daily P/L | P1 | 8 |
| US-08 | BTC/LTC xpub tracking with derived balance and fiat value | P1 | 13 |
| US-09 | Net worth dashboard with allocation and historical chart | P1 | 8 |
| US-10 | Budget categories, monthly limits, and breach flags | P1 | 8 |
| US-11 | Projection engine with rolling window and scenario modeling | P1 | 13 |
| US-12 | Settings page for user/account config and integration controls | P0 | 5 |
| US-13 | Audit log for balance updates, imports, and budget changes | P0 | 5 |

## Detailed User Stories and Acceptance Criteria

### US-01 - Session authentication for all data access
- User story: As a primary owner, I want to sign in before using the app so that household financial data is protected.
- Priority: P0
- Story points: 5
- Acceptance criteria:
  - Given an unauthenticated visitor, when they open any protected route, then they are redirected to sign-in.
  - Given valid credentials, when sign-in succeeds, then a server-validated session is created.
  - Given an expired or invalid session, when the user makes a protected request, then access is denied and re-authentication is required.

### US-02 - Role-based access for owner and household member
- User story: As a household member, I want limited write access so that I can log transactions without changing core configuration.
- Priority: P0
- Story points: 8
- Acceptance criteria:
  - Given a household member account, when they open settings for budget configuration, xpub management, or API keys, then access is blocked.
  - Given an owner account, when they open protected admin areas, then full access is granted.
  - Given any restricted action attempt, when it is blocked, then the denial is enforced server-side and logged.

### US-03 - Base currency settings with FX refresh and stale indicator
- User story: As a primary owner, I want to choose a base display currency so that all asset values are comparable in one view.
- Priority: P0
- Story points: 5
- Acceptance criteria:
  - Given available ISO 4217 currencies, when the owner selects a base currency, then dashboard totals recompute immediately.
  - Given active usage, when FX rates are refreshed, then refresh occurs at least every 30 minutes.
  - Given FX data older than 2 hours, when values are shown, then a stale-rate indicator is visible.

### US-04 - Manual cash and wallet asset entry with timestamp history
- User story: As a household user, I want to log cash holdings by wallet so that physical funds are included in net worth.
- Priority: P1
- Story points: 3
- Acceptance criteria:
  - Given a wallet name, currency, and balance, when saved, then a cash asset record is created.
  - Given an existing cash wallet, when its balance is updated, then the previous and new values are retained in history.
  - Given a wallet history request, when viewed, then each entry includes timestamp and user.

### US-05 - Manual bank account setup and balance updates
- User story: As a primary owner, I want to add bank accounts manually so that off-platform balances are represented.
- Priority: P1
- Story points: 5
- Acceptance criteria:
  - Given account name, bank, currency, and current balance, when submitted, then the bank account is created.
  - Given an existing account, when current balance is edited, then net worth updates after save.
  - Given multiple accounts in mixed currencies, when displayed, then each account shows native and converted values.

### US-06 - CSV import for bank transactions with saved column mapping
- User story: As a primary owner, I want to import bank CSV files so that transaction history is loaded quickly.
- Priority: P1
- Story points: 8
- Acceptance criteria:
  - Given a new CSV format, when imported, then the user maps date, description, amount, and balance columns.
  - Given the same account on future imports, when uploading another file, then prior mapping is reused by default.
  - Given a completed import, when viewing the ledger, then imported transactions appear with source metadata.

### US-07 - Stock holdings with live price polling and daily P/L
- User story: As a primary owner, I want to track stock positions live so that I can see current value and daily performance.
- Priority: P1
- Story points: 8
- Acceptance criteria:
  - Given a valid ticker and shares held, when saved, then a stock position is created.
  - Given market hours, when polling runs, then prices refresh on the configured interval (default 5 minutes).
  - Given updated prices, when displayed, then position value, daily P/L, and percent change are shown.

### US-08 - BTC/LTC xpub tracking with derived balance and fiat value
- User story: As a primary owner, I want to add xpub keys for BTC/LTC so that crypto balances are tracked without exposing private keys.
- Priority: P1
- Story points: 13
- Acceptance criteria:
  - Given a valid BTC or LTC xpub, when submitted, then addresses are derived and balances are fetched.
  - Given saved xpub data, when stored, then it is encrypted at rest and no private key fields are accepted.
  - Given refresh interval settings, when elapsed (default 15 minutes), then crypto balances and fiat conversion update.

### US-09 - Net worth dashboard with allocation and historical chart
- User story: As a household user, I want a single dashboard of net worth so that I can understand my financial position quickly.
- Priority: P1
- Story points: 8
- Acceptance criteria:
  - Given existing asset data, when opening the dashboard, then total net worth is displayed with class breakdown.
  - Given asset class totals, when rendered, then an allocation chart shows cash, bank, crypto, and stocks.
  - Given selected date range (7d, 30d, 90d, 1y, custom), when changed, then historical trend updates.

### US-10 - Budget categories, monthly limits, and breach flags
- User story: As a primary owner, I want spend categories and limits so that overspending is visible early.
- Priority: P1
- Story points: 8
- Acceptance criteria:
  - Given custom category definitions, when saved, then monthly limits are stored per category.
  - Given new transactions, when categorized, then each category updates current spend vs limit.
  - Given a category exceeds its limit, when threshold is crossed, then breach status is highlighted immediately.

### US-11 - Projection engine with rolling window and scenario modeling
- User story: As a primary owner, I want rolling projections so that I can estimate future savings and net worth.
- Priority: P1
- Story points: 13
- Acceptance criteria:
  - Given a projection window of at least one month, when configured, then projected income, spend, savings, and net worth are computed.
  - Given burn rate settings, when trailing-week window changes, then projection outputs recalculate.
  - Given scenario adjustments to income or spend, when modified, then new outcomes render without data mutation.

### US-12 - Settings page for user/account config and integration controls
- User story: As a primary owner, I want a centralized settings area so that I can manage configuration in one place.
- Priority: P0
- Story points: 5
- Acceptance criteria:
  - Given owner access, when navigating to `/settings`, then currency config and integration controls are available.
  - Given household member access, when navigating to `/settings`, then restricted sections are not editable.
  - Given settings updates, when saved, then changes are persisted and reflected in dependent screens.

### US-13 - Audit log for balance updates, imports, and budget changes
- User story: As a primary owner, I want a change history with actor and timestamp so that financial edits are traceable.
- Priority: P0
- Story points: 5
- Acceptance criteria:
  - Given any balance update, CSV import, or budget change, when committed, then an audit log entry is created.
  - Given an audit log record, when displayed, then it includes event type, actor, timestamp, and affected entity.
  - Given role restrictions, when a household member views logs, then visibility follows configured permissions.
