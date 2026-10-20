import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { EnquiryForm } from "./EnquiryForm";

afterEach(() => vi.unstubAllGlobals());

describe("EnquiryForm review fixes", () => {
  it("posts to Web3Forms without JavaScript, never GETs details into the URL", () => {
    const { container } = render(<EnquiryForm accessKey="k" />);
    const form = container.querySelector("form")!;
    expect(form).toHaveAttribute("method", "post");
    expect(form).toHaveAttribute("action", "https://api.web3forms.com/submit");
    expect(container.querySelector('input[name="access_key"]')).toHaveValue("k");
    expect(container.querySelector('input[name="redirect"]')).toHaveValue("https://evarestke.com/contact/thanks/");
  });

  it("a valid submit inside the time trap waits, then sends", async () => {
    const user = userEvent.setup();
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
    vi.stubGlobal("fetch", fetch);
    render(<EnquiryForm accessKey="k" minDelayMs={300} />);
    await user.type(screen.getByLabelText("Your name"), "Amina");
    await user.type(screen.getByLabelText("Email"), "amina@example.com");
    await user.type(screen.getByLabelText("Message"), "We need an API built for our app.");
    await user.click(screen.getByRole("button", { name: /Send message/ }));
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1), { timeout: 2000 });
  });
});
