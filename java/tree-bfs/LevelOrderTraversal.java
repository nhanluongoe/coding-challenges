import java.util.*;

class TreeNode {
  int value = 0;
  TreeNode left;
  TreeNode right;

  public TreeNode(int value) {
    this.value = value;
  }
}

public class LevelOrderTraversal {
  /**
   * Problem statement: Given a binary tree, populate an array to represent its
   * level-by-level traversal. You should populate the values of all nodes of each
   * level from left to right in separate sub-arrays.
   */

  /**
   * Time complexity: O(n) we have "n" nodes
   * Space complexity: O(n)
   */
  public static List<List<Integer>> traverse(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();

    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      List<Integer> currentLevel = new ArrayList<>(levelSize);
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        currentLevel.add(currentNode.value);
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
      result.add(currentLevel);
    }

    return result;
  }

  /**
   * Problem statement: Given a binary tree, populate an array to represent its
   * level-by-level traversal in reverse order, i.e., the lowest level comes
   * first. You should populate the values of all nodes in each level from left to
   * right in separate sub-arrays.
   */

  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static List<List<Integer>> reverseTraverse(TreeNode root) {
    List<List<Integer>> result = new LinkedList<>();

    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      List<Integer> currentLevel = new ArrayList<>();
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        currentLevel.add(currentNode.value);
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
      result.add(0, currentLevel);
    }

    return result;
  }

  /**
   * Problem statement: Given a binary tree, populate an array to represent the
   * averages of all of its levels.
   */

  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  public static List<Double> findLevelAverages(TreeNode root) {
    List<Double> result = new ArrayList<>();

    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
      int levelSize = queue.size();
      double levelSum = 0;
      for (int i = 0; i < levelSize; i++) {
        TreeNode currentNode = queue.poll();
        levelSum += currentNode.value;
        if (currentNode.left != null)
          queue.offer(currentNode.left);
        if (currentNode.right != null)
          queue.offer(currentNode.right);
      }
      double levelAverage = levelSum / levelSize;
      result.add(levelAverage);
    }

    return result;
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

    List<List<Integer>> reverseResult = reverseTraverse(root);
    System.out.println(reverseResult);

    root.left.right = new TreeNode(2);
    List<Double> levelAverages = findLevelAverages(root);
    System.out.println("Level average: " + levelAverages);
  }
}
