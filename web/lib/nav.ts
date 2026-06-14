export type NavItem = {
  href: string;
  /** key under the "nav" message namespace */
  label:
    | 'home'
    | 'machines'
    | 'tablesCages'
    | 'supplies'
    | 'particuliers'
    | 'history'
    | 'locations'
    | 'journal'
    | 'contact';
};

export const mainNav: NavItem[] = [
  { href: '/', label: 'home' },
  { href: '/machines', label: 'machines' },
  { href: '/tables-cages', label: 'tablesCages' },
  { href: '/fournitures', label: 'supplies' },
  { href: '/particuliers', label: 'particuliers' },
  { href: '/histoire', label: 'history' },
  { href: '/implantations', label: 'locations' },
  { href: '/journal', label: 'journal' },
  { href: '/contact', label: 'contact' },
];
