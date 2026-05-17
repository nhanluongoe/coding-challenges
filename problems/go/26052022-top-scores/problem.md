---
solvedAt: "2022-05-26"
---
# Top Scores

- Language: go
- Original path: `go/260522-top-scores.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Given unordered scores and the highest possible score, return the scores sorted from highest to lowest. Scores are bounded integers, so the solution can count how many times each score appears instead of using comparison sorting. Duplicate scores must appear the same number of times in the output. Empty input should produce an empty sorted list.

## Examples

- Scores `[37, 89, 41, 65, 91, 53]`, max `100` -> `[91, 89, 65, 53, 41, 37]`.
- `[]` -> `[]`.
- `[100, 100, 0]` -> `[100, 100, 0]`.

# Solutions

Count occurrences of each score, then emit scores from highest to lowest according to their counts.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- No scores.
- All scores equal.
- Scores at zero and at the maximum.
