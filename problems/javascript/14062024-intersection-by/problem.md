---
solvedAt: "2024-06-14"
---
# Intersection By

- Language: javascript
- Original path: `javascript/140624-intersection-by.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Given two or more arrays and an iteratee, return the values from the first array whose transformed key appears in every other array. The iteratee defines how values are compared, so objects or numbers can be matched by derived values. Preserve the order of the first array and return only the intersecting representatives expected by the implementation.

## Examples

- `intersectionBy(Math.floor, [1.2, 2.4], [2.1, 3.2])` -> `[2.4]`.
- Values are compared by their iteratee result, not strict equality.
- If any input array is empty -> `[]`.

# Solutions

Compute comparison keys with the iteratee and keep values from the first array whose key appears in every other array.

# Edge cases

- Empty arrays.
- Duplicate transformed keys.
- Objects or numbers compared by derived keys.
