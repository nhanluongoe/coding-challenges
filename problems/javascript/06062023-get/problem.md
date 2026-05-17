---
solvedAt: "2023-06-06"
---
# Get

- Language: javascript
- Original path: `javascript/060623-get.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement `function get(object, path, defaultValue)` for the Get challenge using the behavior implied by the existing solution and tests.

## Examples

- `get({ a: { b: 2 } }, "a.b")` -> `2`.
- `get({}, "a.b", "fallback")` -> `"fallback"`.
- `get({ a: [{ b: 3 }] }, "a[0].b")` -> `3` when bracket paths are supported.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
