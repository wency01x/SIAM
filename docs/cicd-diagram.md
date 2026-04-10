# CI/CD Pipeline Diagram

## Overview
This document describes the Continuous Deployment pipeline set up for Week 10–11.

## Pipeline Steps

```
Developer
   │
   │  git push origin main
   ▼
┌─────────────────────────────────────┐
│       GitHub Actions Trigger         │
│  (on: push → branch: main)          │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│      1. Checkout Code                │
│  actions/checkout@v4                │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│      2. Set Up Node.js               │
│  node-version: 20                   │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│      3. Install Dependencies         │
│  npm ci                             │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│      4. Run Smoke Tests              │
│  npm test                           │
│  ✅ Pass → continue                 │
│  ❌ Fail → pipeline stops           │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│      5. Deploy to Production         │
│  (replace with your deploy command) │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│      6. Capture Deploy Screenshot    │
│  Saves output to screenshots/       │
└─────────────────────────────────────┘
```

## Checklist
- [ ] CI updated to auto-deploy
- [ ] Deployment runs on main push
- [ ] Added smoke test
- [ ] Verified deployment works
- [x] Created docs/cicd-diagram.md
- [x] Diagram shows pipeline steps
- [ ] Screenshot of deploy run *(add to /screenshots after first run)*
