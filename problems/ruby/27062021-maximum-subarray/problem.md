---
solvedAt: "2021-06-27"
---
# Maximum Subarray

- Language: ruby
- Original path: `ruby/270621-maximum-subarray.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Find the maximum possible sum of any contiguous subarray.

# Solutions

Use Kadane's algorithm, extending the current sum when helpful and restarting when the current prefix hurts the result.

# Edge cases

- All numbers are negative.
- Single-element input.
- Zeros mixed with positive and negative values.
