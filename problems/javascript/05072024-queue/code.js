// Implement Queue with O(1) time complexity for all operations.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this._head = new Node();
    this._tail = new Node();
    this._head.prev = this._tail;
    this._tail.next = this._head;
    this._length = 0;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    const node = new Node(item);
    node.next = this._tail.next;
    node.prev = this._tail;
    this._tail.next.prev = node;
    this._tail.next = node;
    this._length += 1;
    return this._length;
  }

  /**
   * Removes an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    if (this.isEmpty()) return;
    const dequeuedNode = this._head.prev;
    this._head.prev.prev.next = this._head;
    this._head.prev = this._head.prev.prev;
    this._length -= 1;
    return dequeuedNode.value;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
    return this._length === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    if (this.isEmpty()) return;
    return this._head.prev.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    if (this.isEmpty()) return;
    return this._tail.next.value;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this._length;
  }
}
