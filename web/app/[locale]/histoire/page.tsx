import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { Slogan } from '@/components/Slogan';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('history') };
}

type HistoryContent = {
  lead: string;
  story: string[];
  directionTitle: string;
  directionIntro: string;
  quote: string;
  caption: string;
  closing: string;
};

const content: Record<Locale, HistoryContent> = {
  fr: {
    lead: 'Depuis 60 ans, auprès des ostréiculteurs',
    story: [
      "Roger Bertrand n'a que 23 ans quand il crée sa forge marine à Bourcefranc en mai 1957 ; il travaille seul au départ, puis embauche un forgeron et, par la suite, des ouvriers.",
      "C'est une période où l'ostréiculture est en plein développement mais dispose de peu de moyens mécaniques. Roger Bertrand va donc se rapprocher des ostréiculteurs : c'est ainsi qu'il met sur le marché les premières tables ostréicoles.",
      "C'est dans les années 70 que Roger Bertrand fabrique un laveur tubulaire, première machine ostréicole et premier pas de l'ostréiculture vers la mécanisation. Un an après sa mise sur le marché, une centaine de laveurs tubulaires sont vendus.",
      "Dans les années 80 arrive la machine à détroquer les tubes collecteurs : c'est une machine pour couper les choux de Bruxelles, vue en Belgique, qui donnera à Roger Bertrand l'idée de fabriquer une détroqueuse.",
      "Les années 90 font la part belle à l'inox et la première calibreuse au poids électronique voit le jour chez Bertrand. Cette calibreuse ne sera pas commercialisée, faute de marché : c'était trop tôt.",
      "Partie remise : en 2004, Charles Bertrand commercialise une calibreuse à vision avec une alimentation automatique, également de fabrication Bertrand, qui connaîtra cette fois-ci un succès bien mérité !",
    ],
    directionTitle: 'Une nouvelle direction depuis 2021',
    directionIntro:
      "En juin 2021, Charles Bertrand, qui dirigeait les Établissements Roger Bertrand depuis 1996, a passé la main à Alexandre Bonnat. À 45 ans, après près de 20 ans dans l'industrie et une formation complémentaire en entreprenariat à l'IAE de Paris, Alexandre cherchait à reprendre une PME en Nouvelle-Aquitaine, et les Établissements Bertrand correspondaient à tous ses critères :",
    quote:
      "Je recherchais une entreprise à taille humaine mais suffisamment grande pour être structurée, avec un savoir-faire reconnu sur un marché de niche, une activité diversifiée et un fort potentiel de développement — ce qui n'était pas évident, car ces perles sont rares et très recherchées. L'entreprise Bertrand, avec ses 20 employés à Marennes et 5 à Gujan-Mestras, est exactement l'entreprise que je souhaitais diriger, et avec Charles le contact est tout de suite passé.",
    caption: 'À gauche : Alexandre Bonnat — À droite : Charles Bertrand',
    closing:
      "Retour sur l'évolution d'une entreprise familiale qui a su s'adapter, innover et, en cela, contribuer à la modernisation de l'ostréiculture…",
  },
  en: {
    lead: '60 years alongside oyster farmers',
    story: [
      'Roger Bertrand is only 23 when he sets up his marine forge in Bourcefranc in May 1957. He works alone at first, then hires a blacksmith and later more workers.',
      'It is a time when oyster farming is booming but has few mechanical resources. Roger Bertrand grows close to the oyster farmers — and this is how he brings the first oyster tables to market.',
      'In the 1970s, Roger Bertrand builds a tubular washer, the first oyster-farming machine and oyster farming\u2019s first step towards mechanisation. A year after its launch, around a hundred tubular washers are sold.',
      'In the 1980s comes the machine to destock collector tubes: a machine for cutting Brussels sprouts, seen in Belgium, gives Roger Bertrand the idea of building a destocker.',
      'The 1990s put stainless steel in the spotlight, and the first electronic weight grader is born at Bertrand. This grader is never marketed, for lack of demand — it was too early.',
      'Only delayed: in 2004, Charles Bertrand markets a vision grader with automatic feeding, also built by Bertrand, which this time enjoys well-deserved success!',
    ],
    directionTitle: 'New leadership since 2021',
    directionIntro:
      'In June 2021, Charles Bertrand, who had run Établissements Roger Bertrand since 1996, handed over to Alexandre Bonnat. At 45, after nearly 20 years in industry and further entrepreneurship training at the IAE in Paris, Alexandre was looking to take over an SME in Nouvelle-Aquitaine — and Établissements Bertrand met all his criteria:',
    quote:
      'I was looking for a human-sized company, yet large enough to be well structured, with recognised know-how in a niche market, a diversified business and strong growth potential — which was not easy to find, as such gems are rare and much sought after. With its 20 employees in Marennes and 5 in Gujan-Mestras, Bertrand is exactly the company I wanted to lead, and with Charles we hit it off straight away.',
    caption: 'Left: Alexandre Bonnat — Right: Charles Bertrand',
    closing:
      'A look back at the journey of a family business that has been able to adapt, innovate and, in doing so, contribute to the modernisation of oyster farming…',
  },
  it: {
    lead: 'Da 60 anni, al fianco degli ostricoltori',
    story: [
      "Roger Bertrand ha solo 23 anni quando fonda la sua forgia marina a Bourcefranc nel maggio 1957; lavora da solo all'inizio, poi assume un fabbro e in seguito altri operai.",
      "È un'epoca in cui l'ostricoltura è in pieno sviluppo ma dispone di pochi mezzi meccanici. Roger Bertrand si avvicina così agli ostricoltori: è in questo modo che mette sul mercato i primi tavoli per ostriche.",
      "È negli anni '70 che Roger Bertrand costruisce una lavatrice tubolare, la prima macchina per l'ostricoltura e il primo passo dell'ostricoltura verso la meccanizzazione. Un anno dopo il lancio, vengono vendute un centinaio di lavatrici tubolari.",
      "Negli anni '80 arriva la macchina per distaccare i tubi collettori: è una macchina per tagliare i cavoletti di Bruxelles, vista in Belgio, a dare a Roger Bertrand l'idea di costruire una distaccatrice.",
      "Gli anni '90 danno ampio spazio all'acciaio inox e la prima calibratrice a peso elettronico nasce in casa Bertrand. Questa calibratrice non verrà commercializzata, per mancanza di mercato: era troppo presto.",
      'Solo rimandata: nel 2004 Charles Bertrand commercializza una calibratrice a visione con alimentazione automatica, anch\u2019essa di fabbricazione Bertrand, che questa volta conoscerà un meritato successo!',
    ],
    directionTitle: 'Una nuova direzione dal 2021',
    directionIntro:
      "Nel giugno 2021, Charles Bertrand, che dirigeva gli Établissements Roger Bertrand dal 1996, ha passato il testimone ad Alexandre Bonnat. A 45 anni, dopo quasi 20 anni nell'industria e una formazione complementare in imprenditorialità all'IAE di Parigi, Alexandre cercava di rilevare una PMI nella Nuova Aquitania, e gli Établissements Bertrand corrispondevano a tutti i suoi criteri:",
    quote:
      "Cercavo un'azienda a misura d'uomo ma abbastanza grande da essere strutturata, con un savoir-faire riconosciuto in un mercato di nicchia, un'attività diversificata e un forte potenziale di sviluppo — cosa non scontata, perché queste perle sono rare e molto ricercate. L'azienda Bertrand, con i suoi 20 dipendenti a Marennes e 5 a Gujan-Mestras, è esattamente l'azienda che desideravo dirigere, e con Charles il feeling è scattato subito.",
    caption: 'A sinistra: Alexandre Bonnat — A destra: Charles Bertrand',
    closing:
      "Uno sguardo all'evoluzione di un'azienda familiare che ha saputo adattarsi, innovare e, così facendo, contribuire alla modernizzazione dell'ostricoltura…",
  },
};

