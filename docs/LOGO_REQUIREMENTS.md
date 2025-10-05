# Logo Requirements & Implementation Guide

**Project:** Evarest Landing Page
**Purpose:** Replace placeholder logos with real brand assets
**Priority:** HIGH (Required before deployment)

---

## 📋 Required Logos Overview

### Total Logos Needed: 3 Categories

1. **Client Logos** (8-12 logos) - For carousel section
2. **Certification Logos** (4 logos) - For capabilities section
3. **Review Platform Logos** (3 logos) - Already using icons, optional

---

## 1. CLIENT LOGOS (Priority: HIGH)

### Location:
- **Component:** `/src/components/sections/ClientLogosNew.tsx`
- **Current Status:** Using placeholder divs with text

### Required Logos (8-12):
Choose from your actual clients or industry leaders:

#### Suggested Categories:
**HealthTech Clients (2-3):**
- [ ] Client 1 logo
- [ ] Client 2 logo
- [ ] Client 3 logo

**FinTech Clients (2-3):**
- [ ] Client 1 logo
- [ ] Client 2 logo
- [ ] Client 3 logo

**SaaS Clients (2-3):**
- [ ] Client 1 logo
- [ ] Client 2 logo
- [ ] Client 3 logo

**Government/Enterprise (2-3):**
- [ ] Client 1 logo
- [ ] Client 2 logo
- [ ] Client 3 logo

### Logo Specifications:
```
Format: SVG (preferred) or PNG with transparency
Size: 200x80px (width x height ratio ~2.5:1)
Color: Grayscale or original (will be styled with CSS)
Background: Transparent
File naming: client-name.svg (lowercase, hyphenated)
```

### File Location:
```
/public/logos/clients/
├── client-1.svg
├── client-2.svg
├── client-3.svg
└── ...
```

### Implementation Steps:

#### Step 1: Gather Client Logos
```bash
# Create directory
mkdir -p public/logos/clients
```

#### Step 2: Update ClientLogosNew.tsx
Replace this section:
```tsx
const logos = [
  { name: 'Fortune 500 Tech', id: 1 },
  { name: 'Healthcare Leader', id: 2 },
  // ...
];
```

With:
```tsx
const logos = [
  { name: 'Client Name 1', src: '/logos/clients/client-1.svg', id: 1 },
  { name: 'Client Name 2', src: '/logos/clients/client-2.svg', id: 2 },
  { name: 'Client Name 3', src: '/logos/clients/client-3.svg', id: 3 },
  { name: 'Client Name 4', src: '/logos/clients/client-4.svg', id: 4 },
  { name: 'Client Name 5', src: '/logos/clients/client-5.svg', id: 5 },
  { name: 'Client Name 6', src: '/logos/clients/client-6.svg', id: 6 },
  { name: 'Client Name 7', src: '/logos/clients/client-7.svg', id: 7 },
  { name: 'Client Name 8', src: '/logos/clients/client-8.svg', id: 8 },
];
```

Update the rendering:
```tsx
{duplicatedLogos.map((logo, index) => (
  <div
    key={`${logo.id}-${index}`}
    className="w-32 h-32 bg-white rounded-2xl shadow-md border border-brand-blue-100 flex items-center justify-center p-6 group-hover:shadow-brand-blue-500/20 transition-shadow duration-300"
  >
    <img
      src={logo.src}
      alt={logo.name}
      className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
))}
```

---

## 2. CERTIFICATION LOGOS (Priority: HIGH)

### Location:
- **Component:** `/src/components/sections/Capabilities.tsx`
- **Uses:** `CertificationCard.tsx` component
- **Current Status:** Using Award icon placeholder

### Required Logos (4):

#### 1. AWS (Amazon Web Services)
- **Name:** AWS Solutions Architect / AWS Professional
- **Source:** https://aws.amazon.com/developer/community/heroes/resources/
- **Format:** SVG or PNG (transparent)
- **Size:** 128x128px
- **File:** `/public/logos/certifications/aws.svg`

