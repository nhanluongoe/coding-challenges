---
solvedAt: "2026-10-11"
---
# First and Last Occurrences of a Number

- Language: typescript
- Original path: `typescript/11102026-first-and-last-occurrences/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Given an array of integers sorted in non-decreasing order, return the first and last indices of a target number.

If the target is not found, return `[-1, -1]`.

## Example

```text
Input: nums = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11], target = 4
Output: [3, 5]
```

Explanation: The first and last occurrences of `4` are at indices `3` and `5`, respectively.

# Constraints

- `nums` is sorted in non-decreasing order.
- `nums` may be empty.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- `nums` is empty.
- The target does not occur in `nums`.
- The target occurs exactly once.
- Every value in `nums` equals the target.
- Target occurrences begin at index `0` or end at the last index.

