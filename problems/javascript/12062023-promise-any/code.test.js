import { describe, expect, it } from "vitest";
import promiseAny from "./code";

describe("promiseAny", () => {
  it("resolves with the first fulfillment", async () => {
    await expect(
      promiseAny([Promise.reject("no"), Promise.resolve("yes")]),
    ).resolves.toBe("yes");
  });

  it("returns ordered errors when every input rejects", async () => {
    const result = promiseAny([
      Promise.reject("first"),
      Promise.reject("second"),
    ]);
    await expect(result).rejects.toMatchObject({ errors: ["first", "second"] });
  });

  it("rejects empty input with AggregateError", async () => {
    await expect(promiseAny([])).rejects.toBeInstanceOf(AggregateError);
  });
});
