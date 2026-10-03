import { describe, expect, it } from "vitest";
import deleteDuplicates, { SinglyLinkedList } from "./code";

function values(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe("deleteDuplicates", () => {
  it("removes repeated values from a sorted linked list", () => {
    const list = new SinglyLinkedList();
    [1, 1, 1, 2, 3, 3].forEach((value) => list.push(value));
    expect(values(deleteDuplicates(list.head))).toEqual([1, 2, 3]);
  });

  it("handles an empty list", () => {
    expect(deleteDuplicates(null)).toBeNull();
  });
});
