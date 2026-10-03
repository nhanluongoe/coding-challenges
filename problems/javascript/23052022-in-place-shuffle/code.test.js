import { afterEach, describe, expect, it, vi } from "vitest";
import shuffle, { getRandom, outPlaceShuffle } from "./code";

afterEach(() => vi.restoreAllMocks());

describe("shuffle", () => {
  it("uses inclusive random bounds", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(0).mockReturnValueOnce(0.9999);
    expect(getRandom(2, 4)).toBe(2);
    expect(getRandom(2, 4)).toBe(4);
  });

  it("shuffles in place and preserves all values", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.9999);
    const values = [1, 2, 3];
    expect(shuffle(values)).toBeUndefined();
    expect(values).toEqual([3, 1, 2]);
  });

  it("out-of-place shuffle preserves the source", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const values = ["a", "a", "z"];
    expect(outPlaceShuffle(values)).toEqual(values);
    expect(outPlaceShuffle(values)).not.toBe(values);
  });
});
