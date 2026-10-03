import { describe, expect, it } from "vitest";
import get from "./code";

describe("get", () => {
  const value = { profile: { name: { first: "Ada" } }, items: ["first"] };

  it("reads string and array paths", () => {
    expect(get(value, "profile.name.first")).toBe("Ada");
    expect(get(value, ["items", "0"])).toBe("first");
  });

  it("returns defaults only for missing paths", () => {
    expect(get({ present: undefined }, "present", "fallback")).toBeUndefined();
    expect(get(value, "profile.age", 0)).toBe(0);
  });
});
