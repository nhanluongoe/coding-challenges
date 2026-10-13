---
solvedAt: "2026-10-13"
---
# Cutting Wood

- Language: typescript
- Original path: `typescript/13102026-cutting-wood/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

You are given an array representing tree heights and an integer `k` representing the minimum total length of wood that must be cut.

A woodcutting machine is set to a height `H`. It cuts the portion above `H` from every tree taller than `H`; trees no taller than `H` remain untouched.

Return the highest possible integer setting `H` that cuts at least `k` meters of wood. The machine cannot be set higher than the tallest tree.

## Example

```text
Input: heights = [2, 6, 3, 8], k = 7
Output: 3
```

Explanation: Setting the machine to `3` cuts `3` meters from the tree of height `6` and `5` meters from the tree of height `8`, producing `8` meters in total. Any higher setting produces less than `7` meters.

# Constraints

- `heights` contains at least one tree.
- Every tree height is a non-negative integer.
- `k` is a non-negative integer.
- It is always possible to cut at least `k` meters of wood.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- No wood needs to be cut.
- There is only one tree.
- The machine must be set to ground level.
- Every tree has the same height.
- A setting produces exactly `k` meters of wood.

