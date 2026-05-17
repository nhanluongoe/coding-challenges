---
solvedAt: "2024-09-20"
---
# Sorted Array Squares

- Language: javascript
- Original path: `javascript/two-pointers/sorted-array-squares.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Given a sorted array that may contain negative numbers, return a new array containing the squares of each number in sorted order. Squaring negative numbers can produce large positive values, so simply squaring from left to right may not preserve order. The output should contain one square for each input value.

## Examples

- `[-2, -1, 0, 2, 3]` -> `[0, 1, 4, 4, 9]`.
- `[-3, -1]` -> `[1, 9]`.
- `[0]` -> `[0]`.

# Solutions

Compare absolute values from both ends and fill the result from right to left.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- All negative values.
- All non-negative values.
- Zeros and duplicate absolute values.
