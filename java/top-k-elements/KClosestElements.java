import java.util.*;

class Entry {
  int key;
  int value;

  public Entry(int key, int value) {
    this.key = key;
    this.value = value;
  }
}

/**
 * Problem statement: Given a sorted number array and two integers ‘K’ and ‘X’,
 * find ‘K’ closest numbers to ‘X’ in the array. Return the numbers in the
 * sorted order. ‘X’ is not necessarily present in the array.
 */
public class KClosestElements {
  /**
   * Time complexity: O(K*logK + (n - K)*logK)
   * Space complexity: O(K)
   */
  public static List<Integer> findClosestElements(int[] arr, int K, Integer X) {
    List<Integer> result = new ArrayList<>();
    PriorityQueue<Entry> maxHeap = new PriorityQueue<>((a, b) -> b.value - a.value);

    for (int i = 0; i < K; i++) {

      maxHeap.offer(new Entry(arr[i], Math.abs(arr[i] - X)));
    }

    for (int i = K; i < arr.length; i++) {
      if (maxHeap.peek().value > Math.abs(arr[i] - X)) {
        maxHeap.poll();
        maxHeap.offer(new Entry(arr[i], Math.abs(arr[i] - X)));
      }
    }

    while (!maxHeap.isEmpty()) {
      result.add(maxHeap.poll().key);
    }

    Collections.sort(result);
    return result;
  }

  public static void main(String[] args) {
    List<Integer> result = findClosestElements(new int[] { 5, 6, 7, 8, 9 }, 3, 7);
    System.out.println("'K' closest numbers to 'X' are: " + result);

    result = findClosestElements(new int[] { 2, 4, 5, 6, 9 }, 3, 6);
    System.out.println("'K' closest numbers to 'X' are: " + result);

    result = findClosestElements(new int[] { 2, 4, 5, 6, 9 }, 3, 10);
    System.out.println("'K' closest numbers to 'X' are: " + result);
  }
}
