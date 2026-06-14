import type { SupplyCategory } from '@/lib/types';

const L = (fr: string, en: string, it: string) => ({ fr, en, it });

export const supplies: SupplyCategory[] = [
  {
    key: 'tables-ostreicoles',
    name: L('Tables ostréicoles', 'Oyster tables', 'Tavoli per ostriche'),
    description: L(
      'Tables traditionnelles et doubles, fabriquées sur mesure pour équiper vos parcs selon votre bassin.',
      'Traditional and double tables, made to measure to equip your beds according to your basin.',
      'Tavoli tradizionali e doppi, realizzati su misura per attrezzare i vostri parchi in base al bacino.'
    ),
    image: { src: '/images/fournitures/tables.jpg', alt: L('Tables ostréicoles', 'Oyster tables', 'Tavoli per ostriche') },
  },
  {
    key: 'poches-paniers',
    name: L('Poches & paniers australiens', 'Bags & Australian baskets', 'Sacchi e cestelli australiani'),
    description: L(
      'Poches et paniers australiens pour l\u2019élevage en surélevé, adaptés aux différentes tailles d\u2019huîtres.',
      'Bags and Australian baskets for off-bottom growing, suited to different oyster sizes.',
      'Sacchi e cestelli australiani per l\u2019allevamento sopraelevato, adatti alle diverse taglie di ostriche.'
    ),
    image: { src: '/images/fournitures/poches-paniers.jpg', alt: L('Poches et paniers australiens', 'Bags and Australian baskets', 'Sacchi e cestelli australiani') },
  },
  {
    key: 'accastillage',
    name: L('Accastillage & petit matériel', 'Fittings & small equipment', 'Minuteria e piccolo materiale'),
    description: L(
      'Pieds, cages, crochets et petit matériel : tout l\u2019accastillage pour vous équiper de A à Z chez un seul fournisseur.',
      'Feet, cages, hooks and small equipment: all the fittings to equip yourself from A to Z from a single supplier.',
      'Piedi, gabbie, ganci e piccolo materiale: tutta la minuteria per attrezzarvi dalla A alla Z da un unico fornitore.'
    ),
    image: { src: '/images/machines/tables-cages-1.jpg', alt: L('Accastillage ostréicole', 'Oyster fittings', 'Minuteria per ostriche') },
  },
];
