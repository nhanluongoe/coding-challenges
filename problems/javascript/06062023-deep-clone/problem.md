---
solvedAt: "2023-06-06"
---
# Deep Clone

- Language: javascript
- Original path: `javascript/060623-deep-clone.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Given a value, create a deep copy so nested arrays and objects in the result do not share references with the original. Primitive values can be returned directly. Arrays and objects should be copied recursively, preserving their contained values. If circular references or special object types are in scope for the variant, handle them according to the implementation contract.

## Examples

- `deepClone({ a: { b: 1 } })` -> equal object with a different nested reference.
- `deepClone([1, [2]])` -> copied nested array.
- Primitive values return as-is.

# Solutions

Recursively clone arrays and plain objects while returning primitive values directly.

# Edge cases

- Nested arrays and objects.
- Primitive values.
- Circular references, if supported by the variant.
