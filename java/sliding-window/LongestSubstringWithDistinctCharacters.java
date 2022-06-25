import java.util.*;

public class LongestSubstringWithDistinctCharacters {
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
  }
}