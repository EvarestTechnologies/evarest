import { describe, expect, it } from "vitest";
import * as all from "./index";

const text = JSON.stringify(all);

describe("site content", () => {
  it("menu order is fixed", () => {
    expect(all.NAV.map((n) => n.label)).toEqual(["Products", "Engineering", "Work", "About", "Contact"]);
  });

  it("follows the copy rules", () => {
    expect(text).not.toMatch(/—/);
    expect(text).not.toMatch(/github\.com\/EvarestTechnologies/i);
    expect(text).not.toMatch(/built in Kenya/i);
    expect(text).not.toMatch(/trial in preparation/i);
    expect(text).not.toMatch(/\$\d|KSh|USD/);
    expect(text).not.toMatch(/Sarah Chen|Fortune 500|24\/7|world-class|cutting-edge/i);
  });

  it("states the product statuses exactly", () => {
    expect(all.PRODUCTS.zeya.status).toBe("Open on WhatsApp");
    expect(all.PRODUCTS.kintaraa.status).toBe("Ready for pilot");
  });

  it("links are the agreed ones", () => {
    expect(all.LINKS.startProject).toBe("/contact/?t=project");
    expect(all.LINKS.partner).toBe("/contact/?t=partner");
    expect(all.LINKS.chatZeya).toBe("https://wa.me/254183325153?text=Hi");
    expect(all.LINKS.kintaraa).toBe("https://kintaraa.com/");
  });

  it("Kintaraa copy names no place", () => {
    expect(JSON.stringify(all.PRODUCTS.kintaraa)).not.toMatch(/Kenya|Nairobi|Kisumu/);
  });
});
