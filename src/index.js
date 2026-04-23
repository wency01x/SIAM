const http = require('http');
const { URL } = require('url');
const { validateUserInput } = require('./validation/validate');
const { generateToken, validateToken } = require('./auth/auth');

const DEFAULT_PORT = 3000;
const PORT = Number(process.env.APP_PORT || process.env.PORT || DEFAULT_PORT);
const MAX_BODY_BYTES = 1024 * 16;

function json(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';

    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > MAX_BODY_BYTES) {
        reject(new Error('Payload too large.'));
      }
    });

    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (_error) {
        reject(new Error('Invalid JSON payload.'));
      }
    });

    req.on('error', () => reject(new Error('Failed to read request body.')));
  });
}

function createServer() {
  return http.createServer(async (req, res) => {
    const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

    if (req.method === 'GET' && requestUrl.pathname === '/') {
      json(res, 200, {
        service: 'SIAM',
        status: 'online',
        endpoints: ['GET /health', 'POST /validate', 'GET /token?userId=<id>', 'GET /token/validate?token=<token>']
      });
      return;
    }

    if (req.method === 'GET' && requestUrl.pathname === '/health') {
      json(res, 200, {
        status: 'ok',
        timestamp: new Date().toISOString()
      });
      return;
    }

    if (req.method === 'POST' && requestUrl.pathname === '/validate') {
      try {
        const body = await readJsonBody(req);
        const result = validateUserInput(body.input, { maxLength: body.maxLength });
        json(res, result.valid ? 200 : 400, result);
      } catch (error) {
        json(res, 400, { valid: false, error: error.message });
      }
      return;
    }

    if (req.method === 'GET' && requestUrl.pathname === '/token') {
      const userId = requestUrl.searchParams.get('userId');
      if (!userId) {
        json(res, 400, { valid: false, error: 'Missing userId query parameter.' });
        return;
      }

      json(res, 200, { token: generateToken(userId) });
      return;
    }

    if (req.method === 'GET' && requestUrl.pathname === '/token/validate') {
      const token = requestUrl.searchParams.get('token');
      json(res, 200, validateToken(token));
      return;
    }

    json(res, 404, { error: 'Not Found' });
  });
}

if (require.main === module) {
  const server = createServer();
  server.listen(PORT, () => {
    console.log(`SIAM service listening on port ${PORT}`);
  });
}

module.exports = { createServer };
