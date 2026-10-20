# evarestke.com redesign: design spec

**Date:** 2026-10-20
**Status:** Approved (2026-10-20)
**Branch:** `redesign/site-v2`
**Mockup (the visual source of truth):** `docs/design/mockup/`. To view it, run
`python3 -m http.server 8000` inside `docs/design/mockup/` and open
`http://localhost:8000/home-v3.html`. The pages reference assets as `/files/...`, which
resolves to `docs/design/mockup/files/`.

## 1. Why

The live site is a purchased template with invented proof: a quote from "Sarah Chen",
"50M+ patients", "Fortune 500" clients, certification counts, price cards and "24/7"
claims. Its contact form sends nothing. It uses a blue that is not in the Evarest logo,
and its hero photo shows Bangkok. A first rebuild (branch `site-truth-rebuild`) was honest
but flat and unclear, and was rejected.

The new site must make a visitor want to work with Evarest, using only facts the founders
can stand behind.

### Who it is for, in order

1. **CTOs and founders of AI companies and software startups** who need engineering
   capacity or one accountable team. Main action: **Start a project**.
2. **Funders, research partners and implementation partners** for ZEYA and Kintaraa.
   Main action: **Partner with us**.
3. Anyone checking Evarest out: the About and Work pages.

### Success

- Within 10 seconds a visitor knows what Evarest does and which button is for them.
- Within a minute they have seen real work: KOA Africa, ZEYA, Kintaraa, the Open Chat
  Studio pipeline.
- Every "Start a project" and "Partner with us" path ends at a form that delivers email.
- Nothing on the site is unverifiable or invented.

### Anti-goals

- Invented metrics, clients, testimonials, logos, certifications or awards.
- Prices on the site.
- Links to Evarest's GitHub.
- Numbered sections, big ghost numerals, or rounded full-width section panels.
- One long single-scroll page. The site is separate pages.
- Stock photos of people presented as the team.

## 2. Content rules (hard)

Source of facts: `~/Evarest/company/evarest-company-brief.md` (copy it into
`docs/company-brief.md` on this branch) plus the decisions in this spec.

- No em dashes in copy. Plain English, short sentences.
- No buzzwords ("innovative", "cutting-edge", "world-class", "end-to-end solutions",
  "industry-leading").
- No "built in Kenya" tagline. "Nairobi, Kenya" appears only as the address.
- ZEYA status: **Open on WhatsApp**. The research trial is mentioned only on the About
  road map ("Next") and in the ZEYA privacy part. Do not say "trial in preparation" in
  ZEYA's status label.
- Kintaraa status: **Ready for pilot**. Never tie Kintaraa to a city or country in copy.
- Dimagi is not a client or partner. Say only that members of the team have contributed
  code to Open Chat Studio, Dimagi's open-source platform, and that Evarest self-hosts it
  and runs ZEYA on it.
- KOA Africa: the founders have confirmed permission to name KOA and show its public
  website and agent-portal sign-in screen.
- Rokkni, Absolute Recruit and the unnamed AI company stay off the site until the
  founders confirm scope and permission.
- No pricing. Copy says: "We agree the price in the proposal, after we understand the
  work."
- Founder titles: "Co-founder and CEO/CTO/COO/CFO".

## 3. Brand

From the logo files in `public/brand/`:

| Token | Value | Use |
|---|---|---|
| `purple` | `#A015DC` | Logo purple. Decoration, the logo mark |
| `purple-deep` | `#861DAF` | Buttons, links, active nav. White text on it passes AA |
| `purple-night` | `#2A0A3A` | Intro overlay |
| `mint` | `#50E3C2` | Logo mint. Ticks, "now" markers, accents on dark |
| `mint-deep` | `#13896E` | Mint as text on white |
| `ink` | `#120A1A` | Text, the dark closing section and footer |
| `ink-soft` | `#4A4152` | Body text |
| `muted` | `#6E6577` | Labels, secondary headline lines |
| `line` | `#ECE6F0` | Hairlines and card borders |
| `mist` | `#FAF8FC` | Alternate section background |
| `tint` | `#F5EEF9` | Soft purple panels |

