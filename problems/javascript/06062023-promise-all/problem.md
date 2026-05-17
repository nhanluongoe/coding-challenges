---
solvedAt: "2023-06-06"
---
# Promise All

- Language: javascript
- Original path: `javascript/060623-promise-all.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement a function with the behavior of `Promise.all`. It receives an iterable containing promises, thenables, or plain values. The returned promise must fulfill only after every input fulfills, preserving the original input order in the result array rather than the completion order. If any input rejects, the returned promise should reject with that first rejection reason. An empty iterable should resolve immediately with an empty array.

## Examples

- `promiseAll([])` -> resolves to `[]`.
- `promiseAll([Promise.resolve(1), 2])` -> resolves to `[1, 2]`.
- `promiseAll([Promise.reject("err")])` -> rejects with `"err"`.

# Solutions

Wrap each input with `Promise.resolve`, store each fulfillment by original index, count pending items, and reject on the first failure.

# Edge cases

- Empty iterable resolves to an empty array.
- Plain values mixed with promises.
- A promise rejects before slower promises settle.
