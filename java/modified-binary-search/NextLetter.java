/**
 * Problem statement: Given an array of lowercase letters sorted in ascending
 * order, find the smallest letter in the given array greater than a given
 * ‘key’.
 * 
 * Assume the given array is a circular list, which means that the last letter
 * is assumed to be connected with the first letter. This also means that the
 * smallest letter in the given array is greater than the last letter of the
 * array and is also the first letter of the array.
 * 
 * Write a function to return the next letter of the given ‘key’.
 */
public class NextLetter {
  /**
   * Time complexity: O(logn)
   * Space complexity: O(1)
   */
  public static char searchNextLetter(char[] letters, char key) {
    int start = 0;
    int end = letters.length - 1;
    while (start <= end) {
      int middle = start + (end - start) / 2;

      if (letters[middle] < key) {
        start = middle + 1;
      } else if (letters[middle] > key) {
        end = middle - 1;
      } else {
        if (middle + 1 > letters.length - 1)
          return letters[0];
        return letters[middle + 1];
      }
    }

    if (start + 1 > letters.length - 1)
      return letters[0];
    return letters[start];
  }

  public static void main(String[] args) {
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'f'));
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'b'));
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'm'));
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'h'));
  }
}
