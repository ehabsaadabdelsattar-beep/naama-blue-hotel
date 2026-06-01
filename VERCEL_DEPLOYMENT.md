# Naama Blue Hotel - Vercel Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git repository initialized
- Vercel account

## Local Setup

```bash
npm install
npm run build
npm run preview
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Click "New Project"
4. Import your Git repository
5. Vercel will automatically detect the configuration from `vercel.json`
6. Click "Deploy"

## Environment Variables

Configure these in Vercel Dashboard → Project Settings → Environment Variables:

```
VITE_API_URL=https://your-api-url.com
```

## Build Settings

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm ci`

## Deployment Status

After deployment, you'll get:
- Production URL
- Git integrations for auto-deployments on push

## Troubleshooting

If deployment fails:

1. Check build logs in Vercel Dashboard
2. Verify `package.json` scripts are correct
3. Ensure all environment variables are set
4. Check Node.js version compatibility

## Production Optimization

- CSS and JavaScript are minified
- Image optimization is automatic
- Edge caching enabled by default
- ISR (Incremental Static Regeneration) ready
