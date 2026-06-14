import { locales, type Locale } from '@/i18n/routing';
import { machines } from '@/content/machines';
import { articles } from '@/content/articles';

/**
 * Map a locale-relative path (without locale prefix, e.g. "/machines/laveur-tubulaire")
 * from one locale to another, translating localized leaf slugs (machines, journal).
 * Section segments are identical across locales.
 */
export function translatePath(
  pathNoLocale: string,
  from: Locale,
  to: Locale
): string {
  const clean = pathNoLocale.replace(/^\/+|\/+$/g, '');
  if (clean === '') return '/';
  const seg = clean.split('/');

  if (seg[0] === 'machines' && seg[1]) {
    const m = machines.find((x) => x.slug[from] === seg[1]);
    if (m) seg[1] = m.slug[to];
  } else if (seg[0] === 'journal' && seg[1]) {
    const a = articles.find((x) => x.slug[from] === seg[1]);
    if (a) seg[1] = a.slug[to];
  }

  return '/' + seg.join('/');
}

/** Build a full set of locale-relative alternates from a known path + current locale. */
export function buildAlternates(
  pathNoLocale: string,
  current: Locale
): Record<Locale, string> {
  const out = {} as Record<Locale, string>;
  for (const l of locales) out[l] = translatePath(pathNoLocale, current, l);
  return out;
}
