/**
 * Problem statement: Given a set of positive numbers, partition the set into
 * two subsets with minimum difference between their subset sums.
 */
public class PartitionSetWithMinimumDiff {
  public static int canPartition(int[] nums) {

    return -1;
  }

  public static void main(String[] args) {
    System.out.println(canPartition(new int[] { 1, 2, 3, 9 }));
    System.out.println(canPartition(new int[] { 1, 2, 7, 1, 5 }));
    System.out.println(canPartition(new int[] { 1, 3, 100, 4 }));
  }
}
