# Release Notes

## v0.8 - 2026-04-24

### Added
- Created technical debt register: `docs/tech-debt.md`.
- Created performance comparison report: `docs/performance.md`.
- Added benchmark script: `benchmarks/validate-query.bench.js`.
- Added validation unit tests: `src/validation/validate.unit.test.js`.

### Changed
- Refactored `validateQueryParam` to use cached `Set`-based lookups for faster repeated validation.
- Added `bench:validation` npm script for reproducible performance measurement.

### Quality
- Verified test suite passes: `20 passed, 0 failed`.
- Recorded before-vs-after benchmark with `95.95x` speedup in lookup-heavy scenario.

## v0.5 - 2026-04-24

### Added
- Improved auth token validation to correctly preserve hyphenated user IDs.
- Added unit coverage for token validation edge cases.

### Fixed
- Resolved `validateToken` parsing bug where IDs containing hyphens were truncated.

### Quality
- Updated QA planning and defect tracking documents for this release increment.
- Verified test suite passes: `16 passed, 0 failed`.
