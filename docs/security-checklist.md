# Security Checklist – Week 10–11

## Secure Coding Basics

### Input Validation
| Location | Validation Applied | Status |
|----------|--------------------|--------|
| `src/validation/validate.js` – `validateUserInput()` | Sanitize & type-check user fields | ☐ |
| `src/validation/validate.js` – `validateQueryParam()` | Whitelist allowed query parameters | ☐ |

Rules applied:
- Reject empty or null inputs
- Strip HTML/script tags (XSS prevention)
- Enforce maximum length limits
- Type-check all inputs before processing

### Basic Authentication
- [ ] Authentication module added in `src/auth/auth.js`
- [ ] Passwords never stored in plain text
- [ ] Auth tokens validated on protected routes
- [ ] Failed login attempts are logged

### Protected Sensitive Values
- [ ] No secrets or API keys committed to the repo
- [ ] `.env` listed in `.gitignore`
- [ ] Environment variables used for all sensitive config
- [ ] `.env.example` provided as a template (no real values)

### Dependency Audit
- [ ] `npm audit` run — results in `/screenshots/audit-results.txt`
- [ ] All critical vulnerabilities resolved
- [ ] All high vulnerabilities reviewed
- [ ] Audit output screenshot saved to `/screenshots/`

## Running the Audit
```bash
npm audit
npm audit fix
npm audit > screenshots/audit-results.txt
```

**Owner:** Security Lead (Contributor 2)
**Due:** Friday, 8 May 2026
