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
 * Problem statement: Given a binary tree, populate an array to represent its
 * level-by-level traversal. You should populate the values of all nodes of each
 * level from left to right in separate sub-arrays.
 */
public class LevelOrderTraversal {
  public static List<List<Integer>> traverse(TreeNode root) {

  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    List<List<Integer>> result = traverse(root);
    System.out.println(result);
  }
}
