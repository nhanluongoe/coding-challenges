---
solvedAt: "2023-06-09"
---
# Function Bind

- Language: javascript
- Original path: `javascript/090623-function-bind.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Implement function binding. Given a function and a target context, return a new function that calls the original with `this` fixed to that context. Preset arguments supplied during binding should be placed before arguments supplied at call time. The wrapper should preserve the original function's result.

## Examples

- `fn.myBind(obj)()` -> runs `fn` with `this === obj`.
- Preset arguments are passed before later call arguments.
- Unbound method access no longer loses the chosen context.

# Solutions

Return a wrapper that calls the original function with the bound context and concatenated arguments.

# Edge cases

- Partial application.
- Calling with additional arguments.
- Constructor behavior if required.
