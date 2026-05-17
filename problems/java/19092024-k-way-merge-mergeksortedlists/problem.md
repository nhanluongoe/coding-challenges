---
solvedAt: "2024-09-19"
---
# Merge K Sorted Lists

- Language: java
- Original path: `java/k-way-merge/MergeKSortedLists.java`
- Source: Algorithm practice
- Solution: `MergeKSortedLists.java`

# Problems

Combine or search across multiple sorted lists while preserving sorted order or coverage requirements.

# Solutions

Use a min-heap containing one current item from each list, advancing only the list that contributed the smallest item.
Time complexity: O(n*logk), n is total numbers, k is the number of input
Space complexity: O(k)

# Edge cases

- One list is empty.
- Lists have different lengths.
- Duplicate values across lists.
