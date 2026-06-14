'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

/**
 * Persists the active locale so the root redirector honours it on next visit.
 * Loading a URL of another locale therefore updates the stored preference.
 */
export function LocalePersister() {
  const locale = useLocale();
  useEffect(() => {
    try {
      localStorage.setItem('preferredLocale', locale);
      document.cookie = `preferredLocale=${locale};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* ignore */
    }
  }, [locale]);
  return null;
}
