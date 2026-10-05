export class ListNode {
  constructor(
    public readonly value: number,
    public next: ListNode | null = null,
  ) {}
}

export default function findLinkedListIntersection(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let pointerA = headA;
  let pointerB = headB;

  // note 1: it's easier if two linked list have the same length
  // note 2: if they have different length, combine so A->B and B->A have the same length
  // note 3: after combining, they will still share the same tail
  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA;
}
