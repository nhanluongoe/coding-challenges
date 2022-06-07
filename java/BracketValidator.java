import java.util.*;

public class BracketValidator {
  public static boolean isValid(String code) {
    Deque<Character> stack = new ArrayDeque<>();
    for (int i = 0; i < code.length(); i++) {
      char currentChar = code.charAt(i);
      if (!stack.isEmpty()) {
        char topChar = stack.peek();
        if ((currentChar == ')' && topChar == '(')
            || (currentChar == ']' && topChar == '[')
            || (currentChar == '}' && topChar == '{')) {
          stack.pop();
        } else {
          stack.push(currentChar);
        }
      } else {
        stack.push(currentChar);
      }
    }

    return stack.size() == 0 ? true : false;
  }

  public static void main(String[] args) {
    final boolean result = isValid("([]{[]})[]{{}()}");
    System.out.println(result);
    final boolean result1 = isValid("()");
    System.out.println(result1);
    final boolean result3 = isValid("([)]");
    System.out.println(result3);
  }

}
