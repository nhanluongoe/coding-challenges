---
solvedAt: "2024-05-21"
---
# Triplet with Smaller Sum

- Language: javascript
- Original path: `javascript/two-pointers/triplet-with-smaller-sum.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Count or list triplets whose sum is smaller than a target.

## Examples

- `[-1, 0, 2, 3]`, target `3` -> `2` valid triplets.
- No valid triplet -> `0`.
- Duplicate values still count by index combination when required.

# Solutions

Sort the array and use a fixed index plus two pointers; when a sum is small enough, every intermediate right value also works.

# Edge cases

- No valid triplets.
- Negative numbers.
- Duplicate values.
