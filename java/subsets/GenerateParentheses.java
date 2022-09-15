import java.util.*;

/**
 * Problem statement: For a given number ‘N’, write a function to generate all
 * combination of ‘N’ pairs of balanced parentheses.
 */
public class GenerateParentheses {
  public static List<String> generateValidParentheses(int num) {
    List<String> result = new ArrayList<>();

    return result;
  }

  public static void main(String[] args) {
    List<String> result = generateValidParentheses(2);
    System.out.println("All combinations of balanced parentheses are: " + result);

    result = generateValidParentheses(3);
    System.out.println("All combinations of balanced parentheses are: " + result);
  }
}
