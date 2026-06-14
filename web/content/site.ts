import type { SiteLocation } from '@/lib/types';

export const social = {
  facebook: 'https://www.facebook.com/EtablissementsBertrand',
  instagram: 'https://www.instagram.com/ets_bertrand/',
  linkedin: 'https://www.linkedin.com/company/etsbertrand/',
};

export const catalogues = {
  fr: '/catalogues/catalogue-2025-fr.pdf',
  en: '/catalogues/catalogue-2025-en.pdf',
  it: '/catalogues/catalogue-2025-it.pdf',
};

export const locations: SiteLocation[] = [
  {
    key: 'marennes',
    name: 'Marennes',
    tradeName: 'Roger Bertrand',
    description: {
      fr: `Entreprise emblématique du Bassin Marennes Oléron, les Établissements Bertrand sont les précurseurs en matière de machines et tables ostréicoles. Depuis 60 ans aux côtés des conchyliculteurs, notre magasin vous accueille toute l'année pour répondre à vos besoins.

Les Établissements Bertrand c'est aussi un bureau d'étude et un atelier composé d'une équipe de soudeurs et techniciens confirmés qui conçoivent, fabriquent et livrent sur toute la France : tables et cages ostréicoles sur mesure, ainsi que cribles, ensacheuses, détroqueuses à coupelles, bouilloires, laveurs, trémies et tables de tri et d'emballage.

Une équipe de techniciens qualifiés intervient également sur le secteur pour assurer le Service Après-Vente afin de compléter l'offre globale.`,
      en: `An emblematic company of the Marennes-Oléron basin, Établissements Bertrand are pioneers in oyster-farming machines and tables. Alongside shellfish farmers for 60 years, our shop welcomes you all year round to meet your needs.

Établissements Bertrand is also a design office and a workshop with a team of experienced welders and technicians who design, manufacture and deliver throughout France: custom oyster tables and cages, as well as graders, bagging machines, cup declumpers, boilers, washers, hoppers, and sorting and packing tables.

A team of qualified technicians also works in the area to provide after-sales service and round out the complete offering.`,
      it: `Azienda emblematica del bacino di Marennes-Oléron, gli Établissements Bertrand sono precursori in fatto di macchine e tavoli per l'ostricoltura. Da 60 anni al fianco dei molluschicoltori, il nostro negozio vi accoglie tutto l'anno per rispondere alle vostre esigenze.

Gli Établissements Bertrand sono anche un ufficio tecnico e un'officina con una squadra di saldatori e tecnici esperti che progettano, fabbricano e consegnano in tutta la Francia: tavoli e gabbie per ostriche su misura, oltre a vagli, insacchatrici, distaccatrici a coppette, caldaie, lavatrici, tramogge e tavoli di selezione e confezionamento.

Una squadra di tecnici qualificati interviene inoltre sul territorio per garantire il servizio post-vendita e completare l'offerta globale.`,
    },
    address: {
      fr: 'La Chainade',
      en: 'La Chainade',
      it: 'La Chainade',
    },
    postal: '17320 Marennes',
    phone: '+33 5 46 85 00 36',
    email: 'marennes@ets-bertrand.com',
    mapEmbed:
      'https://www.google.com/maps?q=La+Chainade+17320+Marennes+France&output=embed',
    images: [
      { src: '/images/sites/marennes-facade.jpg', alt: { fr: 'Atelier des Établissements Bertrand à Marennes', en: 'Établissements Bertrand workshop in Marennes', it: 'Officina Établissements Bertrand a Marennes' } },
      { src: '/images/sites/marennes-1.jpg', alt: { fr: 'Magasin de Marennes', en: 'Marennes shop', it: 'Negozio di Marennes' } },
      { src: '/images/sites/marennes-2.jpg', alt: { fr: 'Port de la Tremblade', en: 'La Tremblade harbour', it: 'Porto di La Tremblade' } },
    ],
  },
  {
    key: 'gujan-mestras',
    name: 'Gujan-Mestras',
    tradeName: 'Bertrand & Fils',
    description: {
      fr: `Située sur le Bassin d'Arcachon, notre équipe de Gujan-Mestras vous accueille tout au long de l'année dans notre magasin localisé sur le Port du Canal.

Un technicien qualifié intervient quotidiennement sur le Bassin d'Arcachon afin de compléter l'offre globale.`,
      en: `Located on the Arcachon basin, our Gujan-Mestras team welcomes you all year round in our shop on the Port du Canal.

A qualified technician works daily on the Arcachon basin to round out the complete offering.`,
      it: `Situata sul bacino di Arcachon, la nostra squadra di Gujan-Mestras vi accoglie tutto l'anno nel nostro negozio sul Port du Canal.

Un tecnico qualificato interviene quotidianamente sul bacino di Arcachon per completare l'offerta globale.`,
    },
    address: {
      fr: 'Port du canal',
      en: 'Port du canal',
      it: 'Port du canal',
    },
    postal: '33470 Gujan-Mestras',
    phone: '+33 5 56 66 59 37',
    email: 'gujan@ets-bertrand.com',
    mapEmbed:
      'https://www.google.com/maps?q=Port+du+canal+33470+Gujan-Mestras+France&output=embed',
    images: [
      { src: '/images/sites/gujan-1.png', alt: { fr: 'Atelier de Gujan-Mestras', en: 'Gujan-Mestras workshop', it: 'Officina di Gujan-Mestras' } },
      { src: '/images/sites/gujan-2.jpg', alt: { fr: 'Atelier de Gujan-Mestras', en: 'Gujan-Mestras workshop', it: 'Officina di Gujan-Mestras' } },
      { src: '/images/sites/gujan-3.jpg', alt: { fr: 'Atelier de Gujan-Mestras', en: 'Gujan-Mestras workshop', it: 'Officina di Gujan-Mestras' } },
    ],
  },
];

export function getLocation(key: string) {
  return locations.find((l) => l.key === key);
}