- Purple is for actions (buttons, links). Mint is for status and ticks. Do not use either
  colour for long headlines; second headline lines are `muted` grey (or white at 70% on
  photos).
- ZEYA's and Kintaraa's own colours appear only inside their screenshots.
- Type: **Inter Tight** (headings and body), **JetBrains Mono** (small uppercase labels,
  tags, captions), **Montserrat 700** (the EVAREST wordmark only). Self-host all three.
- The wordmark is `EVAR` in ink plus `EST` in mint-deep (mint on dark), letter-spaced,
  beside the wireframe mountain mark.
- Section headlines are about 48px on desktop. Only page heroes go bigger.
- Cards have a small radius (about 14px). Sections are full width with square edges.

## 4. Information architecture

Menu: **Products · Engineering · Work · About · Contact**. The logo links home. A
**Start a project** button sits at the right of the header. On phones, a menu button opens
a full-screen menu.

| Route | Mockup file | Notes |
|---|---|---|
| `/` | `home-v3.html` | |
| `/products/` | `products-v1.html` | ZEYA and Kintaraa on one page, anchors `#zeya`, `#zeya-privacy`, `#kintaraa` |
| `/engineering/` | `engineering-v1.html` | Anchor `#how` |
| `/work/` | `work-v1.html` | Anchors `#koa`, `#ocs` |
| `/about/` | `about-v2.html` | |
| `/contact/` | `contact-v1.html` | `?t=project` (default) or `?t=partner` preselects the topic |
| `/zeya/` | none | Permanent redirect to `/products/#zeya`. This URL is in ZEYA's WhatsApp profile and welcome message and must keep working |
| `/zeya/privacy/` | none | The full ZEYA privacy policy as a plain, readable page, from `docs/privacy-policy.md` in the zeya repo. Same header and footer |

Links:

- "Start a project" everywhere → `/contact/?t=project`.
- "Partner with us" and "Partner on a pilot" → `/contact/?t=partner`.
- "Chat with ZEYA" → `https://wa.me/254183325153?text=Hi`.
- Kintaraa links ("Visit kintaraa.com", footer "Kintaraa") → `https://kintaraa.com/`.
- KOA → `https://koaafricaa.com/`.

Footer (all pages): logo and one line; Company (Engineering, Work, About, Contact);
Products (ZEYA, Kintaraa, ZEYA privacy policy); Contact (email, phone, LinkedIn, X);
© year Evarest Technologies Ltd · Nairobi, Kenya. No GitHub link.

## 5. Pages

The mockup files hold the exact copy and layout. Build from them; where this section and
the mockup differ, this section wins.

### Home (`/`)

1. **Hero:** full-bleed team photo (`hero-team-v4.jpg`) with a deep purple fade from the
   left. Tag "Software and AI engineering". Headline "We build what matters." with a
   second line "We engineer what works." in white at 70%. Sub-line, buttons **Start a
   project** and **Partner with us**, then the proof line "✓ Built KOA Africa's insurance
   platform ✓ Contributors to Open Chat Studio". The header text is white while it sits
   over the photo.
2. **Our products:** ZEYA and Kintaraa cards, equal size. Each has a phone frame
   (ZEYA: the "I'm bleeding heavily" conversation rebuilt as HTML from the real
   screenshot; Kintaraa: `kintaraa-phone-v2.jpg`), a status label, one line, and links
   (ZEYA: Chat with ZEYA, About ZEYA → `/products/#zeya`; Kintaraa: Partner with us,
   Visit kintaraa.com).
3. **Engineering:** split layout, headline on the left (sticky on desktop), six services
   and three promises on the right, then **Start a project** and "How we work →"
   (`/engineering/#how`).
4. **Selected work:** on the minimal desk photo (`work-bg-2.jpg`) behind a white fade.
   Two case cards: KOA Africa (`koa-site.jpg`) and Open Chat Studio
   (`ocs-pipeline.jpg`).
