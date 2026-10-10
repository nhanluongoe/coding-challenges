---
solvedAt: "2026-10-10"
---
# Find the Insertion Index

- Language: typescript
- Original path: `typescript/10102026-find-insertion-index/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

You are given a sorted array of unique numbers, `nums`, and a number `target`.

- If `nums` contains `target`, return its index.
- Otherwise, return the index where `target` should be inserted to preserve the array's sorted order.

## Example 1

```text
Input: nums = [1, 2, 4, 5, 7, 8, 9], target = 4
Output: 2
```

## Example 2

```text
Input: nums = [1, 2, 4, 5, 7, 8, 9], target = 6
Output: 4
```

Explanation: `6` would be inserted at index `4`, between `5` and `7`.

# Constraints

- `nums` is sorted in ascending order.
- Every value in `nums` is unique.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- `nums` is empty.
- `target` is the first or last element.
- `target` is smaller than every element.
- `target` is greater than every element.
- `nums` contains negative values.

