function sum(a, b) {
  return a + b;
}

// dark mode preference helper — auth API redesigned
function isDarkMode() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

module.exports = sum;
// fix: null pointer patch
// fix: typo patch
// feat: add user profile settings page
// fix: handle edge case in sum validation
// feat: add export report feature
// feat!: breaking change - new payment API
// chore: update dependencies
// docs: update README
// style: fix indentation
// test: add unit tests
// refactor: extract helper function
// perf: improve query performance
// perf: cache expensive calculation

// ET-2 test commit placeholder
// chore-test-1782395274
// docs-test
// style-test
// test-test
// notification-test-113621
// teams-slack-build-test-113621
// teams-slack-build-test2-113621
// code-review-test-113621
