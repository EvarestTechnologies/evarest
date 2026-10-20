import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ROUTES, findProblems } from "./verify-export.mjs";

const GOOD_HTACCESS = "RewriteEngine On\nRewriteRule ^zeya/?$ /products/#zeya [R=301,NE,L]\n";

function site({ htaccess = GOOD_HTACCESS, pages = {}, skip = [] } = {}) {
  const dir = mkdtempSync(join(tmpdir(), "out-"));
  writeFileSync(join(dir, ".htaccess"), htaccess);
  for (const r of ROUTES) {
    if (skip.includes(r)) continue;
    mkdirSync(join(dir, r), { recursive: true });
    writeFileSync(join(dir, r, "index.html"), pages[r] ?? "<main><section><h1>Hi</h1></section></main>");
  }
  return dir;
}

describe("verify-export", () => {
  it("passes a good export", () => {
    expect(findProblems(site())).toEqual([]);
  });
  it("reports a missing route", () => {
    expect(findProblems(site({ skip: ["about"] }))).toContain("missing about/index.html");
  });
  it("reports a /zeya/ page that would shadow the redirect", () => {
    const dir = site();
    mkdirSync(join(dir, "zeya"), { recursive: true });
    writeFileSync(join(dir, "zeya", "index.html"), "old page");
    expect(findProblems(dir)).toContain("zeya/index.html exists and would shadow the /zeya/ redirect");
  });
  it("reports a missing redirect rule", () => {
    expect(findProblems(site({ htaccess: "RewriteEngine On\n" }))).toContain(".htaccess has no /zeya/ redirect to /products/#zeya");
  });
  it("reports banned content and a hidden hero", () => {
    const problems = findProblems(site({ pages: {
      "": '<main><section style="opacity:0"><h1>x</h1></section></main>',
      work: '<a href="https://github.com/EvarestTechnologies/zeya">code</a> Sarah Chen —',
    } }));
    expect(problems).toContain("index.html: hero is hidden in static HTML (opacity:0)");
    expect(problems).toContain("work/index.html: contains github.com/EvarestTechnologies");
    expect(problems).toContain("work/index.html: contains Sarah Chen");
    expect(problems).toContain("work/index.html: contains an em dash");
  });
});
