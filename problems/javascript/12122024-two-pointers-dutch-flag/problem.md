---
solvedAt: "2024-12-12"
---
# Dutch Flag

- Language: javascript
- Original path: `javascript/two-pointers/dutch-flag.js`
- Source: Algorithm practice
- Solution: `code.js`

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
