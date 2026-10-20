# Evarest Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Vite single-page site with a six-page static Next.js site (Home, Products, Engineering, Work, About, Contact, plus the ZEYA privacy page) that matches the approved mockup and deploys to Hostpinnacle by FTP.

**Architecture:** Next.js App Router with `output: "export"` and `trailingSlash: true`, so every route is a prerendered `index.html` that Apache serves. Pages are thin server components that compose sections; all copy lives in typed modules under `src/content/`; motion and the form are small client components with reduced-motion fallbacks. Patterns (config, `asset()`, `Magnetic`, Vitest setup, CI) are copied from `~/ova/SimonJavanOkelo`, which deploys the same way.

**Tech Stack:** Next.js 16 (App Router, static export), React 19, TypeScript strict, Tailwind v4 (`@theme` tokens), `motion` 13, Zod 4, Vitest 4 + Testing Library + jsdom, GitHub Actions + `SamKirkland/FTP-Deploy-Action`.

**Spec:** `docs/superpowers/specs/2026-10-20-evarest-site-redesign-design.md`. The mockup (`docs/design/mockup/`) holds the exact copy, layout and CSS values; serve it with `python3 -m http.server 8000` inside that folder. Where spec and mockup differ, the spec wins.

## Global Constraints

- Routes: `/`, `/products/`, `/engineering/`, `/work/`, `/about/`, `/contact/`, `/zeya/privacy/`. `/zeya/` is a 301 to `/products/#zeya`.
- Menu order exactly: Products · Engineering · Work · About · Contact. Logo links home. Header button "Start a project".
- "Start a project" → `/contact/?t=project`; "Partner with us" / "Partner on a pilot" → `/contact/?t=partner`; "Chat with ZEYA" → `https://wa.me/254183325153?text=Hi`; Kintaraa → `https://kintaraa.com/`; KOA → `https://koaafricaa.com/`.
- Copy: no em dashes; no "built in Kenya"; no GitHub link anywhere; no prices or currency; ZEYA status "Open on WhatsApp"; Kintaraa status "Ready for pilot"; no city or country tied to Kintaraa in copy.
- Colour tokens (spec section 3): purple `#A015DC`, purple-deep `#861DAF`, purple-night `#2A0A3A`, mint `#50E3C2`, mint-deep `#13896E`, ink `#120A1A`, ink-soft `#4A4152`, muted `#6E6577`, line `#ECE6F0`, mist `#FAF8FC`, tint `#F5EEF9`. No hex values in components; only theme tokens.
- Fonts self-hosted in `public/fonts/`: Inter Tight (400–800), JetBrains Mono (400, 500), Montserrat 700 (wordmark only).
- No numbered sections, no ghost numerals, no rounded full-width section panels. Card radius about 14px.
- Animate only `transform`, `opacity`, `clip-path`, `stroke-dashoffset`. Every motion component renders a still version under `prefers-reduced-motion: reduce`. Hover-only effects only on `(hover: hover) and (pointer: fine)`.
- The hero headline and hero image are never `opacity: 0` or off-screen in the static HTML.
- Files 150 lines or fewer. TypeScript strict, no `any`. Copy only in `src/content/`.
- New dependencies limited to: `next`, `react`, `react-dom`, `motion`, `zod`, and the dev tooling listed in Task 1.
- Commits: conventional (`feat:`, `fix:`, `chore:`, `test:`, `docs:`), author Stella-Achar-Oiro, no AI attribution lines.

## Review Focus

1. A visitor taps the `evarestke.com/zeya/` link in ZEYA's WhatsApp profile: they must land on `/products/#zeya`, not a 404 or the home page. Pinned in Task 12 (`verify-export` checks the `.htaccess` rule and that no `out/zeya/index.html` shadows it).
2. Someone submits the contact form before the Web3Forms key exists, or the request fails: they must see "Form not configured" or the error message with the email address, never the success message. Pinned in Task 10.
3. A link arrives with `?t=` set to anything other than `partner` (`?t=PARTNER`, `?t=<script>`, empty): the form selects "An engineering project" and renders nothing from the query. Pinned in Task 10.
4. A visitor with reduced motion, or with JavaScript blocked: every heading, image and button is visible and every link works. Pinned in Task 4 (component tests) and Task 12 (static HTML scan for `opacity:0` on the hero).
5. A phone or tablet visitor: portraits stay in colour, photos do not parallax, buttons do not "magnet", and the mobile menu opens, traps nothing, and closes with Escape and on link tap. Pinned in Tasks 3 and 4.

