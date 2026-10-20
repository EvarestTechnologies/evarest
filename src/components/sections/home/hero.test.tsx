import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";

describe("hero image weight", () => {
  it("offers phone-sized versions in the srcset", () => {
    render(<Hero />);
    const set = screen.getByAltText(/Evarest team working together/).getAttribute("srcset") ?? "";
    expect(set).toContain("hero-team-640.webp 640w");
    expect(set).toContain("hero-team-828.webp 828w");
  });
});
