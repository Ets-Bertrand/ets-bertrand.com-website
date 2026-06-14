# ets-bertrand.com — Site Specification

**Établissements Bertrand** — manufacturer of machines & supplies for oyster
farming (machines et fournitures ostréicoles). Located in France's first oyster
basin, supplying customers across Europe and worldwide.

Static export (WordPress / Divi theme) hosted on **GitHub Pages**.
Domain: **ets-bertrand.com** (`CNAME`). Trilingual:
**French** (default, at the root), **English** (`/en/`), **Italian** (`/it/`).

Legend: 🏭 machine product page (datasheet PDF) · 🗂️ machine listing ·
📄 content/landing page · 🗞️ news/event · ✉️ contact · ⚖️ legal · ↪️ noindex stub.

---

## 1. Site map

### 🇫🇷 French (default — root)

| Path | Type | Title |
|------|------|-------|
| `/` | Home | Etablissements Bertrand – Machines et fournitures ostréïcoles |
| `/a-propos/` | 📄 | Notre Histoire |
| `/particuliers/` | 📄 | Particuliers |
| `/gujan-mestras/` | 📄 | Gujan-Mestras (location) |
| `/marennes/` | 📄 | Marennes (location) |
| `/machines-ostreicoles/` | 🗂️ | Machines Ostréicoles (product listing) |
| `/tables-ostreicoles/` | 📄 | Tables ostréicoles |
| `/laveur-plat/` | 📄 | Laveur Plat |
| `/les-poches-paniers-australiens/` | 📄 | Les poches & paniers australiens |
| `/ecologie-en-milieu-ostreicole/` | 📄 | Écologie en milieu ostréicole |
| `/billets/` | 🗞️ | Journal (news index) |
| `/salon-de-la-conchyliculture-de-la-tremblade/` | 🗞️ | La conchyliculture à La Tremblade |
| `/salon-de-la-conchyliculture-de-vannes/` | 🗞️ | Salon de la Conchyliculture de Vannes |
| `/semaine-de-lindustrie/` | 🗞️ | Semaine de l'industrie |
| `/contact/` | ✉️ | Contact |
| `/mentions-legales/` | ⚖️ | Mentions légales |
| `/project/` | 🗂️ | Projets Archive (Divi auto-index) |

**FR machines** (under `/project/…/`):

| Path | Machine |
|------|---------|
| `/project/bouilloire-grand-modele/` | Bouilloire – Grand modèle |
| `/project/bouilloire-petit-modele/` | Bouilloire – Petit modèle |
| `/project/crible-vibrant-3-grilles/` | Crible vibrant 3 grilles |
| `/project/detroqueuse-a-coupelles/` | Détroqueuse à coupelles |
| `/project/ensacheuse-baby/` | Ensacheuse Baby |
| `/project/ensacheuse-junior/` | Ensacheuse Junior |
| `/project/laveur-plat-v2/` | Laveur Plat |
| `/project/laveur-tubulaire/` | Laveur Tubulaire |
| `/project/tables-cages-ostreicoles/` | Tables & Cages ostréicoles |

### 🇬🇧 English (`/en/`)

| Path | Type | Title |
|------|------|-------|
| `/en/` | Home | The Bertrand Company |
| `/en/our-history/` | 📄 | Our history |
| `/en/private-customers/` | 📄 | Private customers |
| `/en/gujan-mestras/` | 📄 | Gujan-Mestras |
| `/en/marennes/` | 📄 | Marennes |
| `/en/oyster-equipment/` | 🗂️ | Oyster equipment (product listing) |
| `/en/contact/` | ✉️ | Contact |
| `/en/project/` | 🗂️ | Projects Archive |
| `/en/project/boiling-water-tank-large-size/` | 🏭 | Boiling water tank, large size |
| `/en/project/boiling-water-tank-small-size/` | 🏭 | Boiling water tank, small size |
| `/en/project/shell-shaker-grader-3-sieves/` | 🏭 | Shell shaker / grader, 3 sieves |

