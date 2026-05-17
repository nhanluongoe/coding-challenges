---
solvedAt: "2023-09-06"
---
# Curry

- Language: javascript
- Original path: `javascript/060923-curry.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Transform a function so it can receive its arguments across multiple calls.

## Examples

- `curried(1)(2)(3)` -> same result as `fn(1, 2, 3)`.
- `curried(1, 2)(3)` -> also works when partial groups are allowed.
- Enough arguments -> invoke the original function.

# Solutions

Return closures that collect arguments until the original function's arity is met, then invoke it.

# Edge cases

- Extra arguments.
- Zero-argument functions.
- `this` binding.
