---
solvedAt: "2021-06-27"
---
# Maximum Subarray

- Language: javascript
- Original path: `javascript/270621-maximum-subarray.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Find the maximum possible sum of any contiguous subarray.

## Examples

- `[-2, 1, -3, 4, -1, 2, 1]` -> `6` from `[4, -1, 2, 1]`.
- `[-3, -1, -2]` -> `-1`.
- `[5]` -> `5`.

# Solutions

Use Kadane's algorithm, extending the current sum when helpful and restarting when the current prefix hurts the result.

# Edge cases

- All numbers are negative.
- Single-element input.
- Zeros mixed with positive and negative values.
