# Security Risk Register – Week 10–11

| # | Risk | Likelihood | Impact | Mitigation | Owner | Status |
|---|------|-----------|--------|------------|-------|--------|
| 1 | Unsanitized user input (XSS) | High | High | Input validation in `validate.js` | Contributor 2 | ☐ Open |
| 2 | SQL/NoSQL injection | Medium | High | Parameterized queries / ORM | Contributor 2 | ☐ Open |
| 3 | Hardcoded secrets in code | Medium | Critical | `.env` + `.gitignore` policy | All | ☐ Open |
| 4 | Outdated dependencies with CVEs | High | Medium | `npm audit` + regular updates | Contributor 4 | ☐ Open |
| 5 | Weak or missing authentication | Medium | High | Auth module + token validation | Contributor 1 | ☐ Open |
| 6 | Sensitive data exposed in logs | Low | Medium | Redact PII before logging | Contributor 3 | ☐ Open |

*This register will be updated each week as new risks are identified.*
