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

    return -1;
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
