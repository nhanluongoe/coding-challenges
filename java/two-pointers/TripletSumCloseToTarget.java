/**
 * Constraint: If there're more than one such triplets, return the triplet with smallest sum
 */
public class TripletSumCloseToTarget {
  public static int searchTriplet(int[] arr, int targetSum) {

    return -1;
  }
  
  public static void main() {
    System.out.println(searchTriplet(new int[]{-2, 0, 1, 2}, 2)); // -2, 1, 2 => 1
    System.out.println(searchTriplet(new int[]{-3, -1, 1, 2}, 1)); // -3, 1, 2 => 0
    System.out.println(searchTriplet(new int[]{1, 0, 1, 1}, 100)); // 1, 1, 1 => 3
  }
}
