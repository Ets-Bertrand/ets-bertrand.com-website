'use client';

import { useEffect, useRef, useState } from 'react';

const PAGE_URL = 'https://www.facebook.com/EtablissementsBertrand';

/**
 * Embeds the official (free) Facebook Page Plugin timeline.
 * Width adapts to the container (between 180 and 500px, per the plugin limits).
 */
export function FacebookFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(500);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setWidth(Math.min(500, Math.max(180, Math.floor(w))));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const height = 640;
  const src =
    'https://www.facebook.com/plugins/page.php?' +
    new URLSearchParams({
      href: PAGE_URL,
      tabs: 'timeline',
      width: String(width),
      height: String(height),
      small_header: 'false',
      adapt_container_width: 'true',
      hide_cover: 'false',
      show_facepile: 'true',
    }).toString();

  return (
    <div ref={ref} className="mx-auto w-full max-w-[500px]">
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
        <iframe
          key={width}
          src={src}
          width={width}
          height={height}
          title="Facebook — Établissements Bertrand"
          className="w-full"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder={0}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
