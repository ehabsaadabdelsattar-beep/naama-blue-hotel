# Naama Blue Hotel - Vercel Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git repository initialized
- Vercel account

## Local Setup

```bash
npm install
npm run build
npx vite preview
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

This project uses **TanStack Start + Nitro** (not a plain static `dist/` folder).

- **Build Command**: `npm run build`
- **Output Directory**: leave empty (Vercel uses `.vercel/output` from Nitro automatically)
- **Install Command**: `npm ci`

Do **not** set Output Directory to `dist` in the Vercel dashboard — that deploys SSR HTML without CSS/JS.

## Deployment Status

After deployment, you'll get:
- Production URL
- Git integrations for auto-deployments on push

## Troubleshooting

### Site shows plain HTML (no CSS, broken images)

Cause: Vercel was serving the wrong folder (`dist`) instead of the Nitro build (`.vercel/output`).

Fix:

1. Use build command `npm run build` (see `vercel.json`)
2. In Vercel → Project → Settings → Build & Development → **clear** “Output Directory” if it says `dist`
3. Redeploy

### Other deployment failures

1. Check build logs in Vercel Dashboard
2. Verify `package.json` scripts are correct
3. Ensure all environment variables are set
4. Check Node.js version compatibility

## Production Optimization

- CSS and JavaScript are minified
- Image optimization is automatic
- Edge caching enabled by default
- ISR (Incremental Static Regeneration) ready