---

### Task 1: Replace Vite with a Next.js static export

**Files:**
- Delete: `src/` (all Vite files), `index.html`, `vite.config.ts`, `tsconfig.app.json`, `tsconfig.node.json`, `eslint.config.js`, `postcss.config.js`, `tailwind.config.js`, `public/hero.jpg` if present, `docs/` files listed as old reports (`CERTIFICATION_LOGOS.md`, `DEPLOYMENT_GUIDE.md`, `FEATURED_PROJECTS_SECTION.md`, `IMPLEMENTATION_PLAN.md`, `LANDING_PAGE_REDESIGN_REPORT.md`, `LOGO_REQUIREMENTS.md`, `MVP_COMPLETE.md`, `OPTIMIZATION_STATUS.md`, `PERFORMANCE_AUDIT.md`, `PHASE1_COMPLETE.md`, `PHASE2_PROGRESS.md`, `PROJECT_HANDOFF.md`, `PROJECT_WORKPLAN.md`, `THEME_DOCUMENTATION.md`, `evarest_website_prd.md`)
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `vitest.config.mts`, `vitest.setup.ts`, `src/app/layout.tsx`, `src/app/page.tsx` (placeholder), `src/app/globals.css`, `src/lib/asset.ts`, `src/lib/pointer.ts`, `public/fonts/*.woff2`, `.env.example`, `.github/workflows/ci.yml`
- Modify: `.github/workflows/deploy.yml`, `claude.md`
- Test: `src/lib/asset.test.ts`

**Interfaces:**
- Produces: `asset(path: string): string` (prefixes `NEXT_PUBLIC_BASE_PATH`, throws on paths not starting with `/`); `hasFinePointer(): boolean` (true when `matchMedia('(hover: hover) and (pointer: fine)')` matches, false when `matchMedia` is missing); theme tokens usable as Tailwind classes (`bg-ink`, `text-purple-deep`, `border-line`, `bg-mist`, `bg-tint`, `text-mint-deep`, `font-mono`, `font-wordmark`); custom variant `fine:`.

- [ ] **Step 1:** Copy `next.config.ts`, `vitest.config.mts`, `vitest.setup.ts`, `src/lib/asset.ts`, `src/lib/asset.test.ts`, `src/lib/pointer.ts` from `~/ova/SimonJavanOkelo`, keeping `output: "export"`, `images: { unoptimized: true }`, `trailingSlash: true`, `basePath` from `BASE_PATH`. Remove FYC-specific comments.
- [ ] **Step 2:** Write `package.json` with scripts `dev`, `build`, `lint`, `typecheck` (`tsc --noEmit`), `test` (`vitest run --passWithNoTests`), `verify` (`node scripts/verify-export.mjs`, added in Task 12). Dependencies: `next@16.3.1`, `react@19.2.8`, `react-dom@19.2.8`, `motion@^13.4.4`, `zod@^4.4.3`. Dev: the same tooling versions as the Okelo `package.json` (Tailwind 4, `@tailwindcss/postcss`, TypeScript 5, ESLint 9 + `eslint-config-next@16.3.1`, Vitest 4, `@vitejs/plugin-react`, jsdom, Testing Library). Run `npm install`.
- [ ] **Step 3:** Write `src/app/globals.css`: `@import "tailwindcss"`; `@custom-variant fine (@media (hover: hover) and (pointer: fine));`; `@font-face` for the three fonts from `public/fonts/` (download the latin subsets from Google Fonts once and commit them); an `@theme` block with the eleven colour tokens from Global Constraints and `--font-sans: "Inter Tight"`, `--font-mono: "JetBrains Mono"`, `--font-wordmark: "Montserrat"`; base styles from the mockup's `body` rule; `html, body { overflow-x: hidden }`.
- [ ] **Step 4:** Write `src/app/layout.tsx` (lang `en`, `<body className="font-sans text-ink bg-white antialiased">`) and a placeholder `src/app/page.tsx` that renders `<h1>Evarest</h1>`.
- [ ] **Step 5:** Run `npm run lint && npm run typecheck && npm test && npm run build`. Expected: all pass, `out/index.html` exists, `asset.test.ts` passes.
- [ ] **Step 6:** Change `deploy.yml`: Node 22, `local-dir: ./out/`, add `env: NEXT_PUBLIC_WEB3FORMS_KEY: ${{ vars.WEB3FORMS_KEY }}` to the build step, keep `server-dir: /public_html/`. Add `ci.yml` (lint, typecheck, test, build on push and pull request) like the Okelo one, without Lighthouse for now. Add `.env.example` with `NEXT_PUBLIC_WEB3FORMS_KEY=` and `BASE_PATH=` and a comment for each.
- [ ] **Step 7:** Rewrite `claude.md` to point at the spec and the Global Constraints above (replace the old design-system section). Delete `.claude/skills/evarest-design/` (the rejected design system).
- [ ] **Step 8:** Commit: `chore: replace Vite with a Next.js static export`.

