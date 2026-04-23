# Lattice: Asset Tracker & Budget Intelligence Platform
**Product Requirements Document** | v1.0 | April 2026

---

## 1. Product Overview
Lattice is a private, household-scale asset tracker and budget intelligence platform. It consolidates net worth across cash, bank accounts, crypto (via xpub), and stocks into a single real-time dashboard. An embedded AI avatar — blunt, data-driven, no fluff — surfaces insights on spending patterns, allocation drift, and projected financial health across a configurable rolling window.

Lattice is built for personal use with shared household access. All data is owner-controlled.

---

## 2. Users & Personas

| Persona | Role | Key Needs |
| :--- | :--- | :--- |
| **Primary Owner** | Full admin access | Full dashboard, AI insights, budget configuration, asset management, CSV import, xpub setup |
| **Household Member** | Read + limited write | View net worth, log manual transactions, see spend limits — no budget/asset config access |

---

## 3. Core Features

### 3.1 Asset Management
* **Cash / Wallet**: Manual entry for holdings; history logged with timestamps.
* **Bank Accounts**: Manual setup or CSV import; column mapping saved per account.
* **Crypto (BTC & LTC via xpub)**:
    * Enter xpub key; system derives addresses and fetches balances via public APIs.
    * No private keys stored; read-only by design.
* **Stocks**: Live price polling (5-min default) via ticker search.

### 3.2 AI Avatar (Name: Tess)
* **Personality**: Blunt analyst — states facts, flags problems, no "encouragement theater."
* **Technology**: Runs locally via **window.ai**; falls back to **Gemini API** if local inference is unavailable.
* **Capabilities**: Read access to dashboard state; generates weekly digests, spend alerts, and allocation drift warnings.

### 3.3 Projections
* **Rolling Window**: User-defined window (min 1 month).
* **Burn Rate**: Derived from trailing N-week average (default 4 weeks).
* **Scenario Modeling**: Adjust projected income/spend to see future net worth impact.

---

## 4. Information Architecture

| Section | Route | Description |
| :--- | :--- | :--- |
| **Dashboard** | `/` | Net worth summary, allocation chart, AI avatar digest |
| **Assets** | `/assets` | All asset classes with drill-down per type |
| **Budget** | `/budget` | Income setup, spend categories, limits |
| **Projections** | `/projections` | Rolling window config, scenario modeling |
| **AI Insights** | `/insights` | Full AI avatar chat interface + history |

---

## 5. Data Sources & External APIs

| Data Type | Source / Approach |
| :--- | :--- |
| **Stock Prices** | Yahoo Finance (unofficial) or Polygon.io |
| **Crypto Balances** | BlockCypher or Blockstream API (xpub derivation) |
| **FX Rates** | Frankfurter.app or Open Exchange Rates |
| **AI (Primary)** | Chrome Built-in AI (window.ai) |
| **AI (Fallback)** | **Gemini API (Google)** |

---

## 6. Suggested Build Milestones

* **M1 — Foundation**: Project scaffold, auth, multi-currency config.
* **M2 — Assets**: Cash, bank accounts (manual + CSV), stocks.
* **M3 — Crypto**: xpub integration (BTC/LTC) and balance derivation.
* **M4 — Budget**: Income setup, spend limits, transaction ledger.
* **M5 — Projections**: Rolling window engine and burn rate calc.
* **M6 — AI Avatar**: **window.ai** integration with **Gemini fallback**.
* **M7 — Polish**: Mobile responsive UI and performance tuning.

---

## 7. Open Questions
* **Backend**: Self-hosted (SQLite/Postgres) vs. Supabase?
* **Frontend**: Next.js (existing stack) vs. pure React SPA?
* **Gemini API**: Owner-provided key in settings or bundled?
* **xpub Storage**: Local browser storage vs. encrypted server-side?
