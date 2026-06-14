import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { ContactForm } from '@/components/ContactForm';
import { locations } from '@/content/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title'), description: t('intro') };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">{t('title')}</p>
      <h1 className="mt-3 font-display text-4xl font-bold">{t('title')}</h1>
      <p className="mt-4 max-w-2xl text-slate-500">{t('intro')}</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm />

        <div className="space-y-6">
          {locations.map((loc) => (
            <div key={loc.key} className="card p-6">
              <h2 className="font-display text-lg font-bold">{loc.name}</h2>
              <p className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                <MapPin size={18} className="mt-0.5 text-brand" />
                <span>{loc.address[locale]}<br />{loc.postal}</span>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <Phone size={18} className="text-brand" />
                <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-brand">{loc.phone}</a>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <Mail size={18} className="text-brand" />
                <a href={`mailto:${loc.email}`} className="hover:text-brand">{loc.email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
