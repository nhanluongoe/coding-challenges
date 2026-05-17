---
solvedAt: "2024-06-24"
---
# Intersection with

- Language: javascript
- Original path: `javascript/240624-intersection-with.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Given two or more arrays and a comparator function, return the values from the first array that have an equivalent value in every other array. Equivalence is determined by the comparator, not by strict equality. Preserve the order from the first array and avoid returning duplicate equivalent results when the implementation expects set-like output. Empty inputs should produce an empty intersection.

## Examples

- Objects with matching `id` values across arrays -> return the representative from the first array.
- Comparator always returns `true` with one empty array -> `[]`.
- No comparator match in any later array -> value is excluded.

# Solutions

Compare candidates from the first array against each other array using the provided comparator and keep only values that match across all arrays.

# Edge cases

- Empty arrays.
- Duplicate comparator-equivalent values.
- Comparator-based object equality.
