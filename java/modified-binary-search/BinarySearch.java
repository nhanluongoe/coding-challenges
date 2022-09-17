/**
 * Problem statement: Given a sorted array of numbers, find if a given number
 * ‘key’ is present in the array. Though we know that the array is sorted, we
 * don’t know if it’s sorted in ascending or descending order. You should assume
 * that the array can have duplicates.
 * 
 * Write a function to return the index of the ‘key’ if it is present in the
 * array, otherwise return -1.
 */
public class BinarySearch {
  public static int search(int[] arr, int key) {

    return -1;
  }

  public static void main(String[] args) {
    System.out.println(search(new int[] { 4, 6, 10 }, 10));
    System.out.println(search(new int[] { 1, 2, 3, 4, 5, 6, 7 }, 5));
    System.out.println(search(new int[] { 10, 6, 4 }, 10));
    System.out.println(search(new int[] { 10, 6, 4 }, 4));
  }

}
