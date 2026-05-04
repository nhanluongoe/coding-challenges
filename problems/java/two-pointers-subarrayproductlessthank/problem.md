# Two Pointers Subarrayproductlessthank

- Language: java
- Original path: `java/two-pointers/SubarrayProductLessThanK.java`
- Solution: `SubarrayProductLessThanK.java`

## Notes

### Note 1

Constraint: subarray must be contiguous
Time complexity: O(n^3)
Space complexity: O(n) for the temp list

### Note 2

1. Since the product of all numbers from left to right is smaller than target
therefore all subarrays from left to right will have product less than target too
2. To avoid duplicates, start with a subarray containing only arr[right] and then extend
it to the left
