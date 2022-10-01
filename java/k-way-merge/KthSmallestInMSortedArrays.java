import java.util.*;

/**
 * Problem statement: Given ‘M’ sorted arrays, find the K’th smallest number
 * among all the arrays.
 */
public class KthSmallestInMSortedArrays {
  public static int findKthSmallest(List<Integer[]> lists, int k) {

    return -1;
  }

  public static void main(String[] args) {
    Integer[] l1 = new Integer[]{2, 6, 8};
    Integer[] l2 = new Integer[]{3, 6, 7};
    Integer[] l3 = new Integer[]{1, 3, 4};
    List<Integer[]> lists = new ArrayList<>();
    lists.add(l1);
    lists.add(l2);
    lists.add(l3)
    int result = findKthSmallest(lists, 5);
    System.out.println("Kth smallest number is: " + result);
  }
}
