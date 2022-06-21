public class MinSizeSubArraySum {
  public static int findMinSubArray(int S, int[] arr) {
    int windowStartIndex = 0;
    int minSize = Integer.MAX_VALUE;
    int runningSum = 0;

    for (int windowEndIndex = 0; windowEndIndex < arr.length; windowEndIndex++) {
      runningSum += arr[windowEndIndex];

      while (runningSum >= S) {
        minSize = Math.min(windowEndIndex - windowStartIndex + 1, minSize);
        runningSum -= arr[windowStartIndex];
        windowStartIndex += 1;
      }
    }

    return minSize;
  }
  public static void main(String[] args) {
    int[] arr = new int[]{2, 1, 5, 2, 3};
    int S = 7;

    int minSize = MinSizeSubArraySum.findMinSubArray(S, arr);
    System.out.println(minSize);
  }
}
