---
solvedAt: "2022-05-26"
---
# Top Scores

- Language: go
- Original path: `go/260522-top-scores.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Sort numeric scores in descending order when the highest possible score is known.

# Solutions

Count occurrences of each score, then emit scores from highest to lowest according to their counts.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- No scores.
- All scores equal.
- Scores at zero and at the maximum.
