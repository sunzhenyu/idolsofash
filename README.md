# Idols of Ash Portal

A Next.js game portal focused on:

- Instant browser play when a source is available.
- Source transparency (verified embed vs mirror vs official external links).
- English-only SEO content blocks for traffic growth (How to Play, Pro Tips, FAQ, JSON-LD).

## Current Positioning

This project is designed as a playable traffic portal, not only a link directory:

- Keep users on-site with embedded game sessions.
- Show source attribution and risk labels clearly.
- Use per-game content depth to increase search visibility and session duration.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm

## Run Locally

```bash
pnpm install
pnpm dev
```

Default local URL:

- `http://localhost:3000`
- If `3000` is occupied, Next.js auto-switches (for example `3001`).

## Useful Commands

```bash
pnpm lint
pnpm exec next build --webpack
```

Notes:

- In restricted environments, `next build` with Turbopack may fail due to process/port restrictions.
- `--webpack` build path is included as a stable fallback.

## SEO and Search Console

This project now includes:

- Dynamic `sitemap.xml` (static pages + all `/games/[slug]` pages).
- Dynamic `robots.txt`.
- Canonical URLs and Open Graph/Twitter metadata on main pages.
- FAQ structured data on game detail pages.

Before production deploy, set your domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Or:

```bash
SITE_URL=https://your-domain.com
```

Then submit this URL in Google Search Console:

- `https://your-domain.com/sitemap.xml`
- Example for this project: `https://idolsash.com/sitemap.xml`

## Content and Source Strategy

Each game entry in `src/data/games-database.ts` uses a source mode:

- `trusted-embed`: verified playable source.
- `mirror-embed`: playable third-party mirror with warning labels.
- `official-external`: official source link only (no embedded play).
- `info-only`: no reliable playable source yet.

For each game page, we show:

- Source notes and rights notes.
- Optional source-based description block.
- Gameplay helper sections (How to Play, Pro Tips, FAQ).
- FAQ structured data (`FAQPage` JSON-LD) for search indexing.

## Project Structure

```text
src/
  app/
    page.tsx                 # homepage
    games/[slug]/page.tsx    # dynamic game pages
    horror-games/page.tsx    # category pages
    hot-games/page.tsx
    new-games/page.tsx
  components/
    game-player.tsx          # playable panel + source labels
    header.tsx
    related-games.tsx
    game-sidebar.tsx
  data/
    games-database.ts        # full game registry
    games.ts                 # related game list and category labels
```

## Adding New Games

1. Add a new entry to `src/data/games-database.ts`.
2. Add card metadata to `src/data/games.ts` if it should appear in related sections.
3. Prefer official sources first.
4. If using mirror embed, include:
   - clear source URL,
   - warning label (`sourceStatus: 'unverified-mirror'`),
   - source notes with check date.

## License and Disclaimer

This is an unofficial fan portal.

- All game IP, trademarks, and assets belong to their respective owners.
- The site provides source transparency and gameplay access metadata, and does not claim ownership of third-party games.