### Task 2: Content modules and the copy rules

**Files:**
- Create: `src/content/site.ts`, `src/content/home.ts`, `src/content/products.ts`, `src/content/engineering.ts`, `src/content/work.ts`, `src/content/about.ts`, `src/content/contact.ts`, `src/content/zeya-privacy.ts`, `src/content/types.ts`
- Test: `src/content/content.test.ts`

**Interfaces:**
- Produces (from `site.ts`): `NAV: readonly { label: string; href: string }[]`; `LINKS: { startProject: string; partner: string; chatZeya: string; kintaraa: string; koa: string; zeyaPrivacy: string; linkedin: string; x: string }`; `CONTACT: { email: string; phone: string; phoneHref: string; location: string }`; `FOUNDERS: readonly { name: string; role: string; bio: string; photo: string; linkedin: string }[]`.
- Produces (page modules): one exported `const` per page (`HOME`, `PRODUCTS`, `ENGINEERING`, `WORK`, `ABOUT`, `CONTACT_PAGE`, `ZEYA_PRIVACY`) whose shape the page tasks define; every string on the site comes from these.
- `types.ts`: `ChatMessage = { from: "her" | "zeya"; text: string; time: string }`, `Point = { title: string; body: string }`.

- [ ] **Step 1: Write the failing test** `content.test.ts`:

```ts
import * as all from "./index"; // re-export of every content module

const text = JSON.stringify(all);
it("menu order is fixed", () => {
  expect(all.NAV.map(n => n.label)).toEqual(["Products", "Engineering", "Work", "About", "Contact"]);
});
it("follows the copy rules", () => {
  expect(text).not.toMatch(/—/);                 // em dash
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
```

- [ ] **Step 2:** Run `npx vitest run src/content`. Expected: FAIL, module not found.
- [ ] **Step 3:** Write the modules and `src/content/index.ts` re-exporting them. Copy every string verbatim from the mockup pages (`home-v3.html`, `products-v1.html`, `engineering-v1.html`, `work-v1.html`, `about-v2.html`, `contact-v1.html`). Founder data and LinkedIn URLs come from spec section 5 (About). The ZEYA chat messages are the three `ChatMessage`s in the mockup's phone (23-week check-in at 16:57, "I'm bleeding heavily" at 16:22, the URGENT reply at 16:22, verbatim). `ZEYA_PRIVACY` holds the sections of `~/Projects/zeya/docs/privacy-policy.md` as `{ heading: string; paragraphs: string[]; list?: string[] }[]`, converted by hand, wording unchanged.
- [ ] **Step 4:** Run `npx vitest run src/content`. Expected: PASS.
- [ ] **Step 5:** Commit: `feat: add site content modules`.

### Task 3: Layout: logo, header, mobile menu, footer, closing section, buttons

**Files:**
- Create: `src/components/ui/Logo.tsx`, `src/components/ui/Button.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/MobileMenu.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/FinalCta.tsx`, `src/components/ui/MountainLines.tsx`
- Modify: `src/app/layout.tsx`
- Test: `src/components/layout/layout.test.tsx`

**Interfaces:**
- Consumes: `NAV`, `LINKS`, `CONTACT` (Task 2).
- Produces: `<Logo onDark?: boolean />`; `<Button href: string; variant: "primary" | "ghost" | "light" | "ghostLight"; magnetic?: boolean; children />` (renders `<a>`; `magnetic` wraps it in `Magnetic` from Task 4); `<Header overPhoto?: boolean />` (white text until scrolled 30px when `overPhoto`); `<FinalCta />`; `<Footer />`; `<MountainLines className? strokeWidth? />` (the logo path from `public/brand/evarest-logo-transparent.svg`).

