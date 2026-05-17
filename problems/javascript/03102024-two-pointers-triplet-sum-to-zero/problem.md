---
solvedAt: "2024-10-03"
---
# Triplet Sum to Zero

- Language: javascript
- Original path: `javascript/two-pointers/triplet-sum-to-zero.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Return all unique triplets whose values sum to zero.

# Solutions

Sort the array, fix one value, then use two pointers while skipping duplicates.
Time complexity: O(n*logn + n^2) => O(n^2)
Space complexity: O(n) required for sorting

# Edge cases

- Duplicate numbers.
- No triplet exists.
- All zeros.
