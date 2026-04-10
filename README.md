# Software Implementation Management

> A course repository tracking implementation milestones across Weeks 10–17.

## Contributors

| Name | Role |
|------|------|
| Contributor 1 | CI/CD & Deployment |
| Contributor 2 | Security & Validation |
| Contributor 3 | Documentation |
| Contributor 4 | Testing & QA |

---

## Weekly Milestones

### Week 10–11 (Current)
| Task | Status |
|------|--------|
| CI/CD Upgrade (Continuous Deployment + Smoke Tests) | 🔄 In Progress |
| Software Security (Secure Coding Basics) | 🔄 In Progress |

### Week 12
- Ethical, Legal, IP, Professional Issues

### Week 13
- KPIs, Metrics, Monitoring, Data-driven Decisions

### Week 14–17
- Cost–Benefit + Cost Estimation Models
- DevOps + Cloud Integration + Emerging Trends (Capstone)

---

## Project Structure

```
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
├── screenshots/                # Deploy run & audit screenshots go here
│   └── .gitkeep
└── README.md
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/<your-org>/sim-repo.git
cd sim-repo

# Install dependencies
npm install

# Run smoke tests
npm test

# Trigger deployment (push to main)
git push origin main
```

---

## Documentation
- [CI/CD Diagram](docs/cicd-diagram.md)
- [Security Checklist](docs/security-checklist.md)
- [Risk Register](docs/risk-register.md)

---

**Due:** Friday, 8 May 2026
