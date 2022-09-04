import java.util.*;
import java.util.stream.Collectors;

class Interval {
  int start;
  int end;

  public Interval(int start, int end) {
    this.start = start;
    this.end = end;
  }
}

public class MergeIntervals {
  public static List<Interval> merge(List<Interval> input) {
    List<Interval> sortedInput = input.stream().sorted((interval1, interval2) -> interval1.start - interval2.start)
        .collect(Collectors.toList());
    List<Interval> mergedIntervals = new ArrayList<>();

    mergedIntervals.add(sortedInput.get(0));
    for (int i = 1; i < input.size(); i++) {
      Interval currentInterval = sortedInput.get(i);
      Interval lastMergedInterval = mergedIntervals.get(mergedIntervals.size() - 1);

      if (currentInterval.start < lastMergedInterval.end)
        lastMergedInterval.end = Math.max(lastMergedInterval.end, currentInterval.end);
      else {
        mergedIntervals.add(new Interval(currentInterval.start, currentInterval.end));
      }

    }

    return mergedIntervals;
  }

  public static void main(String[] args) {
    List<Interval> input = new ArrayList<>();
    input.add(new Interval(1, 4));
    input.add(new Interval(2, 5));
    input.add(new Interval(7, 9));
    System.out.println("Merged intervals: ");
    for (Interval interval : merge(input)) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

    input = new ArrayList<>();
    input.add(new Interval(6, 7));
    input.add(new Interval(2, 4));
    input.add(new Interval(5, 9));
    System.out.println("Merged intervals: ");
    for (Interval interval : merge(input)) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

    input = new ArrayList<>();
    input.add(new Interval(1, 4));
    input.add(new Interval(2, 6));
    input.add(new Interval(3, 5));
    System.out.println("Merged intervals: ");
    for (Interval interval : merge(input)) {
      System.out.print("[" + interval.start + ", " + interval.end + "]");
    }
    System.out.println();

  }
}
