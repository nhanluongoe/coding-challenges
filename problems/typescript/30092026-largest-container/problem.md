---
solvedAt: "2026-09-30"
---
# Largest Container

- Language: typescript
- Original path: `typescript/300926-largest-container/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

You are given an array of numbers, where each number represents the height of a vertical line on a graph. Any two lines, together with the x-axis, form a container.

Return the maximum amount of water that a container can hold. The amount of water held by two lines is the distance between them multiplied by the height of the shorter line.

## Example

```text
Input: heights = [2, 7, 8, 3, 7, 6]
Output: 24
```

The lines at indices `1` and `5` form the largest container. Its width is `4`, its height is `6`, and its area is `4 * 6 = 24`.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- Fewer than two lines, which cannot form a container.
- Two lines, where their only possible container is the answer.
- Lines with equal heights.
- Zero-height lines.
