import { afterEach, describe, expect, it, vi } from "vitest";
import throttle from "./code";

afterEach(() => vi.useRealTimers());

describe("throttle", () => {
  it("runs immediately and ignores calls during the delay", () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const throttled = throttle(callback, 100);
    throttled(1);
    throttled(2);
    expect(callback).toHaveBeenCalledOnce();
    vi.advanceTimersByTime(100);
    throttled(3);
    expect(callback).toHaveBeenLastCalledWith(3);
  });

  it("preserves this", () => {
    const object = {
      value: 2,
      run: throttle(function (n) {
        this.value += n;
      }, 10),
    };
    object.run(3);
    expect(object.value).toBe(5);
  });
});
