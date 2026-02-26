# Shaked.dev — Portfolio

A premium single-page portfolio built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS v4**.

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — click **Deploy**. No config needed.

## How to Edit Content

All portfolio text lives in a single file:

```
src/content/siteData.ts
```

Edit the exported objects (`siteConfig`, `projects`, `experience`, etc.) and the site updates automatically. TypeScript types enforce the schema, so you'll get editor hints.

## How to Add a Project

1. Add your project image to `public/projects/` (e.g., `my-project.webp`).
2. Open `src/content/siteData.ts` and add an entry to the `projects` array:

```ts
{
  title: "My Project",
  summary: "One-line summary.",
  image: "/projects/my-project.webp",
  impactBullets: [
    "Reduced latency by 40%",
    "Deployed with zero-downtime CI/CD",
    "Handles 10K concurrent connections",
  ],
  tags: ["Node.js", "Redis", "Docker"],
  github: "https://github.com/you/my-project",
  liveDemo: "https://my-project.dev", // optional
}
```

3. Save — the card appears in the Projects section.

## File Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, dark-mode init
    page.tsx            # Single page assembling all sections
    globals.css         # Tailwind + CSS variables (light/dark)
  components/
    Navbar.tsx          # Sticky nav, dark toggle, social icons
    Hero.tsx            # Hero with badge, headline, CTA
    Section.tsx         # Reusable section wrapper
    Focus.tsx           # 4-card pillars grid
    Projects.tsx        # Featured projects section
    ProjectCard.tsx     # Individual project card
    Experience.tsx      # Work timeline + education
    Skills.tsx          # Skill pills by category
    Contact.tsx         # Contact info + form UI
    Footer.tsx          # Footer
  content/
    siteData.ts         # ← ALL content lives here
public/
  profile.webp          # Profile photo
  projects/             # Project screenshots
```

## Dark Mode

Toggles via navbar button. Persisted in `localStorage`. Falls back to system preference on first visit.
