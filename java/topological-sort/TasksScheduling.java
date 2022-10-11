import java.util.*;

/**
 * Problem statement: There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task
 * can have some prerequisite tasks which need to be completed before it can be
 * scheduled. Given the number of tasks and a list of prerequisite pairs, find
 * out if it is possible to schedule all the tasks.
 */
public class TasksScheduling {
  /**
   * Time complexity: O(V + E), "V" is the number of tasks, "E" is the number of
   * prerequisites
   * Space complexity: O(V + E)
   */
  public static boolean isSchedulingPossible(int tasks, int[][] prerequisites) {
    // this problem can be transferred into topological sort problem
    // if there exists a topological sort => it is possible to schedule tasks
    List<Integer> sortedList = new ArrayList<>();
    if (tasks <= 0)
      return false;

    // 1. initialize graph
    Map<Integer, Integer> inDegree = new HashMap<>();
    Map<Integer, List<Integer>> graph = new HashMap<>();
    for (int i = 0; i < tasks; i++) {
      inDegree.put(i, 0);
      graph.put(i, new ArrayList<>());
    }

    // 2. build the graph
    for (int i = 0; i < prerequisites.length; i++) {
      int parent = prerequisites[i][0];
      int child = prerequisites[i][1];
      inDegree.put(child, inDegree.get(child) + 1);
      graph.get(parent).add(child);
    }

    // 3. find all sources
    Queue<Integer> sources = new LinkedList<>();
    for (Map.Entry<Integer, Integer> entry : inDegree.entrySet()) {
      if (entry.getValue() == 0) {
        sources.offer(entry.getKey());
      }
    }

    // 4. sort
    while (!sources.isEmpty()) {
      int source = sources.poll();
      sortedList.add(source);
      List<Integer> children = graph.get(source);
      for (Integer child : children) {
        inDegree.put(child, inDegree.get(child) - 1);
        if (inDegree.get(child) == 0)
          sources.offer(child);
      }
    }

    return sortedList.size() == tasks;
  }

  public static void main(String[] args) {
    boolean result = TasksScheduling.isSchedulingPossible(3, new int[][] { new int[] { 0, 1 }, new int[] { 1, 2 } });
    System.out.println(result);
    result = TasksScheduling.isSchedulingPossible(3,
        new int[][] { new int[] { 0, 1 }, new int[] { 1, 2 }, new int[] { 2, 0 } });
    System.out.println(result);
    result = TasksScheduling.isSchedulingPossible(6, new int[][] { new int[] { 2, 5 }, new int[] { 0, 5 },
        new int[] { 0, 4 }, new int[] { 1, 4 }, new int[] { 3, 2 }, new int[] { 1, 3 } });
    System.out.println(result);
  }
}
