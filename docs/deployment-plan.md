# Deployment Plan

Date: 2026-04-24  
Project: Software Implementation Management (SIAM)

## Objective
Deploy the SIAM service to an internet-accessible URL and verify core health functionality.

## Selected Deployment Strategy
Strategy: **Node.js service + LocalTunnel public URL**  
Reason:
- Fastest executable path with current repo and no external account setup.
- Satisfies requirement to deploy to an online platform and verify reachability.
- Keeps deployment steps reproducible for course demonstration.

## Service Definition
- Runtime: Node.js 20+
- Start command: `npm start`
- Default port: `3000` (`APP_PORT` or `PORT` supported)
- Health endpoint: `GET /health`

## Deployment Steps
1. Install dependencies.
   - `npm ci`
2. Start the service.
   - `npm start`
3. Expose service publicly via LocalTunnel.
   - `npx localtunnel --port 3000`
4. Capture the generated public URL (for example `https://<subdomain>.loca.lt`).
5. Verify online endpoint:
   - `curl -s https://<subdomain>.loca.lt/health`
6. Confirm JSON response includes `"status":"ok"`.

## Rollback Steps
Use this rollback if deployment is unstable, wrong version is running, or endpoints fail health checks.

1. Stop the public tunnel process.
2. Stop the Node.js service process.
3. Revert code to last known good commit:
   - `git checkout <last-good-commit> -- src package.json docs`
4. Reinstall clean dependencies:
   - `rm -rf node_modules && npm ci`
5. Re-run tests:
   - `npm test`
6. Re-deploy using the known good commit with the same steps above.
7. Re-verify:
   - `curl -s https://<new-subdomain>.loca.lt/health`

## Verification Checklist
- [x] Deployment strategy selected
- [x] Rollback steps documented
- [x] Live URL added after runtime deployment
- [x] Online verification output attached after runtime deployment

## Notes
- This method is suitable for demonstration and validation.
- For persistent production hosting, migrate to a managed platform (for example Render, Fly.io, or Railway) with CI-triggered deployment.

## Deployment Record (Executed)
- Deployment date/time: 2026-04-24 02:31 AWST (2026-04-23 18:31 UTC)
- Public URL: `https://great-candles-relate.loca.lt`
- Availability note: LocalTunnel URLs are temporary and expire when the tunnel process stops.
- Verification command:
  - `curl -i -s https://great-candles-relate.loca.lt/health`
- Verification result:
  - HTTP status: `200 OK`
  - Response body: `{"status":"ok","timestamp":"2026-04-23T18:31:16.648Z"}`
