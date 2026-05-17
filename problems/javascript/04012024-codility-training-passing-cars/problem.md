---
solvedAt: "2024-01-04"
---
# Passing Cars

- Language: javascript
- Original path: `javascript/codility-training/passing-cars.ts`
- Source: Codility-style
- Solution: `code.ts`

# Problems

Given eastbound and westbound cars in order, count all passing pairs subject to the required limit.

## Examples

- `[0, 1, 0, 1, 1]` -> `5` passing pairs.
- `[1, 1, 1]` -> `0`.
- A count above the limit -> `-1`.

# Solutions

Scan once, count eastbound cars seen so far, and add that count whenever a westbound car appears.

# Edge cases

- All cars travel the same direction.
- Pair count exceeds the allowed limit.
- Empty or single-car input.
