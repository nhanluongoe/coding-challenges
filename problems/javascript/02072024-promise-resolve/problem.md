---
solvedAt: "2024-07-02"
---
# Promise Resolve

- Language: javascript
- Original path: `javascript/020724-promise-resolve.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement promise resolution for an arbitrary value. The function should return a promise fulfilled with plain values, preserve or assimilate promise-like values, and handle thenables by calling their `then` method according to promise resolution rules. The caller should be able to pass primitives, objects, existing promises, or custom thenables and receive a consistently promise-based result.

## Examples

- `promiseResolve(3)` -> resolves to `3`.
- `promiseResolve(Promise.resolve("ok"))` -> resolves to `"ok"`.
- `promiseResolve({ then: resolve => resolve(5) })` -> resolves to `5`.

# Solutions

Return existing promises unchanged, assimilate thenables by calling `then`, and otherwise fulfill with the provided value.

# Edge cases

- Value is already a promise.
- Thenable calls resolve asynchronously.
- Thenable throws while being read or called.
