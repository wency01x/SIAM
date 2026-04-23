const { validateUserInput, validateQueryParam } = require('./validate');

describe('validation unit tests', () => {
  test('validateUserInput rejects non-string input', () => {
    expect(validateUserInput(123)).toEqual({
      valid: false,
      sanitized: '',
      error: 'Input must be a string.'
    });
  });

  test('validateQueryParam accepts allowed value from array allowlist', () => {
    expect(validateQueryParam('search', ['search', 'sort', 'page'])).toEqual({ valid: true });
  });

  test('validateQueryParam accepts allowed value from Set allowlist', () => {
    const allowlist = new Set(['search', 'sort', 'page']);
    expect(validateQueryParam('sort', allowlist)).toEqual({ valid: true });
  });

  test('validateQueryParam rejects unsupported allowlist type', () => {
    expect(validateQueryParam('search', 'search,sort,page')).toEqual({
      valid: false,
      error: 'Allowlist must be an array or Set.'
    });
  });
});
