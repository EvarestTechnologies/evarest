import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WorkPage from "@/app/work/page";

describe("work page", () => {
  it("has anchors koa and ocs", () => {
    const { container } = render(<WorkPage />);
    expect(container.querySelector("#koa")).not.toBeNull();
    expect(container.querySelector("#ocs")).not.toBeNull();
  });
  it("KOA links koaafricaa.com and shows website and portal images", () => {
    const { container } = render(<WorkPage />);
    const koa = within(container.querySelector("#koa") as HTMLElement);
    expect(koa.getByRole("link", { name: /Visit koaafricaa.com/ })).toHaveAttribute("href", "https://koaafricaa.com/");
    expect(koa.getByAltText(/KOA Africa website home page/)).toBeInTheDocument();
    expect(koa.getByAltText(/agent portal sign-in/)).toBeInTheDocument();
  });
  it("Open Chat Studio links Chat with ZEYA and no GitHub", () => {
    const { container } = render(<WorkPage />);
    const ocs = container.querySelector("#ocs") as HTMLElement;
    expect(within(ocs).getByRole("link", { name: /Chat with ZEYA/ })).toHaveAttribute("href", "https://wa.me/254183325153?text=Hi");
    expect(ocs.querySelector('a[href*="github.com"]')).toBeNull();
  });
  it("each study has an at-a-glance list and three story parts", () => {
    render(<WorkPage />);
    expect(screen.getAllByRole("term").length).toBe(8);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(6);
  });
});
