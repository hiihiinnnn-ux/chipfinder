# ChipFinder

**chipfinder.space** — a directory of computer shops in Iraq.

People use it to find a shop near them by city, service or keyword, look up
replacement parts, and get directions. Shop owners can submit their business to
be listed. Built and maintained by **Ali Raed**.

Live site: https://chipfinder.space · Preview: https://id-preview--b2bb571a-a53b-431d-a161-68e4cae0890b.lovable.app

---

## What it does

| Area | Behaviour |
| --- | --- |
| **Shop search** (`/`) | Filter by city, service (repairs, custom builds, used gear, Apple, parts…) and free-text query. Results show rating, reviews, hours, phone and address. |
| **Map** | Stylized map pins per shop; clicking a pin or "Directions" opens Google Maps with the shop address as the destination. |
| **Parts finder** (`/parts`) | Search specific components (RAM, SSD, GPU, screens, batteries…) filtered by category, brand, condition, max price and stock. Prices in IQD, with compatibility notes and the shops that carry each part. |
| **List your shop** (`/list-shop`) | Submission form for shop owners: details, contact, services and description, with validation. |
| **City pages** (`/cities/$city`) | A page per city generated from the shop data, for browsing and for search engines. |
| **Accounts** | Email + password sign-up and sign-in, password reset (`/reset-password`). Saved shops, search history and preferences follow the user across devices. |
| **Favorites & recently viewed** | Heart button on each shop card; All / Favorites / Recent tabs. Works without an account via browser storage, and syncs to the database once signed in. |
| **Language** | English ↔ Arabic toggle with full right-to-left layout. The choice persists and is kept on every page. |
| **Theme** | Dark by default, light available from the top-right menu; the choice is stored per user. |
| **Extras** | Intro splash ("Created by Ali Raed"), quick-tools menu, highlights ticker, `/` keyboard shortcut for search. |
| **Contact** (`/contact`) | Telegram `@i64vn` and phone `07803861785` / `+964 780 386 1785`. |

---

## Tech stack

- **TypeScript** throughout, on **React 19**.
- **TanStack Start v1** — file-based routing, server-side rendering, and server
  functions that run on the edge. Routes live in `src/routes`; the shared
  shell is `src/routes/__root.tsx`.
- **TanStack Router + Query** for navigation and data fetching/caching.
- **Tailwind CSS v4** — configured through `src/styles.css` using native CSS
  `@theme` tokens rather than a legacy `tailwind.config.js`.
- **shadcn/ui + Radix primitives** for interface parts, **Lucide** for icons,
  **sonner** for notifications, **Zod** for form validation.
- **Lovable Cloud** for authentication and the database. App logic
  talks to it through `createServerFn` server functions, not edge functions.
- **Vite 7** as the build tool; **Nitro** for the deployable output.

### APIs and integrations

- **Google Maps** — directions are plain `https://www.google.com/maps/...`
  links built from a shop's address. No Maps SDK or API key is used, and no
  live map tiles are rendered; the on-page map is a stylized layout.
- **Email/password auth** — handled by Lovable Cloud with auto-confirmation
  (no verification click) and a password-reset email flow.
- **Database tables** (each protected by row-level security so users only ever
  read and write their own rows):
  - `user_preferences` — city, service, query, theme and language settings.
  - `favorites` — saved shops.
  - `saved_searches` — search history.
- **Server functions** — `src/lib/favorites.functions.ts` and
  `src/lib/user-preferences.functions.ts` run signed-in and read/write those
  tables as the user.
- **Browser storage** — `localStorage` holds theme, language, favorites and
  recently-viewed for visitors who are not signed in, so nothing breaks
  without an account.
- **Page metadata** — every page sets its own title, description, Open Graph
  and Twitter tags, plus a generated favicon (`public/favicon.png`).

---

## Project layout

```
src/
  routes/
    __root.tsx          app shell: header, footer, toaster, metadata
    index.tsx           shop directory (search, filters, map, tabs)
    parts.tsx           parts finder
    list-shop.tsx       shop submission form
    cities.$city.tsx    per-city pages
    about.tsx           what the project is
    contact.tsx         Telegram / phone contact
    reset-password.tsx  password reset landing
  components/
    ShopCard.tsx        one shop in the results list
    ShopMap.tsx         map with clickable pins
    Splash.tsx          "Created by Ali Raed" intro screen
    ui/                 shadcn/ui primitives
  data/
    shops.ts            shop listings (mock data)
    parts.ts            parts listings (mock data)
  lib/
    favorites.functions.ts        server functions for saved shops
    user-preferences.functions.ts server functions for saved settings
    use-lang.ts                   shared English/Arabic state + RTL
    utils.ts, config.server.ts, error-*.ts
  integrations/
    supabase/           generated clients and auth helpers (do not hand-edit)
  styles.css            Tailwind v4 theme tokens, light/dark palettes
supabase/
  migrations/           database schema, grants and row-level-security policies
```

---

## Running it locally

```bash
bun install
bun run dev        # http://localhost:8080
```

Other scripts:

```bash
bun run build      # production build
bun run preview    # serve the built app
bun run lint       # eslint
bun run format     # prettier
```

`bun` is the package manager. The backend URL and publishable key are read
from `.env` (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`) — these are
generated for the project, so keep them as they are and never add a secret
key to the repo.

---

## About the data

The shops and parts are **sample listings kept in `src/data/`** — 70 shops
across 14 Iraqi cities (Baghdad and Hillah have the most) and 32 parts. They
are real-looking but are not a live feed, and prices, phone numbers and stock
levels are placeholders. Adding a shop means adding a row to `src/data/shops.ts`
(or approving a `/list-shop` submission once one exists); nothing is scraped
or synced automatically.

## Notes and next steps

- The submitted shop form currently stores nothing — there is no approval
  queue or admin page yet.
- Real map tiles, live opening hours, reviews and an owner-editing flow are
  the natural next additions.
- The Lovable badge is hidden on the published deployment; hiding it requires
  an active paid plan, and so does the custom domain.
