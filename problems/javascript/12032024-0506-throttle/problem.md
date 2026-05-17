---
solvedAt: "2024-03-12"
---
# Throttle

- Language: javascript
- Original path: `javascript/0506-throttle.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Create a throttled function that invokes at most once per delay interval.

# Solutions

Track the last execution time or active timer and ignore or defer calls that arrive during the cooldown.

# Edge cases

- First call should run immediately or after delay depending on the variant.
- `this` context.
- Trailing call behavior.
