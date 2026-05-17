---
solvedAt: "2021-07-16"
---
# Single Number

- Language: ruby
- Original path: `ruby/160721-single-number.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Given an array where every value appears exactly twice except for one value that appears once, find the unique value. The function should return that single value. The input may contain zero or negative numbers, and the position of the unique value can be anywhere in the array.

## Examples

- `[2, 2, 1]` -> `1`.
- `[4, 1, 2, 1, 2]` -> `4`.
- `[0]` -> `0`.

# Solutions

XOR all values; duplicate pairs cancel out and the single value remains.

# Edge cases

- Single-element array.
- Negative numbers.
- The unique value is zero.
