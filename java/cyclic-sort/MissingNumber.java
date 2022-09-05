import java.util.*;

/**
 * Problem statement: We are given an array containing ‘n’ distinct numbers
 * taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of
 * the total ‘n+1’ numbers, find the missing number.
 */
public class MissingNumber {
  public static int findMissingNumber(int[] nums) {

    return -1;
  }

  public static void main(String[] args) {
    int[] arr1 = { 4, 0, 3, 1 };
    System.out.println("Missing number: " + findMissingNumber(arr1));

    int[] arr2 = { 8, 3, 5, 2, 4, 6, 0, 1 };
    System.out.println("Missing number: " + findMissingNumber(arr2));
  }
}
