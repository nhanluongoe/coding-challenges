import { describe, expect, it } from "vitest";
import makeCounter from "./code";

describe("makeCounter", () => {
  it("increments, decrements, and resets", () => {
    const counter = makeCounter(10);
    expect(counter.increment()).toBe(11);
    expect(counter.decrement()).toBe(10);
    expect(counter.reset()).toBe(10);
    expect(counter.get()).toBe(10);
  });

  it("defaults to zero", () => {
    expect(makeCounter().get()).toBe(0);
  });
});
