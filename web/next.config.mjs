import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site for GitHub Pages (no server runtime).
  output: 'export',
  trailingSlash: true,
  images: {
    // next/image optimization is unavailable on static export.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
