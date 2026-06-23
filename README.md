# Brandforge

A premium marketing website for a two-in-one digital studio: a **Build** engine (websites, ERP &
management systems, AI automation) and a **Grow** engine (performance marketing, social media).
One brand, two studios — designed to sell each separately and as combined packages.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (custom dual-accent dark design system)
- Lightweight CSS + IntersectionObserver scroll animations
- Fully static / SSG, SEO-ready (sitemap, robots, JSON-LD, per-page metadata)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  app/                  Routes (home, build, grow, services/[slug],
                        solutions/[slug], packages, work, about, contact, …)
  components/           UI, layout, home sections, hub, contact form
  lib/                  Site config, content, design-accent helpers
docs/
  content-plan.md       Full page-by-page content & copy plan
```

## Customising

Most brand-level content (name, contact details, services, industries, packages, nav)
lives in [`src/lib/site.ts`](src/lib/site.ts) — edit it in one place to update the whole site.

## Notes

- The contact form opens the visitor's email client by default. To collect submissions
  automatically, wire `src/components/contact/ContactForm.tsx` to an endpoint
  (e.g. Resend or Formspree).
