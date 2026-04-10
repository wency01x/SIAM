/**
 * Input Validation Module
 * Week 10-11 – Secure Coding Basics
 */

/**
 * Validates and sanitizes a general user input string.
 * @param {string} input - Raw user input
 * @param {object} options - Validation options
 * @param {number} options.maxLength - Maximum allowed length (default: 255)
 * @returns {{ valid: boolean, sanitized: string, error?: string }}
 */
function validateUserInput(input, options = {}) {
  const maxLength = options.maxLength || 255;

  if (input === null || input === undefined || input === '') {
    return { valid: false, sanitized: '', error: 'Input must not be empty.' };
  }

  if (typeof input !== 'string') {
    return { valid: false, sanitized: '', error: 'Input must be a string.' };
  }

  if (input.length > maxLength) {
    return { valid: false, sanitized: '', error: `Input exceeds max length of ${maxLength}.` };
  }

  // Strip HTML/script tags to prevent XSS
  const sanitized = input
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();

  return { valid: true, sanitized };
}

/**
 * Validates a query parameter against an allowlist.
 * @param {string} param - The query parameter name
 * @param {string[]} allowlist - Allowed parameter names
 * @returns {{ valid: boolean, error?: string }}
 */
function validateQueryParam(param, allowlist = []) {
  if (!allowlist.includes(param)) {
    return { valid: false, error: `Query parameter '${param}' is not allowed.` };
  }
  return { valid: true };
}

module.exports = { validateUserInput, validateQueryParam };
