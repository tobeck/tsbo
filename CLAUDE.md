# CLAUDE.md - TSBO (Tobias Becker's Personal Site)

Personal website for Tobias Becker — SRE based in Stockholm. Single-page scrolling portfolio with a subtle retro gaming aesthetic (CRT-inspired dark theme, pixel fonts, scanline overlay). Blog and contact section. Next.js + Tailwind CSS, statically generated from markdown.

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build — run after significant changes
npm run start    # Serve production build
```

## Stack

Next.js 15 (React 19), Tailwind CSS 3 + @tailwindcss/typography, FontAwesome icons, markdown blog via gray-matter + remark, date-fns.

## Key Files

- `tailwind.config.js` — retro color palette, pixel/mono fonts, glow shadows, blink animation
- `styles/globals.css` — Google Font imports, dark base styles, scanline overlay, glow utilities
- `components/layout.js` — master wrapper (Meta + DotNav + main + Footer), accepts `showDotNav` prop
- `components/dot-nav.js` — fixed dot navigation (right side), IntersectionObserver for active section
- `components/intro.js` — hero section (full viewport, blinking cursor, social links, CTA buttons)
- `components/Experiences.js` — CV/resume data with color-coded borders and game-tag badges
- `components/footer.js` — contact section with social links and copyright
- `pages/index.js` — single-page scroll: hero → experience → blog highlights → contact
- `pages/blog.js` — blog listing with back link
- `pages/blog/posts/[slug].js` — blog post pages (SSG)
- `lib/api.js` — post data fetching from `_posts/`

## Conventions

- Components: lowercase filenames, default exports, Tailwind classes inline
- Pages: `getStaticProps` / `getStaticPaths` for static generation
- Blog posts in `_posts/`: require front matter (title, excerpt, coverImage, date, author with name + picture)
- No TypeScript, no ESLint, no next.config.js
- Prefer Tailwind utilities over custom CSS
- Mobile-first responsive design

## Design System — Retro Gaming Aesthetic

The site uses a subtle retro gaming / CRT monitor aesthetic. Keep this consistent across all components and new features.

### Color Palette (defined in tailwind.config.js)
- `midnight: #0D1117` — dark background (near-black with blue tint)
- `terminal: #1A1F2B` — slightly lighter panels/cards
- `phosphor: #00FF88` — primary accent (green CRT phosphor glow)
- `amber: #FFAA00` — secondary accent (amber monitor)
- `cyan: #00D4FF` — tertiary accent (retro cyan)
- `ghost: #8B949E` — muted/secondary text
- `smoke: #C9D1D9` — body text on dark bg
- `white: #F0F6FC` — headings on dark bg

### Fonts
- **Headings**: `font-pixel` — "Press Start 2P" (pixel font, use at small sizes like text-xs/text-sm)
- **Body/UI**: `font-mono` — "JetBrains Mono" (clean monospace, default body font)

### Visual Effects
- **Scanline overlay**: Faint repeating 2px lines over body (opacity ~0.03) — in globals.css
- **Glow text**: `.glow-text` / `.glow-text-amber` utilities for text-shadow
- **Glow shadows**: `shadow-glow-green` / `shadow-glow-amber` for box-shadow on hover
- **Pixel borders**: 2px solid borders on cards/sections (no rounded corners, no shadows)
- **Blinking cursor**: `animate-blink` on hero tagline underscore
- **Hover effects**: Border color change + glow shadow on interactive elements

### Layout
- Single-page scroll on home with anchored sections (hero, experience, blog, contact)
- Dot navigation fixed right side, hidden on mobile (`hidden md:flex`)
- Container: max-w-4xl (lg) / max-w-lg (sm)
- No traditional navbar — navigation via dot nav and back links on sub-pages

### Styling Patterns
- Cards: `bg-terminal border-2 border-ghost hover:border-phosphor hover:shadow-glow-green`
- CTA buttons: `border-2 border-phosphor text-phosphor hover:bg-phosphor hover:text-midnight`
- Links: `text-phosphor hover:underline` (or hover:text-phosphor on ghost-colored links)
- Tech tags: `border border-phosphor text-phosphor font-mono text-xs px-2 py-1` (use phosphor/amber/cyan for variety)
- Section headings: `font-pixel glow-text text-phosphor`
- Back links: `text-phosphor font-mono text-sm hover:underline` with ← arrow

## Working on This Site

- Edit Tailwind classes in components directly — avoid custom CSS unless necessary
- Update colors in `tailwind.config.js`, not in globals.css
- Maintain the retro gaming aesthetic: dark backgrounds, pixel borders, glow effects, monospace text
- New components should use the card/button/link patterns above
- Test responsive at 375px, 768px, 1280px+
- Run `npm run build` after multi-file changes to catch SSG errors
- Blog posts go in `_posts/` as markdown; CV data in `components/Experiences.js`
- New pages: add in `pages/`, wrap in `<Layout>`, use `getStaticProps`, add "← Home" back link
- This is a personal static site — keep it simple, ship fast, iterate visually

## Goals

1. ~~Modernize visual design~~ — Done: retro gaming CRT aesthetic implemented
2. Blog about projects and work — replace placeholder posts with real content
3. ~~Polish CV/contact presentation~~ — Done: single-page scroll with contact section
4. ~~Consider upgrading Next.js + React to current versions~~ — Done: Next.js 15, React 19