export default async function HistoryPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  const c = content[locale];

  return (
    <div className="container-page py-14 sm:py-20">
      <p className="eyebrow">{t('history')}</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold">{c.lead}</h1>
      <Slogan className="mt-4 text-3xl text-accent sm:text-4xl" />

      {/* Banner */}
      <div className="mt-8 overflow-hidden rounded-2xl shadow-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/histoire/histoire-bassin.jpg"
          alt="Parc ostréicole"
          className="aspect-[21/9] w-full object-cover"
        />
      </div>

      {/* Story + images */}
      <div className="mt-12 grid items-start gap-10 lg:grid-cols-3">
        <div className="space-y-4 text-slate-600 lg:col-span-2">
          {c.story.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="space-y-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/histoire/histoire-1.jpg" alt="" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/histoire/histoire-2.jpg" alt="" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/histoire/histoire-3.jpg" alt="" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        </div>
      </div>

      {/* Leadership handover */}
      <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/histoire/histoire-direction.jpg"
            alt={c.caption}
            className="w-full rounded-2xl object-cover shadow-card"
          />
          <figcaption className="mt-3 text-sm text-slate-500">{c.caption}</figcaption>
        </figure>
        <div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{c.directionTitle}</h2>
          <p className="mt-4 text-slate-600">{c.directionIntro}</p>
          <blockquote className="mt-6 border-l-4 border-brand pl-5 text-lg italic text-slate-700">
            « {c.quote} »
          </blockquote>
        </div>
      </div>

      <p className="mt-12 max-w-3xl text-lg font-medium text-brand">{c.closing}</p>
    </div>
  );
}
