import type { Locale } from '@/i18n/routing';

export type Localized<T = string> = Record<Locale, T>;

export type Img = {
  src: string;
  alt: Localized;
};

export type Spec = {
  label: Localized;
  value: Localized;
};

export type Machine = {
  /** Stable, language-neutral key. */
  key: string;
  /** Localized URL slug (per locale). */
  slug: Localized;
  name: Localized;
  tagline: Localized;
  /** Paragraphs separated by a blank line. */
  description: Localized;
  specs: Spec[];
  images: Img[];
  /** PDF datasheet path per locale (may be partial; falls back to FR). */
  datasheets: Partial<Record<Locale, string>>;
  featured?: boolean;
  related?: string[];
};

export type Article = {
  key: string;
  slug: Localized;
  title: Localized;
  /** ISO date. */
  date: string;
  excerpt: Localized;
  /** Paragraphs separated by a blank line. */
  body: Localized;
  image: Img;
};

export type SupplyCategory = {
  key: string;
  name: Localized;
  description: Localized;
  image: Img;
};

export type SiteLocation = {
  key: 'marennes' | 'gujan-mestras';
  name: string;
  /** Historic trade name shown on the location page. */
  tradeName: string;
  /** Paragraphs separated by a blank line. */
  description: Localized;
  address: Localized;
  postal: string;
  phone: string;
  email: string;
  mapEmbed: string;
  images: Img[];
};
