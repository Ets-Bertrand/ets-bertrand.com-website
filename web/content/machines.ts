import type { Machine } from '@/lib/types';

const L = (fr: string, en: string, it: string) => ({ fr, en, it });

function ds(key: string, locales: Array<'fr' | 'en' | 'it'>) {
  const out: Partial<Record<'fr' | 'en' | 'it', string>> = {};
  for (const l of locales) out[l] = `/datasheets/${key}-${l}.pdf`;
  return out;
}

function img(src: string, name: { fr: string; en: string; it: string }) {
  return { src, alt: name };
}

export const machines: Machine[] = [
  {
    key: 'laveur-tubulaire',
    slug: L('laveur-tubulaire', 'tubular-washer', 'lavatrice-tubolare'),
    name: L('Laveur tubulaire', 'Tubular washer', 'Lavatrice tubolare'),
    tagline: L(
      'Lavage simple et efficace des huîtres',
      'Simple, effective oyster washing',
      'Lavaggio semplice ed efficace delle ostriche'
    ),
    description: L(
      "Le laveur tubulaire nettoie les huîtres en continu grâce à un tambour rotatif inox. Un lavage homogène et respectueux du coquillage, pensé pour un débit soutenu.\n\nRobuste et simple d'entretien, il s'intègre facilement dans une chaîne de conditionnement.",
      'The tubular washer cleans oysters continuously thanks to a rotating stainless-steel drum. Even, shell-friendly washing designed for sustained throughput.\n\nRugged and easy to maintain, it fits neatly into a packing line.',
      "La lavatrice tubolare pulisce le ostriche in continuo grazie a un tamburo rotante in acciaio inox. Un lavaggio omogeneo e rispettoso del mollusco, pensato per portate elevate.\n\nRobusta e facile da mantenere, si integra facilmente in una linea di confezionamento."
    ),
    specs: [
      { label: L('Matériau', 'Material', 'Materiale'), value: L('Inox', 'Stainless steel', 'Acciaio inox') },
      { label: L('Fonctionnement', 'Operation', 'Funzionamento'), value: L('Continu', 'Continuous', 'Continuo') },
      { label: L('Alimentation', 'Power', 'Alimentazione'), value: L('Électrique', 'Electric', 'Elettrica') },
    ],
    images: [
      img('/images/machines/laveur-tubulaire-1.jpg', L('Laveur tubulaire', 'Tubular washer', 'Lavatrice tubolare')),
      img('/images/machines/laveur-tubulaire-2.jpg', L('Laveur tubulaire', 'Tubular washer', 'Lavatrice tubolare')),
    ],
    datasheets: ds('laveur-tubulaire', ['fr', 'en', 'it']),
    featured: true,
    related: ['laveur-plat', 'crible-3g'],
  },
  {
    key: 'laveur-plat',
    slug: L('laveur-plat', 'flat-washer', 'lavatrice-piana'),
    name: L('Laveur plat', 'Flat washer', 'Lavatrice piana'),
    tagline: L(
      'Lavage en douceur avec tablette de récupération',
      'Gentle washing with recovery tray',
      'Lavaggio delicato con vassoio di recupero'
    ),
    description: L(
      "Conçu pour répondre aux attentes des ostréiculteurs, le laveur plat (V2) lave les huîtres à plat et les achemine en douceur. La tablette de récupération limite les pertes.\n\nUne construction aluminium/inox légère et durable.",
      'Designed around oyster farmers\u2019 needs, the flat washer (V2) washes oysters flat and conveys them gently. The recovery tray limits losses.\n\nA light, durable aluminium/stainless build.',
      "Progettata per rispondere alle esigenze degli ostricoltori, la lavatrice piana (V2) lava le ostriche in piano e le trasporta delicatamente. Il vassoio di recupero limita le perdite.\n\nUna costruzione in alluminio/inox leggera e durevole."
    ),
    specs: [
      { label: L('Matériau', 'Material', 'Materiale'), value: L('Aluminium / inox', 'Aluminium / stainless', 'Alluminio / inox') },
      { label: L('Version', 'Version', 'Versione'), value: L('V2', 'V2', 'V2') },
      { label: L('Option', 'Option', 'Opzione'), value: L('Tablette de récupération', 'Recovery tray', 'Vassoio di recupero') },
    ],
    images: [
      img('/images/machines/laveur-plat-1.jpg', L('Laveur plat', 'Flat washer', 'Lavatrice piana')),
      img('/images/machines/laveur-plat-2.jpg', L('Laveur plat', 'Flat washer', 'Lavatrice piana')),
      img('/images/machines/laveur-plat-3.jpg', L('Laveur plat', 'Flat washer', 'Lavatrice piana')),
    ],
    datasheets: ds('laveur-plat', ['fr', 'en', 'it']),
    featured: true,
    related: ['laveur-tubulaire', 'detroqueuse'],
  },
  {
    key: 'crible-3g',
    slug: L('crible-vibrant-3-grilles', 'vibrating-grader-3-sieves', 'vibrovaglio-3-griglie'),
    name: L('Crible vibrant 3 grilles', 'Vibrating grader, 3 sieves', 'Vibrovaglio a 3 griglie'),
    tagline: L(
      'Criblage précis sur 3 grilles avec 3 sorties',
      'Precise grading over 3 sieves with 3 outlets',
      'Vagliatura precisa su 3 griglie con 3 uscite'
    ),
    description: L(
      'Le crible vibrant trie et calibre les huîtres sur trois grilles interchangeables, pour un calibrage régulier et rapide.\n\nVibration réglable et grilles adaptées à chaque calibre.',
      'The vibrating grader sorts and grades oysters over three interchangeable sieves, for fast, consistent grading.\n\nAdjustable vibration and sieves to match each size.',
      'Il vibrovaglio seleziona e calibra le ostriche su tre griglie intercambiabili, per una calibratura rapida e regolare.\n\nVibrazione regolabile e griglie adatte a ogni calibro.'
    ),
    specs: [
      { label: L('Grilles', 'Sieves', 'Griglie'), value: L('3 interchangeables', '3 interchangeable', '3 intercambiabili') },
      { label: L('Vibration', 'Vibration', 'Vibrazione'), value: L('Réglable', 'Adjustable', 'Regolabile') },
      { label: L('Matériau', 'Material', 'Materiale'), value: L('Inox', 'Stainless steel', 'Acciaio inox') },
    ],
    images: [
      img('/images/machines/crible-3g-1.jpg', L('Crible vibrant 3 grilles', 'Vibrating grader 3 sieves', 'Vibrovaglio a 3 griglie')),
      img('/images/machines/crible-3g-2.jpg', L('Crible vibrant 3 grilles', 'Vibrating grader 3 sieves', 'Vibrovaglio a 3 griglie')),
    ],
    datasheets: ds('crible-3g', ['fr', 'en', 'it']),
    featured: true,
    related: ['detroqueuse', 'laveur-tubulaire'],
  },
  {
    key: 'detroqueuse',
    slug: L('detroqueuse-a-coupelles', 'cup-destocker', 'sgranatrice-coppette'),
    name: L('Détroqueuse à coupelles', 'Cup destocker', 'Sgranatrice a coppette'),
    tagline: L(
      'Récupération du naissain naturel',
      'Recovery of natural spat',
      'Recupero del novellame naturale'
    ),
    description: L(
      'La détroqueuse sépare efficacement les huîtres élevées sur coupelles, en préservant le coquillage. Un gain de temps important au détroquage.\n\nMécanique fiable et entretien réduit.',
      'The destocker efficiently separates cup-grown oysters while protecting the shell. A major time saver at destocking.\n\nReliable mechanics and low maintenance.',
      'La sgranatrice separa in modo efficiente le ostriche allevate su coppette, preservando il guscio. Un notevole risparmio di tempo nel distacco.\n\nMeccanica affidabile e manutenzione ridotta.'
    ),
    specs: [
      { label: L('Application', 'Application', 'Applicazione'), value: L('Coupelles', 'Cups', 'Coppette') },
      { label: L('Matériau', 'Material', 'Materiale'), value: L('Inox', 'Stainless steel', 'Acciaio inox') },
      { label: L('Entretien', 'Maintenance', 'Manutenzione'), value: L('Réduit', 'Low', 'Ridotta') },
    ],
    images: [
      img('/images/machines/detroqueuse-1.jpg', L('Détroqueuse à coupelles', 'Cup destocker', 'Sgranatrice a coppette')),
      img('/images/machines/detroqueuse-2.jpg', L('Détroqueuse à coupelles', 'Cup destocker', 'Sgranatrice a coppette')),
      img('/images/machines/detroqueuse-3.jpg', L('Détroqueuse à coupelles', 'Cup destocker', 'Sgranatrice a coppette')),
    ],
    datasheets: ds('detroqueuse', ['fr', 'en']),
    related: ['crible-3g', 'laveur-plat'],
  },
  {
    key: 'ensacheuse-baby',
    slug: L('ensacheuse-baby', 'bagging-machine-baby', 'insacchettatrice-baby'),
    name: L('Ensacheuse Baby', 'Baby bagging machine', 'Insacchettatrice Baby'),
    tagline: L('Mise en poche compacte', 'Compact bagging', 'Insacchettamento compatto'),
    description: L(
      "L'ensacheuse Baby facilite la mise en poche des huîtres dans un format compact, idéale pour les petites et moyennes exploitations.\n\nSimple, rapide et ergonomique.",
      'The Baby bagging machine streamlines oyster bagging in a compact format, ideal for small and mid-size farms.\n\nSimple, fast and ergonomic.',
      "L'insacchettatrice Baby semplifica l'insacchettamento delle ostriche in un formato compatto, ideale per piccole e medie aziende.\n\nSemplice, rapida ed ergonomica."
    ),
    specs: [
      { label: L('Format', 'Format', 'Formato'), value: L('Compact', 'Compact', 'Compatto') },
      { label: L('Usage', 'Use', 'Uso'), value: L('Petites/moyennes exploitations', 'Small/mid farms', 'Piccole/medie aziende') },
    ],
    images: [
      img('/images/machines/ensacheuse-baby-1.jpg', L('Ensacheuse Baby', 'Baby bagging machine', 'Insacchettatrice Baby')),
      img('/images/machines/ensacheuse-baby-2.jpg', L('Ensacheuse Baby', 'Baby bagging machine', 'Insacchettatrice Baby')),
    ],
    datasheets: ds('ensacheuse-baby', ['fr', 'en', 'it']),
    related: ['ensacheuse-junior', 'crible-3g'],
  },
  {
    key: 'ensacheuse-junior',
    slug: L('ensacheuse-junior', 'bagging-machine-junior', 'insacchettatrice-junior'),
    name: L('Ensacheuse Junior', 'Junior bagging machine', 'Insacchettatrice Junior'),
    tagline: L('Cadence accrue pour la mise en poche', 'Higher-output bagging', 'Maggiore produttività di insacco'),
    description: L(
      "L'ensacheuse Junior augmente la cadence de mise en poche tout en restant simple à utiliser. Pensée pour les exploitations à plus fort volume.\n\nConstruction robuste et fiable.",
      'The Junior bagging machine increases bagging output while staying easy to use. Built for higher-volume farms.\n\nRugged, reliable construction.',
      "L'insacchettatrice Junior aumenta la produttività di insacco rimanendo semplice da usare. Pensata per aziende con volumi maggiori.\n\nCostruzione robusta e affidabile."
    ),
    specs: [
      { label: L('Cadence', 'Output', 'Produttività'), value: L('Élevée', 'High', 'Elevata') },
      { label: L('Usage', 'Use', 'Uso'), value: L('Gros volumes', 'High volume', 'Grandi volumi') },
    ],
    images: [
      img('/images/machines/ensacheuse-junior-1.png', L('Ensacheuse Junior', 'Junior bagging machine', 'Insacchettatrice Junior')),
      img('/images/machines/ensacheuse-junior-2.png', L('Ensacheuse Junior', 'Junior bagging machine', 'Insacchettatrice Junior')),
    ],
    datasheets: ds('ensacheuse-junior', ['fr', 'it']),
    related: ['ensacheuse-baby', 'crible-3g'],
  },
  {
    key: 'bouilloire-gm',
    slug: L('bouilloire-grand-modele', 'boiling-tank-large', 'bollitore-grande'),
    name: L('Bouilloire — grand modèle', 'Boiling tank — large', 'Bollitore — modello grande'),
    tagline: L('Forte capacité de traitement thermique', 'High-capacity heat treatment', 'Trattamento termico ad alta capacità'),
    description: L(
      'La bouilloire grand modèle assure un traitement thermique à forte capacité, avec brûleur, convoyeur et goulotte intégrés.\n\nConçue pour un usage intensif.',
      'The large boiling tank delivers high-capacity heat treatment, with integrated burner, conveyor and chute.\n\nBuilt for intensive use.',
      'Il bollitore modello grande garantisce un trattamento termico ad alta capacità, con bruciatore, convogliatore e scivolo integrati.\n\nProgettato per un uso intensivo.'
    ),
    specs: [
      { label: L('Modèle', 'Model', 'Modello'), value: L('Grand', 'Large', 'Grande') },
      { label: L('Équipements', 'Equipment', 'Dotazioni'), value: L('Brûleur, convoyeur, goulotte', 'Burner, conveyor, chute', 'Bruciatore, convogliatore, scivolo') },
    ],
    images: [
      img('/images/machines/bouilloire-gm-1.jpg', L('Bouilloire grand modèle', 'Large boiling tank', 'Bollitore grande')),
      img('/images/machines/bouilloire-gm-2.jpg', L('Brûleur', 'Burner', 'Bruciatore')),
      img('/images/machines/bouilloire-gm-3.jpg', L('Convoyeur', 'Conveyor', 'Convogliatore')),
    ],
    datasheets: ds('bouilloire-gm', ['fr', 'en', 'it']),
    related: ['bouilloire-pm', 'crible-3g'],
  },
  {
    key: 'bouilloire-pm',
    slug: L('bouilloire-petit-modele', 'boiling-tank-small', 'bollitore-piccolo'),
    name: L('Bouilloire — petit modèle', 'Boiling tank — small', 'Bollitore — modello piccolo'),
    tagline: L('Traitement thermique compact', 'Compact heat treatment', 'Trattamento termico compatto'),
    description: L(
      'La bouilloire petit modèle offre un traitement thermique efficace dans un encombrement réduit, avec panier et rampe de glissement.\n\nIdéale pour les espaces contraints.',
      'The small boiling tank offers effective heat treatment in a small footprint, with basket and sliding ramp.\n\nIdeal for tight spaces.',
      'Il bollitore modello piccolo offre un trattamento termico efficace in spazi ridotti, con cesto e rampa di scorrimento.\n\nIdeale per spazi limitati.'
    ),
    specs: [
      { label: L('Modèle', 'Model', 'Modello'), value: L('Petit', 'Small', 'Piccolo') },
      { label: L('Équipements', 'Equipment', 'Dotazioni'), value: L('Panier, rampe', 'Basket, ramp', 'Cesto, rampa') },
    ],
    images: [
      img('/images/machines/bouilloire-pm-1.jpg', L('Bouilloire petit modèle', 'Small boiling tank', 'Bollitore piccolo')),
      img('/images/machines/bouilloire-pm-2.jpg', L('Bouilloire petit modèle', 'Small boiling tank', 'Bollitore piccolo')),
      img('/images/machines/bouilloire-pm-3.jpg', L('Panier', 'Basket', 'Cesto')),
    ],
    datasheets: ds('bouilloire-pm', ['fr', 'en', 'it']),
    related: ['bouilloire-gm', 'laveur-tubulaire'],
  },
];

