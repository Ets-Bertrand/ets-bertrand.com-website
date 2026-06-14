import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/routing';
import { Gallery } from '@/components/Gallery';
import { locations, getLocation } from '@/content/site';

export function generateStaticParams() {
  const params: { locale: string; site: string }[] = [];
  for (const loc of locations) {
    for (const l of locales) params.push({ locale: l, site: loc.key });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; site: string }>;
}): Promise<Metadata> {
  const { site } = await params;
  const loc = getLocation(site);
  return { title: loc?.name };
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; site: string }>;
}) {
  const { locale, site } = await params;
  setRequestLocale(locale);
  const loc = getLocation(site);
  if (!loc) notFound();

  const t = await getTranslations('nav');
  const tc = await getTranslations('common');

  return (
    <div className="container-page py-10 sm:py-14">
      <Link href="/implantations" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand">
        <ArrowLeft size={16} /> {t('locations')}
      </Link>

      <p className="eyebrow mt-6">{loc.name}</p>
      <h1 className="mt-2 font-display text-4xl font-bold">{loc.tradeName}</h1>

      <div className="mt-6 max-w-3xl space-y-4 text-slate-600">
        {loc.description[locale].split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <Gallery images={loc.images} locale={locale} />
        </div>
        <div className="space-y-4 text-slate-700">
          <p className="flex items-start gap-2">
            <MapPin size={18} className="mt-0.5 text-brand" />
            <span>{loc.address[locale]}<br />{loc.postal}</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} className="text-brand" />
            <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-brand">{loc.phone}</a>
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} className="text-brand" />
            <a href={`mailto:${loc.email}`} className="hover:text-brand">{loc.email}</a>
          </p>
          <Link href="/contact" className="btn-primary mt-2">{tc('requestQuote')}</Link>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-100">
        <iframe
          src={loc.mapEmbed}
          title={loc.name}
          className="h-[400px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
