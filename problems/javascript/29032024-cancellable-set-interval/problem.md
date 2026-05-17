---
solvedAt: "2024-03-29"
---
# Cancellable Set Interval

- Language: javascript
- Original path: `javascript/290324-cancellable-set-interval.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Create an interval helper that returns a function capable of cancelling future executions.

# Solutions

Start a timer with the provided callback and arguments, then return a closure that clears that timer.

# Edge cases

- Cancel before the first callback fires.
- Callback arguments.
- Multiple independent timers.
