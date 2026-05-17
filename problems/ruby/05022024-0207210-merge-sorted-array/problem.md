---
solvedAt: "2024-02-05"
---
# Merge Sorted Array

- Language: ruby
- Original path: `ruby/0207210-merge-sorted-array.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Implement `def merge(nums1, m, nums2, n)` for the Merge Sorted Array challenge using the behavior implied by the existing solution and tests.

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
