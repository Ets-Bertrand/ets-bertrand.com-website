import { useTranslations } from 'next-intl';

/** Brand slogan set in the Abuget charter script font. Colour is inherited
 *  (currentColor), so the parent decides it via a text-* utility. */
export function Slogan({ className = '' }: { className?: string }) {
  const t = useTranslations('meta');
  return (
    <p className={`font-script leading-none ${className}`}>{t('sloganAlt')}</p>
  );
}
