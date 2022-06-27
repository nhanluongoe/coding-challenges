import java.util.*;

/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more
 * than ‘k’ 0s with 1s,
 * find the length of the longest contiguous subarray having all 1s.
 */
public class ReplacingOnes {
  public static int findLength(int[] array, int K) {
    int windowStart = 0, maxLength = 0;

    Map<Integer, Integer> charFreqMap = new HashMap<>();
    for (int windowEnd = 0; windowEnd < array.length; windowEnd++) {
      int rightNumber = array[windowEnd];
      charFreqMap.put(rightNumber, charFreqMap.getOrDefault(rightNumber, 0) + 1);

      if (windowEnd - windowStart + 1 - charFreqMap.getOrDefault(1, 0) > K) {
        int leftNumber = array[windowStart];
        charFreqMap.put(leftNumber, charFreqMap.get(leftNumber) - 1);
        if (charFreqMap.get(leftNumber) == 0) {
          charFreqMap.remove(leftNumber);
        }
        windowStart++;
      }

      maxLength = windowEnd - windowStart + 1;
    }

    return maxLength;
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
