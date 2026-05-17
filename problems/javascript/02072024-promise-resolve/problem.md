---
solvedAt: "2024-07-02"
---
# Promise Resolve

- Language: javascript
- Original path: `javascript/020724-promise-resolve.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement promise resolution behavior for plain values, thenables, and existing promises.

# Solutions

Return existing promises unchanged, assimilate thenables by calling `then`, and otherwise fulfill with the provided value.

# Edge cases

- Value is already a promise.
- Thenable calls resolve asynchronously.
- Thenable throws while being read or called.
