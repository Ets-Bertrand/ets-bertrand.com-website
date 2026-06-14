import { getTranslations } from 'next-intl/server';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import { mainNav } from '@/lib/nav';
import { locations, social, catalogues } from '@/content/site';

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'footer' });
  const tn = await getTranslations({ locale, namespace: 'nav' });
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-100 bg-slate-50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/logo-full.png"
            srcSet="/images/logo/logo-full.png 980w, /images/logo/logo-full@2x.png 1536w"
            sizes="220px"
            alt="Établissements Bertrand — Machines et fournitures ostréicoles"
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-500">{t('about')}</p>
          <div className="mt-5 flex gap-3">
            <a href={social.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="text-slate-400 hover:text-brand">
              <Facebook size={20} />
            </a>
            <a href={social.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="text-slate-400 hover:text-brand">
              <Instagram size={20} />
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="text-slate-400 hover:text-brand">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            {t('navTitle')}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-500 hover:text-brand">
                  {tn(item.label)}
                </Link>
              </li>
            ))}
            <li>
              <a href={catalogues[locale]} target="_blank" rel="noopener" className="text-slate-500 hover:text-brand">
                {tn('catalogue')}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            {t('locationsTitle')}
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {locations.map((loc) => (
              <div key={loc.key} className="text-sm text-slate-500">
                <p className="font-semibold text-slate-800">{loc.name}</p>
                <p className="mt-1 flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-brand-muted" />
                  <span>
                    {loc.address[locale]}
                    <br />
                    {loc.postal}
                  </span>
                </p>
                <p className="mt-1 flex items-center gap-2">
                  <Phone size={16} className="text-brand-muted" />
                  <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-brand">
                    {loc.phone}
                  </a>
                </p>
                <p className="mt-1 flex items-center gap-2">
                  <Mail size={16} className="text-brand-muted" />
                  <a href={`mailto:${loc.email}`} className="hover:text-brand">
                    {loc.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Établissements Bertrand. {t('rights')}</p>
          <p>
            <Link href="/mentions-legales" className="hover:text-brand">
              {t('legal')}
            </Link>
            <span className="mx-2">·</span>
            {t('credits')}
          </p>
        </div>
      </div>
    </footer>
  );
}
