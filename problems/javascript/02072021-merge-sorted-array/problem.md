---
solvedAt: "2021-07-02"
---
# Merge Sorted Array

- Language: javascript
- Original path: `javascript/020721-merge-sorted-array.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given two sorted integer arrays where the first array has enough trailing space to hold the second, merge them so the first array becomes one sorted array containing every value. Only the first `m` values of the first array are meaningful before the merge; the remaining positions are placeholders. Duplicates should be preserved. The result should be stored in the first array when the implementation is in-place.

## Examples

- `nums1 = [1, 2, 3, 0, 0, 0]`, `nums2 = [2, 5, 6]` -> `nums1 = [1, 2, 2, 3, 5, 6]`.
- `nums2 = []` -> `nums1` remains unchanged.
- `nums1` has no real values and `nums2 = [1]` -> `nums1 = [1]`.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
