---
solvedAt: "2024-04-01"
---
# Make Counter II

- Language: javascript
- Original path: `javascript/010424-make-counter-ii.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Create a counter abstraction initialized with a starting value. It should expose operations such as increment, decrement, and reset, each updating or returning the current count according to the API. The counter's state should be private to that instance so separate counters do not affect one another.

## Examples

- Initial `10`, increment -> `11`.
- After decrement -> current value decreases by one.
- Reset -> returns to the initial value.

# Solutions

Store the current value in closure state and expose methods that update or return that state.

# Edge cases

- Negative initial values.
- Reset after several changes.
- Independent counters should not share state.
