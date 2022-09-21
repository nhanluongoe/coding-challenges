import java.util.*;

/**
 * Problem statement: Given ‘N’ ropes with different lengths, we need to connect
 * these ropes into one big rope with minimum cost. The cost of connecting two
 * ropes is equal to the sum of their lengths.
 */
public class ConnectRopes {
  public static int minimumCostToConnectRopes(int[] ropeLengths) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>((a, b) -> a - b);

    for (int i = 0; i < ropeLengths.length; i++)
      minHeap.offer(ropeLengths[i]);

    int minCost = 0, temp = 0;
    while (minHeap.size() > 1) {
      temp = minHeap.poll() + minHeap.poll();
      minHeap.offer(temp);
      minCost += temp;
    }

    return minCost;
  }

  public static void main(String[] args) {
    int result = minimumCostToConnectRopes(new int[] { 1, 3, 11, 5 });
    System.out.println("Minimum cost to connect ropes: " + result);

    // result = minimumCostToConnectRopes(new int[] { 3, 4, 5, 6 });
    // System.out.println("Minimum cost to connect ropes: " + result);

    // result = minimumCostToConnectRopes(new int[] { 1, 3, 11, 5, 2 });
    // System.out.println("Minimum cost to connect ropes: " + result);
  }
}