- [ ] **Step 1: Write the failing tests:**
  - `header shows the menu in order with the Start a project button`: labels equal `NAV`, button `href` `/contact/?t=project`.
  - `mobile menu opens from the button and closes on Escape and on link click`: `aria-expanded` toggles, the dialog is gone after `keyboard('{Escape}')`, and after clicking "Work".
  - `footer has no GitHub link and links the ZEYA privacy policy`: no `a[href*="github.com"]`; a link to `/zeya/privacy/`; Kintaraa link `https://kintaraa.com/`.
  - `closing section offers both actions`: links to `/contact/?t=project` and `/contact/?t=partner`.
- [ ] **Step 2:** Run `npx vitest run src/components/layout`. Expected: FAIL.
- [ ] **Step 3:** Implement from the mockup's header, `.drawer`, `footer.big` and `.final.dark` markup and the CSS in `docs/design/mockup/files/site.css`. Header is a client component (scroll listener); it stays white-on-photo only while `scrollY <= 30`. Mobile menu below 900px: full-screen panel, body scroll locked while open, focus moves to the close button on open and back to the menu button on close.
- [ ] **Step 4:** Mount `Header` and `Footer` in `layout.tsx`. Run the tests. Expected: PASS.
- [ ] **Step 5:** Commit: `feat: add header, mobile menu, footer and closing section`.

### Task 4: Motion components

**Files:**
- Create: `src/components/motion/Magnetic.tsx` (copy from Okelo), `src/components/motion/Reveal.tsx`, `src/components/motion/Parallax.tsx`, `src/components/motion/Intro.tsx`, `src/lib/first-visit.ts`
- Test: `src/components/motion/motion.test.tsx`, `src/lib/first-visit.test.ts`

**Interfaces:**
- Consumes: `hasFinePointer()` (Task 1).
- Produces: `<Reveal as?: "div" | "article" | "li"; curtain?: boolean; className?; children />` (fade-up, or `clip-path` curtain on its image child when `curtain`; observes itself, never the clipped child); `<Parallax speed: number; className?; children />` (translateY by `(centerOffset) * -speed`, scaled `1 + speed`; off unless `hasFinePointer()`); `<Magnetic strength? radius? children />`; `<Intro />` (overlay with the mountain drawing and EVAREST letters, about 1 s, mounted after first paint, only when `isFirstVisit("ev-intro")`); `isFirstVisit(key: string): boolean` (true once per session; returns false if `sessionStorage` throws).

- [ ] **Step 1: Write the failing tests:**
  - `isFirstVisit is true once, then false`; `isFirstVisit is false when sessionStorage throws`.
  - For `Reveal`, `Parallax`, `Magnetic`, `Intro`: with `matchMedia('(prefers-reduced-motion: reduce)')` mocked to match, the children render with no inline `transform` or `opacity` style, and `Intro` renders nothing.
  - `Parallax applies no transform on a coarse pointer` (`hover: none` mocked).
  - `Reveal renders its children in the static markup` (`renderToString` output contains the child text and no `opacity:0`).
- [ ] **Step 2:** Run `npx vitest run src/components/motion src/lib`. Expected: FAIL.
- [ ] **Step 3:** Implement. `Reveal` adds its hidden state only after mount (so the static HTML is visible), using `IntersectionObserver` with threshold 0.15. Durations and easing from `site.css` (`--ease: cubic-bezier(.2,.7,.1,1)`, fade .8s, curtain 1.1s).
- [ ] **Step 4:** Run the tests. Expected: PASS.
- [ ] **Step 5:** Commit: `feat: add motion components with reduced-motion fallbacks`.

### Task 5: Shared display components

**Files:**
- Create: `src/components/ui/PhoneFrame.tsx`, `src/components/ui/WhatsAppChat.tsx`, `src/components/ui/BrowserFrame.tsx`, `src/components/ui/Pill.tsx`, `src/components/ui/SectionHead.tsx`, `src/components/ui/TickList.tsx`
- Test: `src/components/ui/ui.test.tsx`

**Interfaces:**
- Consumes: `ChatMessage`, `Point` (Task 2).
- Produces: `<PhoneFrame size: "card" | "large"; children />`; `<WhatsAppChat messages: ChatMessage[]; title="Zeya"; subtitle="Evarest Technologies Ltd" />` (decorative; wrapped in `role="img"` with an `aria-label` passed by the caller); `<BrowserFrame url: string; src: string; alt: string />`; `<Pill tone: "mint">`; `<SectionHead label: string; title: string; intro?: string />` (label in mono uppercase muted, title `h2` about 48px); `<TickList items: Point[] />`.

