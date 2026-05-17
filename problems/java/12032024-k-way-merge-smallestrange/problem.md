---
solvedAt: "2024-03-12"
---
# Smallest Range

- Language: java
- Original path: `java/k-way-merge/SmallestRange.java`
- Source: Algorithm practice
- Solution: `SmallestRange.java`

# Problems

Combine or search across multiple sorted lists while preserving sorted order or coverage requirements.

# Solutions

Use a min-heap containing one current item from each list, advancing only the list that contributed the smallest item.
Time complexity: O(N*logM), "N" is the total number of all input arrays
Space complexity: O(M)

# Edge cases

- One list is empty.
- Lists have different lengths.
- Duplicate values across lists.
