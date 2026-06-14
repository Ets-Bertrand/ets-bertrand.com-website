import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { Gallery } from '@/components/Gallery';
import { tablesCages } from '@/content/machines';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: tablesCages.name[locale],
    description: tablesCages.tagline[locale],
  };
}

export default async function TablesCagesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  const tc = await getTranslations('common');

  const item = tablesCages;
  const datasheet = item.datasheets[locale] ?? item.datasheets.fr;
  const paragraphs = item.description[locale].split('\n\n');

  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">{t('tablesCages')}</p>
      <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{item.name[locale]}</h1>
      <p className="mt-2 text-lg text-brand">{item.tagline[locale]}</p>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <Gallery images={item.images} locale={locale} />
        </div>
        <div>
          <div className="space-y-4 text-slate-600">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {item.specs.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-bold">{tc('specifications')}</h2>
              <dl className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-100">
                {item.specs.map((s, i) => (
                  <div key={i} className="flex justify-between gap-4 px-4 py-3 text-sm">
                    <dt className="font-medium text-slate-500">{s.label[locale]}</dt>
                    <dd className="text-right font-medium text-slate-800">{s.value[locale]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/contact?machine=${encodeURIComponent(item.name[locale])}`} className="btn-primary">
              {tc('requestQuote')} <ArrowRight size={16} />
            </Link>
            {datasheet && (
              <a href={datasheet} target="_blank" rel="noopener" className="btn-outline">
                <Download size={16} /> {tc('downloadDatasheet')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
