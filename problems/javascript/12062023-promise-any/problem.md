---
solvedAt: "2023-06-12"
---
# Promise Any

- Language: javascript
- Original path: `javascript/120623-promise-any.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement `Promise.any`: resolve with the first fulfilled value, or reject after every input rejects.

# Solutions

Wrap each input as a promise, resolve immediately on fulfillment, and collect rejection reasons until all inputs fail.

# Edge cases

- Empty iterable.
- All promises reject.
- Plain values mixed with promises.
