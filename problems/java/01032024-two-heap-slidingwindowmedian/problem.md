---
solvedAt: "2024-03-01"
---
# Sliding Window Median

- Language: java
- Original path: `java/two-heap/SlidingWindowMedian.java`
- Source: Algorithm practice
- Solution: `SlidingWindowMedian.java`

# Problems

Maintain medians while values stream in or while a fixed-size window moves across an array.

# Solutions

Keep a max-heap for the lower half and a min-heap for the upper half, rebalancing after inserts and removals.
Time complexity: O(n*k)
Space complexity: O(k)

# Edge cases

- Even versus odd counts.
- Duplicate values.
- Removing values as the sliding window advances.
