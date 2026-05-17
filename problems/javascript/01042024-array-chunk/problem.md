---
solvedAt: "2024-04-01"
---
# Array Chunk

- Language: javascript
- Original path: `javascript/010424-array-chunk.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Given an array and a chunk size, split the array into consecutive groups of that size. Chunks should preserve the original order of the elements. The final chunk may contain fewer than `size` elements when the array length is not divisible by the chunk size. Return an array of chunk arrays.

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
