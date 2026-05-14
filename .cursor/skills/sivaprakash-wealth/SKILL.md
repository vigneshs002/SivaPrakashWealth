---
name: sivaprakash-wealth
description: Project context for the Sivaprakash Wealth static brochure site — a LIC and general insurance consulting website for a Chennai-based advisor. Use when editing any HTML, CSS, SCSS, or JS in this project, updating content, fixing layouts, adding pages, wiring the contact form, or running the patch script.
---

# Sivaprakash Wealth — Project Context

## What This Is

A **static multi-page brochure website** for **Sivaprakash Wealth**, a Chennai-based LIC and general insurance advisor. No backend, no build pipeline, no package manager. Built from the **LifeSure** Bootstrap 5 template (ThemeWagon/HTML Codex) and customized for this brand.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, services overview, counters, testimonials |
| `about.html` | About the advisor |
| `service.html` | Services detail |
| `blog.html` | Blog/articles listing |
| `FAQ.html` | Frequently asked questions |
| `contact.html` | Contact form + WhatsApp/phone/email links |

All pages share the same navbar and footer markup. **Edit them consistently across all pages** when touching navigation or footer.

## Tech Stack

- **HTML5** — static pages, no templating engine
- **Bootstrap 5** — layout and components (local compiled CSS at `css/bootstrap.min.css`; Bootstrap JS bundle from CDN)
- **SCSS** — theme tokens in `scss/bootstrap.scss` (primary colour `#015FC9`, fonts: DM Sans, Inter); compiled to `css/style.css`
- **jQuery 3.6.4** (CDN) + plugins in `lib/`: Owl Carousel, CounterUp, WOW.js, Waypoints, Lightbox, easing, Animate.css
- **`js/main.js`** — spinner, sticky nav, carousels, CounterUp init, back-to-top
- **Font Awesome 5.15.4** + Bootstrap Icons (CDN)
- **Python 3** — `tools/patch_html.py` for bulk regex-based edits across all HTML files

## Making Content Changes

### Single-page edits
Edit the HTML directly. Bootstrap utility classes and template components are used throughout.

### Bulk cross-page changes
Use `tools/patch_html.py` — it applies regex replacements across all HTML files. Add a new entry to its patch list rather than manually editing each page.

```bash
python3 tools/patch_html.py
```

### Styling
- Change **theme colours/fonts** → edit `scss/bootstrap.scss`, then recompile to regenerate `css/style.css`
- Quick custom tweaks → edit `css/style.css` directly

## Known Gaps / Things to Wire Up

| Gap | Notes |
|-----|-------|
| **Contact form** | Presentational only — no `action`/`method` on `<form>`. Wire to Formspree, Netlify Forms, or a serverless endpoint when ready. |
| **Images** | `img/` folder may be missing assets (not committed). Ensure `img/blog-*.png`, `img/contact-img.png`, etc. exist before deploying. |
| **README.md** | Still describes the upstream LifeSure template. Update it to reflect Sivaprakash Wealth. |

## Brand Details

- **Business name:** Sivaprakash Wealth
- **Location:** Chennai, India
- **Services:** LIC policies, general insurance (health, motor, term, investment)
- **Primary colour:** `#015FC9`
- **Contact channels:** Phone, WhatsApp, Email (all in HTML; no backend required)
- **Currency:** Indian Rupee (₹)
