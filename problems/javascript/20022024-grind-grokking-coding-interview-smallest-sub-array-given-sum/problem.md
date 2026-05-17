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

## Examples

- `[3, 4, 1, 1, 6]`, target `8` -> length `3` from `[1, 1, 6]`.
- `[1, 1, 1]`, target `5` -> `0` or no result.
- `[10]`, target `8` -> length `1`.

# Solutions

Maintain a growing sliding-window sum and shrink from the left while the window still satisfies the target.

# Edge cases

- No valid subarray.
- A single element satisfies the target.
- The whole array is required.
