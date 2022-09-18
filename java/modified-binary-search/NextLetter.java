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
    int n = letters.length;
    // Because the array is considered circular, so if the key is either smaller
    // than the first letter or greater than the last letter of the given array,
    // then the result will be the first letter of the array
    if (key < letters[0] || key > letters[n - 1])
      return letters[0];

    int start = 0;
    int end = n - 1;
    while (start <= end) {
      int middle = start + (end - start) / 2;

      // only find the letter greater than the key, so just increase "stat" when found
      // the letter equal to the key
      if (letters[middle] <= key) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    // imagine the last letter of the given array is equal to key, the result will
    // be the first letter of the given array
    return letters[start % n];

  }

  public static void main(String[] args) {
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'f'));
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'b'));
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'm'));
    System.out.println(searchNextLetter(new char[] { 'a', 'c', 'f', 'h' }, 'h'));
  }
}
