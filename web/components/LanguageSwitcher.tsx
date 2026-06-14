'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/routing';
import { translatePath } from '@/lib/alternates';

export function LanguageSwitcher() {
  const current = useLocale() as Locale;
  const pathname = usePathname(); // locale-agnostic path
  const t = useTranslations('language');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  function persist(target: Locale) {
    try {
      localStorage.setItem('preferredLocale', target);
      document.cookie = `preferredLocale=${target};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* ignore */
    }
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('label')}
        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-slate-600 transition hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <Globe size={16} />
        {current.toUpperCase()}
        <ChevronDown size={14} className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-slate-100 bg-white py-1 shadow-lg"
        >
          {locales.map((l) => {
            const href = translatePath(pathname, current, l);
            const active = l === current;
            return (
              <Link
                key={l}
                href={href}
                locale={l}
                role="menuitem"
                onClick={() => {
                  persist(l);
                  setOpen(false);
                }}
                aria-current={active ? 'true' : undefined}
                className={`flex items-center justify-between gap-3 px-3 py-2 text-sm transition hover:bg-slate-50 ${
                  active ? 'font-semibold text-brand' : 'text-slate-600'
                }`}
              >
                <span>{t(l)}</span>
                {active && <Check size={15} className="text-brand" />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
