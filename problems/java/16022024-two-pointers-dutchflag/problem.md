---
solvedAt: "2024-02-16"
---
# Dutch Flag

- Language: java
- Original path: `java/two-pointers/DutchFlag.java`
- Source: Algorithm practice
- Solution: `DutchFlag.java`

# Problems

Given an array containing only three categories, usually represented by `0`, `1`, and `2`, reorder the array in place so equal values are grouped in sorted category order. The function should use constant extra space and should not rely on a general-purpose sort. The final array should contain exactly the same values as the input, only rearranged.

## Examples

- `[1, 0, 2, 1, 0]` -> `[0, 0, 1, 1, 2]`.
- `[2, 2, 0]` -> `[0, 2, 2]`.
- `[]` -> `[]`.

# Solutions

Use low, current, and high pointers to partition zeros left, twos right, and ones in the middle.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- All values are the same.
- Already sorted or reverse sorted input.
- Very small arrays.
