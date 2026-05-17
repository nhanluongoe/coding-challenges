---
solvedAt: "2024-06-15"
---
# Median of a Stream

- Language: java
- Original path: `java/two-heap/MedianOfAStream.java`
- Source: Algorithm practice
- Solution: `MedianOfAStream.java`

# Problems

Maintain medians while values stream in or while a fixed-size window moves across an array.

## Examples

- Stream `[3, 1, 5]` -> medians `3`, `2`, `3` after each insertion.
- Window `[1, 2]` -> median `1.5`.
- Duplicate values should not disturb heap balance.

# Solutions

Keep a max-heap for the lower half and a min-heap for the upper half, rebalancing after inserts and removals.
Time complexity: O(logn)
Space complexity: O(n)

# Edge cases

- Even versus odd counts.
- Duplicate values.
- Removing values as the sliding window advances.
