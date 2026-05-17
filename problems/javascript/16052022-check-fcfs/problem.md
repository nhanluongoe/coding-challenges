---
solvedAt: "2022-05-16"
---
# First Come First Served

- Language: javascript
- Original path: `javascript/16052022-check-fcfs.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Verify that served orders preserve the relative order from take-out and dine-in queues.

# Solutions

Walk the served list and consume from the front of whichever source queue matches each served order.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- One source queue is empty.
- Served order has missing or extra orders.
- Duplicate order IDs.
