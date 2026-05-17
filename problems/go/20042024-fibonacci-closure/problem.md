---
solvedAt: "2024-04-20"
---
# Fibonacci Closure

- Language: go
- Original path: `go/fibonacci-closure.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Return a closure that yields the next Fibonacci number on each call.

## Examples

- First generated values -> `0`, `1`, `1`, `2`, `3`.
- Closure calls keep progressing through the sequence.
- Concurrent variants should stop cleanly when the quit signal is sent.

# Solutions

Keep the previous two numbers in closure state and update them after each call.

# Edge cases

- First two Fibonacci values.
- Stopping a goroutine cleanly.
- Buffered channel capacity.
