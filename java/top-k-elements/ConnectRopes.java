import java.util.*;

/**
 * Problem statement: Given ‘N’ ropes with different lengths, we need to connect
 * these ropes into one big rope with minimum cost. The cost of connecting two
 * ropes is equal to the sum of their lengths.
 */
public class ConnectRopes {
  public static int minimumCostToConnectRopes(int[] ropeLengths) {

    return -1;
  }

  public static void main(String[] args) {
    int result = minimumCostToConnectRopes(new int[] { 1, 3, 11, 5 });
    System.out.println("Minimum cost to connect ropes: " + result);

    result = minimumCostToConnectRopes(new int[] { 3, 4, 5, 6 });
    System.out.println("Minimum cost to connect ropes: " + result);

    result = minimumCostToConnectRopes(new int[] { 1, 3, 11, 5, 2 });
    System.out.println("Minimum cost to connect ropes: " + result);
  }
}
