---
solvedAt: "2022-05-26"
---
# Top Scores

- Language: javascript
- Original path: `javascript/260522-top-score.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Sort numeric scores in descending order when the highest possible score is known.

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