- [ ] **Step 1:** Write `ui.test.tsx`: `WhatsAppChat renders each message with its time, hers on the right`; `BrowserFrame shows the URL and the image alt`; `SectionHead renders an h2 and no numbers`.
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3:** Implement from the mockup CSS (`.device`, `.wa`, `.browser`, `.pill`, `.head`, `.feats`).
- [ ] **Step 4:** Run. Expected: PASS.
- [ ] **Step 5:** Commit: `feat: add phone, chat, browser frame and section components`.

### Task 6: Home page

**Files:**
- Create: `src/components/sections/home/Hero.tsx`, `ProductCards.tsx`, `EngineeringSplit.tsx`, `WorkCards.tsx`; `public/images/` (WebP versions of `hero-team-v4.jpg` at 1280/1920/2560 wide, `work-bg-2.jpg`, `koa-site.jpg`, `ocs-pipeline.jpg`, `kintaraa-phone-v2.jpg`)
- Modify: `src/app/page.tsx`
- Test: `src/components/sections/home/home.test.tsx`

**Interfaces:**
- Consumes: `HOME`, `LINKS`, `PRODUCTS` (Task 2); `Header overPhoto` (Task 3); `Reveal`, `Parallax`, `Magnetic`, `Intro` (Task 4); `PhoneFrame`, `WhatsAppChat`, `Pill`, `SectionHead` (Task 5).

- [ ] **Step 1: Write the failing tests:** `hero has the headline, both buttons and the proof line` (text "We build what matters.", "We engineer what works.", links `/contact/?t=project` and `/contact/?t=partner`, "Built KOA Africa's insurance platform"); `hero image loads eagerly with width and height`; `product cards link Chat with ZEYA and Visit kintaraa.com`; `work cards show KOA Africa and Open Chat Studio only`.
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3:** Build the sections from `home-v3.html`. Convert images with `cwebp -q 80` (or `ffmpeg`) and serve the hero with `srcset`; every image path through `asset()`. Page order: `Intro`, `Hero`, `ProductCards`, `EngineeringSplit`, `WorkCards`, `FinalCta`. Set `export const metadata` with the title "Evarest Technologies | We build what matters. We engineer what works." and the description from the spec.
- [ ] **Step 4:** Run tests, then `npm run build` and compare `out/index.html` side by side with the mockup at 1440px and 390px width. Expected: tests PASS; layout matches.
- [ ] **Step 5:** Commit: `feat: build the home page`.

### Task 7: Products page

**Files:**
- Create: `src/app/products/page.tsx`, `src/components/sections/products/ProductSection.tsx`, `ZeyaPrivacy.tsx`, `PartnerCards.tsx`
- Test: `src/components/sections/products/products.test.tsx`

**Interfaces:**
- Consumes: `PRODUCTS`, `LINKS` (Task 2); Tasks 3–5 components.
- Produces: anchors `id="zeya"`, `id="zeya-privacy"`, `id="kintaraa"`.

- [ ] **Step 1: Write the failing tests:** `has the three anchors`; `ZEYA section links Chat with ZEYA and More about ZEYA to #zeya-privacy`; `privacy part links /zeya/privacy/`; `Kintaraa section links kintaraa.com and Partner on a pilot to /contact/?t=partner`.
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3:** Build from `products-v1.html`. `ProductSection` takes `{ product, mirrored: boolean, stage: ReactNode }` so ZEYA and Kintaraa share it. Page metadata title "Products · Evarest".
- [ ] **Step 4:** Run tests and build. Expected: PASS, `out/products/index.html` exists.
- [ ] **Step 5:** Commit: `feat: build the products page`.

### Task 8: Engineering page

**Files:**
- Create: `src/app/engineering/page.tsx`, `src/components/sections/engineering/Problems.tsx`, `Services.tsx`, `Process.tsx`, `Models.tsx`, `Faq.tsx`
- Test: `src/components/sections/engineering/engineering.test.tsx`

**Interfaces:**
- Consumes: `ENGINEERING`, `LINKS` (Task 2); Tasks 3–5 components.
- Produces: anchor `id="how"` on the process section.

