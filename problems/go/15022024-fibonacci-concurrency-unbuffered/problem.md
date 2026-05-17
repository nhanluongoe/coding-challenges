---
solvedAt: "2024-02-15"
---
# Fibonacci Concurrency Unbuffered

- Language: go
- Original path: `go/fibonacci-concurrency-unbuffered.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Generate Fibonacci values through Go channels, using either buffered or unbuffered communication.

# Solutions

Run the Fibonacci generator in a goroutine and coordinate produced values through channels.

# Edge cases

- First two Fibonacci values.
- Stopping a goroutine cleanly.
- Buffered channel capacity.
