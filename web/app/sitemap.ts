import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/routing';
import { machines } from '@/content/machines';
import { articles } from '@/content/articles';
import { locations } from '@/content/site';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://ets-bertrand.com';

export const dynamic = 'force-static';

const staticPaths = [
  '',
  '/machines',
  '/tables-cages',
  '/fournitures',
  '/particuliers',
  '/histoire',
  '/implantations',
  '/journal',
  '/contact',
  '/mentions-legales',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const p of staticPaths) {
      entries.push({ url: `${base}/${locale}${p}/`, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.7 });
    }
    for (const m of machines) {
      entries.push({ url: `${base}/${locale}/machines/${m.slug[locale]}/`, changeFrequency: 'monthly', priority: 0.8 });
    }
    for (const a of articles) {
      entries.push({ url: `${base}/${locale}/journal/${a.slug[locale]}/`, changeFrequency: 'yearly', priority: 0.5, lastModified: a.date });
    }
    for (const loc of locations) {
      entries.push({ url: `${base}/${locale}/implantations/${loc.key}/`, changeFrequency: 'yearly', priority: 0.6 });
    }
  }

  return entries;
}
