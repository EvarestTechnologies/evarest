# Evarest Website - Comprehensive Theme & Design Documentation

## Table of Contents
1. [Overview](#overview)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Layout & Spacing](#layout--spacing)
5. [Component Library](#component-library)
6. [Page Structure](#page-structure)
7. [Interactive Elements](#interactive-elements)
8. [Animation & Transitions](#animation--transitions)
9. [Responsive Design](#responsive-design)
10. [Enhanced Features & Improvements](#enhanced-features--improvements)

---

## Overview

**Project Name:** Evarest Engineering Services Website
**Tech Stack:** React 18.3.1 + TypeScript + Vite 5.4.2 + Tailwind CSS 3.4.1
**Design Style:** Modern, Clean, Professional
**Brand Identity:** Engineering Excellence, Scalability, Premium Services
**Target Audience:** Startups & Enterprises seeking engineering services

---

## Color System

### Primary Colors

#### Blue (Primary Brand Color)
- **Blue 50:** `bg-blue-50` - Light backgrounds, subtle accents
- **Blue 100:** `bg-blue-100`, `text-blue-100` - Badge backgrounds, pills
- **Blue 200:** `border-blue-200` - Hover borders, active states
- **Blue 500:** `bg-blue-500`, `text-blue-500` - Primary buttons, CTAs, links
- **Blue 600:** `bg-blue-600`, `text-blue-600` - Hover states on primary buttons
- **Blue 700:** `text-blue-700` - Text on light backgrounds

**Usage:**
- Primary CTA buttons
- Active states
- Links and interactive elements
- Brand accent in logo (first letter "E")
- Focus rings on form inputs

#### Green (Secondary Brand Color)
- **Green 50:** `bg-green-50` - Light backgrounds
- **Green 500:** `bg-green-500`, `text-green-500` - Gradients, success states
- **Green 600:** `bg-green-600` - Hover states on gradient buttons

**Usage:**
- Gradient combinations with blue
- Success indicators ("Available" badges)
- Accent color in headings
- Status indicators

### Neutral Colors

#### Slate (Primary Text & Backgrounds)
- **Slate 50:** `bg-slate-50` - Light section backgrounds
- **Slate 300:** `text-slate-300` - Muted text on dark backgrounds
- **Slate 400:** `text-slate-400`, `placeholder-slate-400` - Placeholder text
- **Slate 500:** `text-slate-500` - Secondary text, captions
- **Slate 600:** `text-slate-600` - Body text, descriptions
- **Slate 700:** `text-slate-700`, `bg-slate-700` - Labels, form inputs on dark
- **Slate 800:** `bg-slate-800`, `text-slate-800` - Headings, footer background
- **White:** `bg-white` - Card backgrounds, main backgrounds
- **Black:** Overlay gradients `from-black/60`

#### Gray (Alternative Neutral)
- **Gray 100:** `bg-gray-100`, `text-gray-100` - Pill backgrounds, secondary buttons
- **Gray 200:** `bg-gray-200` - Hover states on secondary buttons
- **Gray 300:** `border-gray-300` - Form borders
- **Gray 600:** `text-gray-600`, `bg-gray-600` - Device mockup details
- **Gray 700:** `text-gray-700` - Text on light backgrounds
- **Gray 800:** `bg-gray-800`, `text-gray-800` - Device bezels, strong text

### Accent Colors

#### Service-Specific Colors
- **Red:** `from-red-500 to-pink-500` - HealthTech service
- **Orange:** `from-orange-500 to-orange-600` - Cloud & DevOps
- **Purple:** `from-purple-500 to-violet-500`, `from-purple-500 to-purple-600` - AI/ML services
- **Teal:** `from-teal-500 to-teal-600` - Data Engineering
- **Pink:** `to-pink-500` - Healthcare gradient
- **Emerald:** `to-emerald-500` - FinTech
- **Cyan:** `to-cyan-500` - Startups
- **Violet:** `to-violet-500` - AI/ML industry

#### Status Colors
- **Yellow 500:** `text-yellow-500` - Star ratings, testimonials

### Gradient Combinations

#### Primary Gradient (Blue to Green)
```css
bg-gradient-to-r from-blue-500 to-green-500
```
**Usage:** Primary CTAs, heading accents, major buttons

#### Section Gradients
```css
/* Hero & alternating sections */
bg-gradient-to-br from-slate-50 via-blue-50 to-green-50
bg-gradient-to-br from-slate-50 to-blue-50

/* Calculator widget */
bg-gradient-to-r from-blue-50 to-green-50

/* Case study results panel */
bg-gradient-to-br from-blue-500 to-green-500
```

#### Overlay Gradients
```css
/* Image overlays */
bg-gradient-to-t from-black/60 via-transparent to-transparent

/* Hover effects on cards */
bg-gradient-to-r from-blue-500/5 to-green-500/5
```

---

## Typography

### Font Family
**Primary:** System font stack (default Tailwind)
- Uses browser default sans-serif fonts
- No custom fonts imported
- Ensures fast loading and native feel

### Font Sizes

#### Headings
- **H1 (Hero):** `text-4xl lg:text-6xl` (2.25rem / 3.75rem on large screens)
- **H2 (Section Titles):** `text-4xl lg:text-5xl` (2.25rem / 3rem on large screens)
- **H3 (Card Titles):** `text-2xl` to `text-3xl` (1.5rem to 1.875rem)
- **H4 (Subsections):** `text-xl` to `text-2xl` (1.25rem to 1.5rem)

#### Body Text
- **Large Body:** `text-xl` (1.25rem) - Intro paragraphs, important descriptions
- **Base Body:** `text-base` (1rem, default) - Standard paragraph text
- **Small Body:** `text-sm` (0.875rem) - Captions, meta information
- **Extra Small:** `text-xs` (0.75rem) - Badges, tags, fine print

### Font Weights
- **Bold:** `font-bold` (700) - Headings, emphasis, stats
- **Semibold:** `font-semibold` (600) - Subheadings, buttons, labels
- **Medium:** `font-medium` (500) - Navigation items, tags
- **Regular:** `font-normal` (400, default) - Body text

### Text Colors
- **Primary Headings:** `text-slate-800`
- **Body Text:** `text-slate-600`
- **Secondary Text:** `text-slate-500`
- **Muted Text:** `text-slate-400`
- **On Dark Backgrounds:** `text-white`, `text-slate-300`
- **Accent Text:** `text-blue-500`, `text-blue-600`, `text-blue-700`
- **Gradient Text:**
  ```css
  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500
  ```

### Line Height
- **Tight:** `leading-tight` - Large headings
- **Relaxed:** `leading-relaxed` - Body text, descriptions
- **Default:** Tailwind default for most text

---

## Layout & Spacing

### Container
```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```
- Maximum width: 80rem (1280px)
- Centered with auto margins
- Responsive padding: 1rem (mobile) → 1.5rem (sm) → 2rem (lg)

### Section Padding
- **Vertical:** `py-16` (4rem) to `py-20` (5rem)
- **Top Padding (Hero):** `pt-20 lg:pt-32` (5rem / 8rem on large)
- **Bottom Padding (Hero):** `pb-16 lg:pb-20` (4rem / 5rem on large)

### Grid Layouts

#### Two-Column (Hero, Showcase)
```css
grid lg:grid-cols-2 gap-12 lg:gap-16
```

#### Three-Column (Services, Team)
```css
grid md:grid-cols-2 lg:grid-cols-3 gap-8
```

#### Four-Column (Industries)
```css
grid md:grid-cols-2 lg:grid-cols-4 gap-8
```

#### Five-Column (Footer)
```css
grid lg:grid-cols-5 gap-12
```

### Spacing Scale
- **Gap between grid items:** `gap-2` (0.5rem), `gap-3`, `gap-4`, `gap-6`, `gap-8`, `gap-12`, `gap-16`
- **Component spacing:** `space-y-2`, `space-y-3`, `space-y-4`, `space-y-6`, `space-y-8`
- **Margins:** `mb-2`, `mb-4`, `mb-6`, `mb-16` (bottom), `mt-16` (top)
- **Padding:** `p-2`, `p-3`, `p-4`, `p-6`, `p-8`, `p-12`

---

## Component Library

### Buttons

#### Primary Button (Blue)
```css
px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
font-semibold transition-all duration-200 shadow-lg hover:shadow-xl
transform hover:-translate-y-0.5
```
**Usage:** Main CTAs, primary actions

#### Primary Gradient Button
```css
px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500
hover:from-blue-600 hover:to-green-600 text-white rounded-lg
font-semibold transition-all duration-200 shadow-lg hover:shadow-xl
transform hover:-translate-y-0.5
```
**Usage:** Hero CTAs, major conversion points

#### Secondary Button (White/Gray)
```css
px-8 py-4 bg-white hover:bg-gray-50 text-slate-800 rounded-lg
font-semibold transition-all duration-200 shadow-md hover:shadow-lg border
```
**Usage:** Secondary actions, "Watch Demo" type buttons

#### Ghost Button (Transparent with Border)
```css
px-6 py-2 text-blue-500 border border-blue-500 rounded-lg
hover:bg-blue-50 transition-colors duration-200
```
**Usage:** Mobile menu actions, less prominent CTAs

#### Icon Button
```css
p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600
rounded-lg transition-colors duration-200
```
**Usage:** Social media links, icon-only actions

#### Filter/Toggle Button
```css
/* Active state */
flex items-center px-4 py-2 rounded-full bg-blue-500 text-white shadow-lg

/* Inactive state */
flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700
hover:bg-blue-100 hover:text-blue-700
```
**Usage:** Team filters, device toggles, expertise selection

### Cards

#### Service Card
```css
group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl
transition-all duration-300 border hover:border-blue-200
transform hover:-translate-y-2
```
**Features:**
- Gradient icon container
- Hover lift effect (-translate-y-2)
- Border color change on hover
- Technology pill badges
- Overlay gradient effect

#### Project Card (Selectable)
```css
/* Active */
p-6 rounded-xl bg-white shadow-lg border-2 border-blue-200

/* Inactive */
p-6 rounded-xl bg-white/60 hover:bg-white hover:shadow-md border border-transparent
```
**Features:**
- Click to select
- Active border highlight
- Semi-transparent when inactive

#### Team Member Card
```css
group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl
transition-all duration-300 border hover:border-blue-200
transform hover:-translate-y-2
```
**Features:**
- Circular avatar with ring
- "Available" status badge
- Skill pills
- Social media icon buttons
- Stats display (experience, projects)

#### Case Study Card
```css
/* Thumbnail */
cursor-pointer p-6 rounded-2xl bg-white shadow-lg border-2 border-blue-200
transform scale-105 (active)

/* Details Panel */
bg-white rounded-2xl shadow-2xl overflow-hidden
```
**Features:**
- Image with category badge
- Scale effect when active
- Testimonial section with star icon
- Results grid with metrics

### Form Elements

#### Input Fields
```css
w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg
focus:ring-2 focus:ring-blue-500 focus:border-blue-500
transition-colors duration-200 text-white placeholder-slate-400
```
**Variants:**
- Light mode: `bg-white border-gray-300`
- Dark mode (footer): `bg-slate-700 border-slate-600 text-white`

#### Select Dropdowns
```css
w-full p-3 border border-gray-300 rounded-lg
focus:ring-2 focus:ring-blue-500 focus:border-blue-500
transition-colors duration-200
```
**Usage:** Project calculator, form selects

#### Labels
```css
block text-sm font-medium text-slate-700 mb-2
```

### Badges & Pills

#### Technology Pill
```css
px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium
```
**Variants:**
- Gray: `bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700`
- Service-specific colors on hover

#### Status Badge (Inline)
```css
inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800
rounded-full text-sm font-medium
```
**Usage:** Hero tagline, section announcements

#### Category Badge (Overlay)
```css
absolute top-3 right-3 px-3 py-1 bg-blue-500 text-white
text-sm font-medium rounded-full
```
**Usage:** Image overlays, project categories

#### Availability Badge
```css
absolute -bottom-2 left-1/2 transform -translate-x-1/2
bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold
```
**Usage:** Team member cards

### Navigation

#### Header (Sticky)
```css
fixed top-0 left-0 right-0 z-50 transition-all duration-300
bg-white/95 backdrop-blur-md shadow-lg (scrolled)
bg-transparent (top of page)
```
**Features:**
- Transparent at top, white on scroll
- Backdrop blur effect
- Dropdown menus on hover
- Mobile hamburger menu

#### Navigation Link
```css
flex items-center space-x-1 text-slate-700 hover:text-blue-500
transition-colors duration-200 font-medium
```

#### Dropdown Menu
```css
absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl
opacity-0 invisible group-hover:opacity-100 group-hover:visible
transition-all duration-200 border
```

### Icons

#### Icon Container (Service/Industry Cards)
```css
inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600
text-white mb-6 group-hover:scale-110 transition-transform duration-300
```
**Icon Size:** `w-8 h-8`

#### Icon Sizes
- **Small:** `w-4 h-4` - Inline icons, arrows
- **Medium:** `w-5 h-5` - Button icons, social media
- **Large:** `w-6 h-6` - Device toggles, feature icons
- **Extra Large:** `w-8 h-8` - Service icons, main feature icons

### Special Components

#### Stats Display (Grid)
```css
grid grid-cols-3 gap-6
/* Individual stat */
text-center
text-3xl font-bold text-slate-800 (number)
text-sm text-slate-600 mt-1 (label)
```

#### Device Mockup
```css
relative bg-gray-800 rounded-3xl p-2 shadow-2xl
/* Inner screen */
bg-white rounded-2xl overflow-hidden
```
**Features:**
- Dynamic sizing based on device type
- Notch and home button decorations for mobile
- Image with gradient overlay

#### Testimonial Block
```css
bg-blue-50 p-6 rounded-xl
flex items-start space-x-4
```
**Features:**
- Star icon
- Italic quote
- Author name and position

---

## Page Structure

### Total Sections: 8

#### 1. Header (Navigation)
- **Component:** `Header.tsx` (103 lines)
- **Position:** Fixed top
- **Background:** Transparent → White on scroll
- **Features:** Logo, nav menu, dropdown menus, mobile menu, CTA buttons

#### 2. Hero
- **Component:** `Hero.tsx` (153 lines)
- **Background:** `bg-gradient-to-br from-slate-50 via-blue-50 to-green-50`
- **Layout:** Two-column grid
- **Left:** Heading, description, CTAs, stats
- **Right:** Project calculator widget
- **Features:**
  - Interactive pricing calculator
  - Gradient headline text
  - Primary + secondary CTA buttons
  - Social proof stats (50+ projects, 98% satisfaction, 15+ engineers)

#### 3. Services
- **Component:** `Services.tsx` (99 lines)
- **Background:** `bg-white`
- **Layout:** Three-column grid
- **Cards:** 6 service cards
  - Web Development (Blue)
  - Mobile Development (Green)
  - AI/ML Solutions (Purple)
  - Cloud & DevOps (Orange)
  - Data Engineering (Teal)
  - Security & Compliance (Red)
- **Features:**
  - Hover lift animations
  - Technology pill badges
  - Gradient icon containers

#### 4. Project Showcase
- **Component:** `ProjectShowcase.tsx` (181 lines)
- **Background:** `bg-gradient-to-br from-slate-50 to-blue-50`
- **Layout:** Two-column grid
- **Left:** Selectable project list (3 projects)
- **Right:** Device mockup viewer (mobile/tablet/desktop toggle)
- **Features:**
  - Interactive device preview
  - Project metrics display
  - Technology stack badges
  - Live demo and code buttons

#### 5. Industries
- **Component:** `Industries.tsx` (113 lines)
- **Background:** `bg-white`
- **Layout:** Four-column grid
- **Cards:** 4 industry specializations
  - HealthTech (Red-Pink gradient)
  - FinTech (Green-Emerald gradient)
  - AI/ML (Purple-Violet gradient)
  - Startups (Blue-Cyan gradient)
- **Features:**
  - Industry-specific features list
  - Project counts and stats
  - 100% retention rate badge

#### 6. Case Studies
- **Component:** `CaseStudies.tsx` (224 lines)
- **Background:** `bg-gradient-to-br from-slate-50 to-blue-50`
- **Layout:** Three-column thumbnail grid + detailed view
- **Cases:** 3 detailed case studies
  - MedConnect (HealthTech)
  - TradePro (FinTech)
  - SmartAnalytics (AI/ML)
- **Features:**
  - Selectable case study cards
  - Challenge/Solution/Results breakdown
  - Client testimonials with ratings
  - Technology stack display
  - Metrics grid with gradient background

#### 7. Team Section
- **Component:** `TeamSection.tsx` (199 lines)
- **Background:** `bg-white`
- **Layout:** Three-column grid
- **Members:** 6 team members with filter
- **Filters:** All Team, Full-Stack, Mobile, AI/ML, DevOps, Security, Design
- **Features:**
  - Filterable by expertise
  - Avatar with ring border
  - Availability status
  - Experience and project count
  - Social media links
  - Combined team stats

#### 8. Footer
- **Component:** `Footer.tsx` (170 lines)
- **Background:** `bg-slate-800 text-white`
- **Layout:** Newsletter section + five-column links + bottom bar
- **Sections:**
  - Newsletter signup
  - Company info with contact details
  - Services links
  - Industries links
  - Company links
  - Resources links
  - Social media buttons
  - Legal links (Privacy, Terms, Cookies)
  - System status indicator

---

## Interactive Elements

### Hover Effects

#### Card Hover
```css
hover:shadow-2xl transform hover:-translate-y-2
hover:border-blue-200
```

#### Button Hover
```css
hover:bg-blue-600
hover:shadow-xl
transform hover:-translate-y-0.5
```

#### Icon Hover
```css
group-hover:scale-110 transition-transform duration-300
```

#### Link Hover
```css
hover:text-blue-500 transition-colors duration-200
```

#### Image Hover
```css
hover:scale-110 transition-transform duration-300
```

### Click/Active States

#### Selected Cards
```css
border-2 border-blue-200
bg-white shadow-lg (vs bg-white/60 for inactive)
transform scale-105 (case studies)
```

#### Active Filters
```css
bg-blue-500 text-white shadow-lg
(vs bg-gray-100 text-gray-700 for inactive)
```

### Focus States

#### Form Inputs
```css
focus:ring-2 focus:ring-blue-500 focus:border-blue-500
```

### Group Effects
- Parent element has `group` class
- Child elements use `group-hover:` prefix for coordinated effects
- Common pattern: icon scale + card lift + border color change

---

## Animation & Transitions

### Transition Durations
- **Fast:** `duration-200` (200ms) - Buttons, links, colors
- **Medium:** `duration-300` (300ms) - Cards, transforms, shadows
- **Slow:** `duration-500` (500ms) - Device mockup transitions

### Transition Properties
```css
transition-all duration-300
transition-colors duration-200
transition-transform duration-300
transition-opacity duration-300
```

### Transform Animations

#### Vertical Lift
```css
transform hover:-translate-y-2 /* Cards */
transform hover:-translate-y-0.5 /* Buttons */
```

#### Scale
```css
group-hover:scale-110 /* Icons */
hover:scale-110 /* Images */
transform scale-105 /* Active cards */
```

#### Translate (Arrows)
```css
group-hover:translate-x-1 /* Arrow icons in buttons */
```

### Opacity Transitions
```css
opacity-0 invisible group-hover:opacity-100 group-hover:visible
/* Dropdown menus, overlay effects */
```

### Shadow Transitions
```css
shadow-lg hover:shadow-2xl /* Cards */
shadow-lg hover:shadow-xl /* Buttons */
shadow-md hover:shadow-lg /* Secondary buttons */
```

---

## Responsive Design

### Breakpoints (Tailwind Defaults)
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px

### Responsive Patterns

#### Grid Columns
```css
/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */
grid md:grid-cols-2 lg:grid-cols-3

/* Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */
grid md:grid-cols-2 lg:grid-cols-4

/* Mobile: 1 column, Desktop: 2 columns */
grid lg:grid-cols-2
```

#### Typography
```css
text-4xl lg:text-6xl /* Hero heading */
text-4xl lg:text-5xl /* Section headings */
text-xl /* Body - stays consistent */
```

#### Spacing
```css
pt-20 lg:pt-32 /* Hero top padding */
pb-16 lg:pb-20 /* Hero bottom padding */
px-4 sm:px-6 lg:px-8 /* Container padding */
gap-12 lg:gap-16 /* Grid gaps */
```

#### Flex Direction
```css
flex flex-col sm:flex-row /* Stack on mobile, row on tablet+ */
```

#### Visibility
```css
hidden lg:flex /* Desktop navigation */
lg:hidden /* Mobile menu button */
```

#### Heights
```css
h-16 lg:h-20 /* Header height */
```

---

## Enhanced Features & Improvements

### Recommended Enhancements

#### 1. **Design System Tokens**
Create a centralized theme configuration file:

```javascript
// theme.config.js
export const theme = {
  colors: {
    primary: {
      DEFAULT: '#3B82F6', // blue-500
      hover: '#2563EB',   // blue-600
      light: '#EFF6FF',   // blue-50
      dark: '#1E40AF'     // blue-700
    },
    secondary: {
      DEFAULT: '#10B981', // green-500
      hover: '#059669'    // green-600
    },
    accent: {
      healthtech: { from: '#EF4444', to: '#EC4899' },
      fintech: { from: '#10B981', to: '#059669' },
      aiml: { from: '#8B5CF6', to: '#7C3AED' },
      startups: { from: '#3B82F6', to: '#06B6D4' }
    }
  },
  spacing: {
    section: { vertical: '5rem', horizontal: '2rem' },
    card: { padding: '2rem', gap: '2rem' }
  },
  typography: {
    heading: {
      h1: { mobile: '2.25rem', desktop: '3.75rem' },
      h2: { mobile: '2.25rem', desktop: '3rem' },
      h3: { mobile: '1.5rem', desktop: '1.875rem' }
    }
  },
  borderRadius: {
    card: '1rem',    // rounded-2xl
    button: '0.5rem', // rounded-lg
    pill: '9999px'   // rounded-full
  }
}
```

#### 2. **Accessibility Improvements**

**Keyboard Navigation:**
- Add `tabindex` to interactive cards
- Implement keyboard-accessible dropdown menus
- Add skip navigation links

**ARIA Labels:**
```jsx
<button aria-label="View project details">
<nav aria-label="Main navigation">
<section aria-labelledby="services-heading">
```

**Focus Indicators:**
```css
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
```

**Color Contrast:**
- Ensure all text meets WCAG AA standards
- Minimum 4.5:1 for body text
- Minimum 3:1 for large text

#### 3. **Performance Optimizations**

**Image Loading:**
```jsx
<img loading="lazy" decoding="async" />
```

**Code Splitting:**
```javascript
const Services = lazy(() => import('./components/Services'))
```

**Memoization:**
```javascript
const MemoizedServiceCard = React.memo(ServiceCard)
```

#### 4. **Dark Mode Support**

```css
/* Add to components */
dark:bg-slate-900 dark:text-white dark:border-slate-700
```

**Implementation:**
```javascript
// Add to tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ... rest of config
}
```

#### 5. **Animation Enhancements**

**Scroll Animations:**
```javascript
// Use Intersection Observer or Framer Motion
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

**Stagger Effects:**
```javascript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

#### 6. **Micro-interactions**

**Button Ripple Effect:**
```css
relative overflow-hidden
after:absolute after:inset-0 after:bg-white/20
after:scale-0 active:after:scale-100
after:transition-transform after:duration-300
```

**Loading States:**
```jsx
<button disabled={loading}>
  {loading ? <Spinner /> : 'Submit'}
</button>
```

**Success Feedback:**
```jsx
// Toast notifications on form submission
// Checkmark animations
// Progress indicators
```

#### 7. **Enhanced Forms**

**Validation:**
```javascript
// Form validation with React Hook Form or Formik
const { register, errors } = useForm()

<input
  {...register('email', {
    required: 'Email is required',
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  })}
/>
{errors.email && <span className="text-red-500">{errors.email.message}</span>}
```

**Input States:**
```css
/* Error state */
border-red-500 focus:ring-red-500

/* Success state */
border-green-500 focus:ring-green-500
```

#### 8. **Advanced Navigation**

**Smooth Scroll:**
```javascript
// Add to links
<a href="#services" className="scroll-smooth">Services</a>

// Or global CSS
html { scroll-behavior: smooth; }
```

**Active Section Highlighting:**
```javascript
const [activeSection, setActiveSection] = useState('hero')

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id)
      }
    })
  })
  // ... observe sections
})
```

**Breadcrumbs:**
```jsx
<nav aria-label="Breadcrumb">
  <ol className="flex space-x-2">
    <li><a href="/">Home</a></li>
    <li>/</li>
    <li>Case Studies</li>
  </ol>
</nav>
```

#### 9. **Content Enhancements**

**Search Functionality:**
```jsx
<input
  type="search"
  placeholder="Search case studies..."
  className="w-full px-4 py-2 rounded-lg border"
/>
```

**Filtering & Sorting:**
```jsx
// Add to case studies, projects
<select onChange={handleSort}>
  <option value="recent">Most Recent</option>
  <option value="popular">Most Popular</option>
</select>
```

**Pagination:**
```jsx
<div className="flex justify-center space-x-2">
  <button>Previous</button>
  <span>1 of 10</span>
  <button>Next</button>
</div>
```

#### 10. **SEO Improvements**

**Meta Tags:**
```html
<head>
  <title>Evarest - Premium Engineering Services</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:image" content="..." />
  <link rel="canonical" href="..." />
</head>
```

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Evarest",
  "url": "https://evarest.io"
}
```

#### 11. **Analytics & Tracking**

**Event Tracking:**
```javascript
// Track button clicks
onClick={() => {
  analytics.track('CTA Clicked', {
    location: 'hero',
    button: 'Start Your Project'
  })
}}
```

#### 12. **Progressive Enhancement**

**Service Worker:**
```javascript
// Add PWA capabilities
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
```

**Offline Support:**
- Cache critical assets
- Show offline indicator
- Queue form submissions

#### 13. **Component Variations**

**Ghost Cards:**
```css
bg-transparent border-2 border-blue-500
hover:bg-blue-50
```

**Compact Mode:**
```css
/* Add compact variant */
p-4 text-sm (instead of p-8 text-base)
```

**Icon-Only Buttons:**
```css
w-10 h-10 p-0 flex items-center justify-center
```

#### 14. **Advanced Layouts**

**Masonry Grid:**
```css
/* For project showcases */
columns-1 md:columns-2 lg:columns-3 gap-8
```

**Sticky Sidebar:**
```css
lg:sticky lg:top-24 lg:self-start
```

#### 15. **State Management**

**Context API:**
```javascript
// ThemeContext for dark mode
// UserContext for authentication
// CalculatorContext for sharing state
```

#### 16. **Testing Utilities**

**Visual Regression:**
- Storybook for component library
- Chromatic for visual testing

**Accessibility Testing:**
- axe-core integration
- Lighthouse CI

---

## Build Instructions

### Prerequisites
```bash
Node.js >= 18
npm or yarn
```

### Installation
```bash
cd project
npm install
```

### Development
```bash
npm run dev
# Opens at http://localhost:5173
```

### Build
```bash
npm run build
# Output in dist/
```

### Type Check
```bash
npm run typecheck
```

### Lint
```bash
npm run lint
```

---

## Design Principles

### 1. **Consistency**
- Use the same button styles across sections
- Maintain consistent spacing rhythm
- Apply uniform hover effects

### 2. **Hierarchy**
- Clear visual hierarchy with typography scale
- Use color to emphasize important elements
- Group related content with whitespace

### 3. **Feedback**
- Provide visual feedback on all interactions
- Use loading states for async operations
- Show success/error messages clearly

### 4. **Accessibility**
- Keyboard navigable
- Screen reader friendly
- Sufficient color contrast

### 5. **Performance**
- Lazy load images
- Code split components
- Minimize bundle size

### 6. **Responsiveness**
- Mobile-first approach
- Touch-friendly targets (min 44x44px)
- Flexible layouts

### 7. **Scalability**
- Component-based architecture
- Reusable design tokens
- Easy to extend

---

## File Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation & menu
│   │   ├── Hero.tsx             # Landing section with calculator
│   │   ├── Services.tsx         # Service cards grid
│   │   ├── ProjectShowcase.tsx  # Interactive project viewer
│   │   ├── Industries.tsx       # Industry expertise cards
│   │   ├── CaseStudies.tsx      # Detailed case studies
│   │   ├── TeamSection.tsx      # Team members with filters
│   │   └── Footer.tsx           # Footer with newsletter
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles (Tailwind)
├── public/
├── index.html
├── package.json
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Vite config
└── THEME_DOCUMENTATION.md       # This file
```

---

## Quick Reference

### Most Used Classes

**Containers:**
```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

**Cards:**
```css
bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl
transition-all duration-300 border hover:border-blue-200
transform hover:-translate-y-2
```

**Buttons:**
```css
px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg
font-semibold transition-all duration-200 shadow-lg hover:shadow-xl
transform hover:-translate-y-0.5
```

**Headings:**
```css
text-4xl lg:text-5xl font-bold text-slate-800
text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500
```

**Section Backgrounds:**
```css
bg-white
bg-gradient-to-br from-slate-50 to-blue-50
bg-gradient-to-br from-slate-50 via-blue-50 to-green-50
bg-slate-800 text-white
```

---

**Last Updated:** 2025-10-03
**Version:** 1.0
**Maintainer:** Evarest Engineering Team
