---
solvedAt: "2023-06-12"
---
# Promise Any

- Language: javascript
- Original path: `javascript/120623-promise-any.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement a function with the behavior of `Promise.any`. It receives an iterable of promises or values and returns a promise that fulfills as soon as the first input fulfills. Rejections should be collected while there are still pending inputs, because one later fulfillment is enough to succeed. Only when every input rejects should the returned promise reject. Plain values count as already fulfilled values.

## Examples

- `promiseAny([Promise.resolve("ok")])` -> resolves to `"ok"`.
- `promiseAny([Promise.reject("a"), Promise.resolve("b")])` -> resolves to `"b"`.
- `promiseAny([])` -> rejects because no input can fulfill.

# Solutions

Wrap each input as a promise, resolve immediately on fulfillment, and collect rejection reasons until all inputs fail.

# Edge cases

- Empty iterable.
- All promises reject.
- Plain values mixed with promises.
