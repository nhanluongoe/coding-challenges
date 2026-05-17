---
solvedAt: "2023-06-03"
---
# Climbing Stairs

- Language: javascript
- Original path: `javascript/030623-climbing-stairs.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Count the number of distinct ways to climb `n` stairs when each move can climb one or two steps.

# Solutions

Use Fibonacci-style dynamic programming or memoized recursion where ways(n) equals ways(n - 1) plus ways(n - 2).

# Edge cases

- `n` is zero or one.
- Small base cases.
- Large `n` where naive recursion is too slow.
