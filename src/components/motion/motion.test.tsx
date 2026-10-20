import { render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import { Magnetic } from "./Magnetic";
import { Intro } from "./Intro";

const g = globalThis as unknown as { setReducedMotion: (v: boolean) => void; setFinePointer: (v: boolean) => void };

describe("motion under reduced motion", () => {
  it("Reveal shows its children with no hiding styles", () => {
    g.setReducedMotion(true);
    render(<Reveal><p>Hello</p></Reveal>);
    const el = screen.getByText("Hello").parentElement!;
    expect(el.className).not.toMatch(/opacity-0|translate-y/);
  });
  it("Parallax applies no transform", () => {
    g.setReducedMotion(true);
    g.setFinePointer(true);
    render(<Parallax speed={0.2}><img alt="x" src="/x.webp" /></Parallax>);
    expect(screen.getByAltText("x").parentElement!.getAttribute("style") ?? "").not.toMatch(/transform/);
  });
  it("Magnetic renders its child", () => {
    g.setReducedMotion(true);
    render(<Magnetic><a href="/a">Go</a></Magnetic>);
    expect(screen.getByRole("link", { name: "Go" })).toBeInTheDocument();
  });
  it("Intro renders nothing", () => {
    g.setReducedMotion(true);
    const { container } = render(<Intro />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe("motion on other devices", () => {
  it("Parallax applies no transform on a coarse pointer", () => {
    render(<Parallax speed={0.2}><img alt="y" src="/y.webp" /></Parallax>);
    expect(screen.getByAltText("y").parentElement!.getAttribute("style") ?? "").not.toMatch(/transform/);
  });
  it("Reveal renders its children in the static markup", () => {
    const html = renderToString(<Reveal><p>Static</p></Reveal>);
    expect(html).toContain("Static");
    expect(html).not.toMatch(/opacity:0|opacity-0/);
  });
});
