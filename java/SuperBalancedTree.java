import org.junit.Test;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

import static org.junit.Assert.*;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public class SuperBalancedTree {

  public static class BinaryTreeNode {

    public int value;
    public BinaryTreeNode left;
    public BinaryTreeNode right;

    public BinaryTreeNode(int value) {
      this.value = value;
    }

    public BinaryTreeNode insertLeft(int leftValue) {
      this.left = new BinaryTreeNode(leftValue);
      return this.left;
    }

    public BinaryTreeNode insertRight(int rightValue) {
      this.right = new BinaryTreeNode(rightValue);
      return this.right;
    }
  }

  private static class NodeDepthPair {
    BinaryTreeNode node;
    int depth;

    NodeDepthPair(BinaryTreeNode node, int depth) {
      this.node = node;
      this.depth = depth;
    }
  }

  public static boolean isBalanced(BinaryTreeNode treeRoot) {
    if (treeRoot == null)
      return true;

    List<Integer> depths = new ArrayList<>(3);
    Deque<NodeDepthPair> nodes = new ArrayDeque<>();
    nodes.push(new NodeDepthPair(treeRoot, 0));

    while(!nodes.isEmpty()) {
      NodeDepthPair nodeDepthPair = nodes.pop();
      BinaryTreeNode node = nodeDepthPair.node;
      int depth = nodeDepthPair.depth;

      if (node.left == null && node.right == null) {
        if (!depths.contains(depth)) depths.add(depth);
        if (depths.size() > 2 || (depths.size() == 2 && Math.abs(depths.get(0) - depths.get(1)) > 1)) return false;
      } else {
        if (node.left != null) nodes.push(new NodeDepthPair(node.left, depth + 1));
        if (node.right != null) nodes.push(new NodeDepthPair(node.right, depth + 1));
      }
    }

    return true;
  }

  // tests

  @Test
  public void fullTreeTest() {
    final BinaryTreeNode root = new BinaryTreeNode(5);
    final BinaryTreeNode a = root.insertLeft(8);
    final BinaryTreeNode b = root.insertRight(6);
    a.insertLeft(1);
    a.insertRight(2);
    b.insertLeft(3);
    b.insertRight(4);
    final boolean result = isBalanced(root);
    assertTrue(result);
  }

  @Test
  public void bothLeavesAtTheSameDepthTest() {
    final BinaryTreeNode root = new BinaryTreeNode(3);
    root.insertLeft(4).insertLeft(1);
    root.insertRight(2).insertRight(9);
    final boolean result = isBalanced(root);
    assertTrue(result);
  }

  @Test
  public void leafHeightsDifferByOneTest() {
    final BinaryTreeNode root = new BinaryTreeNode(6);
    root.insertLeft(1);
    root.insertRight(0).insertRight(7);
    final boolean result = isBalanced(root);
    assertTrue(result);
  }

  @Test
  public void leafHeightsDifferByTwoTest() {
    final BinaryTreeNode root = new BinaryTreeNode(6);
    root.insertLeft(1);
    root.insertRight(0).insertRight(7).insertRight(8);
    final boolean result = isBalanced(root);
    assertFalse(result);
  }

  @Test
  public void bothSubTreesSuperbalancedTest() {
    final BinaryTreeNode root = new BinaryTreeNode(1);
    root.insertLeft(5);
    final BinaryTreeNode b = root.insertRight(9);
    b.insertLeft(8).insertLeft(7);
    b.insertRight(5);
    final boolean result = isBalanced(root);
    assertFalse(result);
  }

  @Test
  public void bothSubTreesSuperbalancedTwoTest() {
    final BinaryTreeNode root = new BinaryTreeNode(1);
    final BinaryTreeNode a = root.insertLeft(2);
    a.insertLeft(3);
    a.insertRight(7).insertRight(8);
    root.insertRight(4).insertRight(5).insertRight(6).insertRight(9);
    final boolean result = isBalanced(root);
    assertFalse(result);
  }

  @Test
  public void threeLeavesAtDifferentLevelsTest() {
    final BinaryTreeNode root = new BinaryTreeNode(1);
    final BinaryTreeNode a = root.insertLeft(2);
    final BinaryTreeNode b = a.insertLeft(3);
    a.insertRight(4);
    b.insertLeft(5);
    b.insertRight(6);
    root.insertRight(7).insertRight(8).insertRight(9).insertRight(10);
    final boolean result = isBalanced(root);
    assertFalse(result);
  }

  @Test
  public void onlyOneNodeTest() {
    final BinaryTreeNode root = new BinaryTreeNode(1);
    final boolean result = isBalanced(root);
    assertTrue(result);
  }

  @Test
  public void treeIsLinkedListTest() {
    final BinaryTreeNode root = new BinaryTreeNode(1);
    root.insertRight(2).insertRight(3).insertRight(4);
    final boolean result = isBalanced(root);
    assertTrue(result);
  }

  public static void main(String[] args) {
    Result result = JUnitCore.runClasses(Solution.class);
    for (Failure failure : result.getFailures()) {
      System.out.println(failure.toString());
    }
    if (result.wasSuccessful()) {
      System.out.println("All tests passed.");
    }
  }
}