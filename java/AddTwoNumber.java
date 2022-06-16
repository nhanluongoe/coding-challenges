
class AddTwoNumber {
  public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode traveller1 = l1;
    ListNode traveller2 = l2;
    ListNode traveller3 = new ListNode();
    ListNode result = new ListNode();
    result = traveller3;

    int c = 0;
    while (true) {
      ListNode newNode = new ListNode();
      if (traveller1 != null && traveller2 != null) {
        int a = traveller1.val;
        int b = traveller2.val;

        if (a + b + c >= 10) {
          newNode.val = a + b + c - 10;
          c = 1;
        } else {
          newNode.val = a + b + c;
          c = 0;
        }

        traveller1 = traveller1.next;
        traveller2 = traveller2.next;

        traveller3.next = newNode;
        traveller3 = newNode;
        continue;
      }

      if (traveller1 == null && traveller2 != null) {
        int b = traveller2.val;
        if (b + c >= 10) {
          newNode.val = b + c - 10;
          c = 1;
        } else {
          newNode.val = traveller2.val + c;
          c = 0;
        }

        traveller2 = traveller2.next;

        traveller3.next = newNode;
        traveller3 = newNode;
        continue;
      }

      if (traveller1 != null && traveller2 == null) {
        int a = traveller1.val;
        if (a + c >= 10) {
          newNode.val = a + c - 10;
          c = 1;
        } else {
          newNode.val = traveller1.val + c;
          c = 0;
        }

        traveller1 = traveller1.next;

        traveller3.next = newNode;
        traveller3 = newNode;
        continue;
      }

      if (c == 1) {
        traveller3.next = new ListNode(1);
      }

      break;
    }

    return result.next;
  }

  public static void main(String[] args) {
    ListNode l1 = new ListNode(9);
    l1.next = new ListNode(9);
    l1.next.next = new ListNode(9);

    ListNode l2 = new ListNode(9);
    l2.next = new ListNode(9);

    ListNode sum = addTwoNumbers(l1, l2);
    System.out.println(sum);
  }
}

class ListNode {
  int val;
  ListNode next;

  public ListNode() {
  }

  public ListNode(int val) {
    this.val = val;
  }

  public ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }

  public String toString() {
    StringBuilder sb = new StringBuilder();
    ListNode current = this;
    while (current != null) {
      sb.append(current.val);
      current = current.next;
    }
    return sb.toString();
  }
}
