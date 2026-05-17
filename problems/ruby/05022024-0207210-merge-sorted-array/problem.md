---
solvedAt: "2024-02-05"
---
# Merge Sorted Array

- Language: ruby
- Original path: `ruby/0207210-merge-sorted-array.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Given two sorted integer arrays, merge the second array into the first so the first array contains all values in sorted order. The first array has enough trailing capacity to hold the second array's values, and `m` and `n` describe how many real values are present in each input. The merge should preserve duplicates and should not discard values from either array. Return or mutate the array according to the function contract.

## Examples

- `nums1 = [1, 2, 3, 0, 0, 0]`, `m = 3`, `nums2 = [2, 5, 6]`, `n = 3` -> `nums1 = [1, 2, 2, 3, 5, 6]`.
- `nums1 = [1]`, `m = 1`, `nums2 = []`, `n = 0` -> `nums1 = [1]`.
- `nums1 = [0]`, `m = 0`, `nums2 = [1]`, `n = 1` -> `nums1 = [1]`.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
