import java.util.*;

public class LongestSubstringWithDistinctCharacters {
  /**
   * Time complexity: O(n)
   * Space complexity: O(1)
   */
  public static int findLengthBetter(String string) {
    int windowStart = 0, maxLength = 0;

    Map<Character, Integer> charIndexMap = new HashMap<>();
    for (int windowEnd = 0; windowEnd < string.length(); windowEnd++) {
      char rightChar = string.charAt(windowEnd);

      if (charIndexMap.containsKey(rightChar)) {
        windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1);
      }
      charIndexMap.put(rightChar, windowEnd);
      
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
  }

  public static int findLength(String string) {
    int startIndex = 0;
    int maxLength = 0;

    Set<Character> characterSet = new HashSet<>();
    for (int endIndex = 0; endIndex < string.length(); endIndex++) {
      char endCharacter = string.charAt(endIndex);
      if (characterSet.contains(endCharacter)) {
        characterSet.clear();
        startIndex = endIndex;
      } else {
        characterSet.add(endCharacter);
        maxLength = Math.max(endIndex - startIndex + 1, maxLength);
      }
    }

    return maxLength;
  }

  public static void main(String[] args) {
    System.out.println("Length of the longest substring: "
        + findLength("aabccbb")); // expects 3 "abc"
    System.out.println("Length of the longest substring: "
        + findLength("abbbb")); // expects 2 "ab"
    System.out.println("Length of the longest substring: "
        + findLength("abccde")); // expects 3 "abc" or "cde"
        System.out.println("Length of the longest substring: "
        + findLengthBetter("aabccabdefgh")); // expects 8 "cabdefgh"
  }
}