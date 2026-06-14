import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Award, HandHeart, Factory, Package, ArrowRight, MapPin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { Slogan } from '@/components/Slogan';
import { MachineCard } from '@/components/MachineCard';
import { FacebookFeed } from '@/components/FacebookFeed';
import { machines } from '@/content/machines';
import { locations } from '@/content/site';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const tc = await getTranslations('common');

  const featured = machines.filter((m) => m.featured).slice(0, 6);

  const values = [
    { icon: Award, title: t('value1Title'), text: t('value1Text') },
    { icon: HandHeart, title: t('value2Title'), text: t('value2Text') },
    { icon: Factory, title: t('value3Title'), text: t('value3Text') },
    { icon: Package, title: t('value4Title'), text: t('value4Text') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero/hero-oysters.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-700/85 via-brand/65 to-brand-400/40" />
        </div>
        <div className="container-page flex min-h-[78vh] flex-col justify-center py-20 text-white">
          <p className="eyebrow text-white/80">{t('locationsTitle')}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t('heroTitle')}
          </h1>
          <Slogan className="mt-5 text-4xl text-red-400 drop-shadow sm:text-5xl" />
          <p className="mt-6 max-w-2xl text-lg text-white/90">{t('heroSubtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/machines" className="btn bg-white text-brand hover:bg-white/90">
              {tc('discoverMachines')} <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn border border-white/60 text-white hover:bg-white/10">
              {tc('requestQuote')}
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-16 sm:py-20">
        <h2 className="text-center font-display text-3xl font-bold">{t('valuesTitle')}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
                <v.icon size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured machines */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold">{t('featuredTitle')}</h2>
              <p className="mt-2 max-w-xl text-slate-500">{t('featuredSubtitle')}</p>
            </div>
            <Link href="/machines" className="inline-flex items-center gap-1 font-semibold text-brand">
              {tc('viewAll')} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((m) => (
              <MachineCard key={m.key} machine={m} locale={locale} cta={tc('learnMore')} />
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container-page grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/histoire/histoire-1.jpg" alt="" className="aspect-[3/4] w-full rounded-2xl object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/histoire/histoire-2.jpg" alt="" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover" />
        </div>
        <div>
          <p className="eyebrow">{t('storyEyebrow')}</p>
          <h2 className="mt-3 font-display text-3xl font-bold">{t('storyTitle')}</h2>
          <p className="mt-4 text-slate-600">{t('storyText')}</p>
          <Link href="/histoire" className="btn-outline mt-6">
            {tc('learnMore')} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="font-display text-3xl font-bold">{t('locationsTitle')}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {locations.map((loc) => (
              <Link
                key={loc.key}
                href={`/implantations/${loc.key}`}
                className="card group flex items-center gap-4 overflow-hidden p-4 transition hover:shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={loc.images[0].src} alt={loc.images[0].alt[locale]} className="h-24 w-32 shrink-0 rounded-xl object-cover" />
                <div>
                  <h3 className="font-display text-lg font-bold">{loc.name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                    <MapPin size={14} /> {loc.postal}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    {tc('learnMore')} <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Actualités — Facebook feed */}
      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold">{t('journalTitle')}</h2>
          <a
            href="https://www.facebook.com/EtablissementsBertrand"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 font-semibold text-brand"
          >
            {tc('followFacebook')} <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-10">
          <FacebookFeed />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center text-white">
          <h2 className="font-display text-3xl font-bold text-white">{t('ctaTitle')}</h2>
          <p className="max-w-xl text-white/85">{t('ctaText')}</p>
          <Link href="/contact" className="btn bg-white text-brand hover:bg-white/90">
            {tc('requestQuote')} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
