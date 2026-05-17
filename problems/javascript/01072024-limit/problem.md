---
solvedAt: "2024-07-01"
---
# Limit

- Language: javascript
- Original path: `javascript/010724-limit.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Create a wrapper that limits how many times a function can be executed. The wrapper should call the original function only while the remaining-call count is positive. After the limit is reached, later calls should be ignored or return the variant's fallback value. Each wrapper instance should track its own call count.

## Examples

- Limit `2`: first two calls execute.
- Third call after limit is reached -> ignored or returns the configured fallback.
- Separate wrappers keep separate counters.

# Solutions

Keep an invocation counter in closure state and only call the original function while the count is below the limit.

# Edge cases

- Limit is zero.
- Return value after the limit is reached.
- `this` and arguments.
