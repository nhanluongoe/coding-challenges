---
solvedAt: "2024-12-30"
---
# Largest Stack

- Language: java
- Original path: `java/LargestStack.java`
- Source: Algorithm practice
- Solution: `LargestStack.java`

# Problems

Implement a stack that can return the current minimum or maximum in constant time.

# Solutions

Store each pushed value with the best value seen so far, or maintain an auxiliary stack of extrema.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- Pop from an empty stack, if the API allows it.
- Duplicate extrema.
- Extremum changes after pop.
