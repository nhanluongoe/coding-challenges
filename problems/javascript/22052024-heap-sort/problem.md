---
solvedAt: "2024-05-22"
---
# Heap Sort

- Language: javascript
- Original path: `javascript/220524-heap-sort.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Sort an array in place using heap sort.

# Solutions

Build a max heap, repeatedly swap the root with the end of the unsorted range, and heapify the reduced heap.

# Edge cases

- Empty array.
- Duplicate values.
- Already sorted input.
