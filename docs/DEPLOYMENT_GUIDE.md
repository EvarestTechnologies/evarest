# Deployment Guide - Evarest Landing Page

**Version:** 1.0
**Project:** Evarest Landing Page Redesign
**Phase:** Week 6 - Launch & Monitoring

---

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Environment Setup](#environment-setup)
3. [Deployment Steps](#deployment-steps)
4. [Verification & Testing](#verification--testing)
5. [Rollback Procedure](#rollback-procedure)
6. [Post-Launch Monitoring](#post-launch-monitoring)

---

## Pre-Deployment Checklist

### Code Review
- [x] All features implemented (Weeks 1-4)
- [x] Performance optimizations applied (Week 5)
- [x] Accessibility compliance verified (WCAG AA)
- [x] Cross-browser testing completed
- [x] Mobile responsiveness verified
- [x] All console errors resolved
- [x] Production build successful

### Content Review
- [ ] All text content reviewed and approved
- [ ] Legal/compliance review completed
- [ ] Brand guidelines followed
- [ ] Contact information verified
- [ ] Links and CTAs verified
- [ ] Images optimized (WebP conversion pending)

### Technical Preparation
- [x] Production build tested locally
- [ ] Environment variables configured
- [ ] CDN/hosting provider selected
- [ ] Domain DNS configured
- [ ] SSL certificate ready
- [ ] Analytics tracking setup
- [ ] Error monitoring configured

---

## Environment Setup

### Required Environment Variables

Create `.env.production` file:

```bash
# Production Environment Variables
VITE_API_URL=https://api.evarest.io
VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
VITE_GTM_ID=GTM-XXXXXXX
VITE_ENVIRONMENT=production
```

### Build Configuration

**Production Build Command:**
```bash
npm run build
```

**Preview Production Build Locally:**
```bash
npm run preview
```

**Expected Output:**
```
dist/
├── index.html          (~0.46 KB)
├── assets/
│   ├── index-[hash].css  (~40 KB, 7 KB gzipped)
│   └── index-[hash].js   (~298 KB, 88 KB gzipped)
└── [image files]
```

---

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

#### Initial Setup:
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link
```

#### Deploy to Production:
```bash
# Deploy
vercel --prod

# Expected output:
# ✅ Production: https://evarest.com [deployed]
```

#### Configure Domain:
```bash
vercel domains add evarest.com
vercel domains add www.evarest.com
```

---

### Option 2: Deploy to Netlify

#### Using Netlify CLI:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

#### Using Git Integration:
1. Push code to GitHub
2. Connect repository in Netlify dashboard
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

---

### Option 3: Deploy to AWS S3 + CloudFront

#### Build and Upload:
```bash
# Build
npm run build

# Install AWS CLI
pip install awscli

# Configure AWS credentials
aws configure

# Upload to S3
aws s3 sync dist/ s3://evarest-landing-page --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id EXXXXXXXXXX \
  --paths "/*"
```

---

### Option 4: Traditional Hosting (cPanel, etc.)

#### Steps:
1. Build the project:
   ```bash
   npm run build
   ```

2. Upload `dist/` folder contents to server via FTP/SFTP

3. Configure `.htaccess` for SPA routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Verification & Testing

### Pre-Deployment Verification (Staging)

#### 1. Smoke Tests:
```bash
# Build and preview locally
npm run build
npm run preview

# Visit: http://localhost:4173
```

**Test Checklist:**
- [ ] Homepage loads correctly
- [ ] All sections render properly
- [ ] Navigation works
- [ ] All CTAs functional
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] No console errors

#### 2. Performance Check:
```bash
# Run Lighthouse audit
npx lighthouse http://localhost:4173 \
  --view \
  --output=html \
  --output-path=./lighthouse-report.html
```

**Target Scores:**
- Performance: 85+ (95+ with WebP)
- Accessibility: 100
- Best Practices: 100
- SEO: 95+

#### 3. Cross-Browser Testing:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS/iOS)
- [ ] Edge (latest)
- [ ] Chrome Mobile (Android)

---

### Post-Deployment Verification (Production)

#### 1. Immediate Checks (First 5 minutes):
```bash
# Check site is live
curl -I https://evarest.com

# Expected: HTTP/2 200
```

**Visual Verification:**
- [ ] Site loads at production URL
- [ ] SSL certificate valid (https)
- [ ] All images load
- [ ] No 404 errors
- [ ] Navigation functional
- [ ] Forms work
- [ ] Analytics tracking active

#### 2. Performance Monitoring:
- [ ] Run Lighthouse on production
- [ ] Check Core Web Vitals
- [ ] Monitor initial load time
- [ ] Check CDN cache status

#### 3. Functionality Testing:
- [ ] Test all CTAs
- [ ] Verify email links work
- [ ] Check social media links
- [ ] Test contact form submission
- [ ] Verify newsletter signup
- [ ] Check consultation booking

---

## Rollback Procedure

### Quick Rollback Steps:

#### Vercel:
```bash
# List deployments
vercel ls

# Rollback to previous deployment
vercel rollback [deployment-url]
```

#### Netlify:
```bash
# Rollback via dashboard
# Or use CLI
netlify rollback
```

#### S3 + CloudFront:
```bash
# Restore from backup
aws s3 sync s3://evarest-backup/dist/ s3://evarest-landing-page --delete

# Invalidate cache
aws cloudfront create-invalidation \
  --distribution-id EXXXXXXXXXX \
  --paths "/*"
```

#### Manual Hosting:
1. Have backup of previous `dist/` folder
2. Upload backup via FTP/SFTP
3. Clear server cache if applicable

---

## Post-Launch Monitoring

### First 24 Hours

#### 1. Error Monitoring:
- [ ] Check error logs every 2 hours
- [ ] Monitor console errors (Sentry/LogRocket)
- [ ] Review server error rate
- [ ] Check for broken links

#### 2. Analytics Monitoring:
- [ ] Page views tracking
- [ ] Bounce rate
- [ ] Average session duration
- [ ] Conversion tracking (CTAs)
- [ ] Geographic distribution

#### 3. Performance Monitoring:
- [ ] Core Web Vitals
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
- [ ] Server response time
- [ ] CDN cache hit ratio
- [ ] Error rate

#### 4. User Feedback:
- [ ] Monitor contact form submissions
- [ ] Check social media mentions
- [ ] Review any support tickets
- [ ] Collect stakeholder feedback

---

### First Week

#### Daily Checks:
- [ ] Review analytics dashboard
- [ ] Check error logs
- [ ] Monitor performance metrics
- [ ] Review user feedback
- [ ] Check conversion rates

#### Weekly Report Metrics:
- Total page views
- Unique visitors
- Bounce rate
- Average session duration
- Top traffic sources
- Conversion rate (CTAs)
- Performance scores
- Error rate

---

## Troubleshooting

### Common Issues & Solutions:

#### 1. Images Not Loading
**Symptom:** Broken image icons
**Solution:**
- Check image paths (should be `/image.jpg` not `./image.jpg`)
- Verify images are in `public/` folder
- Check CDN cache, invalidate if needed

#### 2. Routing Issues (404 on refresh)
**Symptom:** Page refreshes return 404
**Solution:**
- Configure server for SPA routing
- Add proper redirect rules (see hosting-specific sections)

#### 3. Slow Performance
**Symptom:** Poor Lighthouse scores
**Solution:**
- Convert images to WebP
- Enable compression on server
- Verify CDN caching
- Check bundle size

#### 4. Analytics Not Tracking
**Symptom:** No data in GA
**Solution:**
- Verify tracking ID in environment variables
- Check network tab for analytics requests
- Ensure ad blockers not interfering

---

## Emergency Contacts

### Key Personnel:
- **Technical Lead:** [Name] - [Email] - [Phone]
- **Product Owner:** [Name] - [Email] - [Phone]
- **DevOps/Infrastructure:** [Name] - [Email] - [Phone]

### Service Providers:
- **Hosting Support:** [Support URL/Email]
- **CDN Support:** [Support URL/Email]
- **Domain Registrar:** [Support URL/Email]

---

## Deployment Checklist Summary

### Pre-Deployment:
- [ ] Code review complete
- [ ] Content approved
- [ ] Legal review done
- [ ] Production build successful
- [ ] Environment variables set
- [ ] Backup created
- [ ] Rollback plan ready

### Deployment:
- [ ] Deploy to staging
- [ ] Staging verification passed
- [ ] Deploy to production
- [ ] DNS updated (if needed)
- [ ] CDN cache cleared
- [ ] SSL certificate verified

### Post-Deployment:
- [ ] Production verification complete
- [ ] Analytics tracking verified
- [ ] Error monitoring active
- [ ] Performance metrics baseline set
- [ ] Team notified of launch
- [ ] Monitoring dashboard active

---

## Success Criteria

### Launch Considered Successful When:
- ✅ Site loads at production URL
- ✅ SSL certificate valid
- ✅ All features functional
- ✅ Performance scores meet targets
- ✅ No critical errors in first 24 hours
- ✅ Analytics tracking properly
- ✅ Stakeholder sign-off received

---

*Deployment Guide - Version 1.0*
*Last Updated: Week 6 - Launch Phase*
