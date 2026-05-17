---
solvedAt: "2024-08-05"
---
# Search in Infinite Sorted Array

- Language: java
- Original path: `java/modified-binary-search/SearchInfiniteSortedArray.java`
- Source: Algorithm practice
- Solution: `SearchInfiniteSortedArray.java`

# Problems

Search a sorted or specially ordered collection for the requested target, range, boundary, or closest value.

# Solutions

Expand the search window exponentially until it can contain the target, then run binary search inside that window.
Time complexity: O(logn)
Space complexity: O(1)

# Edge cases

- Target smaller than the first item or larger than the last.
- Duplicate target values.
- One-element input.
