---
solvedAt: "2021-06-30"
---
# Climbing Stairs

- Language: javascript
- Original path: `javascript/300621-climbing-stairs.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a staircase with `n` steps, count how many distinct ways there are to reach the top when each move can climb either one or two steps. Different sequences of moves count as different ways. The answer follows a Fibonacci-style recurrence because the final move must come from step `n - 1` or step `n - 2`. Return the number of possible sequences.

## Examples

- `n = 1` -> `1`.
- `n = 2` -> `2`.
- `n = 3` -> `3`.

# Solutions

Use Fibonacci-style dynamic programming or memoized recursion where ways(n) equals ways(n - 1) plus ways(n - 2).

# Edge cases

- `n` is zero or one.
- Small base cases.
- Large `n` where naive recursion is too slow.
