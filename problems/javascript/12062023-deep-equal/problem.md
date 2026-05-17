---
solvedAt: "2023-06-12"
---
# Deep Equal

- Language: javascript
- Original path: `javascript/120623-deep-equal.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Compare two values for deep structural equality.

## Examples

- `deepEqual({ a: 1 }, { a: 1 })` -> `true`.
- `deepEqual([1, 2], [2, 1])` -> `false`.
- `deepEqual(null, null)` -> `true`.

# Solutions

Check primitive equality first, then recursively compare arrays and object keys/values.

# Edge cases

- Different key order.
- Arrays versus objects.
- `null`, `NaN`, and primitive edge cases.
