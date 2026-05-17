---
solvedAt: "2024-05-18"
---
# K Contiguous Average Array

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/k-contiguous-avarage-array.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Return the average for every contiguous subarray of size `k`.

# Solutions

Keep a fixed-size sliding-window sum, subtracting the outgoing value and adding the incoming value as the window advances.

# Edge cases

- `k` equals one.
- `k` equals the array length.
- Negative values in the input.
