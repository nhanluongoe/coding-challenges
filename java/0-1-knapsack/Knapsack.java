
/**
 * Problem statement: Given two integer arrays to represent weights and profits
 * of ‘N’ items, we need to find a subset of these items which will give us
 * maximum profit such that their cumulative weight is not more than a given
 * number ‘C’. Each item can only be selected once, which means either we put an
 * item in the knapsack or we skip it.
 */
public class Knapsack {
  /**
   * Time complexity: O(2^n)
   * Space complexity: O(n)
   */
  public static int solveKnapsack(int[] profits, int[] weights, int capacity) {
    return knapsackRecursive(profits, weights, capacity, 0);
  }

  public static int knapsackRecursive(int[] profits, int[] weights, int capacity, int currentIndex) {
    if (capacity <= 0 || currentIndex >= profits.length)
      return 0;

    int profit1 = 0;
    if (weights[currentIndex] <= capacity)
      profit1 = profits[currentIndex]
          + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);

    int profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

    return Math.max(profit1, profit2);
  }

  /**
   * Time complexity: O(n*c)
   * Space complexity: O(n + n*c) ~ O(n*c)
   */
  public static int solveKnapsackDP(int[] profits, int[] weights, int capacity) {
    Integer[][] dp = new Integer[profits.length][capacity + 1];
    return knapsackRecursiveDP(profits, weights, capacity, 0, dp);
  }

  public static int knapsackRecursiveDP(int[] profits, int[] weights, int capacity, int currentIndex, Integer[][] dp) {
    if (capacity <= 0 || currentIndex >= profits.length)
      return 0;

    if (dp[currentIndex][capacity] != null)
      return dp[currentIndex][capacity];

    int profit1 = 0;
    if (weights[currentIndex] <= capacity)
      profit1 = profits[currentIndex]
          + knapsackRecursiveDP(profits, weights, capacity - weights[currentIndex], currentIndex + 1, dp);

    int profit2 = knapsackRecursiveDP(profits, weights, capacity, currentIndex + 1, dp);

    dp[currentIndex][capacity] = Math.max(profit1, profit2);
    return dp[currentIndex][capacity];
  }

  public static void main(String[] args) {
    int[] profits = { 1, 6, 10, 16 };
    int[] weights = { 1, 2, 3, 5 };
    int maxProfit = solveKnapsack(profits, weights, 7);
    System.out.println("Total knapsack profit: " + maxProfit);
    maxProfit = solveKnapsack(profits, weights, 6);
    System.out.println("Total knapsack profit: " + maxProfit);

    maxProfit = solveKnapsackDP(profits, weights, 7);
    System.out.println("Total knapsack profit: " + maxProfit);
    maxProfit = solveKnapsackDP(profits, weights, 6);
    System.out.println("Total knapsack profit: " + maxProfit);
  }
}
