'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Img } from '@/lib/types';
import type { Locale } from '@/i18n/routing';

export function Gallery({ images, locale }: { images: Img[]; locale: Locale }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  if (count === 0) return null;

  const safeIndex = Math.min(index, count - 1);
  const current = images[safeIndex];
  const hasPrev = safeIndex > 0;
  const hasNext = safeIndex < count - 1;

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
        <div className="flex aspect-[4/3] items-center justify-center p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt[locale]}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {hasPrev && (
          <button
            type="button"
            onClick={() => setIndex(safeIndex - 1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft size={22} />
          </button>
        )}
        {hasNext && (
          <button
            type="button"
            onClick={() => setIndex(safeIndex + 1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-white hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight size={22} />
          </button>
        )}

        {count > 1 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white">
            {safeIndex + 1} / {count}
          </span>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Image ${i + 1}`}
              aria-current={i === safeIndex}
              className={`h-16 w-20 overflow-hidden rounded-lg border bg-slate-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                i === safeIndex ? 'border-brand ring-2 ring-brand/30' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt[locale]}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
