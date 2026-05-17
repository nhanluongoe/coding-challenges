---
solvedAt: "2024-06-24"
---
# Is Empty

- Language: javascript
- Original path: `javascript/240624-is-empty.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a value, determine whether it should be considered empty. Empty values include `null`, `undefined`, empty arrays, empty strings, empty maps, empty sets, and objects with no own enumerable keys. Non-empty containers should return `false`. Primitive values follow the behavior defined by the implementation.

## Examples

- `isEmpty(null)` -> `true`.
- `isEmpty([])` -> `true`; `isEmpty([1])` -> `false`.
- `isEmpty({})` -> `true`; `isEmpty({ a: 1 })` -> `false`.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
