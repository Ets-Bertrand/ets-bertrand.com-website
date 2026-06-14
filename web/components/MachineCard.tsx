import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import type { Machine } from '@/lib/types';

export function MachineCard({
  machine,
  locale,
  cta,
}: {
  machine: Machine;
  locale: Locale;
  cta: string;
}) {
  const cover = machine.images[0];
  return (
    <Link
      href={`/machines/${machine.slug[locale]}`}
      className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover.src}
          alt={cover.alt[locale]}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-slate-900">
          {machine.name[locale]}
        </h3>
        <p className="mt-1 flex-1 text-sm text-slate-500">{machine.tagline[locale]}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
          {cta} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
