---
solvedAt: "2023-06-10"
---
# Classnames

- Language: javascript
- Original path: `javascript/100623-classnames.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Build a helper that composes class name values from strings, arrays, and objects.

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
