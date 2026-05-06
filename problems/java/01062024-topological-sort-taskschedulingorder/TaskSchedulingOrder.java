import java.util.*;

/**
 * Problem statement: There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task
 * can have some prerequisite tasks which need to be completed before it can be
 * scheduled. Given the number of tasks and a list of prerequisite pairs, write
 * a method to find the ordering of tasks we should pick to finish all tasks.
 */
public class TaskSchedulingOrder {
  /**
   * Time complexity: O(E + V), "E" is the number of prerequisites and "V" is the
   * number of tasks
   * Space complexity: O(E + V)
   */
  public static List<Integer> findOrder(int tasks, int[][] prerequisites) {
    List<Integer> sortedOrder = new ArrayList<>();

    if (tasks <= 0)
      return sortedOrder;

    // 1. initialize graph
    Map<Integer, Integer> inDegree = new HashMap<>();
    Map<Integer, List<Integer>> graph = new HashMap<>();
    for (int i = 0; i < tasks; i++) {
      inDegree.put(i, 0);
      graph.put(i, new ArrayList<>());
    }

    // 2. build graph
    for (int i = 0; i < prerequisites.length; i++) {
      int parent = prerequisites[i][0];
      int child = prerequisites[i][1];
      inDegree.put(child, inDegree.get(child) + 1);
      graph.get(parent).add(child);
    }

    // 3. find all sources
    Queue<Integer> sources = new LinkedList<>();
    for (Map.Entry<Integer, Integer> entry : inDegree.entrySet()) {
      if (entry.getValue() == 0)
        sources.offer(entry.getKey());
    }

    // 4. sort
    while (!sources.isEmpty()) {
      int source = sources.poll();
      sortedOrder.add(source);
      List<Integer> children = graph.get(source);
      for (Integer child : children) {
        inDegree.put(child, inDegree.get(child) - 1);
        if (inDegree.get(child) == 0)
          sources.offer(child);
      }
    }

    if (sortedOrder.size() != tasks)
      return new ArrayList<>();

    return sortedOrder;
  }

  public static void main(String[] args) {
    List<Integer> result = TaskSchedulingOrder.findOrder(3, new int[][] { new int[] { 0, 1 }, new int[] { 1, 2 } });
    System.out.println(result);

    result = TaskSchedulingOrder.findOrder(3,
        new int[][] { new int[] { 0, 1 }, new int[] { 1, 2 }, new int[] { 2, 0 } });
    System.out.println(result);

    result = TaskSchedulingOrder.findOrder(6, new int[][] { new int[] { 2, 5 }, new int[] { 0, 5 }, new int[] { 0, 4 },
        new int[] { 1, 4 }, new int[] { 3, 2 }, new int[] { 1, 3 } });
    System.out.println(result);
  }
}
