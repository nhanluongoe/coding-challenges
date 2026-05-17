---
solvedAt: "2021-07-16"
---
# Single Number

- Language: ruby
- Original path: `ruby/160721-single-number.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Find the value that appears once when every other value appears twice.

# Solutions

XOR all values; duplicate pairs cancel out and the single value remains.

# Edge cases

- Single-element array.
- Negative numbers.
- The unique value is zero.
