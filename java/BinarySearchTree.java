import java.util.*;

// import org.junit.Test;
// import org.junit.runner.JUnitCore;
// import org.junit.runner.Result;
// import org.junit.runner.notification.Failure;

// import static org.junit.Assert.*;

public class BinarySearchTree {

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

    private static class TreeNodeAndBoundary {
        BinaryTreeNode node;
        int upperBound;
        int lowerBound;

        TreeNodeAndBoundary(BinaryTreeNode node, int upperBound, int lowerBound) {
            this.node = node;
            this.upperBound = upperBound;
            this.lowerBound = lowerBound;
        }
    }

    public static boolean isBinarySearchTree(BinaryTreeNode root) {

        Deque<TreeNodeAndBoundary> nodes = new ArrayDeque<>();
        nodes.push(new TreeNodeAndBoundary(root, Integer.MAX_VALUE, Integer.MIN_VALUE));

        while(!nodes.isEmpty()) {
            TreeNodeAndBoundary nodeAndBoundary = nodes.pop();
            BinaryTreeNode node = nodeAndBoundary.node;
            int upperBound = nodeAndBoundary.upperBound;
            int lowerBound = nodeAndBoundary.lowerBound;

            if (node.value <= lowerBound || node.value >= upperBound) {
                return false;
            }

            if (node.left != null) {
                nodes.push(new TreeNodeAndBoundary(node.left, node.value, lowerBound));
            }
            if (node.right != null) {
                nodes.push(new TreeNodeAndBoundary(node.right, upperBound, node.value));
            }

        }

        return true;
    }

    // tests

    @Test
    public void validFullTreeTest() {
        final BinaryTreeNode root = new BinaryTreeNode(50);
        final BinaryTreeNode a = root.insertLeft(30);
        a.insertLeft(10);
        a.insertRight(40);
        final BinaryTreeNode b = root.insertRight(70);
        b.insertLeft(60);
        b.insertRight(80);
        final boolean result = isBinarySearchTree(root);
        assertTrue(result);
    }

    @Test
    public void bothSubtreesValidTest() {
        final BinaryTreeNode root = new BinaryTreeNode(50);
        final BinaryTreeNode a = root.insertLeft(30);
        a.insertLeft(20);
        a.insertRight(60);
        final BinaryTreeNode b = root.insertRight(80);
        b.insertLeft(70);
        b.insertRight(90);
        final boolean result = isBinarySearchTree(root);
        assertFalse(result);
    }

    @Test
    public void descendingLinkedListTest() {
        final BinaryTreeNode root = new BinaryTreeNode(50);
        root.insertLeft(40).insertLeft(30).insertLeft(20).insertLeft(10);
        final boolean result = isBinarySearchTree(root);
        assertTrue(result);
    }

    @Test
    public void outOfOrderLinkedListTest() {
        final BinaryTreeNode root = new BinaryTreeNode(50);
        root.insertRight(70).insertRight(60).insertRight(80);
        final boolean result = isBinarySearchTree(root);
        assertFalse(result);
    }

    @Test
    public void oneNodeTreeTest() {
        final BinaryTreeNode root = new BinaryTreeNode(50);
        final boolean result = isBinarySearchTree(root);
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