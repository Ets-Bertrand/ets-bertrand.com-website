export const contactEmails = {
  marennes:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL_MARENNES || 'marennes@ets-bertrand.com',
  gujan:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL_GUJAN || 'gujan@ets-bertrand.com',
};

export type PreferredSite = 'marennes' | 'gujan-mestras' | 'none';

export type QuoteForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  preferredSite: PreferredSite;
  subject: string;
  message: string;
};

/**
 * Resolve to + cc according to the preferred site.
 * Gujan is only ever contacted when explicitly selected (then with Marennes in
 * cc). In every other case (Marennes or no preference), only Marennes is used.
 */
export function resolveRecipients(site: PreferredSite): { to: string; cc?: string } {
  if (site === 'gujan-mestras') return { to: contactEmails.gujan, cc: contactEmails.marennes };
  // Marennes or no preference -> Marennes only.
  return { to: contactEmails.marennes };
}

const labels = {
  fr: { name: 'Nom', company: 'Société', email: 'E-mail', phone: 'Téléphone', message: 'Message' },
  en: { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', message: 'Message' },
  it: { name: 'Nome', company: 'Azienda', email: 'E-mail', phone: 'Telefono', message: 'Messaggio' },
};

export function buildMailto(
  form: QuoteForm,
  locale: 'fr' | 'en' | 'it'
): string {
  const { to, cc } = resolveRecipients(form.preferredSite);
  const l = labels[locale];
  const subject = form.subject?.trim() || 'Demande de devis — ets-bertrand.com';
  const bodyLines = [
    `${l.name}: ${form.name}`,
    form.company ? `${l.company}: ${form.company}` : null,
    `${l.email}: ${form.email}`,
    form.phone ? `${l.phone}: ${form.phone}` : null,
    '',
    `${l.message}:`,
    form.message,
  ].filter((x): x is string => x !== null);

  const params = new URLSearchParams();
  params.set('subject', subject);
  params.set('body', bodyLines.join('\n'));
  if (cc) params.set('cc', cc);

  // URLSearchParams encodes spaces as '+', which some mail clients mishandle.
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${to}?${query}`;
}
