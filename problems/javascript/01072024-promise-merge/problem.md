---
solvedAt: "2024-07-01"
---
# Promise Merge

- Language: javascript
- Original path: `javascript/010724-promise-merge.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Resolve two promises and merge their fulfilled values. Both inputs are expected to produce mergeable data, usually plain objects. When both promises fulfill, combine their properties into one result, recursively merging nested plain objects where appropriate and letting later values replace incompatible values. If either promise rejects, the merged promise should reject instead of returning a partial result.

## Examples

- Resolved `{ a: 1 }` and `{ b: 2 }` -> `{ a: 1, b: 2 }`.
- Resolved `{ a: { x: 1 } }` and `{ a: { y: 2 } }` -> `{ a: { x: 1, y: 2 } }`.
- If either promise rejects -> the merged promise rejects.

# Solutions

Await both promises, recursively merge plain objects, and let later values override incompatible or primitive values.

# Edge cases

- One promise rejects.
- Nested objects share keys.
- Arrays and primitive values.
