import { afterEach, describe, expect, it, vi } from "vitest";
import debounce from "./code";

afterEach(() => vi.useRealTimers());

describe("debounce", () => {
  it("invokes only the latest call after the delay", () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const debounced = debounce(callback, 100);
    debounced("first");
    debounced("last");
    vi.advanceTimersByTime(100);
    expect(callback).toHaveBeenCalledOnce();
    expect(callback).toHaveBeenCalledWith("last");
  });

  it("preserves this", () => {
    vi.useFakeTimers();
    const object = { value: 1, add: debounce(function (n) { this.value += n; }, 10) };
    object.add(2);
    vi.advanceTimersByTime(10);
    expect(object.value).toBe(3);
  });
});
