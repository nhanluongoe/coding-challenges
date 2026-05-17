---
solvedAt: "2022-05-03"
---
# Two Sum

- Language: typescript
- Original path: `typescript/030522-two-sum.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Given an array of numbers and a target value, find two different positions whose values add up exactly to the target. The same array element cannot be reused twice, although duplicate values at different positions are valid. Return the indices or values in the format expected by the current solution. The implementation should handle negative numbers, zero, and repeated values.

## Examples

- `[2, 7, 11, 15]`, target `9` -> indices for `2 + 7`.
- `[3, 3]`, target `6` -> the two different `3` positions.
- `[]`, target `1` -> no pair found.

# Solutions

Track previously seen values in a hash map so each new value can be paired with its complement in constant expected time.

# Edge cases

- Duplicate numbers where the same value is needed twice.
- Negative numbers and zero.
- No valid pair, if the caller allows that input.
