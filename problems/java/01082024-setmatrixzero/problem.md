---
solvedAt: "2024-08-01"
---
# Set Matrix Zeroes

- Language: java
- Original path: `java/SetMatrixZero.java`
- Source: Algorithm practice
- Solution: `SetMatrixZero.java`

# Problems

Given a matrix, if any cell contains zero, set that cell's entire row and entire column to zero. All zeroing decisions should be based on the original matrix state, not on zeros introduced during the update. The result should be reflected in the matrix structure expected by the implementation, often by mutating the matrix in place.

## Examples

- `[[1, 1, 1], [1, 0, 1], [1, 1, 1]]` -> `[[1, 0, 1], [0, 0, 0], [1, 0, 1]]`.
- Matrix with no zero -> unchanged.
- Zero in first row or first column -> that full row or column becomes zero.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.
Time complexity: O(m*n)
Space complexity: O(m + n)

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
