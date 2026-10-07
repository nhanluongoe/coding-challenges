---
solvedAt: "2026-10-07"
---
# Happy Number

- Language: typescript
- Original path: `typescript/07102026-happy-number/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

A happy number is a number that eventually becomes `1` after repeatedly replacing it with the sum of the squares of its digits.

An unhappy number never reaches `1` and instead becomes trapped in an infinite cycle.

Given an integer `n`, determine whether it is a happy number.

## Example

```text
Input: n = 23
Output: true
```

Explanation:

```text
2² + 3² = 13
1² + 3² = 10
1² + 0² = 1
```

# Constraints

- `n` is a positive integer.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- `n` is already `1`.
- The sequence reaches `1` after one transformation.
- The sequence enters a cycle and never reaches `1`.
- `n` contains one or more zero digits.
