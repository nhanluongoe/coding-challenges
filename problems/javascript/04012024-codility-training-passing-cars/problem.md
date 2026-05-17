---
solvedAt: "2024-01-04"
---
# Passing Cars

- Language: javascript
- Original path: `javascript/codility-training/passing-cars.ts`
- Source: Codility-style
- Solution: `code.ts`

# Problems

Given an array where each value represents a car traveling east or west, count how many passing pairs occur. A passing pair is formed when an eastbound car appears before a westbound car. The count should be accumulated without enumerating every pair one by one. If the problem defines an upper limit for the count, return the specified overflow value when that limit is exceeded.

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
