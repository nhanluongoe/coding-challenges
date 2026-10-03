import { describe, expect, it, vi } from "vitest";
import promiseTimeout from "./code";

describe("promiseTimeout", () => {
  it("settles with the source promise before the deadline", async () => {
    await expect(promiseTimeout(Promise.resolve(42), 100)).resolves.toBe(42);
    await expect(promiseTimeout(Promise.reject("no"), 100)).rejects.toBe("no");
  });

  it("rejects when the deadline wins", async () => {
    vi.useFakeTimers();
    const result = promiseTimeout(new Promise(() => {}), 50);
    const assertion = expect(result).rejects.toBe("Promise timeout");
    await vi.advanceTimersByTimeAsync(50);
    await assertion;
    vi.useRealTimers();
  });
});
