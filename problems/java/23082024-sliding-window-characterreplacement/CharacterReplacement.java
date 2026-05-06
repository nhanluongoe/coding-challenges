import java.util.HashMap;
import java.util.Map;

/**
 * Given a string with lowercase letters only,
 * if you are allowed to replace no more than ‘k’ letters with any letter,
 * find the length of the longest substring having the same letters after replacement.
 */
public class CharacterReplacement {
  /**
   * Time complexity: O(n), n is the length of the string
   * Space complexity: O(26) -> O(1), 26 lowercase letters
   */
  public static int findLength(String string, int K) {
    int windowStart = 0, maxRepeatLetterCount = 0, maxLength = 0;

    Map<Character, Integer> charFreqMap = new HashMap<>();
    for (int windowEnd = 0; windowEnd < string.length(); windowEnd++) {
      char rightChar = string.charAt(windowEnd);
      charFreqMap.put(rightChar, charFreqMap.getOrDefault(rightChar, 0) + 1);

      maxRepeatLetterCount = Math.max(maxRepeatLetterCount, charFreqMap.get(rightChar));
      if (windowEnd - windowStart + 1 - maxRepeatLetterCount > K) {
        char leftChar = string.charAt(windowStart);
        charFreqMap.put(leftChar, charFreqMap.get(leftChar) - 1);
        windowStart += 1;
      }

      maxLength = windowEnd - windowStart + 1;
    }

    return maxLength;
  }

  public static void main(String[] args) {
    System.out.println(CharacterReplacement.findLength("aabccbb", 2)); // expects 5 , "cc", "b" -> "bbbbb"
    System.out.println(CharacterReplacement.findLength("abbcb", 1)); // expects 4, "c", "b" -> "bbbb"
    System.out.println(CharacterReplacement.findLength("abccde", 1)); // expects 3, "b" or "d", "c" -> "ccc"
    System.out.println(CharacterReplacement.findLength("abccdedddde", 1)); // expects 6, "e", "d" -> "dddddd"
  }
}