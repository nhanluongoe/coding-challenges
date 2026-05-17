---
solvedAt: "2024-11-20"
---
# Triplet Sum to Zero

- Language: java
- Original path: `java/two-pointers/TripletSumToZero.java`
- Source: Algorithm practice
- Solution: `TripletSumToZero.java`

# Problems

Return all unique triplets whose values sum to zero.

# Solutions

Sort the array, fix one value, then use two pointers while skipping duplicates.
Time complexity: O(n*logn + n^2) => O(n^2)
Space complexity: O(n) for sorting

# Edge cases

- Duplicate numbers.
- No triplet exists.
- All zeros.
