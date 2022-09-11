import java.util.*;

class TreeNode {
  int value = 0;
  TreeNode left;
  TreeNode right;

  public TreeNode(int value) {
    this.value = value;
  }
}

/**
 * Problem statement: Given a binary tree and a number ‘S’, find if the tree has
 * a path from root-to-leaf such that the sum of all the node values of that
 * path equals ‘S’.
 */
public class TreePathSum {
  /**
   * Time complexity: O(n) visit n nodes
   * Space complexity: O(n) store the recursion stack
   */
  public static boolean hasPath(TreeNode root, int sum) {
    if (root == null)
      return false;

    if (root.value == sum && root.right == null && root.left == null)
      return true;

    return hasPath(root.right, sum - root.value) || hasPath(root.left, sum - root.value);
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    System.out.println("Tree has path: " + hasPath(root, 23));
    System.out.println("Tree has path: " + hasPath(root, 16));
  }
}
