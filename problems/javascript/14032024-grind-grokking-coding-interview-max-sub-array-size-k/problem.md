---
solvedAt: "2024-03-14"
---
# Max Sub Array Size K

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/max-sub-array-size-k.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Given an array and a fixed window size `k`, find the maximum sum among all contiguous subarrays of exactly that size. The selected subarray must contain `k` adjacent elements. The solution should update a running window sum as it moves through the array. Return the best sum found after every valid window has been considered.

## Examples

- `[2, 1, 5, 1, 3, 2]`, `k = 3` -> `9` from `[5, 1, 3]`.
- `k = 1` -> maximum single value.
- `k` equal to array length -> sum of the whole array.

# Solutions

Use a fixed-size sliding window and update the best sum as each new value enters and one old value leaves.

# Edge cases

- `k` equals one.
- `k` equals the array length.
- Arrays containing negative numbers.
