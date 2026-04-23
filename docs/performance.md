# Performance Comparison

Date: 2026-04-24  
Project: Software Implementation Management (SIAM)

## Scope
Measure performance impact of refactoring `validateQueryParam` from repeated array scans to cached `Set` lookups.

## Benchmark Setup
- Command: `npm run bench:validation`
- Script: `benchmarks/validate-query.bench.js`
- Dataset:
  - Allowlist size: `10,000`
  - Total validations: `500,000`
  - Query mix: ~50% allowlisted, ~50% disallowed
- Environment: local Node.js runtime

## Before vs After
- Before (legacy `Array.includes()` path):
  - `5930.71 ms` total
  - `84,307 ops/s`
- After (refactored cached `Set.has()` path):
  - `61.81 ms` total
  - `8,089,091 ops/s`

## Result
- Measured speedup: **95.95x**
- Outcome: refactor significantly reduces validation cost for repeated lookups with large allowlists.

## Validation
- Tests passed after refactor:
  - `20 passed, 0 failed` via `npm test`.
