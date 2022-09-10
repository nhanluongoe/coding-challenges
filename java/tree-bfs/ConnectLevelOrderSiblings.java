import java.util.*;

class TreeNode {
  int value = 0;
  TreeNode left, right, next;

  public TreeNode(int value) {
    this.value = value;
  }

  public void printOrderLevel() {
    TreeNode nextLevelRoot = this;
    while (nextLevelRoot != null) {
      TreeNode currentNode = nextLevelRoot;
      nextLevelRoot = null;
      while (currentNode != null) {
        System.out.println(currentNode.value + " ");
        if (nextLevelRoot == null) {
          if (currentNode.left != null)
            nextLevelRoot = currentNode.left;
          else if (currentNode.right != null)
            nextLevelRoot = currentNode.right;
        }
        currentNode = currentNode.next;
      }
      System.out.println();
    }
  }
}

/**
 * Problem statement: Given a binary tree, connect each node with its level
 * order successor. The last node of each level should point to a null node.
 */
public class ConnectLevelOrderSiblings {
  public static void connect(TreeNode root) {

  }

  public static void main(String[] args) {
    TreeNode root = new TreeNode(12);
    root.left = new TreeNode(7);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(9);
    root.right.left = new TreeNode(10);
    root.right.right = new TreeNode(5);
    connect(root);
    root.printOrderLevel();
  }
}
