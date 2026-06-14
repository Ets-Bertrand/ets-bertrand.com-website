import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'footer' });
  return { title: t('legal') };
}

type Section = { heading: string; body: string[] };
const content: Record<Locale, { title: string; sections: Section[] }> = {
  fr: {
    title: 'Mentions légales',
    sections: [
      {
        heading: 'Éditeur du site',
        body: [
          'Établissements Bertrand — Machines et fournitures ostréicoles.',
          'Marennes : La Chainade, 17320 Marennes — 05 46 85 00 36 — marennes@ets-bertrand.com',
          'Gujan-Mestras : Port du canal, 33470 Gujan-Mestras — 05 56 66 59 37 — gujan@ets-bertrand.com',
        ],
      },
      {
        heading: 'Hébergement',
        body: [
          'Ce site est hébergé par GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.',
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        body: [
          "L'ensemble des contenus (textes, images, logos) est la propriété des Établissements Bertrand, sauf mention contraire. Toute reproduction sans autorisation est interdite.",
        ],
      },
      {
        heading: 'Données personnelles',
        body: [
          "Le formulaire de contact ouvre votre logiciel de messagerie : aucune donnée n'est collectée ni stockée par ce site. Vos informations ne servent qu'à traiter votre demande.",
        ],
      },
      { heading: 'Conception et réalisation', body: ['Laetitia, Alexandre, Fabrice et Claude.'] },
    ],
  },
  en: {
    title: 'Legal notice',
    sections: [
      {
        heading: 'Site publisher',
        body: [
          'Établissements Bertrand — Oyster-farming machines and supplies.',
          'Marennes: La Chainade, 17320 Marennes — +33 5 46 85 00 36 — marennes@ets-bertrand.com',
          'Gujan-Mestras: Port du canal, 33470 Gujan-Mestras — +33 5 56 66 59 37 — gujan@ets-bertrand.com',
        ],
      },
      {
        heading: 'Hosting',
        body: [
          'This site is hosted by GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'All content (text, images, logos) is the property of Établissements Bertrand unless otherwise stated. Any reproduction without permission is prohibited.',
        ],
      },
      {
        heading: 'Personal data',
        body: [
          'The contact form opens your email client: no data is collected or stored by this site. Your information is only used to handle your request.',
        ],
      },
      { heading: 'Design and build', body: ['Laetitia, Alexandre, Fabrice and Claude.'] },
    ],
  },
  it: {
    title: 'Note legali',
    sections: [
      {
        heading: 'Editore del sito',
        body: [
          'Établissements Bertrand — Macchine e forniture per la molluschicoltura.',
          'Marennes: La Chainade, 17320 Marennes — +33 5 46 85 00 36 — marennes@ets-bertrand.com',
          'Gujan-Mestras: Port du canal, 33470 Gujan-Mestras — +33 5 56 66 59 37 — gujan@ets-bertrand.com',
        ],
      },
      {
        heading: 'Hosting',
        body: [
          'Questo sito è ospitato da GitHub Pages — GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.',
        ],
      },
      {
        heading: 'Proprietà intellettuale',
        body: [
          'Tutti i contenuti (testi, immagini, loghi) sono di proprietà degli Établissements Bertrand, salvo diversa indicazione. È vietata qualsiasi riproduzione senza autorizzazione.',
        ],
      },
      {
        heading: 'Dati personali',
        body: [
          'Il modulo di contatto apre il tuo programma di posta: nessun dato viene raccolto o memorizzato da questo sito. Le tue informazioni servono solo a gestire la tua richiesta.',
        ],
      },
      { heading: 'Ideazione e realizzazione', body: ['Laetitia, Alexandre, Fabrice e Claude.'] },
    ],
  },
};

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = content[locale];

  return (
    <div className="container-page max-w-3xl py-14 sm:py-20">
      <h1 className="font-display text-4xl font-bold">{c.title}</h1>
      <div className="mt-10 space-y-8">
        {c.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-lg font-bold text-slate-900">{s.heading}</h2>
            <div className="mt-2 space-y-1 text-slate-600">
              {s.body.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
