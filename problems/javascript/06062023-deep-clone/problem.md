---
solvedAt: "2023-06-06"
---
# Deep Clone

- Language: javascript
- Original path: `javascript/060623-deep-clone.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Create a deep copy so nested objects and arrays no longer share references with the original.

# Solutions

Recursively clone arrays and plain objects while returning primitive values directly.

# Edge cases

- Nested arrays and objects.
- Primitive values.
- Circular references, if supported by the variant.
