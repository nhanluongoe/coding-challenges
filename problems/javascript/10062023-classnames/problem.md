---
solvedAt: "2023-06-10"
---
# Classnames

- Language: javascript
- Original path: `javascript/100623-classnames.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Build a utility that converts mixed class-name inputs into a single space-separated string. Strings should be included directly, arrays should be flattened recursively, and object keys should be included when their values are truthy. Falsy inputs such as `null`, `undefined`, `false`, and empty strings should be ignored. Preserve a predictable order based on the input order.

## Examples

- `classNames("foo", "bar")` -> `"foo bar"`.
- `classNames({ active: true, hidden: false })` -> `"active"`.
- Falsy inputs such as `null` and `false` are ignored.

# Solutions

Flatten supported arguments, include strings directly, and include object keys whose values are truthy.

# Edge cases

- Falsy values.
- Nested arrays.
- Duplicate class names.
