---
solvedAt: "2024-09-12"
---
# Array Filter

- Language: javascript
- Original path: `javascript/0906-array-filter.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement the behavior of array filtering. Given an array and a predicate callback, return a new array containing only the elements for which the callback returns a truthy value. The callback should receive the current element, index, and source array, and should use the provided `this` binding if the variant supports it. The original array should remain unchanged.

## Examples

- `filter([1, 2, 3], n => n > 1)` -> `[2, 3]`.
- No values pass -> `[]`.
- Empty array -> `[]`.

# Solutions

Iterate over present indexes, call the predicate with value, index, and array, and collect values whose predicate is truthy.

# Edge cases

- Empty arrays.
- `thisArg` binding.
- Sparse arrays.
