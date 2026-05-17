---
solvedAt: "2024-04-01"
---
# Array Concat

- Language: javascript
- Original path: `javascript/010424-array-concat.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement array concatenation. Given a base array and additional values, return a new array containing the base elements followed by each argument. Array arguments should contribute their top-level elements, while non-array values should be appended as single values. The original inputs should not be mutated.

## Examples

- `concat([1], [2, 3])` -> `[1, 2, 3]`.
- `concat([1], 2)` -> `[1, 2]`.
- No extra arguments -> a shallow copy of the original array.

# Solutions

Create a new result array and append either each element of array arguments or the value itself.

# Edge cases

- Nested arrays should remain nested unless spread by the API.
- No arguments.
- Sparse arrays or non-array values.
