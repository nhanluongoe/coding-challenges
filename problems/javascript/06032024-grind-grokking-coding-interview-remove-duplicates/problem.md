---
solvedAt: "2024-03-06"
---
# Remove Duplicates

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/remove-duplicates.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Remove duplicates from a sorted array in place and return the new logical length.

# Solutions

Use a slow pointer for the next unique slot and a fast pointer to scan the array.

# Edge cases

- Empty input.
- All values are duplicates.
- No duplicates.
