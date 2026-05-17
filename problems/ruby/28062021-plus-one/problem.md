---
solvedAt: "2021-06-28"
---
# Plus One

- Language: ruby
- Original path: `ruby/280621-plus-one.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Given a non-negative integer represented as an array of decimal digits, add one to the number and return the resulting digit array. Each input element is one digit, and the most significant digit comes first. The solution must carry through trailing nines and grow the array when the number rolls over, such as `999` becoming `1000`.

## Examples

- `[1, 2, 3]` -> `[1, 2, 4]`.
- `[9]` -> `[1, 0]`.
- `[9, 9, 9]` -> `[1, 0, 0, 0]`.

# Solutions

Process digits from right to left, carrying through trailing nines and prepending a new digit if needed.

# Edge cases

- All digits are `9`.
- No carry after the last digit.
- Single-digit input.
