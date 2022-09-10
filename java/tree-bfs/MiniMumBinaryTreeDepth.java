import java.util.*;

class TreeNode {
  int value = 0;
  TreeNode left, right;

  public TreeNode(int value) {
    this.value = value;
  }
}

/**
 * Problem statement: Find the minimum depth of a binary tree. The minimum depth
 * is the number of nodes along the shortest path from the root node to the
 * nearest leaf node.
 */
public class MiniMumBinaryTreeDepth {
  public static int findDepth(TreeNode root) {
    if (root == null)
      return 0;

    int minDepth = 0;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
      minDepth++;
      int levelSize = queue.size();
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        if (currentNode.right == null && currentNode.left == null)
          return minDepth;
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
    }

    return minDepth;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    System.out.println("Min depth: " + findDepth(root));
    root.left.left = new TreeNode(9);
    root.right.left.left = new TreeNode(11);
    System.out.println("Min depth: " + findDepth(root));
  }

}
