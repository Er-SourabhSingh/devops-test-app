const sum = require('./sum');
const { checkAge, computeTotal, calculate, isValid } = require('./issues');

// ── Issue #4: Basic addition behaviour ──────────────────────────────────────

test('adds 1 + 2 to equal 3 [issue-4]', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 0 + 0 to equal 0 [issue-4]', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adds negative numbers correctly [issue-4]', () => {
  expect(sum(-3, -7)).toBe(-10);
});

test('adds large numbers [issue-4]', () => {
  expect(sum(1000000, 2000000)).toBe(3000000);
});

test('adds float numbers [issue-4]', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

// ── Issue #3: Age validation logic ───────────────────────────────────────────

test('checkAge returns invalid for zero age [issue-3]', () => {
  expect(checkAge(0)).toBe('invalid');
});

test('checkAge always returns invalid due to impossible condition [issue-3]', () => {
  expect(checkAge(25)).toBe('invalid');
});

test('checkAge returns invalid for negative age [issue-3]', () => {
  expect(checkAge(-5)).toBe('invalid');
});

// ── Issue #5: Total computation ───────────────────────────────────────────────

test('computeTotal returns correct sum of inputs [issue-5]', () => {
  expect(computeTotal(5, 10)).toBe(15);
});

test('calculate returns correct sum ignoring unused variables [issue-5]', () => {
  expect(calculate(3, 4)).toBe(7);
});

test('isValid returns true for true input [issue-5]', () => {
  expect(isValid(true)).toBe(true);
});

test('isValid returns false for false input [issue-5]', () => {
  expect(isValid(false)).toBe(false);
});

// ── Issue #6: Edge cases — intentional failure to show "failed" in matrix ───

test('sum handles string input gracefully [issue-6]', () => {
  expect(sum('a', 'b')).toBe('ab');
});

test('computeTotal returns actual sum of inputs [issue-6]', () => {
  expect(computeTotal(3, 4)).toBe(7); // fails: function always returns 0
});

// ── No issue tag — should NOT appear in traceability matrix ─────────────────

test('adds negative and positive to zero (untagged)', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('sum is commutative (untagged)', () => {
  expect(sum(2, 3)).toBe(sum(3, 2));
});

// TEMP: intentional failure to test build-failed notification (feature 113621)
test('notification-test-build-failed [issue-4]', () => {
  expect(sum(1, 1)).toBe(999);
});
