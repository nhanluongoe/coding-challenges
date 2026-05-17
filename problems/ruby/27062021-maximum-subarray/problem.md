---
solvedAt: "2021-06-27"
---
# Maximum Subarray

- Language: ruby
- Original path: `ruby/270621-maximum-subarray.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Given an array of integers, find the largest possible sum of a contiguous subarray. The chosen subarray must use adjacent elements from the original order and must contain at least one number unless the variant says otherwise. Negative values are allowed, so the answer may be negative when every value is negative. Return the maximum sum, not the subarray itself unless the solution asks for it.

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
