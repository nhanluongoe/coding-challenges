import { describe, expect, it } from "vitest";
import promisify, { enhancedPromisify } from "./code";

describe("promisify", () => {
  it("resolves callback results and preserves this", async () => {
    const object = {
      base: 2,
      add(value, callback) {
        callback(null, this.base + value);
      },
    };
    object.addAsync = promisify(object.add);
    await expect(object.addAsync(3)).resolves.toBe(5);
  });

  it("rejects callback errors", async () => {
    await expect(promisify((callback) => callback("failed"))()).rejects.toBe(
      "failed",
    );
  });

  it("uses a custom implementation when available", () => {
    const original = () => {};
    const custom = () => Promise.resolve("custom");
    original[Symbol.for("util.promisify.custom")] = custom;
    expect(enhancedPromisify(original)).toBe(custom);
  });
});
