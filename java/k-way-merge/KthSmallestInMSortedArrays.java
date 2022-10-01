import java.util.*;

/**
 * Problem statement: Given ‘M’ sorted arrays, find the K’th smallest number
 * among all the arrays.
 */
public class KthSmallestInMSortedArrays {
  public static int findKthSmallest(List<Integer[]> lists, int k) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    for (Integer[] arr : lists) {
      for (Integer num : arr) {
        if (maxHeap.size() >= k) {
          if (maxHeap.peek() > num) {
            maxHeap.poll();
            maxHeap.offer(num);
          }
        } else {
          maxHeap.offer(num);
        }
      }
    }

    return maxHeap.peek();
  }

  public static void main(String[] args) {
    Integer[] l1 = new Integer[] { 2, 6, 8 };
    Integer[] l2 = new Integer[] { 3, 6, 7 };
    Integer[] l3 = new Integer[] { 1, 3, 4 };
    List<Integer[]> lists = new ArrayList<>();
    lists.add(l1);
    lists.add(l2);
    lists.add(l3);
    int result = findKthSmallest(lists, 5);
    System.out.println("Kth smallest number is: " + result);
  }
}
