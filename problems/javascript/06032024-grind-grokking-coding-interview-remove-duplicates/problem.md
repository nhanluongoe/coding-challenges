---
solvedAt: "2024-03-06"
---
# Remove Duplicates

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/remove-duplicates.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Given a sorted array, remove duplicate values in place so each unique value appears once at the front of the array. Return the new logical length or the compacted array format used by the solution. Values beyond the returned length do not matter. The relative order of the unique values should be preserved.

## Examples

- `[2, 3, 3, 3, 6, 9, 9]` -> logical array `[2, 3, 6, 9]`.
- `[]` -> length `0`.
- `[1, 1, 1]` -> logical array `[1]`.

# Solutions

Use a slow pointer for the next unique slot and a fast pointer to scan the array.

# Edge cases

- Empty input.
- All values are duplicates.
- No duplicates.