/**
 * Tables & cages — presented on its own page (/tables-cages), not in the
 * machines catalogue.
 */
export const tablesCages: Machine = {
  key: 'tables-cages',
  slug: L('tables-cages-ostreicoles', 'oyster-tables-cages', 'tavoli-gabbie-ostriche'),
  name: L('Tables & cages ostréicoles', 'Oyster tables & cages', 'Tavoli e gabbie per ostriche'),
  tagline: L('Structures d\u2019élevage adaptées à votre besoin', 'Growing structures tailored to your needs', 'Strutture di allevamento su misura per le vostre esigenze'),
  description: L(
    "Tables traditionnelles, tables doubles, cages à poches et une gamme complète de pieds (standard, Arcachon, croix, crochet, fourchette) pour équiper vos parcs, en fabrication sur mesure selon votre bassin.\n\nGrâce à une cadreuse numérique dernier cri, nous pouvons créer des modèles uniques aux formes impossibles à réaliser avec du matériel traditionnel, qui les rendent plus légères et bien plus résistantes.\n\nNous sommes spécialisés dans les tables doubles et les cages pour les nouvelles techniques d'élevage (paniers australiens, poches avec flotteurs), manipulables à la grue ou au chariot élévateur.",
    'Traditional tables, double tables, bag cages and a full range of feet (standard, Arcachon, cross, hook, fork) to equip your beds, all made to measure for your basin.\n\nThanks to a state-of-the-art digital frame-bending machine, we can create unique models with shapes impossible to achieve with traditional equipment, making them lighter and far more resistant.\n\nWe specialise in double tables and cages for the latest farming techniques (Australian baskets, floating bags), handled by crane or forklift.',
    "Tavoli tradizionali, tavoli doppi, gabbie per sacchi e una gamma completa di piedi (standard, Arcachon, croce, gancio, forcella) per attrezzare i vostri parchi, con produzione su misura per il vostro bacino.\n\nGrazie a una piegatrice digitale all'avanguardia, possiamo creare modelli unici con forme impossibili da realizzare con attrezzature tradizionali, che li rendono più leggeri e molto più resistenti.\n\nSiamo specializzati in tavoli doppi e gabbie per le nuove tecniche di allevamento (ceste australiane, sacchi con galleggianti), movimentabili con gru o carrello elevatore."
  ),
  specs: [
    { label: L('Types', 'Types', 'Tipi'), value: L('Tables, tables doubles, cages', 'Tables, double tables, cages', 'Tavoli, tavoli doppi, gabbie') },
    { label: L('Pieds', 'Feet', 'Piedi'), value: L('Standard, Arcachon, croix, crochet, fourchette', 'Standard, Arcachon, cross, hook, fork', 'Standard, Arcachon, croce, gancio, forcella') },
  ],
  images: [
    img('/images/fournitures/tables.jpg', L('Tables ostréicoles', 'Oyster tables', 'Tavoli per ostriche')),
    img('/images/fournitures/poches-paniers.jpg', L('Poches et paniers', 'Bags and baskets', 'Sacchi e ceste')),
    img('/images/machines/tables-cages-1.jpg', L('Cage pour poche', 'Bag cage', 'Gabbia per sacco')),
    img('/images/machines/tables-cages-2.jpg', L('Table traditionnelle', 'Traditional table', 'Tavolo tradizionale')),
    img('/images/machines/tables-cages-3.jpg', L('Table double pour poche', 'Double bag table', 'Tavolo doppio per sacco')),
  ],
  datasheets: ds('tables-cages', ['fr', 'en', 'it']),
};

export const machineKeys = machines.map((m) => m.key);

export function getMachine(key: string) {
  return machines.find((m) => m.key === key);
}

export function getMachineBySlug(locale: 'fr' | 'en' | 'it', slug: string) {
  return machines.find((m) => m.slug[locale] === slug);
}
