# Shekhar Suman — Portfolio

A single-page portfolio site for an AI and machine learning engineer, built with Next.js, React, and Tailwind CSS. Content is centralized so you can update copy, links, and résumé data in one place without touching layout components.

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI:** React 19, [Tailwind CSS 4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) primitives, [lucide-react](https://lucide.dev/) icons
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) (via `next/font`)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics) (production only)

## Getting started

Prerequisites: Node.js 20+ and your preferred package manager (`npm`, `pnpm`, or `yarn`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

### Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start the dev server     |
| `npm run build` | Production build       |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint (if configured) |

## Project structure

```text
app/
  layout.tsx          # Root layout, metadata, fonts, analytics
  page.tsx            # Entry: renders HomePage
  globals.css         # Global styles / theme tokens

components/
  portfolio/          # Site-specific sections and composition
    home-page.tsx     # Composes Header, main sections, Footer
    header.tsx        # Nav + scroll spy
    hero.tsx
    about.tsx
    skills.tsx
    experience.tsx
    projects.tsx
    education.tsx
    contact.tsx
    footer.tsx
    social-icon-links.tsx
  ui/                 # Minimal primitives used by the contact form and buttons

hooks/
  use-section-reveal.ts   # Intersection-observer “fade in” for sections

lib/
  portfolio/
    site-data.ts      # Nav, profile, skills, jobs, projects, education (edit here)
  scroll.ts           # Smooth scroll helpers
  utils.ts            # `cn()` for class names

next.config.mjs
tsconfig.json
```

## Customizing content

Most text and structured résumé data live in **`lib/portfolio/site-data.ts`**:

- `siteNav` — header links and section IDs (`#about`, `#skills`, …)
- `siteProfile` — name, role, email, social URLs, hero tagline, about copy, image URL
- `aboutStats`, `skillCategories`, `experiences`, `featuredProjects`, `education`, `certifications`
- `sectionCopy` — section titles and subtitles

**Social links:** Set `siteProfile.githubUrl` to your real GitHub profile (the template may still point at a generic URL).

**Images:** The about photo uses `siteProfile.aboutImageSrc`. With `images.unoptimized: true` in `next.config.mjs`, remote URLs work without extra hostname configuration; for optimized images, configure `images.remotePatterns` and adjust as needed.

**SEO:** Edit `metadata` in `app/layout.tsx`.

## Deployment

The app is a static-friendly Next.js site. Deploy on [Vercel](https://vercel.com/) by connecting the repository, or run `npm run build` and host the output per your platform’s Next.js guide.

## License

Private / personal use unless you add an explicit license.
