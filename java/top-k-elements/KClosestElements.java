import java.util.*;

/**
 * Problem statement: Given a sorted number array and two integers ‘K’ and ‘X’,
 * find ‘K’ closest numbers to ‘X’ in the array. Return the numbers in the
 * sorted order. ‘X’ is not necessarily present in the array.
 */
public class KClosestElements {
  public static List<Integer> findClosestElements(int[] arr, int K, Integer X) {
    List<Integer> result = new ArrayList<>();

    return result;
  }

  public static void main(String[] args) {
    List<Integer> result = findClosestElements(new int[] { 5, 6, 7, 8, 9 }, 3, 7);
    System.out.println("'K' closest numbers to 'X' are: " + result);

    result = findClosestElements(new int[] { 2, 4, 5, 6, 9 }, 3, 6);
    System.out.println("'K' closest numbers to 'X' are: " + result);

    result = findClosestElements(new int[] { 2, 4, 5, 6, 9 }, 3, 10);
    System.out.println("'K' closest numbers to 'X' are: " + result);
  }
}
