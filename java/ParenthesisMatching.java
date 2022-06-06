import java.util.*;

public class ParenthesisMatching {
  public static int getClosingParen(String sentence, int openingParenIndex) {
    Deque<ParenthesisAndIndex> pi = new ArrayDeque<>();

    for (int i = 0; i < sentence.length(); i++) {
      Character parenthesis = sentence.charAt(i);

      if (!pi.isEmpty()) {
        ParenthesisAndIndex previousCh = pi.peek();
        Character previousParenthesis = previousCh.getParenthesis();
        int previousIndex = previousCh.getIndex();

        if (previousParenthesis == '(' && parenthesis == ')') {
          if (previousIndex == openingParenIndex) {
            return i;
          }
          pi.pop();
        } else {
          pi.push(new ParenthesisAndIndex(parenthesis, i));
        }
      } else {
        pi.push(new ParenthesisAndIndex(parenthesis, i));
      }
    }

    throw new IllegalArgumentException("No closing parenthesis!");
  }

  public static void main(String[] args) {
    int result = getClosingParen("((((()))))", 2); // expect 7
    System.out.println(result);

    int result2 = getClosingParen("()()((()()))", 5); // expect 10
    System.out.println(result2);
  }
}

class ParenthesisAndIndex {
  private Character parenthesis;
  private int index;

  public ParenthesisAndIndex(Character parenthesis, int index) {
    this.parenthesis = parenthesis;
    this.index = index;
  }

  public Character getParenthesis() {
    return this.parenthesis;
  }

  public int getIndex() {
    return this.index;
  }
}
