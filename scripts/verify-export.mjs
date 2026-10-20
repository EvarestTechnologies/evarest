// Checks the static export in out/ before it is deployed. Usage: node scripts/verify-export.mjs out
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export const ROUTES = ["", "products", "engineering", "work", "about", "contact", "contact/thanks", "zeya/privacy"];

const BANNED = [
  ["github.com/EvarestTechnologies", "contains github.com/EvarestTechnologies"],
  ["Sarah Chen", "contains Sarah Chen"],
  ["—", "contains an em dash"],
];

/** Returns a list of problems; an empty list means the export is safe to deploy. */
export function findProblems(outDir) {
  const problems = [];
  for (const r of ROUTES) {
    const rel = r ? `${r}/index.html` : "index.html";
    const file = join(outDir, rel);
    if (!existsSync(file)) {
      problems.push(`missing ${rel}`);
      continue;
    }
    const html = readFileSync(file, "utf8");
    for (const [needle, msg] of BANNED) if (html.includes(needle)) problems.push(`${rel}: ${msg}`);
    const firstSection = html.match(/<section[^>]*>/)?.[0] ?? "";
    if (/opacity:\s*0[;"]/.test(firstSection)) problems.push(`${rel}: hero is hidden in static HTML (opacity:0)`);
  }
  if (existsSync(join(outDir, "zeya", "index.html"))) problems.push("zeya/index.html exists and would shadow the /zeya/ redirect");
  const htaccess = existsSync(join(outDir, ".htaccess")) ? readFileSync(join(outDir, ".htaccess"), "utf8") : "";
  if (!/RewriteRule \^zeya\/\?\$ \/products\/#zeya \[R=301,NE,L\]/.test(htaccess)) problems.push(".htaccess has no /zeya/ redirect to /products/#zeya");
  return problems;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const problems = findProblems(process.argv[2] ?? "out");
  if (problems.length) {
    console.error(`Export check failed:\n- ${problems.join("\n- ")}`);
    process.exit(1);
  }
  console.log("Export check passed.");
}
