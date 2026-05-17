---
solvedAt: "2024-10-11"
---
# Fibonacci Concurrency Buffered

- Language: go
- Original path: `go/fibonacci-concurrency-buffered.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Generate Fibonacci values through Go channels, using either buffered or unbuffered communication.

## Examples

- First generated values -> `0`, `1`, `1`, `2`, `3`.
- Closure calls keep progressing through the sequence.
- Concurrent variants should stop cleanly when the quit signal is sent.

# Solutions

Run the Fibonacci generator in a goroutine and coordinate produced values through channels.

# Edge cases

- First two Fibonacci values.
- Stopping a goroutine cleanly.
- Buffered channel capacity.
