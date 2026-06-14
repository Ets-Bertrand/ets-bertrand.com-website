import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowLeft, ArrowRight, Download, FileText } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/routing';
import { Gallery } from '@/components/Gallery';
import { MachineCard } from '@/components/MachineCard';
import { machines, getMachineBySlug, getMachine } from '@/content/machines';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const m of machines) {
    for (const l of locales) params.push({ locale: l, slug: m.slug[l] });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const m = getMachineBySlug(locale, slug);
  if (!m) return {};
  return { title: m.name[locale], description: m.tagline[locale] };
}

export default async function MachineDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const machine = getMachineBySlug(locale, slug);
  if (!machine) notFound();

  const tc = await getTranslations('common');
  const datasheet = machine.datasheets[locale] ?? machine.datasheets.fr;
  const paragraphs = machine.description[locale].split('\n\n');
  const related = (machine.related ?? [])
    .map((k) => getMachine(k))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <div className="container-page py-10 sm:py-14">
      <Link href="/machines" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand">
        <ArrowLeft size={16} /> {tc('backToMachines')}
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <Gallery images={machine.images} locale={locale} />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">{machine.name[locale]}</h1>
          <p className="mt-2 text-lg text-brand">{machine.tagline[locale]}</p>

          <div className="mt-6 space-y-4 text-slate-600">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {machine.specs.length > 0 && (
            <div className="mt-8">
              <h2 className="font-display text-lg font-bold">{tc('specifications')}</h2>
              <dl className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-100">
                {machine.specs.map((s, i) => (
                  <div key={i} className="flex justify-between gap-4 px-4 py-3 text-sm">
                    <dt className="font-medium text-slate-500">{s.label[locale]}</dt>
                    <dd className="text-right font-medium text-slate-800">{s.value[locale]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/contact?machine=${encodeURIComponent(machine.name[locale])}`} className="btn-primary">
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

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">{tc('relatedMachines')}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((m) => (
              <MachineCard key={m.key} machine={m} locale={locale} cta={tc('learnMore')} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
