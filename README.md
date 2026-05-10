# Shekhar Suman — Portfolio

Single-page portfolio for **Shekhar Suman** — machine learning engineer, computer vision and NLP focus, and Indian Air Force veteran. Built with Next.js and Tailwind CSS. All résumé-style content lives in one TypeScript module so you can refresh copy and links without editing section components.

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI:** React 19, [Tailwind CSS 4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) primitives, [lucide-react](https://lucide.dev/) icons
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) (via `next/font`)
- **Theme:** Light/dark mode with a header toggle; preference is stored in `localStorage` (`portfolio-theme`) and applied before paint to avoid flash
- **Contact:** Server route proxies submissions to [Web3Forms](https://web3forms.com/) when configured; otherwise the UI falls back to a `mailto` flow
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics) (production only)

## Getting started

**Prerequisites:** Node.js 20+ and npm (or pnpm / yarn).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

For the contact form to send email in-app (no mail client), set a Web3Forms access key:

1. Copy `.env.example` to `.env.local` (same folder as `package.json`).
2. Add your key from [web3forms.com](https://web3forms.com) as `WEB3FORMS_ACCESS_KEY`.

If the key is unset, the API still responds successfully and the client can use the email link instead.

### Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start the development server   |
| `npm run build` | Production build               |
| `npm run start` | Run the production server      |
| `npm run lint`  | ESLint (`eslint` not bundled — add it and a config if you want this script to run) |

## Project structure

```text
app/
  layout.tsx              # Root layout, metadata, fonts, theme init script, analytics
  page.tsx                # Entry: renders HomePage
  globals.css             # Global styles / theme tokens
  api/contact/route.ts    # POST: validates body, forwards to Web3Forms or mailto fallback

components/
  portfolio/              # Sections and page composition
    home-page.tsx         # Composes header, sections, footer
    header.tsx            # Nav, scroll spy, theme toggle
    hero.tsx
    about.tsx
    skills.tsx
    experience.tsx
    projects.tsx
    education.tsx
    contact.tsx           # Form → /api/contact
    footer.tsx
    social-icon-links.tsx
  theme-toggle.tsx        # Light / dark control
  ui/                     # Buttons, inputs, textarea, field, label, separator

hooks/
  use-section-reveal.ts   # Intersection-observer reveal for sections

lib/
  portfolio/
    site-data.ts          # Nav, profile, skills, jobs, projects, education, certs
  theme.ts                # Theme persistence helpers
  scroll.ts               # Smooth scroll helpers
  utils.ts                # `cn()` for class names

public/                   # Static assets (e.g. profile photo referenced in site-data)
next.config.mjs
postcss.config.mjs
tsconfig.json
.env.example
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

Deploy on [Vercel](https://vercel.com/) by connecting the repository. Add `WEB3FORMS_ACCESS_KEY` in the project’s environment variables if you use the contact form. Alternatively run `npm run build` and follow your host’s Next.js deployment guide.

## License

Private / personal use unless you add an explicit license.
