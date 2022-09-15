import java.util.*;

/**
 * Problem statement: Given a string, find all of its permutations preserving
 * the character sequence but changing case.
 */
public class LetterCaseStringPermutation {
  public static List<String> findLetterCaseStringPermutations(String str) {
    List<String> permutations = new ArrayList<>();
    if (str == null)
      return permutations;

    permutations.add(str);
    for (int i = 0; i < str.length(); i++) {
      if (Character.isLetter(str.charAt(i))) {
        int n = permutations.size();
        for (int j = 0; j < n; j++) {
          char[] chs = permutations.get(j).toCharArray();
          if (Character.isUpperCase(chs[i]))
            chs[i] = Character.toLowerCase(chs[i]);
          else
            chs[i] = Character.toUpperCase(chs[i]);
          permutations.add(String.valueOf(chs));
        }
      }
    }
    return permutations;
  }

  /**
   * Time complexity: O(n * 2^n)
   * Space complexity: o(n * 2^n)
   */
  public static List<String> findLetterCaseStringPermutations1(String str) {
    List<String> permutations = new ArrayList<>();
    if (str == null)
      return permutations;

    Queue<String> queue = new LinkedList<>();
    queue.offer("");
    for (char ch : str.toCharArray()) {
      int n = queue.size();
      for (int i = 0; i < n; i++) {
        String oldPermutation = queue.poll();
        if (Character.isDigit(ch)) {
          String newPermutation = oldPermutation + Character.toString(ch);
          if (newPermutation.length() == str.length())
            permutations.add(newPermutation);
          else
            queue.add(newPermutation);
        } else {
          String newPermutation1 = oldPermutation + Character.toString(ch);
          String newPermutation2 = oldPermutation + Character.toString(ch).toUpperCase();
          if (newPermutation1.length() == str.length())
            permutations.add(newPermutation1);
          else
            queue.add(newPermutation1);
          if (newPermutation2.length() == str.length())
            permutations.add(newPermutation2);
          else
            queue.add(newPermutation2);
        }
      }
    }

    return permutations;
  }

  public static void main(String[] args) {
    List<String> result = findLetterCaseStringPermutations("ad52");
    System.out.println("String permutations are: " + result);

    result = findLetterCaseStringPermutations("ab7c");
    System.out.println("String permutations are: " + result);
  }

}
