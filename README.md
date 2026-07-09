# Quickbutton — Next.js + Tailwind 4

A port of the Quickbutton brand-refresh website (originally built as hi-fi HTML
prototypes) into **Next.js (App Router) + React 19 + Tailwind CSS 4**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Build / run production:

```bash
npm run build
npm start
```

Requires Node 18.18+ (Node 20+ recommended).

---

## What's here

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Home |
| `/namnskyltar` | `app/namnskyltar/page.tsx` | Produktlistning |
| `/namnskylt-produkt` | `app/namnskylt-produkt/page.tsx` | Produktsida |
| `/inspiration` | `app/inspiration/page.tsx` | Branschöversikt + Populärt just nu |
| `/inspiration/vard-omsorg` | `app/inspiration/vard-omsorg/page.tsx` | Branschsida |
| `/inspiration/hotell-restaurang` | `app/inspiration/hotell-restaurang/page.tsx` | Branschsida |
| `/aterforsaljare` | `app/aterforsaljare/page.tsx` | **Client** — filter (land/region/kategori) + karta |
| `/kontakt` | `app/kontakt/page.tsx` | **Client** — kontaktformulär (klient-validering) |
| `/om-oss` | `app/om-oss/page.tsx` | Om oss |

Shared chrome lives in `components/SiteHeader.tsx` and `components/SiteFooter.tsx`
(both use `next/link`; the header is a client component for the mobile-menu toggle
and active-link state). Navigation is data-driven from `lib/nav.ts`.

Structured content lives in `data/resellers.ts` and `data/inspiration.ts`
(extended from the original wireframe data files). The reseller filters and the
inspiration grid read from these.

Images are in `public/assets/`. Brand fonts (Bricolage Grotesque + Inter) are
loaded via `next/font/google` in `app/layout.tsx`.

---

## Styling

The hi-fi look is delivered through a **ported design-system stylesheet** at
`app/globals.css`:

- Brand tokens are declared in `:root` (consumed by the component classes) **and**
  mirrored into Tailwind's `@theme` so utility classes like `bg-qb-red`,
  `text-burgundy`, `text-ink-soft` are available when you extend the app.
- Component/section styles (`.btn`, `.bcard`, `.af-*`, `.feat-card`, `.prod-*`,
  `.insp-cta`, etc.) are the same class names used in the original prototypes, so
  the ported JSX is a near 1:1 mapping of the HTML.

> ⚠️ **Known cleanup item:** `globals.css` was assembled by concatenating the
> per-page prototype stylesheets, so the shared shell rules (header/footer/buttons)
> are duplicated several times and a few generic helpers (`.disp`, `.sec`) may have
> last-wins collisions. It renders correctly but is ~110 KB and worth deduping into
> a proper layered stylesheet (or migrating section-by-section to Tailwind utilities
> / CSS Modules) as you take ownership.

---

## Decisions & conventions (per the brief)

- **Framework:** Next.js App Router (as requested), React 19, Tailwind 4 — same
  major React/Tailwind versions as your existing repo, so dependencies line up.
- **Fidelity:** matches the finished designs. shadcn/ui is **not** wired in yet —
  the design system is delivered as portable CSS so the project runs standalone.
  Natural places to drop in shadcn later: the **Select** controls in the reseller
  filter bar, a **Dialog** for the reseller "intresseanmälan", and **Button** in
  place of `.btn`.
- **Data:** built on the existing `resellers.ts` / `inspiration.ts` shape; the A–Ö
  reseller list was extended to ~30 entries and tagged with region + categories so
  filtering works.
- **Interactivity:** reseller filters, the mobile nav, and the contact form are
  fully wired (client components). The contact form validates client-side and shows
  a success state — **no backend is connected**; hook up your endpoint in
  `app/kontakt/page.tsx`.

---

## Things to wire up / refine

1. **Internal links in ported pages** use plain `<a href="/...">`. They work, but
   swap to `next/link` for client-side navigation (the header/footer already do).
2. **Images** use plain `<img>` for portability. Switch to `next/image` for
   optimization — `next.config.mjs` already allow-lists `images.pexels.com`.
3. **Placeholder routes:** Skyltar, Knappar/pins and Profilprodukter are `#` in the
   nav (no pages yet). Four inspiration branches (event, detaljhandel, transport,
   kampanj) link to `#` until their pages exist.
4. **`globals.css` dedupe** (see Styling note above).
5. **Form backend** for `/kontakt`.

---

## Source design references

The pixel-accurate source prototypes (plain HTML/CSS) are delivered separately as
**"Quickbutton Website (HTML)"**. Use them as the visual source of truth when
refining any page.