5. **Closing section:** near-black, faint mountain line art, "Have something that needs to
   be built?", buttons **Start a project** and **Partner with us**.

### Products (`/products/`)

Hero "Software for the moments that matter most." with jump links. ZEYA section (large
phone with the real 23-week check-in and the URGENT reply; three points; the flow "Her
message → Danger-sign check → Emergency numbers, or an answer for her week"; Chat with
ZEYA and More about ZEYA → `#zeya-privacy`; the education-not-diagnosis note), then
**Privacy and research** (four points and a link to `/zeya/privacy/`). Kintaraa section
mirrored (Visit kintaraa.com, Partner on a pilot). Partner cards: research,
implementation, funders. Closing section.

### Engineering (`/engineering/`)

Hero with the ZEYA pipeline screenshot in a browser frame. "Where we usually come in":
six client problems with Evarest's answer. "What we build": six services with example
tags. "How we work": five steps on a line, no numbers. "Pick the shape that fits":
technical assessment, fixed-scope project (highlighted, dark card), monthly retainer, each
with "Best for". The price sentence. Four FAQs as `<details>`. Closing section.

### Work (`/work/`)

Hero "Work you can check." Two case studies, each with two framed images, an "At a
glance" list (client or platform, role, scope, status), three short story parts, and
tags. KOA uses `koa-site.jpg` and `koa-portal.jpg`. Open Chat Studio uses
`ocs-pipeline.jpg` and the ZEYA phone. Closing section.

### About (`/about/`)

1. **Story:** "Most teams meet when the project starts. We'd already been building
   together for two years." with the two paragraphs from the mockup.
2. **Road map, "Our road so far":** a winding road through seven stops, labels outside
   each bend. Done (purple): Trained together, Built at hackathons, Kintaraa began,
   Founded Evarest. Now (mint, glowing): ZEYA on WhatsApp. Next (dashed): ZEYA research
   trial, Kintaraa pilot. No years. The purple part draws up to "now" when scrolled into
   view. On phones it becomes a vertical road.
3. **Photo band:** Kilimanjaro from Amboseli (`about-kili.jpg`), caption "The climb starts
   here".
4. **Vision, then mission,** as large typographic statements with rules, no boxes.
5. **The team:** "The people behind Evarest." with the line "Four engineers, one of us
   also a clinician. That is why safety comes first in everything we build." Four cards:
   portrait (4:5 frame, black and white, colour on hover; colour always on touch
   devices), name, title, LinkedIn icon button, one line each (from the mockup). On
   phones each card is a row: photo left, text right.
6. Closing section.

LinkedIn: Stella `https://www.linkedin.com/in/stella-achar-oiro/`, Raymond
`https://www.linkedin.com/in/raymond-caleb/`, Vincent
`https://www.linkedin.com/in/vincent-omondi/`, Seth `https://www.linkedin.com/in/oathooh/`.

### Contact (`/contact/`)

Left: headline, three next steps with icons (no numbers), direct email, phone, LinkedIn.
Right: the enquiry form (topic chips, name, email, optional organisation, message,
optional start time). Honeypot field plus a time trap held in component state, never in a
hidden input. Topic preselected from `?t=`. States: idle, sending (button disabled),
success (message that takes focus), error (message with the email address as fallback).
Without a Web3Forms key the form says "Form not configured" on submit rather than
pretending to send.

### ZEYA privacy (`/zeya/privacy/`)

Render the current `docs/privacy-policy.md` from the zeya repo. Plain reading layout,
same header and footer.

## 6. Motion

Taken from the Simon Javan Okelo site's rules.