> English machine catalogue is **partial** (3 of 9 products translated).

### 🇮🇹 Italian (`/it/`)

| Path | Type | Title |
|------|------|-------|
| `/it/` | Home | ETS Bertrand |
| `/it/chi-siamo/` | 📄 | Chi siamo |
| `/it/macchine-della-molluschicoltura/` | 🗂️ | Macchine della molluschicoltura (listing) |
| `/it/contattaci/` | ✉️ | Contattaci |
| `/it/project/` | 🗂️ | Progetti Archive |
| `/it/project/bollitore-modello-grande/` | 🏭 | Bollitore – Modello grande |
| `/it/project/bollitore-modello-piccolo/` | 🏭 | Bollitore – Modello piccolo |
| `/it/project/insacatrice-baby/` | 🏭 | Insaccatrice Baby |
| `/it/project/insaccatrice-junior/` | 🏭 | Insaccatrice Junior |
| `/it/project/lavatore-piatto/` | 🏭 | Lavatore piatto |
| `/it/project/lavatore-tubolare/` | 🏭 | Lavatore tubolare |
| `/it/project/schermo-vibrante-a-3-griglie/` | 🏭 | Schermo vibrante a 3 griglie |
| `/it/project/spogliarellista-per-tazze/` | 🏭 | Spogliarellista per tazze |
| `/it/project/tavole-gabbie-ostriche/` | 🏭 | Tavole & gabbie ostriche |

### ↪️ Noindex stubs (WordPress taxonomy — redirect away, not navigable)

`/author/abonnat/`, `/author/dmnstrateur/`, `/author/laetitia-edition/`,
`/layout_type/layout/`, `/layout_type/section/`, `/module_width/fullwidth/`,
`/module_width/regular/`, `/scope/global/`, `/scope/not_global/`.

---

## 2. Cross-language equivalence (hreflang)

| FR | EN | IT |
|----|----|----|
| `/` | `/en/` | `/it/` |
| `/a-propos/` | `/en/our-history/` | `/it/chi-siamo/` |
| `/particuliers/` | `/en/private-customers/` | — |
| `/gujan-mestras/` | `/en/gujan-mestras/` | — |
| `/marennes/` | `/en/marennes/` | — |
| `/machines-ostreicoles/` | `/en/oyster-equipment/` | `/it/macchine-della-molluschicoltura/` |
| `/contact/` | `/en/contact/` | `/it/contattaci/` |
| `/project/bouilloire-grand-modele/` | `/en/project/boiling-water-tank-large-size/` | `/it/project/bollitore-modello-grande/` |
| `/project/bouilloire-petit-modele/` | `/en/project/boiling-water-tank-small-size/` | `/it/project/bollitore-modello-piccolo/` |
| `/project/crible-vibrant-3-grilles/` | `/en/project/shell-shaker-grader-3-sieves/` | `/it/project/schermo-vibrante-a-3-griglie/` |
| `/project/detroqueuse-a-coupelles/` | — | `/it/project/spogliarellista-per-tazze/` |
| `/project/ensacheuse-baby/` | — | `/it/project/insacatrice-baby/` |
| `/project/ensacheuse-junior/` | — | `/it/project/insaccatrice-junior/` |
| `/project/laveur-plat-v2/` | — | `/it/project/lavatore-piatto/` |
| `/project/laveur-tubulaire/` | — | `/it/project/lavatore-tubolare/` |
| `/project/tables-cages-ostreicoles/` | — | `/it/project/tavole-gabbie-ostriche/` |
| FR-only topic/event pages | — | — |

---

## 3. Page content & images

Images are stored under `wp-content/uploads/YYYY/MM/`. Paths below are repo-root relative.

### Home — `/` , `/en/` , `/it/`
- **FR:** "Situé au cœur du premier bassin ostréicole français, les Etablissements
  Bertrand livrent internationnalement."
