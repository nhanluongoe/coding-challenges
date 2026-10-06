export default class LRUCache {
  private readonly head: DoublyLinkedListNode;
  private readonly tail: DoublyLinkedListNode;
  private readonly nodes = new Map<number, DoublyLinkedListNode>();

  constructor(private readonly capacity: number) {
    if (!Number.isInteger(capacity) || capacity < 1) {
      throw new RangeError("capacity must be a positive integer");
    }

    this.head = new DoublyLinkedListNode(-1, -1);
    this.tail = new DoublyLinkedListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.nodes.get(key);

    if (node === undefined) {
      return -1;
    }

    this.moveToMostRecentlyUsed(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const existingNode = this.nodes.get(key);

    if (existingNode !== undefined) {
      existingNode.value = value;
      this.moveToMostRecentlyUsed(existingNode);
      return;
    }

    const newNode = new DoublyLinkedListNode(key, value);
    this.nodes.set(key, newNode);
    this.addToTail(newNode);

    if (this.nodes.size > this.capacity) {
      this.evictLeastRecentlyUsed();
    }
  }

  private moveToMostRecentlyUsed(node: DoublyLinkedListNode): void {
    this.removeNode(node);
    this.addToTail(node);
  }

  private evictLeastRecentlyUsed(): void {
    const leastRecentlyUsed = this.head.next;

    if (leastRecentlyUsed === null || leastRecentlyUsed === this.tail) {
      throw new Error("Cannot evict from an empty cache");
    }

    this.removeNode(leastRecentlyUsed);
    this.nodes.delete(leastRecentlyUsed.key);
  }

  private addToTail(node: DoublyLinkedListNode): void {
    const previousNode = this.tail.prev;

    if (previousNode === null) {
      throw new Error("Invalid linked-list state");
    }

    previousNode.next = node;
    node.prev = previousNode;
    node.next = this.tail;
    this.tail.prev = node;
  }

  private removeNode(node: DoublyLinkedListNode): void {
    const previousNode = node.prev;
    const nextNode = node.next;

    if (previousNode === null || nextNode === null) {
      throw new Error("Cannot remove a detached node");
    }

    previousNode.next = nextNode;
    nextNode.prev = previousNode;
    node.prev = null;
    node.next = null;
  }
}

class DoublyLinkedListNode {
  next: DoublyLinkedListNode | null = null;
  prev: DoublyLinkedListNode | null = null;

  constructor(
    public readonly key: number,
    public value: number,
  ) {}
}
