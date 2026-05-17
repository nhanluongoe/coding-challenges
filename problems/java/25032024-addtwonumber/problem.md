---
solvedAt: "2024-03-25"
---
# Add Two Numbers

- Language: java
- Original path: `java/AddTwoNumber.java`
- Source: Algorithm practice
- Solution: `AddTwoNumber.java`

# Problems

Given two non-empty linked lists representing non-negative integers in reverse digit order, add the two numbers and return the sum as a linked list in the same reverse order. Each node stores one digit. Carry values must propagate through the lists, and if one list is shorter, the remaining digits of the longer list still participate in the addition. A final carry should create a new node.

## Examples

- `342` plus `465` represented as reversed lists -> `807` represented as `7 -> 0 -> 8`.
- `999` plus `99` -> `1098`, carrying into a new final node.
- One list is shorter -> continue adding the remaining digits and carry.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
