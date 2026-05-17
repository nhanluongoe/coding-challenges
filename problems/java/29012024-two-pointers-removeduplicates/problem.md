---
solvedAt: "2024-01-29"
---
# Remove Duplicates

- Language: java
- Original path: `java/two-pointers/RemoveDuplicates.java`
- Source: Algorithm practice
- Solution: `RemoveDuplicates.java`

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
