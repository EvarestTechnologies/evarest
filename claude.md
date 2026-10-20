# Evarest website: project rules

The marketing site for Evarest Technologies Ltd at evarestke.com. Next.js App Router,
static export, TypeScript strict, Tailwind v4, deployed by FTP to Hostpinnacle cPanel
from GitHub Actions on push to `main`.

- Design spec (the authority): `docs/superpowers/specs/2026-10-20-evarest-site-redesign-design.md`
- Mockup (exact copy, layout, CSS values): `docs/design/mockup/`
- Company facts: `docs/company-brief.md`

## Hard rules

1. No invented metrics, clients, testimonials, logos, certifications or awards.
2. No prices. No GitHub link to Evarest. No "built in Kenya". No em dashes in copy.
3. ZEYA status "Open on WhatsApp". Kintaraa status "Ready for pilot", never tied to a place.
4. Dimagi is not a client or partner: team members contributed code to Open Chat Studio.
5. All copy lives in `src/content/`. Components never hard-code copy.
6. Colours only from the `@theme` tokens in `src/app/globals.css`. No hex values in components.
7. Every path into `public/` goes through `asset()` in `src/lib/asset.ts`.
8. Motion: animate only transform, opacity, clip-path and stroke-dashoffset. Every motion
   component has a reduced-motion still version. Hover-only effects use the `fine:` variant.
   The hero headline and image are never hidden in the static HTML.
9. Files 150 lines or fewer. No `any`.
10. Conventional commits. No AI attribution lines in commits or PRs.

## Commands

`npm run dev` · `npm run lint` · `npm run typecheck` · `npm test` · `npm run build` · `npm run verify`
