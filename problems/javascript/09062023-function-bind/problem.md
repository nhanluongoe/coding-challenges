---
solvedAt: "2023-06-09"
---
# Function Bind

- Language: javascript
- Original path: `javascript/090623-function-bind.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Implement function binding with a fixed `this` value and optional preset arguments.

# Solutions

Return a wrapper that calls the original function with the bound context and concatenated arguments.

# Edge cases

- Partial application.
- Calling with additional arguments.
- Constructor behavior if required.
