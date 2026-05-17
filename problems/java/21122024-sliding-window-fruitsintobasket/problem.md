---
solvedAt: "2024-12-21"
---
# Fruits Into Baskets

- Language: java
- Original path: `java/sliding-window/FruitsIntoBasket.java`
- Source: Algorithm practice
- Solution: `FruitsIntoBasket.java`

# Problems

Given an array representing fruit types along a row of trees, find the longest contiguous stretch that can be collected using two baskets. Each basket can hold only one fruit type, so the valid window may contain at most two distinct values. Return the maximum number of fruits that can be collected from one continuous segment.

## Examples

- `[1, 2, 1]` -> `3`.
- `[0, 1, 2, 2]` -> `3` from `[1, 2, 2]`.
- One fruit type only -> full array length.

# Solutions

Use the same sliding-window frequency map as the longest-substring-with-k-distinct problem, with `k = 2`.

# Edge cases

- One fruit type.
- Frequent type changes.
- Best window reaches the end.
