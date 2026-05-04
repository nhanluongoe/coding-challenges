import java.util.ArrayDeque;
import java.util.Deque;

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
public class LargestStack {
  private Deque<Integer> stack;

  public LargestStack() {
    this.stack = new ArrayDeque<>();
  }

  public void push(int item) {
    this.stack.add(item);
  }

  public int pop() {
    return this.stack.pollLast();
  }

  public int getMax() {
    int max = Integer.MIN_VALUE;
    Deque<Integer> temp = new ArrayDeque<>();

    while (stack.size() > 0) {
      int element = this.pop();
      if (element >= max) {
        max = element;
      }
      temp.add(element);
    }

    while (temp.size() > 0) {
      this.stack.add(temp.pollLast());
    }

    return max;
  }

  public static void main(String[] args) {
    final LargestStack s = new LargestStack();
    s.push(5);
    s.push(4);
    s.push(5);
    s.push(7);
    s.push(8);

    System.out.println(s.getMax());
    s.pop();
    System.out.println(s.getMax());
    s.pop();
    System.out.println(s.getMax());
  }
}

/**
 * Time Complexity: O(1)
 * Space complexity: O(n)
 */
class MaxStack {
  private Deque<Integer> stack = new ArrayDeque<>();
  private Deque<Integer> maxesStack = new ArrayDeque<>();

  public void push(int item) {
    stack.push(item);
    if (maxesStack.isEmpty() || item >= maxesStack.peek()) {
      maxesStack.push(item);
    }
  }

  public int pop() {
    int item = stack.pop();
    if (item == maxesStack.peek()) {
      maxesStack.pop();
    }
    return item;
  }

  public int getMax() {
    return maxesStack.peek();
  }
}
