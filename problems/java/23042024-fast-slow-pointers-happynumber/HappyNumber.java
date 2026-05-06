public class HappyNumber {
  /**
   * Time complexity: O(logn)
   * Space complexity: O(1)
   */
  public static boolean find(int number) {
    int slow = number, fast = number;

    do {
      slow = sumOfSquareOfDigits(slow);
      fast = sumOfSquareOfDigits(sumOfSquareOfDigits(fast));
    } while (slow != fast);

    return slow == 1;
  }

  public static int sumOfSquareOfDigits(int number) {
    int result = 0;

    while (number > 0) {
      int lastDigit = number % 10;
      result += lastDigit * lastDigit;
      number /= 10;
    }

    return result;
  }

  public static void main(String[] args) {
    System.out.println(find(23));
    System.out.println(find(12));
  }  
}
