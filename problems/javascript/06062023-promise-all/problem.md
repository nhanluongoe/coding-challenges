---
solvedAt: "2023-06-06"
---
# Promise All

- Language: javascript
- Original path: `javascript/060623-promise-all.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement `Promise.all`: resolve with ordered results when all inputs fulfill, or reject as soon as one input rejects.

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
