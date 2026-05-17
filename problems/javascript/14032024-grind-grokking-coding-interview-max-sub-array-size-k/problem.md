---
solvedAt: "2024-03-14"
---
# Max Sub Array Size K

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/max-sub-array-size-k.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Find the largest sum among all contiguous subarrays of size `k`.

# Solutions

Use a fixed-size sliding window and update the best sum as each new value enters and one old value leaves.

# Edge cases

- `k` equals one.
- `k` equals the array length.
- Arrays containing negative numbers.
