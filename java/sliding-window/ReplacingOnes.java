/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more
 * than ‘k’ 0s with 1s,
 * find the length of the longest contiguous subarray having all 1s.
 */
public class ReplacingOnes {
  public static int findLength(int[] array, int K) {

    return 0;
  }

  public static void main(String[] args) {
    System.out.println(
        ReplacingOnes.findLength(new int[] { 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1 }, 2)); // Replace the '0' at index 5 and 8
                                                                                     // to have the longest contiguous
                                                                                     // subarray of 1s having length 6.
    System.out.println(
        ReplacingOnes.findLength(new int[] { 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1 }, 3)); // Replace the '0' at index
                                                                                           // 6, 9, and 10 to have the
                                                                                           // longest contiguous
                                                                                           // subarray of 1s having
                                                                                           // length 9.
  }
}
