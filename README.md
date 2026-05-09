# ⚙️ Software Implementation and Management (SIAM)

[![CI/CD Pipeline](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![Node.js](https://img.shields.io/badge/Node.js-v20+-339933.svg?logo=node.js)](#)
[![Jest](https://img.shields.io/badge/Testing-Jest-C21325.svg?logo=jest)](#)
[![Agile](https://img.shields.io/badge/Methodology-Agile_Scrum-blue.svg)](#)

> A course repository tracking enterprise-grade implementation milestones, CI/CD infrastructure, and system security practices across Weeks 10–17.

---
## 👥 Members
1. Babuyo, Harvie Lorenz C.
2. Casiño, Wency G.
3. Sisi, Kent Jasper C.
4. Sorongon, Charles Juvanne

---
## 🛠️ Contributors

| Name | Role (Phase 3) |
| :--- | :--- |
| **Babuyo** | CI/CD & Deployment |
| **Casiño** | Security & Validation |
| **Sisi** | Documentation |
| **Sorongon** | Testing & QA |

---

## 📅 Weekly Milestones

### Phase 1 & 2: Planning, QA, & SCM (Completed)
| Week | Task / Deliverable | Status |
| :--- | :--- | :--- |
| **Week 2** | Project Planning (Backlog, Sprint 1 Plan, Roles) | ✅ Completed |
| **Week 3** | Risk Management (Risk Register, PR Templates) | ✅ Completed |
| **Week 4** | Quality Assurance (Jest Framework, Defect Log, Bug Fix PR) | ✅ Completed |
| **Week 5** | Git Workflow (SCM Notes, Merge Conflict Resolution, `v0.5` Release) | ✅ Completed |
| **Week 7** | Initial Deployment (Deployment/Support Plan, Live Dev Environment) | ✅ Completed |
| **Week 8** | Maintenance & Refactoring (Tech Debt, Performance, `v0.8` Release) | ✅ Completed |

### Phase 3: Automation & Security (Completed)
| Week | Task / Deliverable | Status |
| :--- | :--- | :--- |
| **Week 10** | CI/CD Upgrade (Continuous Deployment Pipeline + Smoke Tests) | ✅ Completed |
| **Week 11** | Software Security (Input Validation, JWT Auth, Dependency Audit) | ✅ Completed |

### Phase 4: Enterprise Compliance & Final Release (Upcoming)
| Week | Task / Deliverable | Status |
| :--- | :--- | :--- |
| **Week 12** | Ethical, Legal, IP, & Professional Issues (Privacy Notes, Licenses) | ✅ Completed |
| **Week 13** | System Metrics (KPIs, Monitoring, Data-driven Decisions) | ⏳ Pending |
| **Week 14** | Business Value (Cost-Benefit Analysis, Cost Estimation Models) | ⏳ Pending |
| **Week 15** | Capstone Delivery (DevOps Cloud Integration, `v1.0` Final Tag, Demo) | ⏳ Pending |

---

## 🏗️ Project Structure

```text
sim-repo/
├── .github/
│   └── workflows/
│       ├── deploy.yml          # CI/CD auto-deploy pipeline
│       └── smoke-test.yml      # Smoke test workflow
├── docs/
│   ├── cicd-diagram.md         # CI/CD pipeline diagram & steps
│   ├── security-checklist.md   # Security checklist
│   └── risk-register.md        # Security risk register
├── src/
│   ├── auth/                   # Basic authentication module
│   │   └── auth.js
│   └── validation/             # Input validation module
│       └── validate.js
├── smoke-tests/
│   └── smoke.test.js           # Smoke tests for deployment
├── screenshots/                # Deploy run & audit screenshots
│   └── .gitkeep
└── README.md
```
---

## 💻 Tech Stack
Runtime: Node.js v20
Testing: Jest v29
CI/CD: GitHub Actions
Version Control: Git

---
## 🚀 Getting Started
```text
# 1. Clone the repository
git clone [https://github.com/wency01x/siam.git](https://github.com/wency01x/siam.git)
cd siam

# 2. Install dependencies
npm ci

# 3. Run security and validation tests locally
npm test

# 4. Trigger deployment
npm start
```
---

**Next Submission Due:** Friday, 8 May 2026

<br>

<div align="center">
  &copy; 2026 Team KEMA. All rights reserved.
</div>
