const { authenticate, generateToken, validateToken } = require('./auth');

describe('auth unit tests', () => {
  test('authenticate rejects missing username', () => {
    const result = authenticate('', 'password');
    expect(result).toEqual({
      authenticated: false,
      error: 'Username and password are required.',
    });
  });

  test('authenticate rejects missing password', () => {
    const result = authenticate('alice', '');
    expect(result).toEqual({
      authenticated: false,
      error: 'Username and password are required.',
    });
  });

  test('generateToken returns token with prefix', () => {
    const token = generateToken('user123');
    expect(token.startsWith('stub-token-for-')).toBe(true);
  });

  test('validateToken rejects non-stub tokens', () => {
    expect(validateToken('invalid-token')).toEqual({ valid: false });
  });

  test('validateToken extracts exact userId for simple id', () => {
    const token = generateToken('user123');
    const result = validateToken(token);

    expect(result.valid).toBe(true);
    expect(result.userId).toBe('user123');
  });

  test('validateToken extracts full userId when it contains hyphens', () => {
    const token = generateToken('user-42-alpha');
    const result = validateToken(token);

    expect(result.valid).toBe(true);
    expect(result.userId).toBe('user-42-alpha');
  });
});
