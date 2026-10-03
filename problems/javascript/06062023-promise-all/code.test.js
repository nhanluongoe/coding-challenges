import { describe, expect, it } from "vitest";
import promiseAll from "./code";

describe("promiseAll", () => {
  it("preserves input order and accepts non-promises", async () => {
    const slow = new Promise((resolve) => setTimeout(() => resolve(1), 10));
    await expect(promiseAll([slow, Promise.resolve(2), 3])).resolves.toEqual([1, 2, 3]);
  });

  it("handles empty input and rejects with the first rejection", async () => {
    await expect(promiseAll([])).resolves.toEqual([]);
    await expect(promiseAll([Promise.resolve(1), Promise.reject("failed")])).rejects.toBe("failed");
  });
});
