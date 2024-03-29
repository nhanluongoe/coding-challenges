import java.util.*;

class Interval {
  int start;
  int end;

  public Interval(int start, int end) {
    this.start = start;
    this.end = end;
  }
}

/**
 * Constraint: intervals is non-overlapping and sorted
 */
public class InsertInterval {
  /**
   * Time complexity: O(n)
   * Space complexity: O(n)
   */
  public static List<Interval> betterInsert(List<Interval> intervals, Interval newInterval) {
    if (intervals == null || intervals.isEmpty()) {
      return Arrays.asList(newInterval);
    }

    List<Interval> mergedIntervals = new ArrayList<>();
    int i = 0;
    while (i < intervals.size() && newInterval.start > intervals.get(i).end) {
      mergedIntervals.add(intervals.get(i++));
    }

    while (i < intervals.size() && newInterval.end >= intervals.get(i).start) {
      newInterval.start = Math.min(intervals.get(i).start, newInterval.start);
      newInterval.end = Math.max(intervals.get(i).end, newInterval.end);
      i++;
    }
    mergedIntervals.add(newInterval);

    while (i < intervals.size()) {
      mergedIntervals.add(intervals.get(i++));
    }

    return mergedIntervals;
  }

  /**
   * Time complexity: O(n*logn)
   * Space complexity: O(n)
   */
  public static List<Interval> insert(List<Interval> intervals, Interval newInterval) {
    intervals.add(newInterval);
    return merge(intervals);
  }

  public static List<Interval> merge(List<Interval> intervals) {
    Collections.sort(intervals, (interval1, interval2) -> Integer.compare(interval1.start, interval2.start));

    List<Interval> mergedIntervals = new LinkedList<>();
    Iterator<Interval> intervalIterator = intervals.iterator();
    Interval interval = intervalIterator.next();
    int start = interval.start;
    int end = interval.end;

    while (intervalIterator.hasNext()) {
      interval = intervalIterator.next();
      if (interval.start < end) {
        end = Math.max(interval.end, end);
      } else {
        mergedIntervals.add(new Interval(start, end));
        start = interval.start;
        end = interval.end;
      }
    }

    // Add the last interval
    mergedIntervals.add(new Interval(start, end));

    return mergedIntervals;
  }

  public static void main(String[] args) {

    List<Interval> input = new ArrayList<>();
    input.add(new Interval(1, 3));
    input.add(new Interval(5, 7));
    input.add(new Interval(8, 12));
    System.out.println("Merged intervals: ");
    for (Interval interval : betterInsert(input, new Interval(4, 6))) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

    input = new ArrayList<>();
    input.add(new Interval(1, 3));
    input.add(new Interval(5, 7));
    input.add(new Interval(8, 12));
    System.out.println("Merged intervals: ");
    for (Interval interval : betterInsert(input, new Interval(4, 10))) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

    input = new ArrayList<>();
    input.add(new Interval(2, 3));
    input.add(new Interval(5, 7));
    System.out.println("Merged intervals: ");
    for (Interval interval : betterInsert(input, new Interval(1, 4))) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

  }
}
