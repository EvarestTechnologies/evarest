import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductsPage from "@/app/products/page";

describe("products page", () => {
  it("has the three anchors", () => {
    const { container } = render(<ProductsPage />);
    for (const id of ["zeya", "zeya-privacy", "kintaraa"]) expect(container.querySelector(`#${id}`)).not.toBeNull();
  });
  it("ZEYA section links Chat with ZEYA and More about ZEYA to the privacy part", () => {
    const { container } = render(<ProductsPage />);
    const zeya = within(container.querySelector("#zeya") as HTMLElement);
    expect(zeya.getByRole("link", { name: /Chat with ZEYA/ })).toHaveAttribute("href", "https://wa.me/254183325153?text=Hi");
    expect(zeya.getByRole("link", { name: "More about ZEYA" })).toHaveAttribute("href", "#zeya-privacy");
  });
  it("privacy part links the full policy", () => {
    render(<ProductsPage />);
    expect(screen.getByRole("link", { name: /Read the full ZEYA privacy policy/ })).toHaveAttribute("href", "/zeya/privacy/");
  });
  it("Kintaraa section links kintaraa.com and Partner on a pilot", () => {
    const { container } = render(<ProductsPage />);
    const k = within(container.querySelector("#kintaraa") as HTMLElement);
    expect(k.getByRole("link", { name: /Visit kintaraa.com/ })).toHaveAttribute("href", "https://kintaraa.com/");
    expect(k.getByRole("link", { name: "Partner on a pilot" })).toHaveAttribute("href", "/contact/?t=partner");
  });
});
