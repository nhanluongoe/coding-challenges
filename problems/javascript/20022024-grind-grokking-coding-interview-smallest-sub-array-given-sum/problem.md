---
solvedAt: "2024-02-20"
---
# Smallest Sub Array Given Sum

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/smallest-sub-array-given-sum.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Find the shortest contiguous subarray whose sum is at least the requested target.

# Solutions

Maintain a growing sliding-window sum and shrink from the left while the window still satisfies the target.

# Edge cases

- No valid subarray.
- A single element satisfies the target.
- The whole array is required.
