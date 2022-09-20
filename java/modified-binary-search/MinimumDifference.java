/**
 * Problem statement: Given an array of numbers sorted in ascending order, find
 * the element in the array that has the minimum difference with the given
 * ‘key’.
 */
public class MinimumDifference {
  public static int search(int[] arr, int key) {
    if (key > arr[arr.length - 1])
      return arr[arr.length - 1];
    if (key < arr[0])
      return arr[0];

    int start = 0, end = arr.length - 1;
    while (start <= end) {
      int middle = start + (end - start) / 2;
      if (key > arr[middle]) {
        start = middle + 1;
      } else if (key < arr[middle]) {
        end = middle - 1;
      } else {
        return arr[middle];
      }
    }

    if (Math.abs(key - arr[start]) > Math.abs(key - arr[end]))
      return arr[end];
    else
      return arr[start];
  }

  public static void main(String[] args) {
    System.out.println(search(new int[] { 4, 6, 10 }, 7));
    System.out.println(search(new int[] { 4, 6, 10 }, 4));
    System.out.println(search(new int[] { 1, 3, 8, 10, 15 }, 12));
    System.out.println(search(new int[] { 4, 6, 10 }, 17));
  }

}
