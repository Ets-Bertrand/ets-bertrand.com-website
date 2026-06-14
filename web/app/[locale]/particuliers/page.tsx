import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';

type Content = { title: string; lead: string; paragraphs: string[] };

const content: Record<Locale, Content> = {
  fr: {
    title: 'Particuliers',
    lead: 'Vos projets sur mesure',
    paragraphs: [
      'Notre atelier composé de soudeurs et techniciens confirmés œuvre depuis de nombreuses années à réaliser tous vos projets sur mesure : rambarde, portails, garde-corps, porte, pièce pour carrelets…',
      'Nous nous adaptons à vos besoins et à vos demandes.',
    ],
  },
  en: {
    title: 'Private customers',
    lead: 'Your custom projects',
    paragraphs: [
      'Our workshop, with its team of experienced welders and technicians, has been crafting all your custom projects for many years: railings, gates, guardrails, doors, parts for fishing huts (carrelets)…',
      'We adapt to your needs and your requests.',
    ],
  },
  it: {
    title: 'Privati',
    lead: 'I vostri progetti su misura',
    paragraphs: [
      'La nostra officina, con una squadra di saldatori e tecnici esperti, realizza da molti anni tutti i vostri progetti su misura: ringhiere, cancelli, parapetti, porte, pezzi per i carrelet (capanni da pesca)…',
      'Ci adattiamo alle vostre esigenze e alle vostre richieste.',
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = content[locale];
  return { title: c.title, description: c.paragraphs[0] };
}

export default async function ParticuliersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tc = await getTranslations('common');
  const c = content[locale];

  return (
    <div className="container-page py-14 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">{c.title}</p>
          <h1 className="mt-3 font-display text-4xl font-bold">{c.lead}</h1>
          <div className="mt-6 space-y-4 text-slate-600">
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-8">
            {tc('requestQuote')} <ArrowRight size={16} />
          </Link>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fournitures/particuliers.jpg"
          alt={c.title}
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
        />
      </div>
    </div>
  );
}
