import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { MachineCard } from '@/components/MachineCard';
import { machines } from '@/content/machines';

const intro: Record<Locale, string[]> = {
  fr: [
    "Les machines ostréicoles et mytilicoles comme les cribles, ensacheuses, détroqueuses à coupelles, bouilloire ou laveur ont largement contribué à asseoir notre réputation auprès des ostréiculteurs et mytiliculteurs sur toute la France, en Europe, et dans le monde entier, en facilitant leur travail au quotidien.",
    "Dans un souci permanent de répondre aux besoins de nos clients, notamment en termes de gains de productivité et de pénibilité, notre bureau d'étude conçoit des machines simples et efficaces, faciles à entretenir, et qui durent dans le temps malgré le milieu marin dans lequel elles sont utilisées.",
  ],
  en: [
    'Oyster- and mussel-farming machines such as graders, bagging machines, cup declumpers, boilers and washers have greatly helped establish our reputation among oyster and mussel farmers throughout France, across Europe, and around the world, making their daily work easier.',
    'With a constant focus on meeting our customers’ needs — particularly in terms of productivity gains and reduced strain — our design office creates simple, effective machines that are easy to maintain and that last over time despite the marine environment in which they are used.',
  ],
  it: [
    "Le macchine per l'ostricoltura e la mitilicoltura come vagli, insacchatrici, distaccatrici a coppette, caldaie o lavatrici hanno ampiamente contribuito a consolidare la nostra reputazione presso gli ostricoltori e i mitilicoltori in tutta la Francia, in Europa e in tutto il mondo, facilitando il loro lavoro quotidiano.",
    "Con la costante attenzione a rispondere alle esigenze dei nostri clienti, in particolare in termini di aumento della produttività e riduzione della fatica, il nostro ufficio tecnico progetta macchine semplici ed efficaci, facili da mantenere e durature nel tempo nonostante l'ambiente marino in cui vengono utilizzate.",
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('machines') };
}

export default async function MachinesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  const th = await getTranslations('home');
  const tc = await getTranslations('common');

  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">{t('machines')}</p>
      <h1 className="mt-3 font-display text-4xl font-bold">{th('featuredTitle')}</h1>
      <div className="mt-4 max-w-3xl space-y-4 text-slate-600">
        {intro[locale].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {machines.map((m) => (
          <MachineCard key={m.key} machine={m} locale={locale} cta={tc('learnMore')} />
        ))}
      </div>
    </div>
  );
}
