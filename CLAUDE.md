# CLAUDE.md - TSBO (Tobias Becker's Personal Site)

Personal website for Tobias Becker — SRE based in Stockholm. Portfolio/CV, blog, and contact page. Next.js + Tailwind CSS, statically generated from markdown.

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build — run after significant changes
npm run start    # Serve production build
```

## Stack

Next.js 11 (React 17), Tailwind CSS 3 + @tailwindcss/typography, FontAwesome icons, markdown blog via gray-matter + remark, date-fns.

## Key Files

- `tailwind.config.js` — colors (`bistre` #251605, `ash` #A8B7AB), typography plugin
- `components/layout.js` — master wrapper (Meta + Navbar + Container + Footer)
- `components/intro.js` — home page hero
- `components/Experiences.js` — CV/resume data
- `pages/index.js` — home: intro + featured post + experiences
- `pages/blog.js` — blog listing
- `pages/blog/posts/[slug].js` — blog post pages (SSG)
- `lib/api.js` — post data fetching from `_posts/`
- `styles/globals.css` — Tailwind directives + custom scroll snap utilities

## Conventions

- Components: lowercase filenames, default exports, Tailwind classes inline
- Pages: `getStaticProps` / `getStaticPaths` for static generation
- Blog posts in `_posts/`: require front matter (title, excerpt, coverImage, date, author with name + picture)
- No TypeScript, no ESLint, no next.config.js
- Prefer Tailwind utilities over custom CSS
- Mobile-first responsive design

## Design System

- **Colors**: bistre (dark brown, primary text), ash (muted green-gray, accent) — defined in tailwind.config.js
- **Typography**: h1=text-6xl/8xl, h2=text-2xl, h3=text-lg, p=text-sm, all headings bistre
- **Layout**: container max-w-4xl (lg) / max-w-lg (sm), CSS scroll snap sections
- **Responsive**: hamburger nav on mobile, 2-col grid on md+

## Working on This Site

- Edit Tailwind classes in components directly — avoid custom CSS unless necessary
- Update colors in `tailwind.config.js`, not in globals.css
- Test responsive at 375px, 768px, 1280px+
- Run `npm run build` after multi-file changes to catch SSG errors
- Blog posts go in `_posts/` as markdown; CV data in `components/Experiences.js`
- New pages: add in `pages/`, wrap in `<Layout>`, use `getStaticProps`
- This is a personal static site — keep it simple, ship fast, iterate visually

## Goals

1. Modernize visual design — cleaner layout, better typography, refined palette
2. Blog about projects and work — replace placeholder posts with real content
3. Polish CV/contact presentation
4. Consider upgrading Next.js + React to current versions
