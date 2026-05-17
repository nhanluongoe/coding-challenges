---
solvedAt: "2024-09-19"
---
# Merge K Sorted Lists

- Language: java
- Original path: `java/k-way-merge/MergeKSortedLists.java`
- Source: Algorithm practice
- Solution: `MergeKSortedLists.java`

# Problems

Given multiple sorted lists, combine them or search across them while preserving their sorted structure. The task may ask for one merged sorted list, the kth smallest value across all lists, or the smallest range containing at least one value from each list. At any point, only the current smallest candidate from each list is needed to decide the next move.

## Examples

- `[[1, 4], [2, 5], [3, 6]]` -> merged order `[1, 2, 3, 4, 5, 6]` for merge variants.
- One empty list -> no complete range across all lists.
- Single list -> return that list or its smallest valid range.

# Solutions

Use a min-heap containing one current item from each list, advancing only the list that contributed the smallest item.
Time complexity: O(n*logk), n is total numbers, k is the number of input
Space complexity: O(k)

# Edge cases

- One list is empty.
- Lists have different lengths.
- Duplicate values across lists.
