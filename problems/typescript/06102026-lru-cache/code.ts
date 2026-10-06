export default class LRUCache {
  private head: DoublelyLinkedListNode | null;
  private tail: DoublelyLinkedListNode | null;
  private map: Map<number, DoublelyLinkedListNode>;
  constructor(private readonly capacity: number) {
    this.capacity = capacity;
    this.head = new DoublelyLinkedListNode(-1, -1);
    this.tail = new DoublelyLinkedListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.map = new Map();
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.removeNode(node);
      this.addToTail(node);
      return node.value;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.removeNode(node);
    }
    const newNode = new DoublelyLinkedListNode(key, value);
    this.map.set(key, newNode);
    this.addToTail(newNode);
    if (this.map.size > this.capacity) {
      this.map.delete(this.head.next.key);
      this.removeNode(this.head.next);
    }
  }

  addToTail(node: DoublelyLinkedListNode): void {
    const prevNode = this.tail.prev;
    this.tail.prev = node;
    node.next = this.tail;
    node.prev = prevNode;
    prevNode.next = node;
  }

  removeNode(node: DoublelyLinkedListNode): void {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

class DoublelyLinkedListNode {
  public next: DoublelyLinkedListNode | null;
  public prev: DoublelyLinkedListNode | null;
  constructor(
    public readonly key: number,
    public value: number,
  ) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// put: remove right-most node (least recent) + add to tail (most recent)
// get: remove node + add to tail (most recent)
