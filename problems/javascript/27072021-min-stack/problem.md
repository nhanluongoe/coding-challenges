---
solvedAt: "2021-07-27"
---
# Min Stack

- Language: javascript
- Original path: `javascript/270721-min-stack.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Design a stack that supports normal stack operations while also returning the current minimum or maximum value efficiently. Each push or pop should update the stack state so the extreme value can be read without scanning the whole stack. Duplicate extreme values must be handled correctly because removing one copy should not remove the other from consideration.

## Examples

- Push `3`, push `1`, current min -> `1` for min-stack variants.
- Pop the current extreme -> next extreme becomes visible.
- Duplicate extreme values should remain valid until all copies are popped.

# Solutions

Store each pushed value with the best value seen so far, or maintain an auxiliary stack of extrema.

# Edge cases

- Pop from an empty stack, if the API allows it.
- Duplicate extrema.
- Extremum changes after pop.
