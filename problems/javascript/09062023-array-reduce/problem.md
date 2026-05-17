---
solvedAt: "2023-06-09"
---
# Array Reduce

- Language: javascript
- Original path: `javascript/090623-array-reduce.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement the behavior of array reduction. Given an array, a reducer callback, and optionally an initial accumulator, combine the array values into one result. When no initial value is provided, the first present element becomes the initial accumulator and reduction starts at the next element. Empty arrays without an initial value should follow native error behavior.

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
