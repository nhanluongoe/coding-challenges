import java.util.*;

/**
 * Problem statement: Given ‘M’ sorted arrays, find the smallest range that
 * includes at least one number from each of the ‘M’ lists.
 */
public class SmallestRange {
  public static int[] findSmallestRange(List<Integer[]> lists) {

    return new int[] { -1, -1 };
  }

  public static int void main(String[] args) {
    Integer[] l1 = new Integer[] {1, 5, 8};
    Integer[] l2 = new Integer[] {4, 12};
    Integer[] l3 = new Integer[] {7, 8, 10};
    List<Integer[]> lists = new ArrayList<>();
    lists.add(l1);
    lists.add(l2);
    lists.add(l3);
    int[] result = findSmallestRange(lists);
    System.out.print("Smallest range is: [" + result[0] + ", " + result[1] + "]");
  }
}
