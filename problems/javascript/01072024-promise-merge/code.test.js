import { describe, expect, it } from "vitest";
import promiseMerge from "./code";

describe("promiseMerge", () => {
  it.each([
    [21, 22, 43],
    ["ab", "cd", "abcd"],
    [[1, 2], [3], [1, 2, 3]],
    [{ a: 1 }, { b: 2 }, { a: 1, b: 2 }],
  ])("merges compatible values %#", async (left, right, expected) => {
    await expect(
      promiseMerge(Promise.resolve(left), Promise.resolve(right)),
    ).resolves.toEqual(expected);
  });

  it("rejects incompatible values and propagates rejection", async () => {
    await expect(
      promiseMerge(Promise.resolve(1), Promise.resolve([])),
    ).rejects.toBe("Unsupported data types");
    await expect(
      promiseMerge(Promise.reject("failed"), Promise.resolve(1)),
    ).rejects.toBe("failed");
  });
});
