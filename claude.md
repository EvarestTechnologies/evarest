# Evarest Website Development Guide

## Project Overview
Build a premium Engineering-as-a-Service website for Evarest. Professional design distinguishing from generic portfolios through interactive features and business-focused architecture.

**Target**: Startups, CTOs, Enterprise decision makers  
**Goal**: 40% increase in qualified leads, 90+ Lighthouse score, <2.5s load time

## Tech Stack
```json
{
  "framework": "React 18.3.1 + TypeScript",
  "build": "Vite 5.4.2",
  "styling": "Tailwind CSS 3.4.1",
  "icons": "lucide-react"
}
```

## Critical Constraints
- **NO localStorage/sessionStorage** - Use React state only (useState/useReducer)
- **Performance**: 60fps animations, <2.5s page load, 90+ Lighthouse
- **Accessibility**: WCAG 2.1 AA compliance, keyboard nav, ARIA labels
- **Mobile-first**: Fully responsive design required

## Design System Quick Reference

### Colors (Tailwind)
```typescript
Primary: bg-blue-500 (hover: blue-600)
Secondary: bg-green-500
Gradient: bg-gradient-to-r from-blue-500 to-green-500
Text: text-slate-800 (headings), text-slate-600 (body)
Background: bg-white, bg-slate-50
```

### Component Patterns
```tsx
// Primary Button
className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"

// Card
className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-blue-200 transform hover:-translate-y-2"

// Container
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Section
className="py-16 lg:py-20 bg-white"
```

### Typography
```typescript
H1: text-4xl lg:text-6xl font-bold
H2: text-4xl lg:text-5xl font-bold
H3: text-2xl font-bold
Body: text-base text-slate-600
```

## Required Sections (in order)

### 1. Header
- Fixed nav, transparent → white on scroll
- Logo, nav menu, CTA buttons
- Mobile hamburger menu

### 2. Hero
- Two columns: content + pricing calculator
- Gradient background: `bg-gradient-to-br from-slate-50 via-blue-50 to-green-50`
- Interactive calculator with project type, budget, timeline
- Stats: 50+ projects, 98% satisfaction, 15+ engineers

### 3. Services
- 3-column grid (responsive: 1→2→3)
- 6 services: Web Dev, Mobile Dev, AI/ML, Cloud/DevOps, Data Engineering, Security
- Gradient icon containers, tech badges, hover lift

### 4. Project Showcase
- Two columns: project list + device mockup
- Device toggle: mobile/tablet/desktop
- 3+ projects with stats
- Selectable cards, metrics display

### 5. Industries
- 4-column grid (1→2→4)
- HealthTech, FinTech, AI/ML, Startups
- Industry-specific gradients, features, retention rate
- 100% retention badge

### 6. Case Studies
- 3 detailed studies
- Thumbnail grid with selectable cards
- Challenge/Solution/Results format
- Testimonials with star ratings, metrics

### 7. Team
- 3-column grid, 6+ members
- Filterable by expertise: All, Full-Stack, Mobile, AI/ML, DevOps, Security
- Avatar, availability badge, skills, social links

### 8. Footer
- Dark background: `bg-slate-800 text-white`
- Newsletter signup
- 5-column link structure
- Social media, legal links

## File Structure
```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── ProjectShowcase.tsx
│   ├── Industries.tsx
│   ├── CaseStudies.tsx
│   ├── TeamSection.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Key Content

### Services
Web Development, Mobile Development, AI/ML Solutions, Cloud & DevOps, Data Engineering, Security & Compliance

### Technologies
React, Next.js, TypeScript, Node.js, Python, TensorFlow, AWS, Docker, Kubernetes, PostgreSQL, MongoDB

### Industries
- **HealthTech**: HIPAA compliance, telemedicine, EHR integration
- **FinTech**: PCI DSS, payment processing, fraud detection
- **AI/ML**: Custom models, NLP, computer vision
- **Startups**: MVP development, scalable architecture

## Development Guidelines

### Responsive Design
```typescript
Grid: grid md:grid-cols-2 lg:grid-cols-3
Text: text-4xl lg:text-6xl
Spacing: px-4 sm:px-6 lg:px-8
```

### Animations
- Cards: `transition-all duration-300 hover:-translate-y-2`
- Buttons: `transition-all duration-200 hover:-translate-y-0.5`
- Icons: `group-hover:scale-110`

### Accessibility
- Add `aria-label` to icon buttons
- Include `focus:ring-2 focus:ring-blue-500`
- Add `alt` text to images
- Ensure keyboard navigation

### Performance
- Use `loading="lazy"` on images
- Maintain 60fps animations
- Keep bundle size minimal

## Common Pitfalls to Avoid
- ❌ Don't use localStorage/sessionStorage
- ❌ Don't use generic Lorem ipsum
- ❌ Don't skip mobile responsiveness
- ❌ Don't forget hover states
- ❌ Don't create slow animations

## Reference Documents
- Full PRD: evarest_website_prd.md
- Theme docs: THEME_DOCUMENTATION.md