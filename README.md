# Sivaprakash Wealth — Next.js Website

Modern Next.js 16 rewrite of the SivaprakashWealth insurance consulting site.

## Tech Stack

- **Framework:** Next.js 16 App Router (TypeScript)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **Carousel:** Embla Carousel
- **Counters:** react-countup
- **Contact form:** React Hook Form + Zod + Resend
- **Blog CMS:** Sanity.io
- **Deployment:** Vercel

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.local.example .env.local
# Edit .env.local with your Resend API key and Sanity project ID

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.local.example` for all required variables.

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | From [resend.com](https://resend.com) — enables contact form emails |
| `CONTACT_EMAIL` | Where form submissions are delivered |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | From [sanity.io/manage](https://sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID |

## Setting Up the Blog (Sanity)

```bash
# Create a new Sanity project (run once)
npm create sanity@latest

# Note your Project ID, then update NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local

# The schema is in sanity/schema/post.ts — copy it into your Sanity studio
```

Blog posts automatically appear at `/blog` and `/blog/[slug]` once published.

## Setting Up Contact Form (Resend)

1. Create a free account at [resend.com](https://resend.com)
2. Add and verify your domain (sivaprakashwealth.in)
3. Create an API key → paste into `RESEND_API_KEY` in `.env.local`
4. Update `from:` email in `app/api/contact/route.ts` to match your verified domain

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard → Settings → Environment Variables
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, about, testimonials, blog preview |
| `/about` | About C. Sivaprakash, stats, features |
| `/services` | Full services listing |
| `/faq` | FAQ accordion |
| `/contact` | Contact form + Google Maps |
| `/blog` | Blog listing (from Sanity or placeholder cards) |
| `/blog/[slug]` | Individual blog post |
