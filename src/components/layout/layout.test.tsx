import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { NAV } from "@/content";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FinalCta } from "./FinalCta";

describe("layout", () => {
  it("header shows the menu in order with the Start a project button", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Main" });
    expect(within(nav).getAllByRole("link").map((a) => a.textContent)).toEqual(NAV.map((n) => n.label));
    expect(screen.getAllByRole("link", { name: /Start a project/ })[0]).toHaveAttribute("href", "/contact/?t=project");
  });

  it("mobile menu opens from the button and closes on Escape and on link click", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const button = screen.getByRole("button", { name: "Open menu" });
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: "Menu" })).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(button).toHaveFocus();
    await user.click(button);
    await user.click(within(screen.getByRole("dialog")).getByRole("link", { name: "Work" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("footer has no GitHub link and links the ZEYA privacy policy and Kintaraa", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('a[href*="github.com"]')).toBeNull();
    expect(screen.getByRole("link", { name: "ZEYA privacy policy" })).toHaveAttribute("href", "/zeya/privacy/");
    expect(screen.getByRole("link", { name: "Kintaraa" })).toHaveAttribute("href", "https://kintaraa.com/");
  });

  it("closing section offers both actions", () => {
    render(<FinalCta />);
    expect(screen.getByRole("link", { name: /Start a project/ })).toHaveAttribute("href", "/contact/?t=project");
    expect(screen.getByRole("link", { name: /Partner with us/ })).toHaveAttribute("href", "/contact/?t=partner");
  });
});
