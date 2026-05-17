---
solvedAt: "2024-08-27"
---
# Pair with Target Sum

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/pair_with_target_sum.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Given a sorted array and a target value, return the indices or values that form a pair whose sum equals the target.

# Solutions

Use two pointers from both ends of the sorted array, moving the left pointer when the sum is too small and the right pointer when it is too large.

# Edge cases

- No matching pair.
- Duplicate values that can form the same sum.
- The pair appears at the beginning or end of the array.
