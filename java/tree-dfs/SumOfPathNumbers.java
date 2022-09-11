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
 * Problem statement: Given a binary tree where each node can only have a digit
 * (0-9) value, each root-to-leaf path will represent a number. Find the total
 * sum of all the numbers represented by all paths.
 */
public class SumOfPathNumbers {
  public static int findSumOfPathNumbers(TreeNode root) {
    return sumOfPathRecursive(root, 0);
  }

  public static int sumOfPathRecursive(TreeNode currentNode, int pathSum) {
    if (currentNode == null)
      return 0;

    pathSum = 10 * pathSum + currentNode.value;

    if (currentNode.left == null && currentNode.right == null)
      return pathSum;

    return sumOfPathRecursive(currentNode.left, pathSum) + sumOfPathRecursive(currentNode.right, pathSum);
  }

  public static int findSumOfPathNumbers1(TreeNode root) {
    List<List<Integer>> allPaths = new ArrayList<>();
    List<Integer> currentPath = new ArrayList<>();
    findPathRecursive1(root, currentPath, allPaths);

    int sum = 0;
    for (List<Integer> path : allPaths) {
      for (int i = 0; i < path.size(); i++) {
        sum += path.get(i) * Math.pow(10, path.size() - i - 1);
      }
    }

    return sum;
  }

  public static void findPathRecursive1(TreeNode currentNode, List<Integer> currentPath, List<List<Integer>> allPaths) {
    if (currentNode == null)
      return;

    currentPath.add(currentNode.value);

    if (currentNode.left == null && currentNode.right == null) {
      allPaths.add(new ArrayList<>(currentPath));
    } else {
      findPathRecursive1(currentNode.left, currentPath, allPaths);
      findPathRecursive1(currentNode.right, currentPath, allPaths);
    }

    currentPath.remove(currentPath.size() - 1);
  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(0);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(1);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(5);
    System.out.println("Total Sum of Path Numbers: " + findSumOfPathNumbers(root));
    System.out.println("Total Sum of Path Numbers: " + findSumOfPathNumbers1(root));
  }
}
