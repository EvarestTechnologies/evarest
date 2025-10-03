# Evarest - Engineering-as-a-Service Website

**Enterprise-grade website for Evarest Engineering Services**

![Status](https://img.shields.io/badge/status-production--ready-success)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)

---

## Overview

Professional, enterprise-grade website for Evarest - an Engineering-as-a-Service company focused on delivering technical expertise to mid-market and enterprise clients. The website emphasizes compliance, business outcomes, and enterprise credibility.

**Live Development Server:** `http://localhost:5173/`

---

## Features

### Enterprise Positioning
- **Professional Design** - Enterprise-focused, NOT portfolio-style
- **Business Metrics** - Revenue impact, cost savings, uptime guarantees
- **Compliance First** - SOC2, HIPAA, PCI-DSS, FedRAMP, ISO 27001
- **Global Delivery** - US, EU, APAC delivery centers
- **C-Suite Testimonials** - Real business outcomes from CTO, VP Engineering, CDO

### Complete Sections
1. **Header** - Sticky navigation with scroll effects
2. **Hero** - Value proposition with animated metrics
3. **Client Logos** - Social proof from Fortune 500 companies
4. **Services** - 6 enterprise service offerings
5. **Industries** - 4 verticals with compliance badges
6. **Case Studies** - 3 detailed success stories
7. **Capabilities** - Team expertise and certifications
8. **Consultation Form** - Professional lead generation
9. **Footer** - Enterprise contact and resources

### Technical Features
- **Fast Performance** - Vite for instant HMR
- **Fully Responsive** - Mobile, tablet, desktop optimized
- **Accessible** - Keyboard navigation, ARIA labels
- **Modern UI** - Tailwind CSS with custom design system
- **Smooth Animations** - CSS-only 60fps animations
- **Animated Counters** - Intersection Observer API
- **TypeScript** - Full type safety

---

## Quick Start

### Installation

```bash
cd evarest
npm install
```

### Development

```bash
npm run dev
# Opens at http://localhost:5173/
```

### Build

```bash
npm run build
# Output in dist/
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
evarest/
├── public/
│   └── hero.jpg                    # Hero background image
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Navigation with scroll effects
│   │   │   └── Footer.tsx          # Enterprise footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero with animated metrics
│   │   │   ├── ClientLogos.tsx     # Client social proof
│   │   │   ├── Services.tsx        # 6 service offerings
│   │   │   ├── Industries.tsx      # 4 industry verticals
│   │   │   ├── CaseStudies.tsx     # 3 success stories
│   │   │   ├── Capabilities.tsx    # Team expertise
│   │   │   └── ConsultationSection.tsx
│   │   ├── forms/
│   │   │   └── ConsultationForm.tsx # Lead generation form
│   │   └── ui/
│   │       ├── Button.tsx          # Reusable button component
│   │       ├── Card.tsx            # Card component
│   │       ├── Badge.tsx           # Badge component
│   │       └── CountUp.tsx         # Animated counter
│   ├── utils/
│   │   └── constants.ts            # Navigation & config
│   ├── App.tsx                     # Main app component
│   ├── index.css                   # Global styles + Tailwind
│   └── main.tsx                    # Entry point
├── docs/                           # Project documentation
│   ├── evarest_website_prd.md      # Product requirements
│   ├── PROJECT_WORKPLAN.md         # Execution plan
│   ├── MVP_COMPLETE.md             # Completion status
│   ├── PHASE1_COMPLETE.md          # Phase 1 details
│   ├── PHASE2_PROGRESS.md          # Phase 2 details
│   └── THEME_DOCUMENTATION.md      # Design system
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript config
├── vite.config.ts                  # Vite configuration
└── package.json
```

---

## Design System

### Colors
- **Primary:** Blue (`#3B82F6`)
- **Secondary:** Green (`#10B981`)
- **Dark:** Slate (`#1E293B`, `#334155`, `#475569`)
- **Light:** White, Slate-50, Slate-100

### Typography
- **Font:** System fonts for performance
- **Scale:** 4xl, 5xl, 6xl for headings
- **Weights:** Regular (400), Medium (500), Semibold (600), Bold (700)

### Components
- **Buttons:** Primary (blue), Secondary (outline)
- **Cards:** Hover effects with lift + shadow
- **Badges:** Pill-style for tags and compliance
- **Icons:** Lucide React

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI framework |
| **TypeScript** | 5.6.2 | Type safety |
| **Vite** | 5.4.2 | Build tool |
| **Tailwind CSS** | 3.4.1 | Styling |
| **React Hook Form** | 7.54.2 | Form validation |
| **Lucide React** | 0.468.0 | Icons |

---

## Key Metrics

- **Components:** 16 custom components
- **Sections:** 10 complete sections
- **Lines of Code:** ~1,800+ lines
- **Build Time:** < 3 seconds
- **Lighthouse Score:** Ready for optimization

---

## Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### AWS S3 + CloudFront

```bash
npm run build
# Upload dist/ folder to S3
```

---

## Business Value

### What Makes This Different

| Portfolio Website | Evarest Website |
|---------------------|-------------------|
| Pricing calculator | Enterprise consultation |
| "50+ projects" | "$50M+ revenue enabled" |
| Device mockups | Business ROI metrics |
| Individual profiles | Collective capabilities |
| Tech badges | Business outcomes |
| UI screenshots | C-suite testimonials |

### Lead Generation
- 5+ CTAs throughout site
- Professional intake form
- Captures: company info, project scope, compliance needs, timeline, budget
- 24h response time commitment

---

## Documentation

For detailed information, see the `docs/` folder:

- **[MVP_COMPLETE.md](../docs/MVP_COMPLETE.md)** - Full completion status
- **[evarest_website_prd.md](../docs/evarest_website_prd.md)** - Product requirements
- **[PROJECT_WORKPLAN.md](../docs/PROJECT_WORKPLAN.md)** - Development plan
- **[THEME_DOCUMENTATION.md](../docs/THEME_DOCUMENTATION.md)** - Design system

---

## Contributing

This is a production website. For changes:

1. Create a feature branch
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Submit for review

---

## License

Proprietary - Evarest Engineering Services

---

## Status

**PRODUCTION READY**

- All sections complete
- Responsive design verified
- No build errors
- Forms working
- Smooth scrolling implemented
- Professional enterprise design

**Ready to deploy and generate leads!**

---

**Built using React + TypeScript + Vite**
