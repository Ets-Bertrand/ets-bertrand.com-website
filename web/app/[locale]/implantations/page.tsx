import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { locations } from '@/content/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('locations') };
}

export default async function LocationsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  const tc = await getTranslations('common');

  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">{t('locations')}</p>
      <h1 className="mt-3 font-display text-4xl font-bold">{tc('ourLocations')}</h1>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {locations.map((loc) => (
          <Link key={loc.key} href={`/implantations/${loc.key}`} className="card group overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={loc.images[0].src} alt={loc.images[0].alt[locale]} className="h-full w-full object-cover transition group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl font-bold">{loc.name}</h2>
              <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                <MapPin size={14} /> {loc.address[locale]}, {loc.postal}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                {tc('learnMore')} <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
