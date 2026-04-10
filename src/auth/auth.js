/**
 * Basic Authentication Module
 * Week 10-11 – Secure Coding Basics
 *
 * NOTE: In production, use bcrypt for password hashing.
 * Install with: npm install bcryptjs
 */

// const bcrypt = require('bcryptjs'); // Uncomment when bcrypt is installed

/**
 * Simulates verifying a user's credentials.
 * Replace this stub with a real database lookup.
 * @param {string} username
 * @param {string} password
 * @returns {{ authenticated: boolean, user?: object, error?: string }}
 */
function authenticate(username, password) {
  if (!username || !password) {
    return { authenticated: false, error: 'Username and password are required.' };
  }

  // TODO: Replace with real DB lookup + bcrypt.compare()
  // const user = db.findUserByUsername(username);
  // const match = await bcrypt.compare(password, user.hashedPassword);

  console.warn('[Auth] Stub authenticate() called — connect to a real user store.');
  return { authenticated: false, error: 'Authentication not yet connected to a user store.' };
}

/**
 * Generates a simple token placeholder.
 * Replace with JWT signing in production.
 * @param {string} userId
 * @returns {string}
 */
function generateToken(userId) {
  // TODO: Replace with jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' })
  return `stub-token-for-${userId}-${Date.now()}`;
}

/**
 * Validates an incoming token.
 * Replace with JWT verification in production.
 * @param {string} token
 * @returns {{ valid: boolean, userId?: string }}
 */
function validateToken(token) {
  if (!token || !token.startsWith('stub-token-for-')) {
    return { valid: false };
  }
  return { valid: true, userId: token.split('-')[3] };
}

module.exports = { authenticate, generateToken, validateToken };
