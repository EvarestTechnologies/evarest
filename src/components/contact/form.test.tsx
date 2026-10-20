import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { EnquiryForm } from "./EnquiryForm";

afterEach(() => vi.unstubAllGlobals());

async function fill(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Your name"), "Amina");
  await user.type(screen.getByLabelText("Email"), "amina@example.com");
  await user.type(screen.getByLabelText("Message"), "We need an API built for our app.");
}

describe("EnquiryForm", () => {
  it("shows field errors next to each field and a summary", async () => {
    const user = userEvent.setup();
    render(<EnquiryForm accessKey="k" minDelayMs={0} />);
    await user.click(screen.getByRole("button", { name: /Send message/ }));
    expect(screen.getByRole("alert")).toHaveTextContent("Please check the fields marked below.");
    expect(screen.getByLabelText("Your name")).toHaveAttribute("aria-invalid", "true");
  });

  it("without a key, submitting shows Form not configured and never the thank-you", async () => {
    const user = userEvent.setup();
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    render(<EnquiryForm accessKey="" minDelayMs={0} />);
    await fill(user);
    await user.click(screen.getByRole("button", { name: /Send message/ }));
    expect(screen.getByText(/Form not configured/)).toBeInTheDocument();
    expect(screen.queryByText(/Thank you/)).not.toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("drops a filled honeypot silently, with no request", async () => {
    const user = userEvent.setup();
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    const { container } = render(<EnquiryForm accessKey="k" minDelayMs={0} />);
    await fill(user);
    await user.type(container.querySelector('input[name="company_website"]')!, "spam.example");
    await user.click(screen.getByRole("button", { name: /Send message/ }));
    expect(fetch).not.toHaveBeenCalled();
  });

  it("rejects a submit faster than the time trap, with no request", async () => {
    const user = userEvent.setup();
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    render(<EnquiryForm accessKey="k" minDelayMs={60_000} />);
    await fill(user);
    await user.click(screen.getByRole("button", { name: /Send message/ }));
    expect(fetch).not.toHaveBeenCalled();
  });

  it("a failed request shows the error with the email address", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, json: async () => ({ success: false }) }));
    render(<EnquiryForm accessKey="k" minDelayMs={0} />);
    await fill(user);
    await user.click(screen.getByRole("button", { name: /Send message/ }));
    expect(await screen.findByText(/did not send/)).toHaveTextContent("contact@evarestke.com");
  });

  it("success moves focus to the thank-you, and the button is disabled while sending", async () => {
    const user = userEvent.setup();
    let resolve: (v: unknown) => void = () => {};
    vi.stubGlobal("fetch", vi.fn(() => new Promise((r) => (resolve = r))));
    render(<EnquiryForm accessKey="k" minDelayMs={0} initialTopic="Product partnership" />);
    expect(screen.getByLabelText("A product partnership")).toBeChecked();
    await fill(user);
    await user.click(screen.getByRole("button", { name: /Send message/ }));
    expect(screen.getByRole("button", { name: /Sending/ })).toBeDisabled();
    resolve({ ok: true, json: async () => ({ success: true }) });
    await waitFor(() => expect(screen.getByText("Thank you. Your message is on its way.").closest("[tabindex]")).toHaveFocus());
  });
});
