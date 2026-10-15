---
solvedAt: "2026-10-15"
---
# Find the Target in a Rotated Sorted Array

- Language: typescript
- Original path: `typescript/15102026-find-target-in-rotated-sorted-array/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

A rotated sorted array is an array of numbers originally sorted in ascending order, where a portion from the beginning has been moved to the end.

For example, `[1, 2, 3, 4, 5]` can be rotated to `[3, 4, 5, 1, 2]` by moving its first two values to the end.

Given a rotated sorted array `nums` containing unique numbers and a target value, return the target's index. Return `-1` if the target is not present.

## Example

```text
Input: nums = [8, 9, 1, 2, 3, 4, 5, 6, 7], target = 1
Output: 2
```

# Constraints

- Every value in `nums` is unique.
- Before rotation, the values in `nums` are sorted in ascending order.
- `nums` may be empty or may not have been rotated.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- `nums` is empty.
- `nums` contains one value.
- `nums` has not been rotated.
- The target is at the first or last index.
- The target lies on either side of the rotation point.
- The target is not present.

