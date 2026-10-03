---
solvedAt: "2026-10-03"
---
# Pair Sum - Unsorted

- Language: typescript
- Original path: `typescript/03102026-pair-sum-unsorted/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Given an unsorted array of integers, return the indices of any two numbers that add up to a target.

The order of the indices in the result does not matter. If no pair is found, return an empty array. The same index cannot be used twice.

## Example

```text
Input: nums = [-1, 3, 4, 2], target = 3
Output: [0, 2]
```

`nums[0] + nums[2] = -1 + 4 = 3`.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- No pair adds up to the target.
- The pair contains duplicate values at different indices.
- The array contains negative numbers or zeros.
- The array has fewer than two elements.
