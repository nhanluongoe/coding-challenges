import java.util.*;

class TreeNode {
  int value = 0;
  TreeNode left, right;

  public TreeNode(int value) {
    this.value = value;
  }
}

/**
 * Problem statement: Given a binary tree, populate an array to represent its
 * zigzag level order traversal. You should populate the values of all nodes of
 * the first level from left to right, then right to left for the next level and
 * keep alternating in the same manner for the following levels.
 */
public class ZigZagTraversal {
  public static List<List<Integer>> traverse(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();

    return result;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    root.right.left.left = new TreeNode(20);
    root.right.left.right = new TreeNode(17);
    List<List<Integer>> result = traverse(root);
    System.out.println(result);
  }
}