- [ ] **Step 1: Write the failing tests:** `shows six problems, six services, five steps and three ways to work`; `the fixed-scope card is the highlighted one`; `FAQs are details elements that open on click`; `states the price sentence and shows no prices`.
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3:** Build from `engineering-v1.html`. Process steps have no numbers. FAQ uses native `<details>`/`<summary>`.
- [ ] **Step 4:** Run tests and build. Expected: PASS.
- [ ] **Step 5:** Commit: `feat: build the engineering page`.

### Task 9: Work page

**Files:**
- Create: `src/app/work/page.tsx`, `src/components/sections/work/CaseStudy.tsx`; `public/images/koa-portal.webp`
- Test: `src/components/sections/work/work.test.tsx`

**Interfaces:**
- Consumes: `WORK`, `LINKS` (Task 2); `BrowserFrame`, `PhoneFrame`, `WhatsAppChat` (Task 5).
- Produces: `<CaseStudy study: WorkStudy; alt?: boolean; secondShot: ReactNode />` where `WorkStudy` is defined in `src/content/work.ts` (`id`, `tag`, `title`, `link: { label, href }`, `glance: { label, value }[]`, `story: { heading, body }[]`, `tags: string[]`, `shot: { url, src, alt }`).

- [ ] **Step 1: Write the failing tests:** `has anchors koa and ocs`; `KOA links koaafricaa.com and shows website and portal images`; `Open Chat Studio links Chat with ZEYA and no GitHub`.
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3:** Build from `work-v1.html`. Both screenshot frames in a row fill the same height (`object-fit: cover`, top-anchored).
- [ ] **Step 4:** Run tests and build. Expected: PASS.
- [ ] **Step 5:** Commit: `feat: build the work page`.

### Task 10: Contact page and enquiry form

**Files:**
- Create: `src/app/contact/page.tsx`, `src/components/contact/EnquiryForm.tsx`, `src/components/contact/form-state.ts`, `src/lib/validation.ts`
- Test: `src/components/contact/form.test.tsx`, `src/lib/validation.test.ts`

**Interfaces:**
- Consumes: `CONTACT_PAGE`, `CONTACT` (Task 2).
- Produces: `enquirySchema` (Zod: `topic: "Engineering project" | "Product partnership" | "Something else"`, `name` 1–120 chars, `email` valid, `organisation` optional ≤ 160, `message` 10–4000, `start` optional enum of the three mockup options); `topicFromQuery(t: string | null): EnquiryTopic` (returns "Product partnership" only for exactly `"partner"`, else "Engineering project"); `type FormStatus = "idle" | "sending" | "sent" | "error" | "unconfigured"`.

- [ ] **Step 1: Write the failing tests:**
  - `topicFromQuery`: `"partner"` → "Product partnership"; `"PARTNER"`, `"<script>"`, `""`, `null` → "Engineering project".
  - `enquirySchema` rejects a missing name, a bad email and a 5-character message, with field errors.
  - Form: `shows field errors next to each field and a summary`; `without NEXT_PUBLIC_WEB3FORMS_KEY, submitting shows "Form not configured" and never the thank-you`; `a filled honeypot is silently dropped (no request)`; `a submit within 3 seconds of mount is rejected by the time trap (no request)`; `a failed request shows the error with contact@evarestke.com`; `success moves focus to the thank-you message`; `the submit button is disabled while sending`.
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3:** Implement. POST JSON to `https://api.web3forms.com/submit` with `access_key`, `subject: "Evarest website: <topic>"`, `from_name: "evarestke.com"`, and the fields. The time trap is a mount timestamp in component state, never a hidden input. Read `?t=` with `useSearchParams` inside a `Suspense` boundary so the static export builds. Left column and copy from `contact-v1.html`, with icon steps (no numbers).
- [ ] **Step 4:** Run tests and build. Expected: PASS.
- [ ] **Step 5:** Commit: `feat: build the contact page with a working enquiry form`.

### Task 11: About page and road map

**Files:**
- Create: `src/app/about/page.tsx`, `src/components/sections/about/Story.tsx`, `RoadMap.tsx`, `road.ts`, `VisionMission.tsx`, `Team.tsx`; `public/images/about-kili.webp`, `public/images/team/*.webp`
- Test: `src/components/sections/about/road.test.ts`, `about.test.tsx`

