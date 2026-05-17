---
solvedAt: "2023-06-06"
---
# Flatten

- Language: javascript
- Original path: `javascript/060623-flatten.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Flatten nested arrays according to the required depth or full-recursion behavior.

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