#### 2. Google Cloud Platform (GCP)
- **Name:** Google Cloud Professional
- **Source:** https://cloud.google.com/certification/cloud-architect
- **Format:** SVG or PNG (transparent)
- **Size:** 128x128px
- **File:** `/public/logos/certifications/gcp.svg`

#### 3. Kubernetes (CNCF)
- **Name:** CKA / CKAD / CKS
- **Source:** https://www.cncf.io/certification/cka/
- **Format:** SVG or PNG (transparent)
- **Size:** 128x128px
- **File:** `/public/logos/certifications/kubernetes.svg`

#### 4. Security Certifications
- **Options:** CISSP / CEH / OSCP
- **Generic alternative:** Shield icon (current fallback works)
- **Format:** SVG or PNG (transparent)
- **Size:** 128x128px
- **File:** `/public/logos/certifications/security.svg`

### Logo Specifications:
```
Format: SVG (preferred) or PNG with transparency
Size: 128x128px (square)
Background: Transparent
File naming: lowercase-name.svg
```

### File Location:
```
/public/logos/certifications/
├── aws.svg
├── gcp.svg
├── kubernetes.svg
└── security.svg
```

### Implementation Steps:

#### Step 1: Create Directory
```bash
mkdir -p public/logos/certifications
```

#### Step 2: Download Official Logos

**AWS:**
```bash
# Visit: https://aws.amazon.com/architecture/icons/
# Download AWS certification badge
# Save as: public/logos/certifications/aws.svg
```

**Google Cloud:**
```bash
# Visit: https://cloud.google.com/press
# Download GCP certification badge
# Save as: public/logos/certifications/gcp.svg
```

**Kubernetes:**
```bash
# Visit: https://www.cncf.io/brand-guidelines/
# Download Kubernetes logo
# Save as: public/logos/certifications/kubernetes.svg
```

#### Step 3: Update Capabilities.tsx

Update certifications array:
```tsx
const certifications = [
  {
    category: 'AWS',
    count: '25+',
    items: ['Solutions Architect', 'DevOps', 'Security'],
    logoSrc: '/logos/certifications/aws.svg'
  },
  {
    category: 'Google Cloud',
    count: '15+',
    items: ['Professional Architect', 'Data Engineer'],
    logoSrc: '/logos/certifications/gcp.svg'
  },
  {
    category: 'Kubernetes',
    count: '10+',
    items: ['CKA', 'CKAD', 'CKS'],
    logoSrc: '/logos/certifications/kubernetes.svg'
  },
  {
    category: 'Security',
    count: '8+',
    items: ['CISSP', 'CEH', 'OSCP'],
    logoSrc: '/logos/certifications/security.svg' // Optional, can keep icon
  },
];
```

Pass to CertificationCard:
```tsx
<CertificationCard
  key={index}
  category={cert.category}
  count={cert.count}
  items={cert.items}
  logoSrc={cert.logoSrc}
/>
```

---

## 3. REVIEW PLATFORM LOGOS (Priority: OPTIONAL)

### Location:
- **Components:** `HeroNew.tsx`, `Footer.tsx`
- **Current Status:** Using Lucide icons (Star icons) - WORKING WELL
- **Recommendation:** Keep current implementation

### Current Implementation:
```tsx
<ReviewBadge platform="Clutch" rating={5.0} reviews={120} />
<ReviewBadge platform="G2" rating={4.9} reviews={89} />
<ReviewBadge platform="Google" rating={4.9} reviews={150} />
```

**Note:** The current star-based implementation works well. Adding platform logos is optional.

If you want to add platform logos:
- Clutch logo: https://clutch.co/press
- G2 logo: https://www.g2.com/static/press_kit
- Google logo: Use from Google Fonts or Material Icons

---

## 📥 Logo Sourcing Guide

### Where to Get Official Logos:

#### Technology Providers:
1. **AWS:** https://aws.amazon.com/architecture/icons/
2. **Google Cloud:** https://cloud.google.com/press
3. **Kubernetes/CNCF:** https://www.cncf.io/brand-guidelines/
4. **Microsoft Azure:** https://docs.microsoft.com/en-us/azure/architecture/icons/

