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
 * Problem statement: Given a binary tree and a number ‘S’, find all paths from
 * root-to-leaf such that the sum of all the node values of each path equals
 * ‘S’.
 */
public class AllTreePath {
  public static List<List<Integer>> findPaths(TreeNode root, int sum) {
    List<List<Integer>> allPaths = new ArrayList<>();

    return allPaths;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    int sum = 23;
    List<List<Integer>> result = findPaths(root, sum);
    System.out.println("Tree path with sum: " + sum + ": " + result);
  }
}
