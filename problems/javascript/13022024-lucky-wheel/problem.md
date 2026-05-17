---
solvedAt: "2024-02-13"
---
# Lucky Wheel

- Language: javascript
- Original path: `javascript/lucky-wheel.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Randomly choose a gift according to configured probabilities.

# Solutions

Convert weights into cumulative ranges and pick the first range containing a generated random number.

# Edge cases

- Probabilities do not sum cleanly.
- Zero-probability gifts.
- Random value at a boundary.
