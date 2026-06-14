# Établissements Bertrand — New Website Specification (`spec-new.md`)

> Build spec for a **new, modern marketing/showcase website** to replace the
> current WordPress/Divi static export. **Nothing is implemented yet** — this
> document defines what to build.

---

## 1. Summary & goals

Établissements Bertrand is a **family-run French manufacturer of oyster- and
mussel-farming machines and supplies** (machines et fournitures ostréicoles &
mytilicoles), operating for **60+ years** from two sites: **Marennes** (Charente-
Maritime) and **Gujan-Mestras** (Bassin d'Arcachon). The company designs and
builds its own machines and also resells a broad range of farming supplies.

**Primary goal:** a clean, modern, intelligent marketing site that rejuvenates a
"vieillissante" brand image, speaks to the **new generation of oyster farmers**
(younger, connected, values-driven), and converts interest into **quote/contact
requests**.

**Scope decisions (confirmed with owner):**
- **Showcase site (vitrine) only** — no e-commerce in this phase.
- **Quote/contact form generates a `mailto:` link** (no backend mail server);
  recipient addresses are **configurable via environment variables** (§8, §12).
- **Keep per-product PDF datasheets** (downloadable on each machine page).
- **Three locales, all URL-prefixed: `/fr`, `/en`, `/it`.** FR is the authoring
  source of truth; on first visit the language is auto-detected (fallback
  **English**) — see §5.
- **Use the brand-charter fonts** found in the old-site assets: **Conneqt**
  (titles) + **Oblivian Text** (body) self-hosted; the **slogan is rendered as an
  SVG** (Abuget look) rather than loading Abuget as a webfont (§3). We only have
  the **old-site assets** to work from.
- **Stack: Next.js + Tailwind CSS.**

**Non-goals (this phase):** online shop / cart / payment, CRM integration,
newsletter platform, user accounts.

---

## 2. Strategic positioning (from owner's BLOC 2 report)

Source: *BLOC 2 — Rapport de préconisations opérationnelles* + brand charter.

### Market & competitors
Niche market, geographically concentrated, **low but real competition**.
Clientele is **loyal and habit-driven**, so **service is the key differentiator**.

| Competitor | Positioning | Digital maturity |
|------------|-------------|------------------|
| **Mulot (SAS)** | Technology leader; 4500 m² facilities, 3 production sites, exports to ~25 countries; full inox range for shellfish/aquaculture | **Strong** (digital precursor) |
| **Ménadier** | Service-focused (like Bertrand) | Lagging |
| **Hardouin** | Very broad "A‑to‑Z" range of equipment + small fittings (accastillage); one-stop supplier | Lagging |
| + 2 smaller players | Similar products/services | Varies |

**Strategic conclusions to encode in the site:**
- **Lead with personalized service**, not raw machine technology (do not compete
  head-to-head with Mulot on tech specs).
- **Differentiate on family values + recognized 60-year know-how.**
- **Rejuvenate the brand** for the new, digital generation of farmers.
- **Be strong on digital / social** where competitors are weak.
- Emphasize **French manufacturing** ("fabrication française") as a quality/export
  signal (the blue/white/red cue in the slogan).
- One-stop convenience: machines **and** supplies from a single supplier (counter
  to Hardouin's main advantage).

### Audience
- **Core (cœur de cible):** oyster farmers (ostréiculteurs) & mussel farmers
  (mytiliculteurs).
- **Primary:** fishing professionals, restaurateurs, agricultural businesses.
- **Secondary:** pool builders (piscinistes), construction (BTP), individuals
  (particuliers).
- **Geography:** Bassin d'Arcachon + Grand Ouest (Bretagne, Normandie), national,
  and **export** (Portugal, USA, UK, Italy).

### Message & tone
- **Slogan / signature:** **« Un savoir-faire affiné depuis plus de 60 ans »**
  (EN: *"Craftsmanship refined for over 60 years"* · IT: *"Un savoir-faire
  affinato da oltre 60 anni"* — final translations to be validated).
- **Tone:** affirmative, warm, reliable, traditional, family-oriented; add an
  ethical/social dimension. Avoid cold/technical corporate voice.

---

## 3. Brand & design system

From the official **Charte graphique**. The new logo keeps the **"B"** with a
blue gradient shape forming an **oyster**; baseline **"Machines et Fournitures
ostréicoles"**; a **"B"-only mark** is used for compact/social contexts.

### Color tokens
Colors "reflect the sea" — blue gradient, best on white backgrounds.

| Token | Hex | Usage |
|-------|-----|-------|
| `--brand-blue` (primary) | `#0112E8` | Primary brand, headings accents, key CTAs |
| `--brand-blue-400` | `#63A2F8` | Secondary accents, hovers |
| `--brand-blue-300` | `#9CC8F9` | Soft fills, cards, badges |
| `--brand-blue-200` | `#B5DAFB` | Backgrounds, dividers |
| `--brand-blue-muted` | `#7897CE` | Muted UI, borders |
| `--brand-indigo` | `#4258F9` | Secondary blue |
| `--brand-red` | `#CD1719` | Slogan / "made in France" accent (use sparingly) |
| `--white` | `#FFFFFF` | Base background |
| neutral grays | (scale) | Text, surfaces; grayscale logo fallback |

> Use blue as the dominant palette on white; **red is an accent only** (slogan,
> "fabrication française" cues). Replace the old site's mismatched "carrés bleus"
> with these tokens (owner feedback: harmonize the blue squares with the theme).

### Typography
**Use the brand-charter fonts — they are available in the old-site assets** at
`wp-content/uploads/et-fonts/`:

- **Conneqt Regular** (`ConneqtRegular.ttf`) — titles/headings (the charter's
  display font; the old site referenced `'TITRE CONNEQT'`).
- **Oblivian Text** (`Jorg-Schmitt-Oblivian-Text.ttf`) — body/UI text.
- **Abuget** (`Abuget.ttf`) — used only to **produce the slogan SVG** (see below);
  not shipped as a webfont.

Implementation: **self-host Conneqt + Oblivian**; convert `.ttf` → **`.woff2`**
(+ `.woff` fallback) and load via `@font-face` / `next/font/local`. Provide a
robust fallback stack (the existing site's Google fonts **Poppins → Lato → Open
Sans**, then system sans) so text renders if a face fails. Define a type scale
(display, h1–h4, body, small) in Tailwind config.

**Slogan as SVG (decision):** « Un savoir-faire affiné depuis plus de 60 ans » is
rendered as an **inline SVG** (text outlined from Abuget, in `--brand-red`),
localized per locale. This preserves the exact handwritten look, avoids embedding
the `Abuget` font (Khurasan, "all rights reserved"), and stays crisp at any size.

> Still verify Conneqt/Oblivian web/commercial licensing — the TTFs are in the
> assets but the **license terms are not included** there.

### Logo & imagery
- **Only old-site assets are available** — reuse/clean the existing logo
  (`/wp-content/uploads/2022/06/logo-blanc.png`, etc.) and existing photos. No new
  shoot or vector source is assumed; if quality is insufficient, upscale/retouch
  the existing raster assets.
- **Reuse the article/illustration photos** already attached to each existing
  article and machine page (owner request) — carry them over to the matching new
  page (see the image inventory in `spec.md`).
- **Hero background:** a **sea view with cultivated oysters**, matching the look of
  the current hero. Use an existing asset such as
  `2022/10/woodstown-beach-...oyster-and-seafood-farm...-scaled.jpg`,
  `2023/07/metal-structure-for-oyster-beds-aquaculture-in-waterford-ireland...jpg`,
  or `2022/12/MARENNES-VU-DU-CIEL.jpg`.
- Photography: uniform aspect ratios and consistent treatment (owner feedback:
  *"uniformiser la taille des photos et des encarts texte"*).

### UI principles
- Generous whitespace, large imagery, clear hierarchy, rounded cards, subtle
  shadows, accessible contrast. Mobile-first. Fast.

---

## 4. Tech stack & architecture

| Concern | Choice |
|---------|--------|
| Framework | **Next.js (App Router)**, TypeScript |
| Styling | **Tailwind CSS** + CSS variables for brand tokens |
| UI components | Headless/shadcn-style components; **lucide-react** icons |
| i18n | **next-intl** with `[locale]` segments — locales `/fr`, `/en`, `/it`; auto-detect on first visit (fallback EN) |
| Content | **Local typed content** (TS/MDX/JSON) committed to repo (no CMS this phase) |
| Forms | Client-side validation → **`mailto:` link generation** |
| Images | `next/image` with optimized, pre-sized assets |
| Hosting | **Static export / GitHub Pages** (keep `CNAME` = `ets-bertrand.com`) |
| Analytics | **None** for now (owner decision) |

**Rendering:** fully **static** (SSG / `output: export`) to keep GitHub Pages
hosting and zero server cost. No SSR/runtime backend.

**Routing model (all locales URL-prefixed):**
- `'/fr/...'`, `'/en/...'`, `'/it/...'` — every page lives under a locale prefix.
- `'/'` is a thin **redirector**: on a static host it serves a tiny page whose JS
  runs language auto-detection and redirects to the best locale (see §5).
- The locale in the URL is always authoritative for the language rendered.

**Suggested project structure:**
```
app/
  [locale]/
    layout.tsx
    page.tsx                 # Home
    histoire/page.tsx        # About
    machines/page.tsx        # Listing
    machines/[slug]/page.tsx # Machine detail
    fournitures/page.tsx     # Supplies overview
    particuliers/page.tsx
    implantations/[site]/    # Marennes / Gujan-Mestras
    journal/                 # News index + [slug]
    contact/page.tsx
    mentions-legales/page.tsx
components/
content/
  machines/*.ts              # typed machine data (multilingual)
  supplies/*.ts
  pages/*.ts
i18n/                        # routing + locale detection config
lib/                         # mailto builder, locale detection, helpers
public/
  catalogues/, datasheets/, images/   # carried over from old-site assets
  index.html                          # root redirector (locale auto-detect)
messages/                    # fr.json / en.json / it.json (translate ALL)
.env(.local)                 # CONTACT_EMAIL_* (build-time, see §12)
```

---

## 5. Internationalization

**Locales:** `/fr`, `/en`, `/it`. **FR is the authoring source of truth;** EN and
IT are full translations.

**Translate everything (owner decision):** all pages, all **9 machines**, all
supplies and journal articles are translated into the three locales. No partial
catalogue and no FR-fallback gaps.

**First-visit auto-detection (fallback English):**
1. If the user already has a stored preference (cookie/`localStorage`), use it.
2. Else detect from the browser (`navigator.languages`) and, optionally, an
   IP-geolocation lookup (free API) for country → language mapping.
3. Map to `fr` / `en` / `it`; **anything else falls back to `en`.**
4. Redirect from `/` to `/<locale>`.
> On GitHub Pages (static, no server) detection runs **client-side** in the root
> `/index.html` redirector. IP-geolocation is optional; browser language is the
> reliable primary signal.

**Manual selection wins and persists:** when the user picks a language in the
switcher, store it (cookie/`localStorage`) and navigate in that language from then
on. **Directly loading a URL of another locale** (e.g. opening `/it/...`) updates
the active/stored language to match that URL.

**Language switcher** maps to the equivalent page in the target locale (fallback to
that locale's home if no equivalent exists — rare, since all content is translated).

**SEO:** `hreflang` alternates for fr/en/it + `x-default` → English (matches the
detection fallback) on every page. Locale-aware formatting for phones/addresses.

---

## 6. Information architecture (new site map)

Cleaner than the WP export. Paths shown without locale prefix; **every page is
served under `/fr`, `/en`, `/it`** (e.g. `/fr/machines`). **Slugs are localized
per locale** (e.g. `/fr/machines/laveur-tubulaire`, `/en/machines/tubular-washer`,
`/it/project/lavatore-tubolare`); a slug-mapping table keeps cross-locale
equivalence for the language switcher and `hreflang`.

| Path (per locale) | Page | Notes |
|---------|------|-------|
| `/` → `/fr` `/en` `/it` | **Accueil / Home** | Hero + value props + featured machines + service + CTA |
| `/histoire` | **Notre histoire** | Family story, 60 years, values, team, two sites |
| `/machines` | **Machines ostréicoles** | Listing/grid of own-manufactured machines |
| `/machines/[slug]` | **Machine detail** | Gallery, description, specs, **PDF datasheet**, quote CTA |
| `/fournitures` | **Fournitures & accastillage** | Supplies the company resells (tables, cages, poches/paniers, etc.) |
| `/particuliers` | **Particuliers** | Offer for individuals |
| `/implantations/marennes` | **Marennes** | Site page (photos, address, map, contacts) |
| `/implantations/gujan-mestras` | **Gujan-Mestras** | Site page |
| `/journal` | **Journal / Actualités** | News & events index |
| `/journal/[slug]` | **Article** | Event/news post (migrated from FB + old posts) |
| `/contact` | **Contact / Devis** | Quote form (mailto) + both sites' coordinates |
| `/mentions-legales` | **Mentions légales** | Legal (GDPR-compliant) |

**Global navigation (header):** Accueil · Machines · Fournitures · Histoire ·
Implantations (Marennes / Gujan-Mestras) · Journal · **Catalogue** (download link
to the 2025 catalogue in the active locale: FR/EN/IT PDF) · Contact (button:
**« Demander un devis »**). Language switcher (FR/EN/IT). Phone click-to-call.

**Footer:** logo + slogan, two-site addresses & contacts, nav links, **social
links** (Facebook `facebook.com/EtablissementsBertrand`, Instagram
`instagram.com/ets_bertrand/`, LinkedIn `linkedin.com/company/etsbertrand/`),
legal links, catalogue download, site credits
(« Laetitia, Alexandre, Fabrice et Claude »).

### Mapping from old site → new site
| Old | New |
|-----|-----|
| `/a-propos/` | `/histoire` |
| `/machines-ostreicoles/` | `/machines` |
| `/project/<machine>/` | `/fr/machines/<slug>` (+ `/en`, `/it`) — keep **redirects** from old URLs (§10) |
| `/tables-ostreicoles/`, `/laveur-plat/`, `/les-poches-paniers-australiens/`, `/ecologie-en-milieu-ostreicole/` | merged into `/fournitures` (+ `/journal` for editorial pieces) |
| `/gujan-mestras/`, `/marennes/` | `/implantations/<site>` |
| `/billets/` + event pages | `/journal` (+ `/journal/[slug]`) |
| `/contact/`, `/mentions-legales/` | same |
| `/author/*`, `/layout_type/*`, `/module_width/*`, `/scope/*` | **dropped** (WP taxonomy noise) |

---

## 7. Page-by-page content spec

### 7.1 Home `/`
- **Hero:** full-width **sea view with cultivated oysters** background (reuse an
  existing asset, see §3), logo + **slogan**, one-line value proposition, two CTAs:
  **« Découvrir nos machines »** + **« Demander un devis »**.
- **Value props (3–4 cards):** Savoir-faire 60 ans · Service personnalisé ·
  Fabrication française · Machines + fournitures (one-stop). Use brand icons
  (oyster, pump, basket, gloves — reuse existing).
- **Featured machines:** 3–6 cards linking to `/machines/[slug]`.
- **Service/family story teaser** → link to `/histoire`.
- **Two implantations** mini-section (Marennes & Gujan-Mestras) with map links.
- **Journal teaser:** latest 3 articles.
- **Final CTA band:** quote/contact.
- Copy seed (FR): *"Situé au cœur du premier bassin ostréicole français, les
  Établissements Bertrand livrent en France et à l'international."*

### 7.2 Notre histoire `/histoire`
- Narrative of 60+ years, family values, the two sites, the team. Replace old
  credit line with **« Laetitia, Alexandre, Fabrice et Claude »** where relevant.
- Images: reuse `HISTOIRE-1/2/3.jpg`.

### 7.3 Machines listing `/machines`
- Responsive **uniform grid** of machine cards (consistent image ratio + card
  height — fixes old inconsistency).
- Each card: image, name, 1-line descriptor, "En savoir plus".
- **No "Fiche technique (PDF)" line on the card** (owner feedback). The datasheet
  lives on the detail page.
- 9 machines: Bouilloire GM, Bouilloire PM, Crible vibrant 3 grilles, Détroqueuse
  à coupelles, Ensacheuse Baby, Ensacheuse Junior, Laveur Plat, Laveur Tubulaire,
  Tables & Cages ostréicoles.

### 7.4 Machine detail `/machines/[slug]`
- **Image gallery** (carousel/lightbox).
- Title, intro, **benefit-led description** (service & use, not just specs).
- **Specs** block (structured).
- **Downloadable PDF datasheet** (kept, per decision) — locale-aware: serve FR
  `-VF`, EN `-VA`, IT `-IT` where available; fall back to FR with a note.
- **Quote CTA** → `/contact?machine=<slug>` (prefills the form/subject).
- Related machines.

### 7.5 Fournitures `/fournitures`
- Present resold supplies & accastillage (tables ostréicoles, cages, poches &
  paniers australiens, pieds, etc.) as a catalog-style overview, emphasizing the
  **one-stop** advantage. CTA to contact for availability/pricing.

### 7.6 Particuliers `/particuliers`
- Offer for individuals; simple, friendly. Image `20211007_172315`.

### 7.7 Implantations `/implantations/marennes` & `/gujan-mestras`
- Photos, **address**, **embedded map**, opening info, **site-specific contact**:
  - **Marennes** — La Chainade, 17320 Marennes · **05 46 85 00 36** ·
    **marennes@ets-bertrand.com**
  - **Gujan-Mestras** — Port du canal, 33470 Gujan-Mestras · **05 56 66 59 37** ·
    **gujan@ets-bertrand.com**

### 7.8 Journal `/journal` & `/journal/[slug]`
- News/events index (cards) + article pages. Seed from existing posts (salons,
  semaine de l'industrie, laveur plat, écologie) and **migrate Facebook posts**
  from the "EtablissementsBertrand" page into articles (owner request).
- Blog/SEO rules from BLOC 2: keyword research, H1/H2/H3, ≥300 words, images,
  internal/external links, social CTA, meta description, slug.

### 7.9 Contact / Devis `/contact`
- See §8.

### 7.10 Mentions légales `/mentions-legales`
- Update host info to **GitHub Pages**; ensure **GDPR/legal compliance**; correct
  credits. (Owner feedback.)

---

## 8. Contact / quote form (mailto)

**Behavior:** pure client-side; on submit, build and open a `mailto:` link
(`window.location.href = mailto`). No data leaves the browser until the user
sends from their mail client.

**Fields:**
- Name*, Company, Email*, Phone, **Preferred site** (Marennes / Gujan-Mestras /
  No preference), **Subject/Machine of interest** (prefilled from
  `?machine=<slug>` when arriving from a machine page), Message*, consent
  checkbox (RGPD).

**Recipient routing (addresses configurable via env, not hard-coded):**
- Build-time env vars provide the addresses, e.g.
  `NEXT_PUBLIC_CONTACT_EMAIL_MARENNES`, `NEXT_PUBLIC_CONTACT_EMAIL_GUJAN`, and
  `NEXT_PUBLIC_CONTACT_EMAIL_DEFAULT`.
- Marennes → Marennes address; Gujan-Mestras → Gujan address; **"No preference"** →
  **`to` Marennes + `cc` Gujan** (both shops receive it).
- Current values: `marennes@ets-bertrand.com`, `gujan@ets-bertrand.com`.

> These appear in client-side `mailto:` links, so they are **not truly secret**
> (a mailto address is public by nature). The env var keeps them **configurable**
> per the owner's request and out of the source; store the real values in repo/CI
> **secrets** and inject them at build time (§12).

**mailto construction:**
```
mailto:<recipient>?subject=<encoded subject>&body=<encoded, formatted message>
```
- URL-encode all values; assemble a readable body (labelled lines).
- Provide a **fallback**: show the destination email + copy-to-clipboard in case
  no mail client is configured. Keep the body within practical length limits.

**Validation:** required fields + email format, client-side, accessible error
messaging.

---

## 9. Content / data model

**Machine** (typed, multilingual):
```ts
type Machine = {
  slug: string;                 // stable, language-neutral key
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>; // rich text / MDX
  specs?: { label: Record<Locale,string>; value: Record<Locale,string> }[];
  images: { src: string; alt: Record<Locale, string> }[];
  datasheets: Partial<Record<Locale, string>>; // PDF path per language
  category: 'machine';
  featured?: boolean;
};
```
- Seed machine entries from the inventory in `spec.md` (§4 there) including the
  correct datasheet PDFs per language and gallery images.
- Similar typed models for **Supply** and **Article** (journal).

---

## 10. SEO & metadata
- Per-page `<title>`, meta description, Open Graph/Twitter cards, canonical,
  `hreflang` alternates (FR/EN/IT + x-default).
- Structured data: `Organization` / `LocalBusiness` (×2 sites) with NAP, plus
  `Product` for machines.
- Generate `sitemap.xml` + `robots.txt`. Keep `CNAME`, add `.nojekyll`.
- Clean, human-readable slugs. **Preserve SEO from old URLs (decision: yes):** add
  redirect stubs (static HTML meta-refresh + `rel=canonical`, since GitHub Pages
  has no server-side 301) from old paths (`/project/...`, `/a-propos/`, etc.) to
  the new locale URLs.

---

## 11. Accessibility & performance
- WCAG 2.1 AA: contrast (validate `#0112E8` on white, red usage), keyboard nav,
  focus states, alt text, semantic landmarks, reduced-motion support.
- Performance: `next/image`, pre-sized assets, lazy loading, minimal JS, system/
  self-hosted fonts; target Lighthouse ≥ 90 across the board.

---

## 12. Deployment
- **Static export** deployed to **GitHub Pages**, domain `ets-bertrand.com`
  (`CNAME`, `.nojekyll`). CI build on push (GitHub Actions) → Pages artifact.
- **Env / secrets:** contact email addresses are injected at **build time** from
  **GitHub Actions secrets** (`CONTACT_EMAIL_*`) into `NEXT_PUBLIC_*` env vars.
  Use `.env.local` for local dev (git-ignored); never commit real values.
- Keep large PDFs/catalogues in `public/` (note repo size; consider Git LFS if it
  grows).

---

## 13. Roadmap / phasing
1. **Phase 1 (this spec):** showcase site, FR/EN/IT, quote-by-mailto, machines +
   supplies + journal + implantations. Full EN/IT machine translations.
2. **Phase 2 (future):** newsletter signup, richer journal/CMS, analytics.
3. **Phase 3 (future):** **e-commerce / site marchand** for the négoce/supplies
   range (BLOC 2 long-term goal) — would require a backend/headless commerce.

---

## 14. Decisions log & remaining questions

**Resolved (owner answers):**
- Locales `/fr` `/en` `/it`; first-visit auto-detect, fallback **English**; manual
  choice persists; URL locale overrides (§5).
- Contact emails **configurable via env/secrets** (§8, §12).
- **Use brand-charter fonts** (Conneqt / Oblivian Text / Abuget) — found in
  `wp-content/uploads/et-fonts/`; self-host as woff2 (§3).
- **"No preference" → cc both shops** (§8); **EN/IT slugs localized per locale** (§6).
- **Only old-site assets** available; reuse article photos; hero = sea view with
  cultivated oysters (§3, §7.1).
- **Catalogue link in the header** (§6).
- **Translate everything** into the 3 locales (§5).
- **Preserve old-URL SEO** via redirect stubs (§10).
- Social links: Facebook `/EtablissementsBertrand`, Instagram `/ets_bertrand/`,
  LinkedIn `/company/etsbertrand/` (§6 footer).
- Maps: **embedded** map on implantation pages (§7.7).
- **No analytics** for now.

**Remaining / to confirm:**
1. **Font licensing:** Conneqt + Oblivian **TTFs are in the assets** (used as
   webfonts); the slogan ships as an **SVG** so Abuget is not embedded. Still
   confirm Conneqt/Oblivian permit web/commercial embedding (license terms aren't
   included in the assets).

---

### Source references
- `spec.md` (current site inventory: pages, images, datasheet PDFs).
- `documents-alex/BLOC 2 - RAPPORT DE PRECONISATIONS OPERATIONNELLES.pdf`
  (strategy, personas, competitors, brand charter, slogan).
- `documents-alex/spec SITE REVAL CLAUDE.pdf` (owner's annotated change requests).
- Web: competitor sites (Mulot, Ménadier, Hardouin).
