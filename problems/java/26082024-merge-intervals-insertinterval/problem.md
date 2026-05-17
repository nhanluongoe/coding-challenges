---
solvedAt: "2024-08-26"
---
# Insert Interval

- Language: java
- Original path: `java/merge-intervals/InsertInterval.java`
- Source: Algorithm practice
- Solution: `InsertInterval.java`

# Problems

Given a sorted list of non-overlapping intervals and one new interval, insert the new interval into the correct position and merge any intervals that now overlap. Intervals that finish before the new interval should remain unchanged, intervals that overlap should be collapsed into one expanded interval, and intervals after the merged interval should be appended in order. The result should remain sorted and non-overlapping.

## Examples

- Intervals `[[1, 3], [6, 9]]`, new `[2, 5]` -> `[[1, 5], [6, 9]]`.
- Intervals `[]`, new `[4, 8]` -> `[[4, 8]]`.
- New interval after all intervals -> appended unchanged.

# Solutions

Copy intervals ending before the new interval, merge all overlapping intervals into it, then append the remaining intervals.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- New interval belongs before all or after all intervals.
- New interval overlaps several intervals.
- Empty interval list.
