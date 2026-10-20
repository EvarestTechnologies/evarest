import { describe, expect, it } from "vitest";
import { roadPath, roadPoints } from "./road";

describe("road", () => {
  it("places points evenly, alternating top and bottom", () => {
    const pts = roadPoints(7, 1440, 420);
    expect(pts).toHaveLength(7);
    expect(pts[0]).toEqual({ x: 70, y: 130 });
    expect(pts[1].y).toBe(300);
    expect(pts[6]).toEqual({ x: 1370, y: 130 });
  });
  it("builds a path that bends through every point", () => {
    const d = roadPath(roadPoints(7, 1440, 420));
    expect(d.startsWith("M")).toBe(true);
    expect(d.match(/ C /g)).toHaveLength(6);
  });
});
