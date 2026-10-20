import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "@/app/about/page";
import { FOUNDERS } from "@/content";

describe("about page", () => {
  it("leads with the story headline", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Most teams meet when the project starts.");
  });
  it("shows seven road stops with Now on ZEYA and Next on the last two", () => {
    render(<AboutPage />);
    const stops = within(screen.getByRole("list", { name: "Our road so far" })).getAllByRole("listitem");
    expect(stops).toHaveLength(7);
    expect(stops[4]).toHaveTextContent("Now");
    expect(stops[4]).toHaveTextContent("ZEYA on WhatsApp");
    expect(stops[5]).toHaveTextContent("Next");
    expect(stops[6]).toHaveTextContent("Next");
  });
  it("puts Vision before Mission", () => {
    const { container } = render(<AboutPage />);
    const text = container.textContent ?? "";
    expect(text.indexOf("Vision")).toBeLessThan(text.indexOf("Mission"));
  });
  it("lists four founders, each with their LinkedIn link", () => {
    render(<AboutPage />);
    for (const f of FOUNDERS) {
      expect(screen.getByRole("link", { name: `${f.name} on LinkedIn` })).toHaveAttribute("href", f.linkedin);
    }
  });
  it("portraits are greyscale only on fine pointers", () => {
    render(<AboutPage />);
    const img = screen.getByAltText(FOUNDERS[0].name);
    expect(img.className).toMatch(/fine:grayscale/);
    expect(img.className).not.toMatch(/(^| )grayscale/);
  });
});
