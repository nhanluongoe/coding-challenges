---
solvedAt: "2024-10-03"
---
# Triplet Sum to Zero

- Language: javascript
- Original path: `javascript/two-pointers/triplet-sum-to-zero.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given an array of integers, find all unique triplets whose values add up to zero. Each triplet must use three different indices from the array. The result should avoid duplicate triplets even when the input contains repeated values. Return the collection of triplets in the format used by the solution.

## Examples

- `[-3, 0, 1, 2, -1, 1, -2]` -> triplets such as `[-3, 1, 2]` and `[-2, 0, 2]`.
- `[1, 2, 3]` -> `[]`.
- `[0, 0, 0]` -> `[[0, 0, 0]]`.

# Solutions

Sort the array, fix one value, then use two pointers while skipping duplicates.
Time complexity: O(n*logn + n^2) => O(n^2)
Space complexity: O(n) required for sorting

# Edge cases

- Duplicate numbers.
- No triplet exists.
- All zeros.
