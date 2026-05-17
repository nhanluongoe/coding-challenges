---
solvedAt: "2024-08-26"
---
# Insert Interval

- Language: java
- Original path: `java/merge-intervals/InsertInterval.java`
- Source: Algorithm practice
- Solution: `InsertInterval.java`

# Problems

Insert a new interval into an existing sorted list of non-overlapping intervals and merge any overlaps.

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
