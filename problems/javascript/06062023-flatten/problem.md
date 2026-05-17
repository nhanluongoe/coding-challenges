---
solvedAt: "2023-06-06"
---
# Flatten

- Language: javascript
- Original path: `javascript/060623-flatten.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Given a nested array structure, return a flattened array according to the depth rules of the implementation. Deep-flatten variants should recursively expand every nested array until only non-array values remain. The order of values should match a left-to-right traversal of the original structure. Empty nested arrays should not add values to the result.

## Examples

- `flatten([1, [2, [3]]])` -> `[1, 2, 3]` for deep-flatten variants.
- `flatten([])` -> `[]`.
- Non-array values are kept as values.

# Solutions

Use recursion or an explicit stack to append non-array values and expand arrays.

# Edge cases

- Empty nested arrays.
- Deeply nested structures.
- Non-array values.
