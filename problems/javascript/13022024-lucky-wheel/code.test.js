import { afterEach, describe, expect, it, vi } from "vitest";
import letsGo, { getRandomGift } from "./code";

afterEach(() => vi.restoreAllMocks());

describe("lucky wheel", () => {
  it("selects gifts at probability boundaries", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(0).mockReturnValueOnce(0.9999);
    const probabilities = { small: 9, large: 1 };
    expect(getRandomGift(probabilities)).toBe("small");
    expect(getRandomGift(probabilities)).toBe("large");
  });

  it("skips unavailable gifts", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.9999);
    expect(letsGo({ 100: 0, 9999: 1 })).toBe("9999");
  });
});
