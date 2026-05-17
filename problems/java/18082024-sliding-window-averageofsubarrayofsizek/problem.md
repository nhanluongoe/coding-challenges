---
solvedAt: "2024-08-18"
---
# Average of Subarrays of Size K

- Language: java
- Original path: `java/sliding-window/AverageOfSubarrayOfSizeK.java`
- Source: Algorithm practice
- Solution: `AverageOfSubarrayOfSizeK.java`

# Problems

Return the average for every contiguous subarray of size `k`.

## Examples

- `[1, 3, 2, 6, -1]`, `k = 3` -> averages `[2, 11/3, 7/3]`.
- `k = 1` -> each value is its own average.
- `k` equal to the array length -> one average.

# Solutions

Keep a fixed-size sliding-window sum, subtracting the outgoing value and adding the incoming value as the window advances.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- `k` equals one.
- `k` equals the array length.
- Negative values in the input.
