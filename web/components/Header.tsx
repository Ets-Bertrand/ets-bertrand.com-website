'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Phone, Download } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { mainNav } from '@/lib/nav';
import { catalogues, locations } from '@/content/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LocalePersister } from './LocalePersister';

export function Header({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const primaryPhone = locations[0].phone;
  const navItems = mainNav.filter(
    (item) => item.label !== 'journal' && item.label !== 'contact'
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <LocalePersister />
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label="Établissements Bertrand — Machines et fournitures ostréicoles">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/logo-full.png"
            srcSet="/images/logo/logo-full.png 980w, /images/logo/logo-full@2x.png 1536w"
            sizes="(min-width: 640px) 240px, 200px"
            alt="Établissements Bertrand — Machines et fournitures ostréicoles"
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 underline-offset-4 transition hover:text-brand hover:underline"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={catalogues[locale]}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-lg border border-brand/30 bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
          >
            <Download size={16} /> {t('catalogue')}
          </a>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label={open ? t('close') : t('menu')}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                {t(item.label)}
              </Link>
            ))}
            <a
              href={catalogues[locale]}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              <Download size={18} /> {t('catalogue')}
            </a>
            <a
              href={`tel:${primaryPhone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              <Phone size={18} /> {primaryPhone}
            </a>
            <div className="px-3 py-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
