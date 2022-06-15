public class BinaryGap {
  public static void main(String[] args) {
    Solution solution = new Solution();

    int result1 = solution.solution(1041);
    int result2 = solution.solution(15);
    int result3 = solution.solution(32);

    System.out.println(result1); // 5
    System.out.println(result2); // 0
    System.out.println(result3); // 0
  }
  
}

class Solution {
  public int solution(int N) {
      String binaryN = Integer.toBinaryString(N);
      int potentialMaxLength = 0;
      int maxLength = 0;
      for (int i = 0; i < binaryN.length(); i++) {
          char currentChar = binaryN.charAt(i);
          if (currentChar == '0') {
              potentialMaxLength++;
          } else {
              maxLength = Math.max(maxLength, potentialMaxLength);
              potentialMaxLength = 0;
          }
      }
      return maxLength;
  }
}