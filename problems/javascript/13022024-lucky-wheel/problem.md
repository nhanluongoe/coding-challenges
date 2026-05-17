---
solvedAt: "2024-02-13"
---
# Lucky Wheel

- Language: javascript
- Original path: `javascript/lucky-wheel.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a set of gifts and their probabilities or weights, randomly select one gift according to that distribution. Gifts with larger weights should be selected more often over many runs, while zero-weight gifts should never be selected. Convert the weights into non-overlapping ranges so each random value maps to exactly one gift.

## Examples

- A gift with probability `0` is never selected.
- A random value inside a gift range -> returns that gift.
- Boundary random values should map to exactly one gift.

# Solutions

Convert weights into cumulative ranges and pick the first range containing a generated random number.

# Edge cases

- Probabilities do not sum cleanly.
- Zero-probability gifts.
- Random value at a boundary.
