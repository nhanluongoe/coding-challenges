---
solvedAt: "2024-07-05"
---
# Union By

- Language: javascript
- Original path: `javascript/050724-union-by.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Implement a set-style operation over arrays using either an iteratee or comparator to decide when values are equivalent. Intersection variants should return values that appear in every input according to that equivalence rule. Union variants should return one representative for each distinct equivalence key across all inputs. Preserve the expected order from the source arrays.

## Examples

- `intersectionBy(Math.floor, [1.2, 2.4], [2.1, 3.2])` -> `[2.4]`.
- `unionBy(Math.floor, [1.2], [1.4, 2.1])` -> values for keys `1` and `2`.
- Any empty intersection input -> `[]`.

# Solutions

Track transformed keys or compare candidates across arrays while preserving the expected result order.

# Edge cases

- Empty arrays.
- Duplicate equivalent values.
- Objects compared by custom logic.
