---
solvedAt: "2023-09-06"
---
# Curry

- Language: javascript
- Original path: `javascript/060923-curry.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Implement currying for a function. The curried version should allow the original function's arguments to be supplied over multiple calls. Once enough arguments have been collected, call the original function and return its result. The wrapper should also support grouped arguments when the implementation allows more than one argument per call.

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
