
/**
 * Problem statement: Given two integer arrays to represent weights and profits
 * of ‘N’ items, we need to find a subset of these items which will give us
 * maximum profit such that their cumulative weight is not more than a given
 * number ‘C’. Each item can only be selected once, which means either we put an
 * item in the knapsack or we skip it.
 */
public class Knapsack {
  public static int solveKnapsack(int[] profits, int[] weights, int capacity) {

    return -1;
  }

  public static void main(String[] args) {
    int[] profits = { 1, 6, 10, 16 };
    int[] weights = { 1, 2, 3, 55 };
    int maxProfit = solveKnapsack(profits, weights, 7);
    System.out.println("Total knapsack profit: " + maxProfit);
    maxProfit = solveKnapsack(profits, weights, 6);
    System.out.println("Total knapsack profit: " + maxProfit);
  }
}
