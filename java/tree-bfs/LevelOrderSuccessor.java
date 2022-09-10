import java.util.*;

class TreeNode {
  int value = 0;
  TreeNode left, right;

  public TreeNode(int value) {
    this.value = value;
  }
}

/**
 * Problem statement: Given a binary tree and a node, find the level order
 * successor of the given node in the tree. The level order successor is the
 * node that appears right after the given node in the level order traversal.
 */
public class LevelOrderSuccessor {
  public static TreeNode findSuccessor(TreeNode root, int key) {
    return null;
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    root.left.left = new TreeNode(9);
    TreeNode result = findSuccessor(root, 12);
    if (result != null)
      System.out.println(result.value);
    result = findSuccessor(root, 9);
    if (result != null)
      System.out.println(result.value);
  }
}
