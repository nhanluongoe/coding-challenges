---
solvedAt: "2024-09-12"
---
# Array Filter

- Language: javascript
- Original path: `javascript/0906-array-filter.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement array filtering with callback arguments matching the native API.

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
