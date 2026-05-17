---
solvedAt: "2024-05-25"
---
# Triplet with Smaller Sum

- Language: java
- Original path: `java/two-pointers/TripletWithSmallerSum.java`
- Source: Algorithm practice
- Solution: `TripletWithSmallerSum.java`

# Problems

Count or list triplets whose sum is smaller than a target.

# Solutions

Sort the array and use a fixed index plus two pointers; when a sum is small enough, every intermediate right value also works.
Time complexity: O(n*logn + n^2)
Space complexity: O(n) required for sorting

# Edge cases

- No valid triplets.
- Negative numbers.
- Duplicate values.
