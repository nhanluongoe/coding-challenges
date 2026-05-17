---
solvedAt: "2024-07-01"
---
# Promise Merge

- Language: javascript
- Original path: `javascript/010724-promise-merge.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Resolve two promises and deeply merge their fulfilled object values.

# Solutions

Await both promises, recursively merge plain objects, and let later values override incompatible or primitive values.

# Edge cases

- One promise rejects.
- Nested objects share keys.
- Arrays and primitive values.
