---
solvedAt: "2024-12-21"
---
# Fruits Into Baskets

- Language: java
- Original path: `java/sliding-window/FruitsIntoBasket.java`
- Source: Algorithm practice
- Solution: `FruitsIntoBasket.java`

# Problems

Find the longest contiguous stretch containing at most two fruit types.

# Solutions

Use the same sliding-window frequency map as the longest-substring-with-k-distinct problem, with `k = 2`.

# Edge cases

- One fruit type.
- Frequent type changes.
- Best window reaches the end.
