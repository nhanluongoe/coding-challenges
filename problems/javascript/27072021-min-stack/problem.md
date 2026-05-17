---
solvedAt: "2021-07-27"
---
# Min Stack

- Language: javascript
- Original path: `javascript/270721-min-stack.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Implement a stack that can return the current minimum or maximum in constant time.

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
