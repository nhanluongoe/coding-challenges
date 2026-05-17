---
solvedAt: "2024-07-02"
---
# Promisify

- Language: javascript
- Original path: `javascript/020724-promisify.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Convert a callback-style function into one that returns a promise.

## Examples

- Callback returns `(null, 3)` -> wrapper resolves to `3`.
- Callback returns `(error)` -> wrapper rejects with that error.
- Calling with arguments preserves those arguments for the original function.

# Solutions

Return a wrapper that calls the original function and resolves or rejects from the callback's error-first result.

# Edge cases

- Callback receives an error.
- Multiple success values.
- `this` binding must be preserved.
