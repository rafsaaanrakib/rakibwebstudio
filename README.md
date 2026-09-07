# Rakib Ahmed — Portfolio

Next.js 14 + Tailwind CSS + Framer Motion. 100% free stack, deployable on
Vercel's free (Hobby) tier.

## Before you deploy

1. **Waitlist form** — Sign up free at https://buttondown.com (free up to
   100 subscribers). Open `components/WaitlistForm.tsx` and replace
   `YOUR-BUTTONDOWN-USERNAME` with your real Buttondown username.
2. **Blog content** — Edit or add posts in `app/blog/posts.ts`. Add a new
   entry to the `posts` array and a page is created automatically at
   `/blog/your-slug`.
3. **Case studies / About / Contact** — All real content already lives in
   `app/work/page.tsx`, `app/about/page.tsx`, and `app/contact/page.tsx`.
   Edit directly as your work history grows.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel (free)

**Option A — GitHub (recommended):**
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com → "Add New Project" → import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. No config needed.
4. You'll get a free `your-project.vercel.app` URL.

**Option B — Vercel CLI (no GitHub needed):**
```bash
npm install -g vercel
vercel
```
Follow the prompts — it deploys straight from this folder.

## Adding a custom domain later

Vercel → Project → Settings → Domains → Add. Free on Vercel's side; you
only pay your domain registrar.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (animations)
- Google Fonts: Piazzolla (headlines), IBM Plex Sans (body) — self-hosted
  automatically at build time via `next/font`, no external requests at
  runtime
