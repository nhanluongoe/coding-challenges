import java.util.*;

/**
 * Problem statement: Given a string, find all of its permutations preserving
 * the character sequence but changing case.
 */
public class LetterCaseStringPermutation {
  public static List<String> findLetterCaseStringPermutations(String str) {
    List<String> permutations = new ArrayList<>();

    return permutations;
  }

  public static void main(String[] args) {
    List<String> result = findLetterCaseStringPermutations("ad52");
    System.out.println("String permutations are: " + result);

    result = findLetterCaseStringPermutations("ab7c");
    System.out.println("String permutations are: " + result);
  }

}
