const { performance } = require('perf_hooks');
const { validateQueryParam: validateQueryParamRefactored } = require('../src/validation/validate');

function validateQueryParamLegacy(param, allowlist = []) {
  if (!allowlist.includes(param)) {
    return { valid: false, error: `Query parameter '${param}' is not allowed.` };
  }
  return { valid: true };
}

function runBenchmark(fn, label, allowlist, queries) {
  const start = performance.now();
  let validCount = 0;

  for (const query of queries) {
    if (fn(query, allowlist).valid) {
      validCount += 1;
    }
  }

  const durationMs = performance.now() - start;
  return {
    label,
    durationMs,
    opsPerSec: (queries.length / durationMs) * 1000,
    validCount
  };
}

function main() {
  const allowlist = Array.from({ length: 10000 }, (_, i) => `param-${i}`);
  const queries = [];
  const totalQueries = 500000;

  for (let i = 0; i < totalQueries; i += 1) {
    if (i % 2 === 0) {
      queries.push(`param-${i % allowlist.length}`);
    } else {
      queries.push(`unknown-${i}`);
    }
  }

  // Warm-up run to reduce JIT skew.
  runBenchmark(validateQueryParamLegacy, 'legacy-warmup', allowlist, queries.slice(0, 5000));
  runBenchmark(validateQueryParamRefactored, 'refactored-warmup', allowlist, queries.slice(0, 5000));

  const legacy = runBenchmark(validateQueryParamLegacy, 'legacy', allowlist, queries);
  const refactored = runBenchmark(validateQueryParamRefactored, 'refactored', allowlist, queries);
  const speedup = legacy.durationMs / refactored.durationMs;

  console.log('validateQueryParam benchmark');
  console.log(`queries: ${totalQueries}`);
  console.log(`allowlist size: ${allowlist.length}`);
  console.log('');
  console.log(`legacy      : ${legacy.durationMs.toFixed(2)} ms (${legacy.opsPerSec.toFixed(0)} ops/s)`);
  console.log(`refactored  : ${refactored.durationMs.toFixed(2)} ms (${refactored.opsPerSec.toFixed(0)} ops/s)`);
  console.log(`speedup     : ${speedup.toFixed(2)}x`);
}

main();
