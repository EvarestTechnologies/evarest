import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhatsAppChat } from "./WhatsAppChat";
import { BrowserFrame } from "./BrowserFrame";
import { SectionHead } from "./SectionHead";
import { TickList } from "./TickList";

describe("ui", () => {
  it("WhatsAppChat renders each message with its time, hers on the right", () => {
    render(<WhatsAppChat label="chat" messages={[{ from: "her", text: "Hi there", time: "16:20" }, { from: "zeya", text: "Hello Mama", time: "16:21" }]} />);
    expect(screen.getByRole("img", { name: "chat" })).toBeInTheDocument();
    expect(screen.getByText("Hi there").closest("[data-from]")).toHaveAttribute("data-from", "her");
    expect(screen.getByText("16:21")).toBeInTheDocument();
  });
  it("BrowserFrame shows the URL and the image alt", () => {
    render(<BrowserFrame url="koaafricaa.com" src="/images/koa-site.webp" alt="KOA home" />);
    expect(screen.getByText("koaafricaa.com")).toBeInTheDocument();
    expect(screen.getByAltText("KOA home")).toHaveAttribute("src", "/images/koa-site.webp");
  });
  it("SectionHead renders an h2 and no numbers", () => {
    render(<SectionHead label="Services" title="What we build." />);
    expect(screen.getByRole("heading", { level: 2, name: "What we build." })).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/\b0\d\b/);
  });
  it("TickList renders each point", () => {
    render(<TickList items={[{ title: "No name needed", body: "Nothing is kept." }]} />);
    expect(screen.getByText("No name needed")).toBeInTheDocument();
  });
});
