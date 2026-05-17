---
solvedAt: "2024-09-20"
---
# Sorted Array Squares

- Language: javascript
- Original path: `javascript/two-pointers/sorted-array-squares.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Given a sorted array that may contain negatives, return the squares in sorted order.

# Solutions

Compare absolute values from both ends and fill the result from right to left.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- All negative values.
- All non-negative values.
- Zeros and duplicate absolute values.
