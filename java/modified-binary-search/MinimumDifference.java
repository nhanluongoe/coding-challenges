/**
 * Problem statement: Given an array of numbers sorted in ascending order, find
 * the element in the array that has the minimum difference with the given
 * ‘key’.
 */
public class MinimumDifference {
  public static int search(int[] arr, int key) {

    return -1;
  }

  public static void main(String[] args) {
    System.out.println(search(new int[] { 4, 6, 10 }, 7));
    System.out.println(search(new int[] { 4, 6, 10 }, 4));
    System.out.println(search(new int[] { 1, 3, 8, 10, 15 }, 12));
    System.out.println(search(new int[] { 4, 6, 10 }, 17));
  }

}
