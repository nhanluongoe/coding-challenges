---
solvedAt: "2024-07-24"
---
# Delete Node

- Language: java
- Original path: `java/DeleteNode.java`
- Source: Algorithm practice
- Solution: `DeleteNode.java`

# Problems

Given direct access to a node inside a singly linked list, delete that node without being given the list head. Because the previous node is unavailable, copy the next node's value into the current node and bypass the next node. This technique works only when the node to delete is not the tail. If the target is the last node, the implementation should reject the operation.

## Examples

- List `1 -> 2 -> 3 -> 4`, delete node with value `2` -> `1 -> 3 -> 4`.
- Deleting the head by reference copies the next node into the head.
- Deleting the last node -> error for this implementation.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.
Time complexity: O(1)
Space complexity: O(1)

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
