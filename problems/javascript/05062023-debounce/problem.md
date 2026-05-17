---
solvedAt: "2023-06-05"
---
# Debounce

- Language: javascript
- Original path: `javascript/050623-debounce.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement debouncing for a function. The returned wrapper may be called many times, but it should postpone running the original function until calls have stopped for the specified delay. Each new call before the delay expires cancels the previous scheduled run. When the function finally runs, it should use the latest arguments and the correct calling context.

## Examples

- Three calls inside the delay -> only the last call executes.
- One call followed by no more calls -> executes after the delay.
- The executed call receives the latest arguments.

# Solutions

Keep the latest timer id, clear it on every call, and invoke the original function with the latest arguments after the timer expires.

# Edge cases

- Rapid repeated calls.
- `this` context.
- Arguments from the final call.
