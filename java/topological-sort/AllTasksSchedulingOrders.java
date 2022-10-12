import java.util.*;

/**
 * Problem statement: There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task
 * can have some prerequisite tasks which need to be completed before it can be
 * scheduled. Given the number of tasks and a list of prerequisite pairs, write
 * a method to print all possible ordering of tasks meeting all prerequisites.
 */
public class AllTasksSchedulingOrders {
  public static void findOrders(int tasks, int[][] prerequisites) {
    List<Integer> sortedOrder = new ArrayList<>();

    if (tasks <= 0)
      return;

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

    AllTasksSchedulingOrders.printOrderRecursive(graph, inDegree, sources, sortedOrder);
  }

  public static void printOrderRecursive(Map<Integer, List<Integer>> graph, Map<Integer, Integer> inDegree,
      Queue<Integer> sources, List<Integer> sortedOrder) {
    if (sources.isEmpty() && sortedOrder.size() == inDegree.size())
      System.out.println(sortedOrder);

    for (Integer vertex : sources) {
      Queue<Integer> sourcesForNextCall = AllTasksSchedulingOrders.cloneQueue(sources);
      sortedOrder.add(vertex);
      sourcesForNextCall.remove(vertex);
      List<Integer> children = graph.get(vertex);
      for (Integer child : children) {
        inDegree.put(child, inDegree.get(child) - 1);
        if (inDegree.get(child) == 0)
          sourcesForNextCall.offer(child);
      }

      // recursive call to print other orderings from the remaining sources
      AllTasksSchedulingOrders.printOrderRecursive(graph, inDegree, sourcesForNextCall, sortedOrder);

      // backtrack to remove vertex from sorted order and add all of its children back
      // for the earlier call
      sortedOrder.remove(vertex);
      for (Integer child : children)
        inDegree.put(child, inDegree.get(child) + 1);
    }
  }

  private static Queue<Integer> cloneQueue(Queue<Integer> queue) {
    Queue<Integer> clonedQueue = new LinkedList<>();
    for (Integer num : queue) {
      clonedQueue.offer(num);
    }
    return clonedQueue;
  }

  public static void main(String[] args) {
    AllTasksSchedulingOrders.findOrders(3,
        new int[][] { new int[] { 0, 1 }, new int[] { 1, 2 } });

    AllTasksSchedulingOrders.findOrders(4,
        new int[][] { new int[] { 3, 2 }, new int[] { 3, 0 }, new int[] { 2, 0 }, new int[] { 2, 1 } });

    AllTasksSchedulingOrders.findOrders(6,
        new int[][] { new int[] { 2, 5 }, new int[] { 0, 5 }, new int[] { 0, 4 },
            new int[] { 1, 4 }, new int[] { 3, 2 }, new int[] { 1, 3 } });
  }
}
