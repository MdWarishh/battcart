# BattKart Website

Premium Next.js (App Router) + TypeScript + Tailwind frontend for BattKart —
"Powering Every Journey". No backend — franchise form submits via
[FormSubmit](https://formsubmit.co) directly to an email address.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before going live — checklist

1. **`src/config/site.ts`** — replace the placeholder phone number and email.
   This one file controls the call button, footer, and where franchise
   enquiries are delivered.
2. **First franchise form submission** — FormSubmit sends a one-time
   confirmation email to the address in `site.ts`. Click the link inside it
   once, or all future form submissions will silently fail to arrive.
3. **Instagram link** — confirm `https://www.instagram.com/battkart` is the
   correct handle (taken from the QR code you shared) — I couldn't verify it
   via search since the account may be brand-new / has no public posts yet.
4. **Images** — every photo on the site (hero, service cards, blog posts) is
   a temporary stock photo from Unsplash so the site isn't empty while you
   build. Swap them for real BattKart shop/service/product photos before
   launch — drop new files into `public/images/` and update the `image`
   fields in `src/data/services.ts` and `src/data/blogPosts.ts`.
5. **Facebook / Instagram posts as content** — I wasn't able to pull actual
   post images from Facebook or Instagram (both block automated/logged-out
   scraping). If you want specific real posts turned into blog entries or
   gallery images, export/share those images directly and I'll drop them in.
6. **Domain in `src/app/layout.tsx`** — `metadataBase` is set to
   `https://battkart.in` as a placeholder for SEO tags — update once the
   real domain is known.

## Project structure

```
src/
  app/            → routes (home, about, blog, blog/[slug], franchise)
  components/      → Header, Footer, ServiceAccordion, FranchiseForm, etc.
  config/site.ts   → phone, email, social links (single source of truth)
  data/            → services.ts, blogPosts.ts (static content)
public/images/     → logo + static images
```
