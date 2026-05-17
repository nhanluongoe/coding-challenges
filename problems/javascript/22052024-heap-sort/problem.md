---
solvedAt: "2024-05-22"
---
# Heap Sort

- Language: javascript
- Original path: `javascript/220524-heap-sort.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Sort an array in place using heap sort. The algorithm should first arrange the input into a heap, then repeatedly move the largest remaining value into its final position and restore the heap property for the unsorted prefix. The final array should be sorted in ascending order without relying on the language's built-in sort.

## Examples

- `[7, 2, 4, 3]` -> `[2, 3, 4, 7]`.
- `[]` -> `[]`.
- `[1, 1, 1]` -> `[1, 1, 1]`.

# Solutions

Build a max heap, repeatedly swap the root with the end of the unsorted range, and heapify the reduced heap.

# Edge cases

- Empty array.
- Duplicate values.
- Already sorted input.
