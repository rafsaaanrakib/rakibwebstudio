# Rakib Web Studio — v2

Next.js 14 + Tailwind CSS + Framer Motion + cobe (WebGL globe).
Fully static (SSG, `output: "export"` friendly) — no database, no server
functions, no hosted video — built to stay inside Vercel's free Hobby limits.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output
```

## Content is data-driven

- Services: `data/services.ts` — add/edit an entry, pages update automatically.
- Case studies: `data/projects.ts` — same pattern under `/work/<slug>`.
- Blog posts: `data/posts.ts` — **add one entry to the `posts` array and a
  page is created automatically at `/blog/<slug>`** after the next build.
- Site-wide contact details: `data/site.ts`.

## Notes

- The hero globe is `components/Globe.tsx` (cobe), lazy-loaded client-side,
  with a CSS gradient fallback if WebGL is unavailable.
- Tools (`/tools`) and the contact form are 100% client-side — the form
  composes an email or WhatsApp message; nothing is stored.
- Portrait: `public/images/rakib-portrait.jpg` (optimised JPEG).
