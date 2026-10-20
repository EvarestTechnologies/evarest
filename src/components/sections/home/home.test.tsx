import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./Hero";
import { ProductCards } from "./ProductCards";
import { WorkCards } from "./WorkCards";
import { EngineeringSplit } from "./EngineeringSplit";

describe("home", () => {
  it("hero has the headline, both buttons and the proof line", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("We build what matters.We engineer what works.");
    expect(screen.getByRole("link", { name: /Start a project/ })).toHaveAttribute("href", "/contact/?t=project");
    expect(screen.getByRole("link", { name: /Partner with us/ })).toHaveAttribute("href", "/contact/?t=partner");
    expect(screen.getByText("Built KOA Africa's insurance platform")).toBeInTheDocument();
  });

  it("hero image loads eagerly with width, height and a srcset", () => {
    render(<Hero />);
    const img = screen.getByAltText(/Evarest team working together/);
    expect(img).toHaveAttribute("loading", "eager");
    expect(img).toHaveAttribute("width");
    expect(img).toHaveAttribute("height");
    expect(img.getAttribute("srcset")).toContain("hero-team-2560.webp 2560w");
  });

  it("product cards link Chat with ZEYA and Visit kintaraa.com", () => {
    render(<ProductCards />);
    expect(screen.getByRole("link", { name: /Chat with ZEYA/ })).toHaveAttribute("href", "https://wa.me/254183325153?text=Hi");
    expect(screen.getByRole("link", { name: "Visit kintaraa.com" })).toHaveAttribute("href", "https://kintaraa.com/");
    expect(screen.getByText("Open on WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Ready for pilot")).toBeInTheDocument();
  });

  it("engineering split lists six services and three promises", () => {
    render(<EngineeringSplit />);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(9);
    expect(screen.getByRole("link", { name: /How we work/ })).toHaveAttribute("href", "/engineering/#how");
  });

  it("work cards show KOA Africa and Open Chat Studio only", () => {
    render(<WorkCards />);
    const titles = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(titles).toEqual(["KOA Africa", "Open Chat Studio"]);
    expect(within(screen.getByRole("article", { name: "KOA Africa" })).getByRole("link")).toHaveAttribute("href", "https://koaafricaa.com/");
  });
});
