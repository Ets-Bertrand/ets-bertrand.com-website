import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['fr', 'en', 'it'] as const;
export type Locale = (typeof locales)[number];

// FR is the authoring source of truth. First-visit auto-detection (fallback EN)
// is handled client-side by the root redirector (public/index.html), since this
// is a fully static export with no middleware.
export const routing = defineRouting({
  locales,
  defaultLocale: 'fr',
  localePrefix: 'always',
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
