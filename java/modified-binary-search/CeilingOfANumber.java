/**
 * Problem statement: Given an array of numbers sorted in an ascending order,
 * find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be
 * the smallest element in the given array greater than or equal to the ‘key’.
 * 
 * Write a function to return the index of the ceiling of the ‘key’. If there
 * isn’t any ceiling return -1.
 */
public class CeilingOfANumber {
  public static int searchCeilingOfANumber(int[] arr, int key) {
    if (key > arr[arr.length - 1])
      return -1;

    int start = 0;
    int end = arr.length - 1;
    while (start <= end) {
      int middle = start + (end - start) / 2;
      if (arr[middle] == key)
        return middle;
      if (arr[middle] > key) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return start;
  }

  public static void main(String[] args) {
    System.out.println(searchCeilingOfANumber(new int[] { 4, 6, 10 }, 6));
    System.out.println(searchCeilingOfANumber(new int[] { 1, 3, 8, 10, 15 }, 12));
    System.out.println(searchCeilingOfANumber(new int[] { 4, 6, 10 }, 17));
    System.out.println(searchCeilingOfANumber(new int[] { 4, 6, 10 }, -1));
  }
}
