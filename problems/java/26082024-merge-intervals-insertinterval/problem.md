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

# Solutions

Copy intervals ending before the new interval, merge all overlapping intervals into it, then append the remaining intervals.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- New interval belongs before all or after all intervals.
- New interval overlaps several intervals.
- Empty interval list.
