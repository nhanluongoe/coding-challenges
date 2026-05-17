---
solvedAt: "2022-05-03"
---
# Two Sum

- Language: typescript
- Original path: `typescript/030522-two-sum.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Given an array of numbers and a target value, find two distinct elements whose sum equals the target.

# Solutions

Track previously seen values in a hash map so each new value can be paired with its complement in constant expected time.

# Edge cases

- Duplicate numbers where the same value is needed twice.
- Negative numbers and zero.
- No valid pair, if the caller allows that input.