#### Security Certifications:
1. **ISC2 (CISSP):** https://www.isc2.org/Certifications/CISSP
2. **EC-Council (CEH):** https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/
3. **Offensive Security (OSCP):** https://www.offensive-security.com/

#### Review Platforms:
1. **Clutch:** https://clutch.co/press
2. **G2:** https://www.g2.com/static/press_kit
3. **Google:** Google Brand Resources

### Client Logos:
- Request directly from clients (preferred)
- Use from client's press/media kit
- Ensure you have permission to display

---

## 🎨 Logo Optimization

### After Downloading, Optimize:

#### SVG Optimization:
```bash
# Install SVGO (if not installed)
npm install -g svgo

# Optimize all SVGs
svgo -f public/logos/clients
svgo -f public/logos/certifications
```

#### PNG to SVG Conversion (if needed):
```bash
# Use online tools:
# - https://convertio.co/png-svg/
# - https://www.pngtosvg.com/
```

#### PNG Optimization (if using PNG):
```bash
# Use TinyPNG or ImageOptim
# Target: <20KB per logo
```

---

## ✅ Implementation Checklist

### Client Logos:
- [ ] Create `/public/logos/clients/` directory
- [ ] Gather 8-12 client logos (SVG/PNG)
- [ ] Optimize logos (<50KB each)
- [ ] Update `ClientLogosNew.tsx` with logo paths
- [ ] Test carousel with real logos
- [ ] Verify grayscale effect works

### Certification Logos:
- [ ] Create `/public/logos/certifications/` directory
- [ ] Download AWS certification logo
- [ ] Download GCP certification logo
- [ ] Download Kubernetes logo
- [ ] Download/create Security logo (or keep icon)
- [ ] Optimize all logos
- [ ] Update `Capabilities.tsx` with logo paths
- [ ] Test flip cards with real logos

### Verification:
- [ ] All logos display correctly
- [ ] Logos are optimized (<50KB each)
- [ ] Logos have proper alt text
- [ ] Logos work on all breakpoints
- [ ] Logos respect brand guidelines
- [ ] No broken image links

---

## 📄 Brand Guidelines Compliance

### Important Notes:
1. **Trademark Usage:** Ensure you have permission to display logos
2. **Logo Modifications:** Don't alter colors, proportions, or add effects
3. **Spacing:** Maintain clear space around logos
4. **Approval:** Get client approval before displaying their logo
5. **NDA Clients:** Use generic "Fortune 500" or "Enterprise Client" placeholder

### Legal Checklist:
- [ ] Permission obtained for all client logos
- [ ] Certification logos from official sources
- [ ] No trademark violations
- [ ] Comply with brand guidelines
- [ ] NDAs respected (no confidential clients shown)

---

## 🔄 Update Process

### When You Have the Logos:

1. **Place logos in directories:**
   ```bash
   public/
   └── logos/
       ├── clients/
       │   ├── client-1.svg
       │   ├── client-2.svg
       │   └── ...
       └── certifications/
           ├── aws.svg
           ├── gcp.svg
           ├── kubernetes.svg
           └── security.svg
   ```

2. **Update components** (see code examples above)

3. **Test locally:**
   ```bash
   npm run dev
   # Verify all logos display correctly
   ```

4. **Build and deploy:**
   ```bash
   npm run build
   npm run preview
   # Final verification before deployment
   ```

---

## 🎯 Priority Order

### Must Have (Before Launch):
1. **Client Logos** - At least 8 real client logos (HIGH PRIORITY)
2. **Certification Logos** - AWS, GCP, Kubernetes (HIGH PRIORITY)

### Nice to Have (Post Launch):
3. Review platform logos (currently using icons - works fine)
4. Additional client logos (12+ total)
5. More certification badges

---

## 📞 Support

### Need Help?
- Logo format issues: Use online converters
- Optimization: Use SVGO or TinyPNG
- Implementation: See code examples above
- Brand guidelines: Contact legal team

### Resources:
- Official brand portals (links above)
- Logo optimization tools
- SVG/PNG converters
- This guide

---

**Note:** Do NOT deploy to production without real client and certification logos. Placeholder logos will hurt credibility and brand trust.

---

*Logo Requirements Guide - Updated for Production Deployment*
