import { describe, expect, it } from "vitest";
import depthFirstSearch from "./code";

describe("depthFirstSearch", () => {
  it("visits nodes in depth-first order", () => {
    const graph = { A: ["B", "C"], B: ["A", "D"], C: ["A"], D: ["B"] };
    expect(depthFirstSearch(graph, "A")).toEqual(["A", "B", "D", "C"]);
  });

  it("handles an empty graph", () => {
    expect(depthFirstSearch({}, "A")).toEqual([]);
  });
});
