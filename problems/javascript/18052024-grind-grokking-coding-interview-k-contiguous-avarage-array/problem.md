---
solvedAt: "2024-05-18"
---
# K Contiguous Average Array

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/k-contiguous-avarage-array.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Given an array and a fixed window size `k`, compute the average value of every contiguous subarray of length `k`. Each window should slide one position at a time, so consecutive windows share most of their elements. Return the averages in the same order the windows appear. The input should have at least `k` values unless invalid input handling is part of the exercise.

## Examples

- `[1, 3, 2, 6, -1]`, `k = 3` -> averages `[2, 11/3, 7/3]`.
- `k = 1` -> each value is its own average.
- `k` equal to the array length -> one average.

# Solutions

Keep a fixed-size sliding-window sum, subtracting the outgoing value and adding the incoming value as the window advances.

# Edge cases

- `k` equals one.
- `k` equals the array length.
- Negative values in the input.
