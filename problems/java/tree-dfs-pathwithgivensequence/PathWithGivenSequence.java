class TreeNode {
  int value = 0;
  TreeNode left;
  TreeNode right;

  public TreeNode(int value) {
    this.value = value;
  }
}

/**
 * Problem statement: Given a binary tree and a number sequence, find if the
 * sequence is present as a root-to-leaf path in the given tree.
 */
public class PathWithGivenSequence {
  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  public static boolean hasPath(TreeNode root, int[] sequence) {
    if (root == null)
      return sequence.length == 0;

    return findPathRecursive(root, sequence, 0);
  }

  public static boolean findPathRecursive(TreeNode currentNode, int[] sequence,
      int sequenceIndex) {
    if (currentNode == null)
      return false;

    if (sequenceIndex >= sequence.length || currentNode.value != sequence[sequenceIndex])
      return false;

    if (currentNode.left == null && currentNode.right == null && sequenceIndex == sequence.length - 1)
      return true;

    return findPathRecursive(currentNode.left, sequence, sequenceIndex + 1)
        || findPathRecursive(currentNode.right, sequence, sequenceIndex + 1);
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(0);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(1);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(5);

    System.out.println("Tree has path sequence: " + hasPath(root, new int[] { 1, 0, 7 }));
    System.out.println("Tree has path sequence: " + hasPath(root, new int[] { 1, 1, 6 }));
  }
}
