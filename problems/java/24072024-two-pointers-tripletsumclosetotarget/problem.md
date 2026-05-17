---
solvedAt: "2024-07-24"
---
# Triplet Sum Close to Target

- Language: java
- Original path: `java/two-pointers/TripletSumCloseToTarget.java`
- Source: JavaScript utility
- Solution: `TripletSumCloseToTarget.java`

# Problems

Implement `class TripletSumCloseToTarget` for the Triplet Sum Close to Target challenge using the behavior implied by the existing solution and tests.

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
