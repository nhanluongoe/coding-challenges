---
solvedAt: "2024-12-04"
---
# Remove Duplicates

- Language: javascript
- Original path: `javascript/two-pointers/remove-duplicates.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Remove duplicates from a sorted array in place and return the new logical length.

# Solutions

Use a slow pointer for the next unique slot and a fast pointer to scan the array.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Empty input.
- All values are duplicates.
- No duplicates.