- **EN:** "Located at the heart of the first French oyster pool, the Bertrand
  Company supplies custom-made oyster tables all over Europe."
- **IT:** "Situato nel cuore del più importante bacino ostreario francese,
  l'azienda Bertrand consegna in tutta la Francia e tutto il mondo."
- Images: `2022/06/logo-blanc.png`, `2022/06/oyster.png`, `2022/06/pump.png`,
  `2022/06/shopping-basket.png`, `2022/06/gloves.png`,
  `2022/10/MARENNES-scaled-e1665661191565-1024x768-copie-e1665661633661.jpg`,
  `2022/10/GUJAN-001-e1665661137908.png`.

### Notre Histoire — `/a-propos/` (EN `/en/our-history/`, IT `/it/chi-siamo/`)
- About / company history.
- Images: `2022/12/HISTOIRE-1.jpg`, `2022/12/HISTOIRE-2.jpg`,
  `2022/12/HISTOIRE-3.jpg`, `2022/12/1627831292780.jpg`.

### Particuliers — `/particuliers/` (EN `/en/private-customers/`)
- Offer for private/individual customers.
- Images: `2023/01/20211007_172315-scaled.jpg`.

### Gujan-Mestras — `/gujan-mestras/` (EN `/en/gujan-mestras/`)
- Location page. Address: **Port du canal – 33470 GUJAN-MESTRAS**.
- Images: `2022/10/GUJAN-001-e1665661137908.png`, `2022/10/DSC_0051-scaled.jpg`,
  `2022/10/DSC_0053-scaled.jpg`, `2022/10/DSC_0055-scaled.jpg`,
  `2022/10/IMG_E9465-1-e1666341846996.jpg`.

### Marennes — `/marennes/` (EN `/en/marennes/`)
- Location page. Address: **La Chainade – 17320 MARENNES**.
- Images: `2022/12/MAGASIN-ETABLISSEMENT-BERTRAND-MARENNES.jpg`,
  `2022/12/MARENNES-VU-DU-CIEL.jpg`, `2022/12/PORT-DE-LA-TREMBLADE.jpg`.

### Machines listing — `/machines-ostreicoles/` (EN `/en/oyster-equipment/`, IT `/it/macchine-della-molluschicoltura/`)
- Grid of machine cards linking to each `/project/…` page.
- Images: `2023/04/ENSACHEUSE-JUNIOR-1-761x675.png`,
  `2023/01/Cage-pour-poche--815x675.jpg`, `2023/01/laveur-tubulaire-2-518x675.jpg`,
  `2023/01/laveur-plat-alu-v2.jpg`, `2023/01/1.1.jpg`,
  `2023/01/detroqueuse-1-770x675.jpg`,
  `2023/01/2022-FICHE-TECHNICO-CRIBLE-VIBRANT-3G-VF-1080x675.jpg`,
  `2022/10/BOUILLOIRE.jpg`, `2022/10/2022-FICHE-TECHNICO-BOUILLOIRE-GM-VF.jpg`.

### FR topic / supply pages
- **Tables ostréicoles** `/tables-ostreicoles/` — `2023/07/close-up-of-metal-structure-for-oyster-beds-aquaculture-in-waterford-ireland.jpg`, `2023/07/metal-structure-for-oyster-beds-aquaculture-in-waterford-ireland-cloudy-sky-woodstown-beach-waterford-ireland.jpg`.
- **Laveur Plat** `/laveur-plat/` — `2023/01/LAVEUR-PLAT-V2-3-scaled.jpg`, `2023/01/LAVEUR-PLAT-V2-5-scaled.jpg`, `2023/01/LAVEUR-PLAT-V2-6-scaled.jpg`, `2023/01/1.jpg`, `2023/01/2.jpg`, `2023/01/3.jpg`.
- **Les poches & paniers australiens** `/les-poches-paniers-australiens/` — `2022/10/woodstown-beach-...-collected-1-scaled.jpg`, `2023/05/Copy-of-File_000-1024x768-1.jpeg`.
- **Écologie en milieu ostréicole** `/ecologie-en-milieu-ostreicole/` — `2023/07/eau-bleue-transparente-mer-mediterranee-lumiere-du-soleil-plusieurs-bulles.jpg`, `2023/07/huitre-fraiche.jpg`, `2023/07/MARENNES-VU-DU-CIEL.jpg`.

