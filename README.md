# Shekhar Suman — Portfolio

Single-page portfolio for **Shekhar Suman** — machine learning engineer, computer vision and NLP focus, and Indian Air Force veteran. Built with Next.js and Tailwind CSS. All résumé-style content lives in one TypeScript module so you can refresh copy and links without editing section components.

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI:** React 19, [Tailwind CSS 4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) primitives, [lucide-react](https://lucide.dev/) icons
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) (via `next/font`)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics) (production only)

## Getting started

**Prerequisites:** Node.js 20+ and npm (or pnpm / yarn).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                 |
| --------------- | --------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Production build            |
| `npm run start` | Run the production server   |
| `npm run lint`  | ESLint (install the `eslint` package if the command is missing) |

## Project structure

```text
app/
  layout.tsx          # Root layout, metadata, fonts, analytics
  page.tsx            # Entry: renders HomePage
  globals.css         # Global styles / theme tokens

components/
  portfolio/          # Sections and page composition
    home-page.tsx     # Composes header, sections, footer
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
  ui/                 # Buttons, form fields, label, separator

hooks/
  use-section-reveal.ts   # Intersection-observer reveal for sections

lib/
  portfolio/
    site-data.ts      # Nav, profile, skills, jobs, projects, education, certs
  scroll.ts           # Smooth scroll helpers
  utils.ts            # `cn()` for class names

public/               # Static assets (e.g. profile photo referenced in site-data)
next.config.mjs
postcss.config.mjs
tsconfig.json
```

## Customizing content

Edit **`lib/portfolio/site-data.ts`**:

- `siteNav` — header anchors (`#about`, `#skills`, …)
- `siteProfile` — name, role, email, `linkedinUrl` / `linkedinHandle`, `githubUrl`, location, hero and about copy, `aboutImageSrc`
- `aboutStats`, `skillCategories`, `experiences`, `featuredProjects`, `education`, `certifications`
- `sectionCopy` — section titles and subtitles

**GitHub:** Replace the placeholder `siteProfile.githubUrl` with your profile URL when ready.

**Images:** Place files under `public/` and set `aboutImageSrc` to a path such as `/Shekhar.png`. With `images.unoptimized: true` in `next.config.mjs`, remote URLs work without extra hostname configuration; for optimized remote images, add `images.remotePatterns` in `next.config.mjs`.

**SEO:** Update `metadata` in `app/layout.tsx`.

**LinkedIn sync:** Public profile details were last aligned to [linkedin.com/in/shekhar-suman-a5978833](https://www.linkedin.com/in/shekhar-suman-a5978833); re-run a manual pass in `site-data.ts` when your LinkedIn changes.

## Deployment

Deploy on [Vercel](https://vercel.com/) by connecting the repository, or run `npm run build` and follow your host’s Next.js deployment guide.

## License

Private / personal use unless you add an explicit license.
