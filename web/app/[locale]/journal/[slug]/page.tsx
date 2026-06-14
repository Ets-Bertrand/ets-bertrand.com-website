import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/routing';
import { articles, getArticleBySlug } from '@/content/articles';

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const a of articles) {
    for (const l of locales) params.push({ locale: l, slug: a.slug[l] });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const a = getArticleBySlug(locale, slug);
  if (!a) return {};
  return { title: a.title[locale], description: a.excerpt[locale] };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getArticleBySlug(locale, slug);
  if (!article) notFound();

  const t = await getTranslations('nav');
  const tc = await getTranslations('common');
  const paragraphs = article.body[locale].split('\n\n');

  return (
    <article className="container-page max-w-3xl py-10 sm:py-14">
      <Link href="/journal" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand">
        <ArrowLeft size={16} /> {t('journal')}
      </Link>

      <time className="mt-6 block text-sm font-medium text-brand-muted">{article.date}</time>
      <h1 className="mt-2 font-display text-4xl font-bold">{article.title[locale]}</h1>

      <div className="mt-8 overflow-hidden rounded-2xl bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image.src} alt={article.image.alt[locale]} className="aspect-[16/9] w-full object-cover" />
      </div>

      <div className="prose mt-8 max-w-none space-y-4 text-lg leading-relaxed text-slate-600">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-10 border-t border-slate-100 pt-6">
        <Link href="/contact" className="btn-primary">{tc('requestQuote')}</Link>
      </div>
    </article>
  );
}
