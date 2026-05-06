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
  /**
   * ||Time complexity: O(N^2) Where ‘N’ is the total number of nodes in the tree.
   * This is due to the
   * fact that we traverse each node once (which will take O(N), and for
   * every leaf node we might have to store its path which will take O(N).
   * || Space complexity: O(N * logN). Maximum leaves is N/2 => Maximum paths
   * O(N/2) = O(N). Each path can have at most logN nodes
   */
  public static List<List<Integer>> findPaths(TreeNode root, int sum) {
    List<List<Integer>> allPaths = new ArrayList<>();
    List<Integer> currentPath = new ArrayList<>();
    findPathsRecursive(root, currentPath, allPaths, sum);
    return allPaths;
  }

  public static void findPathsRecursive(TreeNode currentNode, List<Integer> currentPath, List<List<Integer>> allPaths,
      int sum) {
    if (currentNode == null)
      return;

    currentPath.add(currentNode.value);

    if (currentNode.value == sum && currentNode.right == null && currentNode.left == null) {
      allPaths.add(new ArrayList<>(currentPath));
    } else {
      findPathsRecursive(currentNode.left, currentPath, allPaths, sum - currentNode.value);
      findPathsRecursive(currentNode.right, currentPath, allPaths, sum - currentNode.value);
    }

    currentPath.remove(currentPath.size() - 1);
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(4);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    int sum = 23;
    List<List<Integer>> result = findPaths(root, sum);
    System.out.println("Tree path with sum: " + sum + ": " + result);
  }
}
