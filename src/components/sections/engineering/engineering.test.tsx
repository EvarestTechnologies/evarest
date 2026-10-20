import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import EngineeringPage from "@/app/engineering/page";

describe("engineering page", () => {
  it("shows six problems, six services, five steps and three ways to work", () => {
    render(<EngineeringPage />);
    expect(screen.getAllByRole("blockquote")).toHaveLength(6);
    expect(within(screen.getByRole("region", { name: "What we build." })).getAllByRole("heading", { level: 3 })).toHaveLength(6);
    expect(within(screen.getByRole("list", { name: "How we work" })).getAllByRole("listitem")).toHaveLength(5);
    expect(within(screen.getByRole("region", { name: "Pick the shape that fits." })).getAllByRole("heading", { level: 3 })).toHaveLength(3);
  });
  it("the fixed-scope card is the highlighted one", () => {
    render(<EngineeringPage />);
    expect(screen.getByRole("heading", { name: "Fixed-scope project" }).closest("[data-featured]")).toHaveAttribute("data-featured", "true");
  });
  it("FAQs are details elements that open on click", async () => {
    const { container } = render(<EngineeringPage />);
    const details = container.querySelectorAll("details");
    expect(details).toHaveLength(4);
    await userEvent.click(screen.getByText("What happens after launch?"));
    expect(details[2]).toHaveAttribute("open");
  });
  it("states the price sentence and shows no prices", () => {
    const { container } = render(<EngineeringPage />);
    expect(screen.getByText("We agree the price in the proposal, after we understand the work.")).toBeInTheDocument();
    expect(container.textContent).not.toMatch(/\$|KSh|USD/);
  });
  it("the process section has the how anchor", () => {
    const { container } = render(<EngineeringPage />);
    expect(container.querySelector("#how")).not.toBeNull();
  });
});
