---
solvedAt: "2024-07-02"
---
# Promisify

- Language: javascript
- Original path: `javascript/020724-promisify.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Write a helper that converts a callback-based function into a promise-returning function. The wrapper should pass through the original arguments, preserve the intended `this` context when called as a method, and settle the returned promise from the callback result. Error-first callbacks should reject when the error argument is present and resolve with the successful value or values otherwise.

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
