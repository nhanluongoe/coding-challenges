import java.util.*;

/**
 * Problem statement: Given a set of investment projects with their respective
 * profits, we need to find the most profitable projects. We are given an
 * initial capital and are allowed to invest only in a fixed number of projects.
 * Our goal is to choose projects that give us the maximum profit.
 * 
 * We can start an investment project only when we have the required capital.
 * Once a project is selected, we can assume that its profit has become our
 * capital.
 */
public class MaximizeCapital {
  public static int findMaximumCapital(int[] capital, int[] profits, int numberOfProjects, int initialCapital) {
    int n = profits.length;

    // These heaps will store the index from original array
    PriorityQueue<Integer> minCapitalHeap = new PriorityQueue<>(n, (i1, i2) -> capital[i1] - capital[i2]);
    PriorityQueue<Integer> maxProfitHeap = new PriorityQueue<>(n, (i1, i2) -> profits[i2] - profits[i1]);

    // Add all profits to min heap
    for (int i = 0; i < n; i++)
      minCapitalHeap.offer(i);

    int availableCapital = initialCapital;
    // find totals of 'numberOfProjects' best projects
    for (int i = 0; i < numberOfProjects; i++) {
      // find all the projects that can be selected within available capacity
      while (!minCapitalHeap.isEmpty() && capital[minCapitalHeap.peek()] <= availableCapital) {
        // insert them into max heap
        maxProfitHeap.add(minCapitalHeap.poll());
      }

      // terminate if there's no project that can be selected within available capacity
      if (maxProfitHeap.isEmpty())
        break;

      availableCapital += profits[maxProfitHeap.poll()];
    }

    return availableCapital;
  }

  public static void main(String[] args) {
    int result = findMaximumCapital(new int[] { 0, 1, 2 }, new int[] { 1, 2, 3 }, 2, 1);
    System.out.println("Maximum capital: " + result);
    result = findMaximumCapital(new int[] { 0, 1, 2, 3 }, new int[] { 1, 2, 3, 5 }, 3, 0);
    System.out.println("Maximum capital: " + result);
  }

}
