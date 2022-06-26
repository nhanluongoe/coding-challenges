/**
 * Given a string with lowercase letters only,
 * if you are allowed to replace no more than ‘k’ letters with any letter,
 * find the length of the longest substring having the same letters after replacement.
 */
public class CharacterReplacement {
  public static int findLength(String string, int k) {

    return 0;
  }

  public static void main(String[] args) {
    System.out.println(CharacterReplacement.findLength("aabccbb", 2)); // expects 5 , "cc", "b" -> "bbbbb"
    System.out.println(CharacterReplacement.findLength("abbcb", 1)); // expects 4, "c", "b" -> "bbbb"
    System.out.println(CharacterReplacement.findLength("abccde", 1)); // expects 3, "b" or "d", "c" -> "ccc"
  }
}