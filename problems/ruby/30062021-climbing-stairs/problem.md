---
solvedAt: "2021-06-30"
---
# Climbing Stairs

- Language: ruby
- Original path: `ruby/300621-climbing-stairs.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Count the number of distinct ways to climb `n` stairs when each move can climb one or two steps.

# Solutions

Use Fibonacci-style dynamic programming or memoized recursion where ways(n) equals ways(n - 1) plus ways(n - 2).

# Edge cases

- `n` is zero or one.
- Small base cases.
- Large `n` where naive recursion is too slow.
