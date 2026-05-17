---
name: sivaprakash-wealth
description: Project context for the Sivaprakash Wealth website — a LIC and general insurance consulting site for a Chennai-based advisor, built with Next.js 16 App Router, Tailwind CSS v4, Sanity CMS, Resend email, and deployed on Vercel. Use when editing any page, component, API route, styling, content, SEO, analytics, or CMS configuration in this project.
---

# Sivaprakash Wealth — Project Context

## What This Is

A **Next.js 16 App Router** marketing/brochure site for **Sivaprakash Wealth**, a Chennai-based LIC and general insurance advisor. Migrated from a static Bootstrap/HTML site. Blog is CMS-driven via Sanity; contact form sends email via Resend; analytics via Google Analytics 4.

**Production URL:** `https://sivaprakashwealth.in`

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js **16.2.6** — App Router, Server Components |
| Language | TypeScript 5 |
| Styling | **Tailwind CSS v4** (`@tailwindcss/postcss`), shadcn/Base UI tokens, OKLCH design tokens in `globals.css` |
| UI primitives | `@base-ui/react` (accordion, button), shadcn-style setup via `components.json` |
| Icons | `lucide-react` |
| Animation | `framer-motion`, `tw-animate-css` |
| Carousel | `embla-carousel-react` + `embla-carousel-autoplay` |
| Counters | `react-countup` + `react-intersection-observer` |
| CMS | **Sanity** (`@sanity/client`, `next-sanity`, `@portabletext/react`) |
| Forms | `react-hook-form` + `zod` + `@hookform/resolvers` |
| Email | **Resend** |
| Fonts | `next/font/google` — DM Sans (`--font-sans`), Inter (`--font-inter`) |
| Analytics | Google Analytics 4 (`NEXT_PUBLIC_GA_ID`) |
| Deployment | Vercel (no `vercel.json`; default Next.js detection) |

## App Router — Routes

| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Home — assembles home section components |
| `/about` | `app/about/page.tsx` | About page |
| `/services` | `app/services/page.tsx` | Services; content defined inline as arrays |
| `/faq` | `app/faq/page.tsx` | FAQ; content defined inline; uses `accordion.tsx` |
| `/blog` | `app/blog/page.tsx` | Blog listing from Sanity (falls back to placeholders) |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Dynamic post via Sanity; `generateStaticParams()` |
| `/contact` | `app/contact/page.tsx` | Contact form |
| `POST /api/contact` | `app/api/contact/route.ts` | Sends email via Resend |
| `sitemap.xml` | `app/sitemap.ts` | Static routes + Sanity blog slugs |
| `robots.txt` | `app/robots.ts` | Allow all, points to sitemap |
| 404 | `app/not-found.tsx` | Custom not-found page |

Legacy `.html` URLs (e.g. `/about.html`) are **permanently redirected** in `next.config.ts`.

## Component Structure

```
components/
├── layout/
│   ├── Navbar.tsx        # Client — mobile menu, scroll state
│   └── Footer.tsx
├── home/                 # Home page sections
│   ├── Hero.tsx          # Client — Embla carousel + autoplay, next/image
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── PlansGuide.tsx
│   ├── StatsCounter.tsx  # react-countup + intersection observer
│   ├── Testimonials.tsx
│   ├── TeamSection.tsx
│   ├── WhyChooseUs.tsx
│   ├── OurPromise.tsx
│   └── BlogPreview.tsx
├── blog/
│   └── BlogCard.tsx      # Sanity post card
├── shared/
│   ├── ContactForm.tsx   # Client — RHF + Zod, posts to /api/contact
│   ├── PageHeader.tsx    # Reusable page title block
│   └── WhatsAppButton.tsx # Fixed WhatsApp CTA (wa.me)
└── ui/
    ├── accordion.tsx     # @base-ui/react accordion (used in FAQ)
    └── button.tsx        # @base-ui/react button
```

## Sanity CMS (Blog)

- **Client + helpers:** `lib/sanity.ts` — exports `client`, `urlFor`, `Post` type, `getAllPosts`, `getPostBySlug`, `getAllPostSlugs`
- **Revalidation:** `next: { revalidate: 3600 }` (1 hour ISR)
- **Schema:** `sanity/schema/post.ts` — fields: `title`, `slug`, `publishedAt`, `author`, `category`, `excerpt`, `coverImage`, `body` (Portable Text)
- **Images:** served from `cdn.sanity.io` (allowed in `next.config.ts` `remotePatterns`)

## Contact / Email

- Form in `ContactForm.tsx` → `POST /api/contact/route.ts` → **Resend** API
- Env var: `RESEND_API_KEY`

## SEO

- **Root metadata** in `app/layout.tsx`: title template, description, keywords, Open Graph (url, siteName, image)
- **Blog posts**: `generateMetadata` from Sanity (uses post title, excerpt, cover image)
- **Sitemap** at `app/sitemap.ts`: static routes + Sanity slugs; base URL `https://sivaprakashwealth.in`
- **Robots** at `app/robots.ts`: allow all
- About / Services / FAQ / Contact pages inherit root metadata (no page-level overrides yet)

## Environment Variables

See `.env.local.example` for all required vars:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `RESEND_API_KEY` | Resend email API key |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (e.g. `production`) |

GA script is **skipped** if `NEXT_PUBLIC_GA_ID` is missing or equals the placeholder.

## Styling Notes

- Tailwind v4 — **no `tailwind.config.ts`**; configured entirely via CSS (`@import "tailwindcss"` in `globals.css`)
- Design tokens in `globals.css` as OKLCH CSS variables (`:root` and `.dark`)
- `cn()` utility in `lib/utils.ts` (`clsx` + `tailwind-merge`)
- Fonts loaded via `next/font/google` in `layout.tsx`; applied as CSS variables

## Known Gaps

| Gap | Notes |
|-----|-------|
| **`public/img/`** | Many components reference `/img/carousel-*.png`, `/img/favicon.png`, etc. but the `img/` folder is **not committed**. Must exist in deployment or be added to `public/`. |
| **Page-level SEO** | About, Services, FAQ, Contact pages have no local `metadata` exports — they use root defaults |
| **Twitter card metadata** | Not defined; OG tags are set but `twitter:` fields are missing |
| **README.md** | Not fully updated for the Next.js stack |

## Brand Details

- **Business:** Sivaprakash Wealth
- **Location:** Chennai, India
- **Services:** LIC policies, health/motor/term insurance, investment planning
- **Primary colour:** `#015FC9`
- **Contact:** Phone, WhatsApp (`wa.me`), Email
- **Currency:** Indian Rupee (₹)
