---
solvedAt: "2024-04-01"
---
# Array Chunk

- Language: javascript
- Original path: `javascript/010424-array-chunk.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Split an array into consecutive chunks of a requested size.

## Examples

- `chunkArray([1, 2, 3], 2)` -> `[[1, 2], [3]]`.
- `chunkArray([], 2)` -> `[]`.
- Size larger than the array -> one chunk containing the full array.

# Solutions

Advance through the array by `size` and slice each segment into the result.

# Edge cases

- Chunk size larger than the array.
- Final chunk is shorter.
- Empty array.
