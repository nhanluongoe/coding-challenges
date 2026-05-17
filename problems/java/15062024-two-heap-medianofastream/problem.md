---
solvedAt: "2024-06-15"
---
# Median of a Stream

- Language: java
- Original path: `java/two-heap/MedianOfAStream.java`
- Source: Algorithm practice
- Solution: `MedianOfAStream.java`

# Problems

Process numbers while repeatedly reporting the median. In the stream version, insert one number at a time and return the median after each insertion. In the sliding-window version, report the median for every contiguous window of size `k` as the window moves through the array. The median is the middle value for odd counts and the average of the two middle values for even counts.

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
