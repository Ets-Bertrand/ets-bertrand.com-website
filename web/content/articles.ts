import type { Article } from '@/lib/types';

const L = (fr: string, en: string, it: string) => ({ fr, en, it });

export const articles: Article[] = [
  {
    key: 'semaine-industrie',
    slug: L('semaine-de-lindustrie', 'industry-week', 'settimana-industria'),
    title: L("Semaine de l'industrie", 'Industry week', "Settimana dell'industria"),
    date: '2023-12-22',
    excerpt: L(
      "Les Établissements Bertrand ouvrent leurs ateliers pour la Semaine de l'industrie.",
      'Établissements Bertrand opens its workshops for Industry Week.',
      "Gli Établissements Bertrand aprono le loro officine per la Settimana dell'industria."
    ),
    body: L(
      "À l'occasion de la Semaine de l'industrie, nous avons ouvert nos ateliers pour faire découvrir nos métiers et nos machines ostréicoles.\n\nUn moment d'échange autour du savoir-faire et de la fabrication française.",
      'For Industry Week, we opened our workshops to showcase our trades and our oyster-farming machines.\n\nA moment of exchange around craftsmanship and French manufacturing.',
      "In occasione della Settimana dell'industria, abbiamo aperto le nostre officine per far conoscere i nostri mestieri e le nostre macchine.\n\nUn momento di scambio attorno al savoir-faire e alla produzione francese."
    ),
    image: { src: '/images/articles/semaine-industrie.jpg', alt: L("Semaine de l'industrie", 'Industry week', "Settimana dell'industria") },
  },
  {
    key: 'salon-tremblade',
    slug: L('conchyliculture-la-tremblade', 'shellfish-show-la-tremblade', 'molluschicoltura-la-tremblade'),
    title: L('La conchyliculture à La Tremblade', 'Shellfish farming at La Tremblade', 'La molluschicoltura a La Tremblade'),
    date: '2023-03-27',
    excerpt: L(
      'Retour sur le salon de la conchyliculture de La Tremblade.',
      'Highlights from the La Tremblade shellfish show.',
      'Resoconto del salone della molluschicoltura di La Tremblade.'
    ),
    body: L(
      'Nous étions présents au salon de la conchyliculture de La Tremblade pour présenter nos dernières machines.\n\nMerci à tous les visiteurs et partenaires rencontrés.',
      'We attended the La Tremblade shellfish show to present our latest machines.\n\nThank you to all the visitors and partners we met.',
      'Eravamo presenti al salone della molluschicoltura di La Tremblade per presentare le nostre ultime macchine.\n\nGrazie a tutti i visitatori e partner incontrati.'
    ),
    image: { src: '/images/articles/tremblade.jpg', alt: L('Salon de La Tremblade', 'La Tremblade show', 'Salone di La Tremblade') },
  },
  {
    key: 'salon-vannes',
    slug: L('salon-conchyliculture-vannes', 'shellfish-show-vannes', 'salone-molluschicoltura-vannes'),
    title: L('Salon de la conchyliculture de Vannes', 'Vannes shellfish show', 'Salone della molluschicoltura di Vannes'),
    date: '2022-10-05',
    excerpt: L(
      'Les Établissements Bertrand au salon de la conchyliculture de Vannes.',
      'Établissements Bertrand at the Vannes shellfish show.',
      'Gli Établissements Bertrand al salone della molluschicoltura di Vannes.'
    ),
    body: L(
      'Nous avons participé au salon de la conchyliculture de Vannes les 4 et 5 octobre.\n\nUn rendez-vous important pour rencontrer la filière et échanger sur les besoins des exploitants.',
      'We took part in the Vannes shellfish show on 4 and 5 October.\n\nAn important event to meet the industry and discuss farmers\u2019 needs.',
      'Abbiamo partecipato al salone della molluschicoltura di Vannes il 4 e 5 ottobre.\n\nUn appuntamento importante per incontrare il settore e discutere le esigenze degli operatori.'
    ),
    image: { src: '/images/articles/salon-vannes.jpg', alt: L('Salon de Vannes', 'Vannes show', 'Salone di Vannes') },
  },
  {
    key: 'ecologie',
    slug: L('ecologie-en-milieu-ostreicole', 'ecology-in-oyster-farming', 'ecologia-in-ostricoltura'),
    title: L('Écologie en milieu ostréicole', 'Ecology in oyster farming', 'Ecologia in ostricoltura'),
    date: '2023-08-16',
    excerpt: L(
      "L'huître, sentinelle de la qualité de l'eau.",
      'The oyster, a sentinel of water quality.',
      "L'ostrica, sentinella della qualità dell'acqua."
    ),
    body: L(
      "L'ostréiculture est intimement liée à la qualité du milieu marin. L'huître filtre l'eau et témoigne de la santé de son environnement.\n\nUn enjeu au cœur de notre métier et de nos équipements.",
      'Oyster farming is closely tied to the quality of the marine environment. The oyster filters water and reflects the health of its surroundings.\n\nA stake at the heart of our trade and our equipment.',
      "L'ostricoltura è strettamente legata alla qualità dell'ambiente marino. L'ostrica filtra l'acqua e testimonia la salute del suo ambiente.\n\nUna sfida al centro del nostro mestiere e delle nostre attrezzature."
    ),
    image: { src: '/images/articles/ecologie.jpg', alt: L('Écologie en milieu ostréicole', 'Ecology in oyster farming', 'Ecologia in ostricoltura') },
  },
];

export function getArticleBySlug(locale: 'fr' | 'en' | 'it', slug: string) {
  return articles.find((a) => a.slug[locale] === slug);
}
