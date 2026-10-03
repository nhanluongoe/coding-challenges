import { describe, expect, it } from "vitest";
import hasCycle from "./code";

describe("hasCycle", () => {
  it("detects cycles and handles acyclic lists", () => {
    const tail = { val: 3, next: null };
    const head = { val: 1, next: { val: 2, next: tail } };
    expect(hasCycle(head)).toBe(false);
    tail.next = head.next;
    expect(hasCycle(head)).toBe(true);
    expect(hasCycle(null)).toBe(false);
  });
});
