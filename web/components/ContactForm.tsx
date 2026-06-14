'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Copy, Check, Mail } from 'lucide-react';
import type { Locale } from '@/i18n/routing';
import { buildMailto, contactEmails, type PreferredSite, type QuoteForm } from '@/lib/mailto';

const empty: QuoteForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  preferredSite: 'none',
  subject: '',
  message: '',
};

export function ContactForm() {
  const locale = useLocale() as Locale;
  const t = useTranslations('contact');
  const [form, setForm] = useState<QuoteForm>(empty);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Prefill subject from ?machine=<name> when arriving from a machine page.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const machine = params.get('machine');
    if (machine) setForm((f) => ({ ...f, subject: machine }));
  }, []);

  function update<K extends keyof QuoteForm>(key: K, value: QuoteForm[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(t('requiredError'));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(t('emailError'));
      return;
    }
    window.location.href = buildMailto(form, locale);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmails.marennes);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  const field =
    'w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20';

  return (
    <div className="card p-6 sm:p-8">
      <h2 className="font-display text-xl font-bold text-slate-900">{t('formTitle')}</h2>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2" noValidate>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-slate-700">{t('name')} *</span>
          <input className={field} value={form.name} onChange={(e) => update('name', e.target.value)} required />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-slate-700">{t('company')}</span>
          <input className={field} value={form.company} onChange={(e) => update('company', e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-slate-700">{t('emailField')} *</span>
          <input type="email" className={field} value={form.email} onChange={(e) => update('email', e.target.value)} required />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-slate-700">{t('phoneField')}</span>
          <input className={field} value={form.phone} onChange={(e) => update('phone', e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-slate-700">{t('preferredSite')}</span>
          <select
            className={field}
            value={form.preferredSite}
            onChange={(e) => update('preferredSite', e.target.value as PreferredSite)}
          >
            <option value="none">{t('noPreference')}</option>
            <option value="marennes">Marennes</option>
            <option value="gujan-mestras">Gujan-Mestras</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-slate-700">{t('subject')}</span>
          <input className={field} value={form.subject} onChange={(e) => update('subject', e.target.value)} />
        </label>
        <label className="text-sm sm:col-span-2">
          <span className="mb-1 block font-medium text-slate-700">{t('message')} *</span>
          <textarea className={field} rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} required />
        </label>
        <label className="flex items-start gap-2 text-xs text-slate-500 sm:col-span-2">
          <input type="checkbox" required className="mt-0.5" />
          <span>{t('consent')}</span>
        </label>

        {error && <p className="text-sm text-accent sm:col-span-2">{error}</p>}

        <div className="sm:col-span-2">
          <button type="submit" className="btn-primary">
            <Mail size={16} /> {t('send')}
          </button>
          <p className="mt-2 text-xs text-slate-400">{t('sendHint')}</p>
        </div>
      </form>

      <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm">
        <p className="font-medium text-slate-700">{t('fallbackTitle')}</p>
        <p className="mt-1 text-slate-500">{t('fallbackText')}</p>
        <button
          type="button"
          onClick={copyEmail}
          className="mt-2 inline-flex items-center gap-1.5 font-medium text-brand hover:underline"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {contactEmails.marennes} {copied && `· ${t('copied')}`}
        </button>
      </div>
    </div>
  );
}
