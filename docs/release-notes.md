# Release Notes

## v0.5 - 2026-04-24

### Added
- Improved auth token validation to correctly preserve hyphenated user IDs.
- Added unit coverage for token validation edge cases.

### Fixed
- Resolved `validateToken` parsing bug where IDs containing hyphens were truncated.

### Quality
- Updated QA planning and defect tracking documents for this release increment.
- Verified test suite passes: `16 passed, 0 failed`.
