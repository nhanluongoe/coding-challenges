import { describe, expect, it } from "vitest";
import promiseResolve from "./code";

describe("promiseResolve", () => {
  it.each([
    42,
    null,
    undefined,
    "value",
  ])('resolves the value "%s"', async (value) => {
    await expect(promiseResolve(value)).resolves.toBe(value);
  });

  it("returns an existing promise unchanged", () => {
    const promise = Promise.resolve(42);
    expect(promiseResolve(promise)).toBe(promise);
  });

  it("assimilates thenables", async () => {
    await expect(
      promiseResolve({ then: (resolve) => resolve(42) }),
    ).resolves.toBe(42);
  });
});
