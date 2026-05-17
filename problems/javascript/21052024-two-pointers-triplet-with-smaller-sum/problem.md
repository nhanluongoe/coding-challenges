---
solvedAt: "2024-05-21"
---
# Triplet with Smaller Sum

- Language: javascript
- Original path: `javascript/two-pointers/triplet-with-smaller-sum.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given an array of integers and a target value, count or return triplets whose sum is strictly smaller than the target. A valid triplet uses three distinct indices. Sorting can help identify groups of valid triplets without checking every combination individually. The output should match the variant: either the count of valid triplets or the triplets themselves.

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
