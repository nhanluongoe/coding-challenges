---
solvedAt: "2024-07-01"
---
# Promise Timeout

- Language: javascript
- Original path: `javascript/010724-promise-timeout.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Wrap a promise so it rejects or times out if it does not settle within the requested duration.

## Examples

- `promiseTimeout(Promise.resolve(1), 100)` -> resolves to `1`.
- A promise that never settles with duration `10` -> rejects after the timeout.
- A rejecting promise before the timeout -> rejects with the original reason.

# Solutions

Race the original promise against a timer and clear the timer once either side settles.

# Edge cases

- Promise settles before the timer.
- Timer fires first.
- Original promise rejects.
