# Portfolio — Gourang Patidar

Personal portfolio + blog for Gourang Patidar, AI/ML Engineer.
Live: https://gourangpatidar.com

## Goals
1. Showcase 5–6 AI/ML projects with detailed case studies
2. Distinctive warm-palette identity (stand out from dark/neon AI portfolios)
3. Grow audience via blog + newsletter (resources platform later)

## Tech Stack
- **Framework:** Next.js 14+ (App Router, TypeScript, `src/` dir)
- **Styling:** Tailwind CSS + custom color tokens (cream/mustard/navy)
- **UI primitives:** shadcn/ui (button, input, textarea, card, dialog)
- **Typography:** Inter via `next/font/google` — weights 400 / 700 / 800
- **Blog:** MDX via `next-mdx-remote` + `gray-matter`
- **Forms:** `react-hook-form` + `zod`
- **Email:** Resend (contact + newsletter)
- **Animation:** `framer-motion`
- **Icons:** `lucide-react`
- **Analytics:** `@vercel/analytics`
- **Deploy:** Vercel + custom domain (gourangpatidar.com)

## Site Structure (Hybrid)
- `/`                   → Homepage scroll: Hero · About · Skills · Featured Projects · Stats · Blog teaser · Contact
- `/projects`           → Full project grid (5–6 projects)
- `/projects/[slug]`    → Case study (problem · approach · tech · outcome)
- `/blog`               → Blog index, newest first
- `/blog/[slug]`        → MDX post

## Design System

### Color Tokens (approximate from inspiration JPEG; tune in code)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F5EDE0` | Cream — page background |
| `--ink` | `#1F2D4F` | Deep navy — body + headings |
| `--ink-deep` | `#1A2438` | Darker navy — footer |
| `--brand` | `#F0B040` | Mustard — primary CTAs, accent |
| `--mint` | `#B8DDD9` | Skills card section accent |
| `--peach` | `#F4BFA5` | Newsletter/Contact section accent |
| `--soft-yellow` | `#F4D86F` | Hover / secondary accent |

**Restraint rule:** cream + navy + mustard are the *primary* identity (used everywhere). Mint / peach / soft-yellow appear in **1–2 sections max** — never on every section. Otherwise the site reads "agency template" instead of "engineer".

### Typography (ShipFast-style)
- **Headlines:** Inter weight **800**, `clamp(48px, 8vw, 88px)`, tracking `-0.02em`
- **Body:** Inter weight **400**, 16–18px, line-height **1.6**
- **CTAs:** Inter weight **700**, occasionally UPPERCASE
- Optional accent: an *italic* phrase in the tagline for emphasis

### Section-by-Section Color Plan
| # | Section | Background |
|---|---|---|
| 1 | Nav | cream (transparent over hero) — floating pill, navy text, mustard CTA |
| 2 | Hero | cream — text left, photo right, mustard/peach decorative shapes |
| 3 | About | cream |
| 4 | Skills | mint card on cream |
| 5 | Featured Projects | cream (cards may use peach/soft-yellow accents) |
| 6 | Stats | mustard |
| 7 | Blog teaser | cream |
| 8 | Newsletter + Contact | peach |
| 9 | Footer | `--ink-deep` dark navy |

## Development
```bash
npm run dev        # localhost:3000
npm run build      # production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Content Workflow

### Blog post
File: `src/content/posts/{slug}.mdx`

```yaml
---
title: "Post title"
summary: "One-line summary"
date: "2026-04-23"
tags: ["llm", "rag"]
cover: "/images/posts/{slug}.jpg"  # optional
---
```

### Project case study
File: `src/content/projects/{slug}.mdx`

```yaml
---
title: "Project title"
summary: "One-line description"
tags: ["python", "langchain"]
cover: "/images/projects/{slug}.jpg"
github: "https://github.com/..."   # optional
live: "https://..."                # optional
featured: true                     # show on homepage
problem: "What problem this solves"
approach: "How you approached it"
tech: ["Python", "LangChain", "FastAPI"]
outcome: "Measurable result or learnings"
---
```

## Environment Variables
Create `.env.local` (never commit):
```
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=https://gourangpatidar.com
```

## Roadmap
- [ ] **V1 (now):** Hero, About, Skills, Projects (grid + case studies), Blog, Contact, Newsletter
- [ ] **V2:** Resources page, dark/light toggle, RSS feed, OG image generation, testimonials
- [ ] **V3:** Newsletter automation (Resend Audiences), search, project tag filters

## Conventions for Future Claude Sessions
- Keep the **restraint rule** in mind when styling new sections — don't add new pastel backgrounds to every block
- Headlines must use Inter 800 + tight tracking — don't drop to lighter weights
- All new sections should respect the cream/navy/mustard primary identity
- When adding projects, write them as MDX in `src/content/projects/`
- When adding blog posts, write them as MDX in `src/content/posts/`
- Forms always go through `/api/*` routes using Resend — don't add a second email provider
