import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { catalogues } from '@/content/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('supplies') };
}

const intro: Record<Locale, string[]> = {
  fr: [
    "À travers nos 2 points de vente, nos commerciaux itinérants et l'envoi de colis partout en Europe, les Éts Bertrand complètent leur panoplie de produits fabriqués en proposant une gamme complète de petit matériel et de consommables indispensables aux ostréiculteurs.",
    'Chez Bertrand, vous pouvez vous équiper de A à Z !',
  ],
  en: [
    'Through our 2 points of sale, our travelling sales representatives and parcel shipping throughout Europe, Établissements Bertrand rounds out its range of in-house products with a complete selection of small equipment and consumables essential to oyster farmers.',
    'At Bertrand, you can equip yourself from A to Z!',
  ],
  it: [
    "Attraverso i nostri 2 punti vendita, i nostri commerciali itineranti e la spedizione di colli in tutta Europa, gli Établissements Bertrand completano la loro gamma di prodotti fabbricati proponendo una gamma completa di piccolo materiale e di consumabili indispensabili agli ostricoltori.",
    'Da Bertrand, potete attrezzarvi dalla A alla Z!',
  ],
};

export default async function SuppliesPage({
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
      <p className="eyebrow">{t('supplies')}</p>
      <h1 className="mt-3 font-display text-4xl font-bold">{t('supplies')}</h1>
      <div className="mt-4 max-w-2xl space-y-3 text-slate-500">
        {intro[locale].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-slate-100 shadow-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/sites/marennes-1.jpg"
          alt="Établissements Bertrand — Marennes"
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={catalogues[locale]} target="_blank" rel="noopener" className="btn-primary">
          <Download size={16} /> {tc('downloadCatalogue')}
        </a>
        <Link href="/contact" className="btn-outline">
          {tc('requestQuote')} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
