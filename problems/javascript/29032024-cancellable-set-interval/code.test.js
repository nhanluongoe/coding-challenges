import { afterEach, describe, expect, it, vi } from "vitest";
import cancellableSetInterval, { cancellableSetTimeout } from "./code";

afterEach(() => vi.useRealTimers());

describe("cancellable timers", () => {
  it("runs an interval with arguments until cancelled", () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const cancel = cancellableSetInterval(callback, 10, "value");
    vi.advanceTimersByTime(25);
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith("value");
    cancel();
    vi.advanceTimersByTime(20);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("cancels a timeout", () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const cancel = cancellableSetTimeout(callback, 10);
    cancel();
    vi.advanceTimersByTime(10);
    expect(callback).not.toHaveBeenCalled();
  });
});
