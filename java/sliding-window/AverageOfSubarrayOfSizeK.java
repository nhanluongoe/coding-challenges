import java.util.*;

class AverageOfSubarrayOfSizeK {
  public static double[] findAverages(int K, int[] arr) {
    double[] result = new double[arr.length - K + 1];
    double windowSum = 0;
    int windowStartIndex = 0;

    for (int windowEndIndex = 0; windowEndIndex < arr.length; windowEndIndex++) {
      windowSum += arr[windowEndIndex];

      if (windowEndIndex >= K - 1) {
        result[windowStartIndex] = windowSum / K;
        windowSum -= arr[windowStartIndex];
        windowStartIndex += 1;
      }
    }

    return result;
  }

  public static void main(String[] args) {
    double[] result = AverageOfSubarrayOfSizeK.findAverages(5,
        new int[] { 1, 3, 2, 6, -1, 4, 1, 8, 2 });
    System.out.println("Averages of subarrays of size K: " + Arrays.toString(result));
  }
}