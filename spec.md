# ets-bertrand.com — Site Map

Établissements Bertrand — machines & supplies for oyster farming.
Static site (WordPress/Divi export) hosted on GitHub Pages. Trilingual:
**French** (default, at the root), **English** (`/en/`), **Italian** (`/it/`).

Legend: 🏭 machine product page (with a downloadable PDF datasheet) · 🗂️ machine
listing · 📄 content/landing page · 🗞️ news/event · ⚖️ legal.

---

## 🇫🇷 French (default — root)

- `/` — **Home** — Etablissements Bertrand, machines et fournitures ostréicoles
- `/a-propos/` — 📄 Notre Histoire (about)
- `/particuliers/` — 📄 Particuliers (private customers)

### Locations
- `/gujan-mestras/` — 📄 Gujan-Mestras
- `/marennes/` — 📄 Marennes

### Machines
- `/machines-ostreicoles/` — 🗂️ **Machines Ostréicoles** (product listing)
  - `/project/bouilloire-grand-modele/` — 🏭 Bouilloire – Grand modèle
  - `/project/bouilloire-petit-modele/` — 🏭 Bouilloire – Petit modèle
  - `/project/crible-vibrant-3-grilles/` — 🏭 Crible vibrant 3 grilles
  - `/project/detroqueuse-a-coupelles/` — 🏭 Détroqueuse à coupelles
  - `/project/ensacheuse-baby/` — 🏭 Ensacheuse Baby
  - `/project/ensacheuse-junior/` — 🏭 Ensacheuse Junior
  - `/project/laveur-plat-v2/` — 🏭 Laveur Plat
  - `/project/laveur-tubulaire/` — 🏭 Laveur Tubulaire
  - `/project/tables-cages-ostreicoles/` — 🏭 Tables & Cages ostréicoles
  - `/project/` — (Divi "Projets" archive — auto-generated index)

### Supplies & topics
- `/tables-ostreicoles/` — 📄 Tables ostréicoles
- `/laveur-plat/` — 📄 Laveur Plat
- `/les-poches-paniers-australiens/` — 📄 Les poches & paniers australiens
- `/ecologie-en-milieu-ostreicole/` — 📄 Écologie en milieu ostréicole

### Journal & events
- `/billets/` — 🗞️ Journal (news index)
- `/salon-de-la-conchyliculture-de-la-tremblade/` — 🗞️ La conchyliculture à La Tremblade
- `/salon-de-la-conchyliculture-de-vannes/` — 🗞️ Salon de la Conchyliculture de Vannes
- `/semaine-de-lindustrie/` — 🗞️ Semaine de l'industrie

### Contact & legal
- `/contact/` — Contact
- `/mentions-legales/` — ⚖️ Mentions légales

---

## 🇬🇧 English (`/en/`)

- `/en/` — **Home** — The Bertrand Company
- `/en/our-history/` — 📄 Our history
- `/en/private-customers/` — 📄 Private customers
- `/en/gujan-mestras/` — 📄 Gujan-Mestras
- `/en/marennes/` — 📄 Marennes
- `/en/oyster-equipment/` — 🗂️ **Oyster equipment** (product listing)
  - `/en/project/boiling-water-tank-large-size/` — 🏭 Boiling water tank, large size
  - `/en/project/boiling-water-tank-small-size/` — 🏭 Boiling water tank, small size
  - `/en/project/shell-shaker-grader-3-sieves/` — 🏭 Shell shaker / grader, 3 sieves
  - `/en/project/` — (Projects archive)
- `/en/contact/` — Contact

> English machine catalogue is **partial** (3 of 9 products translated).

---

## 🇮🇹 Italian (`/it/`)

- `/it/` — **Home** — ETS Bertrand
- `/it/chi-siamo/` — 📄 Chi siamo (about)
- `/it/macchine-della-molluschicoltura/` — 🗂️ **Macchine della molluschicoltura** (listing)
  - `/it/project/bollitore-modello-grande/` — 🏭 Bollitore – Modello grande
  - `/it/project/bollitore-modello-piccolo/` — 🏭 Bollitore – Modello piccolo *(no datasheet)*
  - `/it/project/insacatrice-baby/` — 🏭 Insaccatrice Baby
  - `/it/project/insaccatrice-junior/` — 🏭 Insaccatrice Junior
  - `/it/project/lavatore-piatto/` — 🏭 Lavatore piatto
  - `/it/project/lavatore-tubolare/` — 🏭 Lavatore tubolare
  - `/it/project/schermo-vibrante-a-3-griglie/` — 🏭 Schermo vibrante a 3 griglie
  - `/it/project/spogliarellista-per-tazze/` — 🏭 Spogliarellista per tazze *(no datasheet)*
  - `/it/project/tavole-gabbie-ostriche/` — 🏭 Tavole & gabbie ostriche
  - `/it/project/` — (Progetti archive)
- `/it/contattaci/` — Contattaci

---

## Assets

- **Datasheets (PDF):** `wp-content/uploads/**` — fiche technique (FR `…-VF`),
  version anglaise (`…-VA`), scheda tecnica IT (`…-IT`). Linked from each machine
  product page and from the listing cards.
- **Media/theme:** `wp-content/uploads/`, `wp-content/themes/Divi/`,
  `wp-content/plugins/`, `wp-includes/`.

## Non-content pages (WordPress taxonomy stubs — noindex redirects)

Not part of the navigable site; emitted by the export and redirect away:

- `/author/abonnat/`, `/author/dmnstrateur/`, `/author/laetitia-edition/`
- `/layout_type/layout/`, `/layout_type/section/`
- `/module_width/fullwidth/`, `/module_width/regular/`
- `/scope/global/`, `/scope/not_global/`

## Crawl / hosting files

- `sitemap.xml`, `sitemap_index.xml`, `page-sitemap.xml`, `post-sitemap.xml`,
  `project-sitemap.xml` (XML sitemaps from the export)
- `robots.txt`, `CNAME` (ets-bertrand.com), `.nojekyll`, `LICENSE`

---

## Notes

- **Languages are not fully parallel:** EN exposes 3 machines, IT exposes 9, FR 9.
  Several FR topic/supply pages (poches & paniers, tables ostréicoles, écologie) and
  the events have no EN/IT equivalent.
- Two IT machines have **no datasheet** available (bollitore piccolo,
  spogliarellista per tazze).
- The site is a static export; dynamic behaviors (mobile menu, machine-grid layout)
  are restored with small in-repo CSS/JS shims rather than the original LiteSpeed
  combined bundles, which were not exported.
