---
solvedAt: "2022-05-21"
---
# Product of Other Numbers

- Language: javascript
- Original path: `javascript/210522-product-of-other-number.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given an array of integers, build a new array where each output position contains the product of every input value except the one at that same index. The current value must be excluded from its own product. Avoid division unless the variant explicitly allows it, because zeros make division-based approaches fragile. The result should preserve the original order and contain one product per input value.

## Examples

- `[1, 2, 3]` -> `[6, 3, 2]`.
- `[1, 0, 3]` -> `[0, 3, 0]`.
- `[0, 0, 3]` -> `[0, 0, 0]`.

# Solutions

Build prefix products from the left and suffix products from the right, multiplying them without using division.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- One or more zeros.
- Negative numbers.
- Arrays with fewer than two numbers.
