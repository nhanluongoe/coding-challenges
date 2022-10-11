import java.util.*;

/**
 * Problem statement: There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task
 * can have some prerequisite tasks which need to be completed before it can be
 * scheduled. Given the number of tasks and a list of prerequisite pairs, find
 * out if it is possible to schedule all the tasks.
 */
public class TasksScheduling {
  public static boolean isSchedulingPossible(int tasks, int[][] prerequisites) {

    return false;
  }

  public static void main(String[] args) {
    boolean result = TasksScheduling.isSchedulingPossible(3, new int[] { new int[] { 0, 1 }, new int[] { 1, 2 } });
    System.out.println(result);
    boolean result = TasksScheduling.isSchedulingPossible(3,
        new int[] { new int[] { 0, 1 }, new int[] { 1, 2 }, new int[] { 2, 0 } });
    System.out.println(result);
    boolean result = TasksScheduling.isSchedulingPossible(6, new int[] { new int[] { 2, 5 }, new int[] { 0, 5 },
        new int[] { 0, 4 }, new int[] { 1, 4 }, new int[] { 3, 2 }, new int[] { 1, 3 } });
    System.out.println(result);
  }
}
