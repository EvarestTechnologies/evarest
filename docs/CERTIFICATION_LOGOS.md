# Certification Logo Requirements

## Overview
The CertificationCard component supports optional logo images for each certification category. Logos enhance brand recognition and professionalism.

## Required Logos

### 1. AWS (Amazon Web Services)
- **File name:** `aws-logo.png` or `aws-logo.svg`
- **Recommended size:** 64x64px to 128x128px
- **Format:** PNG with transparent background or SVG
- **Source:** [AWS Brand Assets](https://aws.amazon.com/architecture/icons/)

### 2. Google Cloud Platform (GCP)
- **File name:** `gcp-logo.png` or `gcp-logo.svg`
- **Recommended size:** 64x64px to 128x128px
- **Format:** PNG with transparent background or SVG
- **Source:** [Google Cloud Brand Resources](https://cloud.google.com/press)

### 3. Kubernetes
- **File name:** `kubernetes-logo.png` or `kubernetes-logo.svg`
- **Recommended size:** 64x64px to 128x128px
- **Format:** PNG with transparent background or SVG
- **Source:** [CNCF Branding](https://www.cncf.io/brand-guidelines/)

### 4. Security Certifications
- **File name:** `security-cert-logo.png` or generic shield icon
- **Recommended size:** 64x64px to 128x128px
- **Format:** PNG with transparent background or SVG
- **Options:** CISSP, CEH, OSCP logos (if licensed)

## File Location
Place logo files in: `/public/logos/`

## Usage in Component
```tsx
<CertificationCard
  category="AWS"
  count="25+"
  items={['Solutions Architect', 'DevOps', 'Security']}
  logoSrc="/logos/aws-logo.png"
/>
```

## Current Status
- ✅ CertificationCard component created with logo support
- ⏳ Logo files need to be added to `/public/logos/` directory
- ⏳ Update Capabilities.tsx to pass logoSrc prop once files are available

## Fallback Behavior
If no logo is provided, the component displays a generic Award icon with blue background, maintaining visual consistency.

## Brand Guidelines
Ensure all logos comply with respective brand guidelines:
- Maintain proper spacing around logos
- Do not modify colors or proportions
- Use official assets only
- Verify licensing for commercial use