| Effect | Behaviour | Reduced motion |
|---|---|---|
| Intro | Home page only, first visit per session: the mountain mark draws and EVAREST rises, then the overlay lifts. About 1 second. Mounted after first paint, never hides the hero in static HTML | None |
| Fade and curtain reveals | Content fades up; images unveil bottom to top with `clip-path` when their parent enters the viewport | Shown at once |
| Photo parallax | Hero and Selected work photos (and About's photo band) drift slower than the page | Off; also off on touch devices |
| Magnetic buttons | Primary buttons lean slightly toward the cursor | Off |
| Road map | The purple progress draws up to "now" once | Drawn at once |
| Card hovers | Small lift and shadow | Off |

Animate only `transform`, `opacity`, `clip-path` and `stroke-dashoffset`. Use
`sessionStorage` (in `try`/`catch`) for the intro flag. No smooth-scroll hijacking, no
custom cursor, no autoplaying audio or video.

## 7. Technical

- **Stack:** Next.js (App Router) with static export, TypeScript strict, Tailwind v4 with
  the tokens in section 3 as theme variables, `motion` for the magnetic buttons and
  parallax, Zod for form validation. *(Builder's call: this matches the
  simonjavanokelo.com project, which deploys the same way to cPanel. A Vite multi-page
  build is acceptable if it produces one prerendered HTML file per route.)*
- **Hosting:** Hostpinnacle cPanel, deployed by FTP from GitHub Actions on push to
  `main`, publishing the static export to `/public_html/`. Update
  `.github/workflows/deploy.yml` for the new output folder.
- **Redirect** `/zeya/` → `/products/#zeya` with a 301 in `public/.htaccess`. Keep the
  existing SPA fallback rule only if the chosen stack needs it.
- **Copy lives in typed content modules**, not in components. Placeholder data carries
  `placeholder: true`.
- **Form transport:** Web3Forms (`NEXT_PUBLIC_WEB3FORMS_KEY`), sending to
  contact@evarestke.com. Document the variable in `.env.example` and the deploy workflow.
- **Images:** WebP, sized per breakpoint, lazy below the fold, explicit width and height.
  The hero image is the LCP element and loads eagerly.
- **SEO:** a title and description per page, Open Graph image, sitemap, `robots.txt`.
  The home title is "Evarest Technologies | We build what matters. We engineer what
  works."
- **Accessibility:** WCAG 2.2 AA, visible focus, keyboard-operable menu and FAQs,
  landmarks, alt text as in the mockup.
- **Performance:** Lighthouse 90+ on mobile for Performance, Accessibility, Best
  Practices and SEO on `/`, `/products/` and `/contact/`.
- Remove the old template's components, data and the Bangkok `hero.jpg` from the branch.

## 8. Assets

| File | Source | Note |
|---|---|---|
| `hero-team-v4.jpg` | Gemini edit of the founders' photo IMG_1014, upscaled 2× | Replace with a 4K export or an Upscayl version when available |
| `work-bg-2.jpg` | Unsplash, Dhony Koswara, Unsplash License | Free, no credit needed |
| `about-kili.jpg` | Unsplash, Sergey Pesterev, Unsplash License | Kilimanjaro seen from Amboseli, Kenya |
| `koa-site.jpg`, `koa-portal.jpg` | Screenshots of KOA's public pages | KOA permission confirmed |
| `ocs-pipeline.jpg` | Frame from the ZEYA demo recording | |
| `kintaraa-phone-v2.jpg` | Kintaraa screenshot, cropped, "Kisumu" removed | |
| `*-320.webp` | Founder portraits | Low resolution. Larger portraits wanted, same day and light |

## 9. Left to the builder

- Component structure, file layout and naming.
- Exact breakpoints, provided the mockup's phone behaviour holds.
- Whether the WhatsApp conversations are HTML (as in the mockup) or images, provided the
  text matches the real screenshots exactly.
- Test tooling, beyond: the form's validation, honeypot, time trap and "not configured"
  state are tested, and every motion component renders a still version under reduced
  motion.

## 10. Founder decisions (2026-10-20)

1. Founder bios: approved as in the mockup.
2. Road map "Next" wording ("Testing what ZEYA changes", "First partners, real users"): approved.
3. "Call HAK 1195" in the Kintaraa screenshot: keep as is.
4. Web3Forms access key: Stella is getting it. Until then the form shows its "not configured" state.
5. Larger founder portraits and a 4K hero photo: coming. Ship with the current files and swap them in later.
6. Open Chat Studio contributions: confirmed merged. The claim stands.
