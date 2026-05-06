import java.util.*;

class Combination {
  private String combination;
  private int closeCount;
  private int openCount;

  public Combination(String combination, int openCount, int closeCount) {
    this.combination = combination;
    this.openCount = openCount;
    this.closeCount = closeCount;
  }

  public int getCloseCount() {
    return closeCount;
  }

  public void setCloseCount(int closeCount) {
    this.closeCount = closeCount;
  }

  public int getOpenCount() {
    return openCount;
  }

  public void setOpenCount(int openCount) {
    this.openCount = openCount;
  }

  public String getCombination() {
    return combination;
  }

  public void setCombination(String combination) {
    this.combination = combination;
  }
}

/**
 * Problem statement: For a given number ‘N’, write a function to generate all
 * combination of ‘N’ pairs of balanced parentheses.
 */
public class GenerateParentheses {
  /**
   * Time complexity: ? https://en.wikipedia.org/wiki/Central_binomial_coefficient
   * Space complexity: O(N * 2^n), since can't have more than 2^n combinations
   */
  public static List<String> generateValidParentheses(int num) {
    List<String> result = new ArrayList<>();
    if (num == 0)
      return result;

    Queue<Combination> combinations = new LinkedList<>();
    combinations.offer(new Combination("", 0, 0));
    while (!combinations.isEmpty()) {
      Combination currentCombination = combinations.poll();
      if (currentCombination.getOpenCount() == num
          && currentCombination.getCloseCount() == num) {
        result.add(currentCombination.getCombination());
      } else {
        if (currentCombination.getOpenCount() < num) {
          Combination newCombination = new Combination(currentCombination.getCombination() + "(",
              currentCombination.getOpenCount() + 1, currentCombination.getCloseCount());
          combinations.offer(newCombination);
        }
        if (currentCombination.getCloseCount() < currentCombination.getOpenCount()) {
          Combination newCombination = new Combination(currentCombination.getCombination() + ")",
              currentCombination.getOpenCount(), currentCombination.getCloseCount() + 1);
          combinations.offer(newCombination);
        }
      }
    }

    return result;
  }

  public static void main(String[] args) {
    List<String> result = generateValidParentheses(2);
    System.out.println("All combinations of balanced parentheses are: " + result);

    result = generateValidParentheses(3);
    System.out.println("All combinations of balanced parentheses are: " + result);
  }
}
