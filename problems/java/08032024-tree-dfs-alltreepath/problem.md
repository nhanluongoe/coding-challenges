---
solvedAt: "2024-03-08"
---

# Tree Dfs Alltreepath

- Language: java
- Original path: `java/tree-dfs/AllTreePath.java`
- Solution: `AllTreePath.java`

## Notes

### Note 1

Problem statement: Given a binary tree and a number ‘S’, find all paths from
root-to-leaf such that the sum of all the node values of each path equals
‘S’.

### Note 2

||Time complexity: O(N^2) Where ‘N’ is the total number of nodes in the tree.
This is due to the
fact that we traverse each node once (which will take O(N), and for
every leaf node we might have to store its path which will take O(N).
|| Space complexity: O(N * logN). Maximum leaves is N/2 => Maximum paths
O(N/2) = O(N). Each path can have at most logN nodes
