import { describe, expect, it } from "vitest";

import LRUCache from "./code";

describe("LRUCache", () => {
  it("handles the example operations", () => {
    const cache = new LRUCache(3);

    cache.put(1, 100);
    cache.put(2, 250);
    expect(cache.get(2)).toBe(250);

    cache.put(4, 300);
    cache.put(3, 200);

    expect(cache.get(4)).toBe(300);
    expect(cache.get(1)).toBe(-1);
  });

  it("evicts the least recently used key", () => {
    const cache = new LRUCache(2);

    cache.put(1, 100);
    cache.put(2, 200);
    cache.put(3, 300);

    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(200);
    expect(cache.get(3)).toBe(300);
  });

  it("marks a key as recently used when it is read", () => {
    const cache = new LRUCache(2);

    cache.put(1, 100);
    cache.put(2, 200);
    cache.get(1);
    cache.put(3, 300);

    expect(cache.get(1)).toBe(100);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(300);
  });

  it("updates an existing key without evicting another entry", () => {
    const cache = new LRUCache(2);

    cache.put(1, 100);
    cache.put(2, 200);
    cache.put(1, 150);

    expect(cache.get(1)).toBe(150);
    expect(cache.get(2)).toBe(200);
  });

  it("marks an updated key as recently used", () => {
    const cache = new LRUCache(2);

    cache.put(1, 100);
    cache.put(2, 200);
    cache.put(1, 150);
    cache.put(3, 300);

    expect(cache.get(1)).toBe(150);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(300);
  });

  it("works with a capacity of one", () => {
    const cache = new LRUCache(1);

    cache.put(1, 100);
    expect(cache.get(1)).toBe(100);

    cache.put(2, 200);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(200);
  });

  it("returns -1 for a missing key", () => {
    const cache = new LRUCache(2);

    expect(cache.get(42)).toBe(-1);
  });

  it("returns undefined from put", () => {
    const cache = new LRUCache(2);

    expect(cache.put(1, 100)).toBeUndefined();
  });
});