### Journal & events
- **Journal** `/billets/` — index of news posts (thumbnails 400x250).
- **Salon de la Conchyliculture de Vannes** `/salon-de-la-conchyliculture-de-vannes/` — `2022/10/logo-salon-de-la-conchyliculture-2022.png`, `2023/01/20221004_112613-1-scaled.jpg`, `2023/01/20221004_112615-scaled.jpg`.
- **La conchyliculture à La Tremblade** `/salon-de-la-conchyliculture-de-la-tremblade/` — `2023/03/21.jpg`, `2023/03/machines-gerald-063.png`.
- **Semaine de l'industrie** `/semaine-de-lindustrie/` — `2023/12/semaine-de-lindustrie-affiche.jpg`, `2023/12/travailleur-semaine-industrie.jpg`, `2023/12/machine-semaine-industrie.jpg`.

### Contact — `/contact/` (EN `/en/contact/`, IT `/it/contattaci/`)
- **Gujan-Mestras:** Port du canal – 33470 GUJAN-MESTRAS · ☎ 05 56 66 59 37 · ✉ gujan@ets-bertrand.com
- **Marennes:** La Chainade – 17320 MARENNES · ☎ 05 46 85 00 36 · ✉ marennes@ets-bertrand.com

### Mentions légales — `/mentions-legales/`
- Legal notices. Image: `2023/01/Capture-decran-2023-01-27-a-09.09.24.jpg`.

---

## 4. Machine product pages — images & datasheet PDFs

