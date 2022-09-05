import java.util.*;

/**
 * Problem statement: We are given an unsorted array containing ‘n’ numbers
 * taken from the range 1 to ‘n’. The array has some duplicates, find all the
 * duplicate numbers without using any extra space.
 */
public class FindAllDuplicates {
  public static int[] findNumbers(int[] nums) {

    return new int[] { -1 };
  }

  public static void main(String[] args) {
    System.out.println(Arrays.toString(findNumbers(new int[] { 3, 4, 4, 5, 5 })));
    System.out.println(Arrays.toString(findNumbers(new int[] { 5, 4, 7, 2, 3, 5, 3 })));
  }
}
