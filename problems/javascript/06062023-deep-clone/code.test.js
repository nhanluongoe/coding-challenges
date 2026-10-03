import { describe, expect, it } from "vitest";
import deepClone from "./code";

describe("deepClone", () => {
  it("recursively clones objects and arrays", () => {
    const original = { user: { roles: ["admin"] } };
    const clone = deepClone(original);
    clone.user.roles.push("editor");
    expect(clone).toEqual({ user: { roles: ["admin", "editor"] } });
    expect(original).toEqual({ user: { roles: ["admin"] } });
  });

  it.each([null, undefined, 1, "value", true])("returns primitive %s", (value) => {
    expect(deepClone(value)).toBe(value);
  });
});
