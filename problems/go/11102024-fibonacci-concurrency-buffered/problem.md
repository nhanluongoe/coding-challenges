---
solvedAt: "2024-10-11"
---
# Fibonacci Concurrency Buffered

- Language: go
- Original path: `go/fibonacci-concurrency-buffered.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Generate Fibonacci numbers using Go channels. The generator should produce the sequence in order and communicate values through the channel setup used by the implementation. Buffered and unbuffered variants should demonstrate the appropriate channel behavior. The program should also have a way to stop or finish cleanly instead of leaving goroutines blocked forever.

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
