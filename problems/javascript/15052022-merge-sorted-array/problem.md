---
solvedAt: "2022-05-15"
---
# Merge Sorted Array

- Language: javascript
- Original path: `javascript/15052022-merge-sorted-array.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given two already sorted arrays, return a new sorted array containing all values from both inputs. The input arrays may be empty and may have different lengths. Duplicates should remain in the output. The function should merge by comparing the next available values from each array rather than sorting everything again after concatenation.

## Examples

- `[3, 4, 6]` and `[1, 2, 5]` -> `[1, 2, 3, 4, 5, 6]`.
- `[]` and `[]` -> `[]`.
- `[1, 2]` and `[]` -> `[1, 2]`.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
