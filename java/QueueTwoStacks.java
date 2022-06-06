import java.util.*;

public class QueueTwoStacks {
  private Deque<Integer> inStack = new ArrayDeque<>();
  private Deque<Integer> outStack = new ArrayDeque<>();

  public void enqueue(int item) {
    inStack.push(item);
  }

  public int dequeue() {
    if (outStack.isEmpty()) {
      while (!inStack.isEmpty()) {
        outStack.push(inStack.pop());
      }

      if (outStack.isEmpty()) {
        throw new NoSuchElementException();
      }
    }

    return outStack.pop();
  }

  public static void main(String[] args) {
    QueueTwoStacks q = new QueueTwoStacks();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    System.out.println(q.dequeue());
    q.enqueue(4);
    System.out.println(q.dequeue());
    System.out.println(q.dequeue());
    System.out.println(q.dequeue());
  }
}
