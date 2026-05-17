---
solvedAt: "2024-02-16"
---
# Dutch Flag

- Language: java
- Original path: `java/two-pointers/DutchFlag.java`
- Source: Algorithm practice
- Solution: `DutchFlag.java`

# Problems

Sort an array containing only three categories, usually `0`, `1`, and `2`, in place.

# Solutions

Use low, current, and high pointers to partition zeros left, twos right, and ones in the middle.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- All values are the same.
- Already sorted or reverse sorted input.
- Very small arrays.
