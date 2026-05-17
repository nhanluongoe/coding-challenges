---
solvedAt: "2022-05-25"
---
# Find Duplicate

- Language: javascript
- Original path: `javascript/250522-find-duplication.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Find a repeated value in an array whose values are constrained to a known range.

# Solutions

Use either a seen set or a cycle-detection/counting approach depending on the space constraint.
Time complexity: O(nlogn)
Space complexity: O(n)

# Edge cases

- Duplicate appears more than twice.
- Smallest or largest allowed value is duplicated.
- Input has the minimum valid length.
