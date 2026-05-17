---
solvedAt: "2024-07-24"
---
# Triplet Sum Close to Target

- Language: java
- Original path: `java/two-pointers/TripletSumCloseToTarget.java`
- Source: JavaScript utility
- Solution: `TripletSumCloseToTarget.java`

# Problems

Given an array of integers and a target sum, find the sum of three distinct values whose total is closest to the target. The function should consider negative numbers, positive numbers, and duplicates. If an exact target sum exists, return it immediately because no closer result is possible. Otherwise return the closest sum after all viable triplets have been compared.

## Examples

- `[-2, 0, 1, 2]`, target `2` -> closest sum `1`.
- Exact target match -> return the target sum.
- Multiple equally close triplets -> any valid closest sum.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.
Time complexity: O(n*logn + n^2)
Space complexity: O(n) required for sorting

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
