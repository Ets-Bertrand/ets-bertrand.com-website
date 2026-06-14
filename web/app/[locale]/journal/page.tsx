import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { articles } from '@/content/articles';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('journal') };
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  const tc = await getTranslations('common');
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">{t('journal')}</p>
      <h1 className="mt-3 font-display text-4xl font-bold">{t('journal')}</h1>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((a) => (
          <Link key={a.key} href={`/journal/${a.slug[locale]}`} className="card group overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.image.src} alt={a.image.alt[locale]} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-5">
              <time className="text-xs font-medium text-brand-muted">{a.date}</time>
              <h2 className="mt-1 font-display text-lg font-bold">{a.title[locale]}</h2>
              <p className="mt-2 text-sm text-slate-500">{a.excerpt[locale]}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">{tc('readArticle')}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