Each machine page links **one** datasheet PDF (the "fiche technique" / "scheda
tecnica" download). FR datasheets use `…-VF`, English `…-VA`, Italian `…-IT`.

### 🇫🇷 French
| Page | Datasheet PDF | Gallery images |
|------|---------------|----------------|
| `bouilloire-grand-modele` | `wp-content/uploads/2023/01/2022-FICHE-TECHNICO-BOUILLOIRE-GM-VF.pdf` | `2022/10/2022-FICHE-TECHNICO-BOUILLOIRE-GM-VF.jpg`, `2023/01/Bruleur.jpg`, `2023/01/Convoyeur.jpg`, `2023/01/Goulotte.jpg` |
| `bouilloire-petit-modele` | `wp-content/uploads/2023/04/2023-FICHE-TECHNICO-BOUILLOIRE-PM-VF.pdf` | `2022/10/BOUILLOIRE.jpg`, `2023/01/bouilloire-pm.jpg`, `2023/01/panier-bouilloire-pm.jpg`, `2023/01/rampe-de-glissement-bouilloire-PM-.jpg` |
| `crible-vibrant-3-grilles` | `wp-content/uploads/2023/01/2022-FICHE-TECHNICO-CRIBLE-VIBRANT-3G-VF.pdf` | `2023/01/2022-FICHE-TECHNICO-CRIBLE-VIBRANT-3G-VF.jpg` (+ `-2`,`-3`,`-4`) |
| `detroqueuse-a-coupelles` | `wp-content/uploads/2023/04/2023-FICHE-TECHNICO-DETROQUEUSE-A-COUPELLES-VF.pdf` | `2023/01/detroqueuse-1.jpg` … `detroqueuse-7.jpg` |
| `ensacheuse-baby` | `wp-content/uploads/2023/04/2023-FICHE-TECHNICO-ENSACHEUSE-VF.pdf` | `2023/01/1.1.jpg`, `2023/01/ensacheuse.jpg`, `2023/01/ensacheuse-2.jpg` |
| `ensacheuse-junior` | `wp-content/uploads/2023/04/2023-FICHE-TECHNICO-ENSACHEUSE-JUNIOR-VF.pdf` | `2023/04/ENSACHEUSE-JUNIOR-1.png` (+ `-2`,`-3`) |
| `laveur-plat-v2` | `wp-content/uploads/2023/04/2023-FICHE-TECHNICO-LAVEUR-PLAT-V2-VF.pdf` | `2023/01/laveur-plat-alu-v2.jpg`, `2023/01/1.jpg`, `2023/01/2.jpg`, `2023/01/3.jpg`, `2023/01/TABLETTE-RECUPERATION.jpg` |
| `laveur-tubulaire` | `wp-content/uploads/2023/04/2023-FICHE-TECHNICO-LAVEUR-TUBULAIRE-VF.pdf` | `2023/01/laveur-tubulaire-1.jpg`, `2023/01/laveur-tubulaire-2.jpg` |
| `tables-cages-ostreicoles` | `wp-content/uploads/2023/01/2022-FICHE-TECHNICO-TABLES-OSTREICOLES.pdf` | `2023/01/Cage-pour-poche-.jpg`, `Table-traditionelle-.jpg`, `Table-double-pour-poche-.jpg`, `Pied-standard_.jpg`, `Pied-arcachon_.jpg`, `Pied-croix_.jpg`, `Pied-crochet_.jpg`, `Pied-fourchette-int_.jpg`, `Pied-fourchette-ext.jpg` |

### 🇬🇧 English
| Page | Datasheet PDF |
|------|---------------|
| `en/project/boiling-water-tank-large-size` | `wp-content/uploads/2023/01/2022-FICHE-TECHNICO-BOUILLOIRE-GM-VF.pdf` *(FR datasheet — no EN version linked)* |
| `en/project/boiling-water-tank-small-size` | `wp-content/uploads/2023/06/2023-FICHE-TECHNICO-BOUILLOIRE-PM-VA.pdf` |
| `en/project/shell-shaker-grader-3-sieves` | `wp-content/uploads/2023/01/2022-FICHE-TECHNICO-CRIBLE-VIBRANT-3G-VF.pdf` *(FR datasheet)* |

### 🇮🇹 Italian
| Page | Datasheet PDF |
|------|---------------|
| `it/project/bollitore-modello-grande` | `wp-content/uploads/2023/01/2022-FICHE-TECHNICO-BOUILLOIRE-GM-VF.pdf` *(FR datasheet)* |
| `it/project/bollitore-modello-piccolo` | *(none linked)* |
| `it/project/insacatrice-baby` | `wp-content/uploads/2025/05/2022-SCHEDA-TECNICA-INSACCATRICE-BABY-IT.pdf` |
| `it/project/insaccatrice-junior` | `wp-content/uploads/2025/05/2023-SCHEDA-TECNICA-INSACCATRICE-JUNIOR-IT.pdf` |
| `it/project/lavatore-piatto` | `wp-content/uploads/2025/05/2022-SCHEDA-TECNICA-LAVATORE-PIATTO-V2-IT.pdf` |
| `it/project/lavatore-tubolare` | `wp-content/uploads/2025/05/2022-SCHEDA-TECNICA-LAVATORE-TUBOLARE-IT.pdf` |
| `it/project/schermo-vibrante-a-3-griglie` | `wp-content/uploads/2023/01/2022-FICHE-TECHNICO-CRIBLE-VIBRANT-3G-VF.pdf` *(FR datasheet)* |
| `it/project/spogliarellista-per-tazze` | *(none linked)* |
| `it/project/tavole-gabbie-ostriche` | `wp-content/uploads/2023/01/2022-FICHE-TECHNICO-TABLES-OSTREICOLES.pdf` *(FR datasheet)* |

---

## 5. PDF assets inventory

### Product catalogues — `/catalog/` (standalone full catalogues, ~4–6 MB each)
- `catalog/CATALOGUE-ETS-BERTRAND-2025-FR.pdf` (French)
- `catalog/CATALOGUE-ETS-BERTRAND-2025-UK.pdf` (English)
- `catalog/CATALOGUE-ETS-BERTRAND-2025-IT.pdf` (Italian)

> These three catalogues are present in the repo but are **not referenced from any
> HTML page**; they are direct-download files.

### Datasheets — `wp-content/uploads/`
- **2022 FR** (`…-VF`, in `2023/01/`): BOUILLOIRE-GM, BOUILLOIRE-PM, BOUILLOIRE,
  CRIBLE-VIBRANT-3G, CRIBLE-VIBRANT-4G, DETROQUEUSE-A-COUPELLES (+`-1`),
  ENSACHEUSE (+`-1`), LAVEUR-PLAT, LAVEUR-PLAT-V2, LAVEUR-TUBULAIRE, TABLES-OSTREICOLES.
- **2023 FR** (`…-VF`, in `2023/04/`): BOUILLOIRE-GM, BOUILLOIRE-PM,
  CRIBLE-VIBRANT-3G, CRIBLE-VIBRANT-4G, DETROQUEUSE-A-COUPELLES,
  ENSACHEUSE, ENSACHEUSE-JUNIOR, LAVEUR-PLAT-V2, LAVEUR-TUBULAIRE.
- **2023 EN** (`…-VA`, in `2023/06/`): BOUILLOIRE-GM, BOUILLOIRE-PM,
  CRIBLE-VIBRANT-3G, CRIBLE-VIBRANT-4G, DETROQUEUSE-A-COUPELLES (+`-1`),
  ENSACHEUSE (+`-1`..`-4`), LAVEUR-TUBULAIRE, LAVEUR-V2, TABLES-OSTREICOLES.
- **IT** (`…-IT`, in `2025/05/`): INSACCATRICE-BABY, INSACCATRICE-JUNIOR (2023),
  LAVATORE-PIATTO-V2, LAVATORE-TUBOLARE, RACCOGLIATRICE-DI-LARVE,
  TAVOLE-OSTRICHE, VASCA-DI-SBOLLENTATURA-GM, VASCA-DI-SBOLLENTATURA-PM,
  VIBROVAGLIO-3-GRIGLIE, VIBROVAGLIO-4G (most also have a `-1`/`-2` duplicate).

> Many datasheets exist as multiple revisions/duplicates in uploads; only the
> versions listed in **§4** are actually linked from product pages.

---

## 6. Crawl / hosting / theme files

- **Sitemaps:** `sitemap.xml`, `sitemap_index.xml`, `page-sitemap.xml`,
  `post-sitemap.xml`, `project-sitemap.xml`, `main-sitemap.xsl` (Yoast SEO).
- **Config:** `robots.txt` (allows all; points to `sitemap_index.xml`),
  `CNAME` (`ets-bertrand.com`), `.nojekyll`, `LICENSE`, `README.md`.
- **Assets / theme:** `wp-content/uploads/` (media + PDFs),
  `wp-content/themes/Divi/`, `wp-content/plugins/`, `wp-includes/`.

---

## 7. Notes & caveats

- **Languages are not parallel:** FR has 9 machines + topic/event pages; IT has
  9 machines (no topic/event pages); EN has only **3** machines.
- **Several machine pages link the FR datasheet** even in EN/IT
  (boiling-water-tank-large-size, shell-shaker, bollitore-grande,
  schermo-vibrante, tavole-gabbie). Two IT machines have **no datasheet**
  (bollitore-modello-piccolo, spogliarellista-per-tazze).
- The **2025 catalogues** (`/catalog/`) are the most complete trilingual asset
  but are not linked from the site navigation.
- Static export: dynamic behaviours (mobile menu, machine-grid layout) rely on
  small in-repo CSS/JS shims rather than the original LiteSpeed combined bundles,
  which were not exported.
