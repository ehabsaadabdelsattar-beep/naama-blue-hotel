#!/bin/bash

# Naama Blue Hotel - Deployment Checklist

## Pre-Deployment Checklist ✓

### 1. Code Quality
- [ ] Run `npm run lint` - check for linting errors
- [ ] Run `npm run format` - format code with Prettier
- [ ] No console errors or warnings in development
- [ ] All TypeScript types are correct

### 2. Environment Setup
- [ ] `.env.example` file is up to date
- [ ] All required environment variables are listed
- [ ] No sensitive data in code
- [ ] Production URLs are correct

### 3. Build Verification
- [ ] Run `npm run build` - verify successful build
- [ ] Check `dist/` folder exists and contains files
- [ ] Run `npm run preview` - test production build locally
- [ ] No broken links or 404 errors in preview

### 4. SEO & Meta Tags
- [ ] All pages have proper meta tags
- [ ] Open Graph tags are set
- [ ] robots.txt is configured
- [ ] Sitemap.xml is generated

### 5. Performance
- [ ] Images are optimized
- [ ] CSS and JS are minified
- [ ] No unused dependencies
- [ ] Bundle size is acceptable

### 6. Git Repository
- [ ] All changes committed
- [ ] No uncommitted changes
- [ ] `.gitignore` is correct
- [ ] `README.md` is updated

## Deployment Steps

### Via Vercel Dashboard

```bash
# 1. Push code to GitHub
git add .
git commit -m "Prepare for production deployment"
git push origin main

# 2. Go to https://vercel.com
# 3. Click "New Project"
# 4. Select your GitHub repository
# 5. Configure environment variables in Vercel Dashboard
# 6. Click "Deploy"
```

### Via Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy
vercel --prod

# 4. Choose your settings when prompted
```

## Post-Deployment

### Testing
- [ ] Visit production URL
- [ ] Test all navigation links
- [ ] Test contact forms
- [ ] Check image loading
- [ ] Test on mobile devices
- [ ] Check SEO meta tags

### Monitoring
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Monitor performance metrics
- [ ] Check server logs regularly
- [ ] Set up uptime monitoring

### Maintenance
- [ ] Keep dependencies updated
- [ ] Monitor security vulnerabilities
- [ ] Regular backups if needed
- [ ] Review and update content regularly

## Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Check linting
npm run format           # Format code

# Deployment
vercel --prod            # Deploy via CLI
vercel env ls            # List environment variables
vercel logs              # View deployment logs
```

## Troubleshooting

### Build Fails
1. Check Node.js version: `node --version` (should be 18+)
2. Clear cache: `npm ci` instead of `npm install`
3. Check for console errors: `npm run build`
4. Verify all imports are correct

### Deployment Fails
1. Check Vercel logs in dashboard
2. Verify environment variables are set
3. Ensure build command is correct
4. Check `.vercelignore` file

### Performance Issues
1. Analyze bundle size: `npm run build`
2. Check image optimization
3. Review Core Web Vitals in Vercel Analytics
4. Consider code splitting

## Support

For issues or questions:
- Email: fo@naamabluehotel.com
- Phone: +20 69-360-1012
- GitHub Issues: [Add your repo link]
