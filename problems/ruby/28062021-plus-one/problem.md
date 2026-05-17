---
solvedAt: "2021-06-28"
---
# Plus One

- Language: ruby
- Original path: `ruby/280621-plus-one.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Add one to a non-negative integer represented as an array of decimal digits.

# Solutions

Process digits from right to left, carrying through trailing nines and prepending a new digit if needed.

# Edge cases

- All digits are `9`.
- No carry after the last digit.
- Single-digit input.
