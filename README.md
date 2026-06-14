# Établissements Bertrand — Website

Marketing website for **Établissements Bertrand**, manufacturer of oyster-farming
machines and supplies between Marennes-Oléron and the Bassin d'Arcachon.

Multilingual (🇫🇷 French · 🇬🇧 English · 🇮🇹 Italian) static site built with
**Next.js**, exported to static HTML and hosted on **GitHub Pages** at
[ets-bertrand.com](https://ets-bertrand.com).

## Tech stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Framework      | [Next.js 15](https://nextjs.org) (App Router)      |
| Language       | TypeScript + React 19                              |
| Styling        | [Tailwind CSS](https://tailwindcss.com)            |
| i18n           | [next-intl](https://next-intl.dev) (`fr`/`en`/`it`)|
| Icons          | [lucide-react](https://lucide.dev)                 |
| Output         | Fully static (`output: 'export'`) — no server      |
| Hosting        | GitHub Pages + custom domain (`CNAME`)             |

## Repository layout

```text
.
├── .github/workflows/deploy.yml   # Manual GitHub Pages deploy workflow
├── CNAME                          # Custom domain: ets-bertrand.com
├── .nojekyll                      # Disable Jekyll on GitHub Pages
├── documents-alex/                # Source documents / references
├── spec-new.md, spec.pdf          # Project specification
└── web/                           # ← The Next.js application
    ├── app/[locale]/              # Localized pages & routing
    ├── components/                # React components (Header, Footer, Gallery…)
    ├── content/                   # Typed content (machines, sites, articles…)
    ├── i18n/                      # next-intl routing & request config
    ├── lib/                       # Types & nav helpers
    ├── messages/                  # Translations: fr.json / en.json / it.json
    └── public/                    # Static assets
        ├── catalogues/            # Catalogue PDFs (fr/en/it)
        ├── datasheets/            # Machine datasheets (PDF)
        ├── fonts/                 # Brand fonts
        └── images/                # Photos & logos
```

> All application code lives in [`web/`](web). Run every command below from that
> directory.

## Getting started

**Prerequisites:** Node.js 20+ and npm.

```bash
cd web
npm install          # install dependencies
cp .env.example .env # configure local env (see below)
npm run dev          # start dev server at http://localhost:3000
```

The site redirects `/` to the visitor's preferred locale (`/fr`, `/en`, `/it`).

## Available scripts

Run from `web/`:

| Command          | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `npm run dev`    | Start the development server (hot reload)              |
| `npm run build`  | Build the static export into `web/out/`                |
| `npm run start`  | Serve a production build locally                       |
| `npm run lint`   | Run ESLint                                             |

### Preview the static export locally

```bash
cd web
npm run build
npx serve out            # or: python3 -m http.server -d out 4321
```

## Environment variables

Defined in `web/.env.example`. All are `NEXT_PUBLIC_*` because they are baked
into the static bundle at build time (mailto addresses are public by nature).

| Variable                              | Purpose                                  |
| ------------------------------------- | ---------------------------------------- |
| `NEXT_PUBLIC_CONTACT_EMAIL_MARENNES`  | Marennes contact / quote recipient       |
| `NEXT_PUBLIC_CONTACT_EMAIL_GUJAN`     | Gujan-Mestras contact / quote recipient  |
| `NEXT_PUBLIC_CONTACT_EMAIL_DEFAULT`   | (optional) default recipient override    |
| `NEXT_PUBLIC_SITE_URL`                | Base URL for canonical / sitemap / OG    |

The contact form uses `mailto:` links — there is **no backend**. "No preference"
sends to Marennes with Gujan in cc.

## Editing content

- **Text & translations:** `web/messages/{fr,en,it}.json`
- **Machines:** `web/content/machines.ts`
- **Sites / locations & catalogues:** `web/content/site.ts`
- **News articles:** `web/content/articles.ts`
- **Navigation:** `web/lib/nav.ts`
- **Images / PDFs:** `web/public/...`

## Deployment (GitHub Pages)

Deployment is handled by the **manual** workflow at
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
(`workflow_dispatch` only — it never runs automatically).

1. Merge your branch into `main` and push.
2. In **Settings → Secrets and variables → Actions**, add:
   - `CONTACT_EMAIL_MARENNES`
   - `CONTACT_EMAIL_GUJAN`
3. In **Settings → Pages → Build and deployment**, set **Source = GitHub Actions**.
4. In the **Actions** tab, run the **"Deploy site"** workflow.

The workflow builds `web/`, then publishes `web/out/` to GitHub Pages. The custom
domain (`ets-bertrand.com`) is preserved via `web/public/CNAME`.

> **Rollback:** switch **Settings → Pages → Source** back to "Deploy from a
> branch" to restore the previous branch-served site.

## Branching

New work is done on a branch created from `main`, so production stays untouched
until a deploy is triggered. Avoid committing build artifacts — `node_modules/`,
`.next/`, and `out/` are git-ignored.