**Interfaces:**
- Consumes: `ABOUT`, `FOUNDERS` (Task 2); `Reveal`, `Parallax` (Task 4).
- Produces: `roadPoints(count: number, width: number, height: number): { x: number; y: number }[]` (x from 70 to `width - 70` evenly; y alternates `top = 130` and `bottom = 300` for height 420, starting at top); `roadPath(points): string` (an SVG path that bends through each point with horizontal tangents, as in the mockup's `site.js` road code).

- [ ] **Step 1: Write the failing tests:** `roadPoints(7, 1440, 420)` returns 7 points, first `{x:70,y:130}`, last `{x:1370,y:130}`, alternating y; `roadPath` starts with `M` and contains 6 `C` segments for 7 points; About renders the story headline, seven road stops with "Now" on "ZEYA on WhatsApp" and "Next" on the last two, Vision before Mission, four founders each with a LinkedIn link from spec section 5; `portraits are greyscale only on fine pointers` (the greyscale class is under the `fine:` variant).
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3:** Implement. The road's progress stroke animates `stroke-dashoffset` to the length at the "now" stop once in view; drawn at once under reduced motion. Below 900px, render the vertical road from the mockup CSS. Founder cards: 4:5 frames, black and white with colour on hover (fine pointers only), row layout under 600px.
- [ ] **Step 4:** Run tests and build. Expected: PASS.
- [ ] **Step 5:** Commit: `feat: build the about page with the road map`.

### Task 12: ZEYA privacy page, redirect, SEO and export verification

**Files:**
- Create: `src/app/zeya/privacy/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `public/og.png` (1200×630, the hero headline on ink with the logo), `scripts/verify-export.mjs`
- Modify: `public/.htaccess`
- Test: `scripts/verify-export.test.mjs` (run by Vitest)

**Interfaces:**
- Consumes: `ZEYA_PRIVACY` (Task 2); every page from Tasks 6–11.

- [ ] **Step 1:** Write `.htaccess`: `RewriteEngine On`, then `RewriteRule ^zeya/?$ /products/#zeya [R=301,NE,L]` (the `NE` flag keeps the `#`), no SPA fallback, `ErrorDocument 404 /404.html`. Add `src/app/not-found.tsx` with a short message and links home and to Contact.
- [ ] **Step 2: Write the failing test** for `verify-export.mjs`, which takes the `out/` path and returns a list of problems: it reports a missing `index.html` for any of the seven routes; reports `out/zeya/index.html` existing (it would shadow the redirect); reports a `.htaccess` without the `/zeya/` rule; reports any HTML containing `github.com/EvarestTechnologies`, an em dash, `Sarah Chen`, or `opacity:0` inside the first `<section>` of a page.
- [ ] **Step 3:** Run. Expected: FAIL.
- [ ] **Step 4:** Implement `verify-export.mjs` and the privacy page (plain reading layout, max width about 760px, headings from `ZEYA_PRIVACY`). Add per-page `metadata` (title, description, Open Graph with `og.png`), `sitemap.ts` (seven routes on `https://evarestke.com`) and `robots.ts`.
- [ ] **Step 5:** Run `npm run build && npm run verify` and the tests. Expected: no problems reported, tests PASS.
- [ ] **Step 6:** Commit: `feat: add the ZEYA privacy page, /zeya/ redirect, SEO and export checks`.

### Task 13: Launch checks

**Files:**
- Create: `lighthouserc.json`
- Modify: `.github/workflows/ci.yml`

- [ ] **Step 1:** Add Lighthouse CI against `out/` for `/`, `/products/`, `/contact/` (mobile), minimum 0.9 for Accessibility, Best Practices and SEO, 0.85 for Performance in CI (shared runners read low, as on the Okelo site), served through a compressing static server. Add `npm run verify` to `ci.yml`.
- [ ] **Step 2:** Run locally: `npm run build && npx --yes @lhci/cli@0.14 autorun`. Expected: all assertions pass. Fix what fails.
- [ ] **Step 3:** Manual pass, recorded in the PR: keyboard-only through header, mobile menu, FAQs and the form; every page at 390px in Chrome device mode; reduced motion turned on in macOS; JavaScript disabled (all content visible, links work, form shows the email fallback).
- [ ] **Step 4:** Open a pull request from `redesign/site-v2` to `main` with screenshots of each page at 1440px and 390px. Do not merge until Stella approves; merging deploys to evarestke.com.
- [ ] **Step 5:** After merge and deploy, check live: each route returns 200, `https://evarestke.com/zeya/` returns 301 to `/products/#zeya`, the form sends a test enquiry once the Web3Forms key is set (GitHub repo variable `WEB3FORMS_KEY`).
