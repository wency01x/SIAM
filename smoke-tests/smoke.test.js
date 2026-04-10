/**
 * Smoke Tests – Week 10-11
 * Verifies core modules load and basic functions behave correctly post-deploy.
 */

const { validateUserInput, validateQueryParam } = require('../src/validation/validate');
const { authenticate, generateToken, validateToken } = require('../src/auth/auth');

describe('Input Validation – Smoke Tests', () => {
  test('rejects empty input', () => {
    const result = validateUserInput('');
    expect(result.valid).toBe(false);
  });

  test('accepts valid string input', () => {
    const result = validateUserInput('Hello World');
    expect(result.valid).toBe(true);
    expect(result.sanitized).toBe('Hello World');
  });

  test('strips script tags (XSS prevention)', () => {
    const result = validateUserInput('<script>alert("xss")</script>Safe text');
    expect(result.valid).toBe(true);
    expect(result.sanitized).not.toContain('<script>');
  });

  test('rejects input exceeding max length', () => {
    const result = validateUserInput('a'.repeat(300), { maxLength: 255 });
    expect(result.valid).toBe(false);
  });

  test('rejects unlisted query params', () => {
    const result = validateQueryParam('drop', ['search', 'sort', 'page']);
    expect(result.valid).toBe(false);
  });

  test('accepts allowlisted query params', () => {
    const result = validateQueryParam('search', ['search', 'sort', 'page']);
    expect(result.valid).toBe(true);
  });
});

describe('Auth Module – Smoke Tests', () => {
  test('rejects missing credentials', () => {
    const result = authenticate('', '');
    expect(result.authenticated).toBe(false);
  });

  test('generateToken returns a string', () => {
    const token = generateToken('user-123');
    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(0);
  });

  test('validateToken rejects invalid token', () => {
    const result = validateToken('bad-token');
    expect(result.valid).toBe(false);
  });

  test('validateToken accepts stub token', () => {
    const token = generateToken('user-42');
    const result = validateToken(token);
    expect(result.valid).toBe(true);
  });
});
