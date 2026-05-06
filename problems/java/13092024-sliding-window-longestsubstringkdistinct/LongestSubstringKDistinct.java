import java.util.*;

public class LongestSubstringKDistinct {

  public static int findLongestSubstringKDistinct(int K, String string) {
    int windowStartIndex = 0;
    int maxLength = Integer.MIN_VALUE;
    Map<Character, Integer> charMap = new HashMap<>();

    for (int windowEndIndex = 0; windowEndIndex < string.length(); windowEndIndex++) {
      char windowEndChar = string.charAt(windowEndIndex);
      charMap.put(windowEndChar, charMap.getOrDefault(windowEndChar, 0) + 1);

      while (charMap.size() > K) {
        char windowStartChar = string.charAt(windowStartIndex);
        charMap.put(windowStartChar, charMap.get(windowStartChar) - 1);
        if (charMap.get(windowStartChar) == 0) {
          charMap.remove(windowStartChar);
        }
        windowStartIndex += 1;
      }

      maxLength = Math.max(maxLength, windowEndIndex - windowStartIndex + 1);
    }

    return maxLength;
  }

  public static void main(String[] args) {
    String s1 = "araaci";
    int result = findLongestSubstringKDistinct(2, s1);
    System.out.println(result); // "araa" expects 4

    int result2 = findLongestSubstringKDistinct(1, s1);
    System.out.println(result2); // "aa" expects 2

    String s2 = "cbbebi";
    int result3 = findLongestSubstringKDistinct(3, s2);
    System.out.println(result3); // "bbebi" expects 5
  }
}
