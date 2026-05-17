---
solvedAt: "2023-06-09"
---
# Array Reduce

- Language: javascript
- Original path: `javascript/090623-array-reduce.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement array reduction with optional initial value.

## Examples

- `reduce([1, 2, 3], sum, 0)` -> `6`.
- `reduce([1], sum)` -> `1`.
- Empty array without an initial value -> error.

# Solutions

Choose the initial accumulator according to native semantics, then call the reducer for each remaining present element.

# Edge cases

- Empty array without an initial value.
- Single item without an initial value.
- Sparse arrays.
