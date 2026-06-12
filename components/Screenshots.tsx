'use client';

import Image from 'next/image';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

const FEATURES = [
  {
    tag: 'Layout',
    title: 'Flexible grid layouts',
    description:
      'Build 2×2 through 4×4 plates with precise margins and gutters—labels stay organized from the first grid.',
    image: '/screenshots/app_screen_1.jpg',
  },
  {
    tag: 'Panels',
    title: 'Smart panel editing',
    description:
      'Select any cell to swap imagery, tune typography, duplicate work, or remove panels without breaking the plate.',
    image: '/screenshots/app_screen_2.jpg',
  },
  {
    tag: 'Import',
    title: 'Publication-ready plates',
    description:
      'Batch-import JPG, PNG, WebP, or PSD files and watch each asset land in the next open slot with automatic lettering.',
    image: '/screenshots/app_screen_3.jpg',
  },
  {
    tag: 'Scale bars',
    title: 'Publication-ready scale bars per panel',
    description:
      'Toggle scale bars, choose print presets from millimeters to centimeters, set orientation, thickness, color, and apply across all panels.',
    image: '/screenshots/app_screen_5.jpg',
  },
  {
    tag: 'Preferences',
    title: 'Advanced customization',
    description:
      'Preferences keep relabeling rules, scale modes, safety prompts, and UI density aligned with how your lab actually works.',
    image: '/screenshots/app_screen_6.jpg',
  },
] as const;

const GLASS_CARD =
  'rounded-3xl border border-white/[0.1] bg-white/[0.06] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.75)] backdrop-blur-xl';

function ScreenshotsComponent() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const syncEdges = useCallback(() => {
    const row = scrollerRef.current;
    if (!row) return;
    const maxScroll = row.scrollWidth - row.clientWidth;
    const left = row.scrollLeft;
    setEdge({
      start: left <= 4,
      end: left >= maxScroll - 4,
    });
  }, []);

  useEffect(() => {
    const row = scrollerRef.current;
    if (!row) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(syncEdges);
    };

    row.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', syncEdges, { passive: true });
    syncEdges();

    return () => {
      row.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', syncEdges);
      cancelAnimationFrame(raf);
    };
  }, [syncEdges]);

  const cardStepPx = () => {
    const row = scrollerRef.current;
    const card = row?.querySelector<HTMLElement>('[data-carousel-card]');
    if (!card) return 424;
    return card.offsetWidth + 24;
  };

  const scrollByDir = (dir: -1 | 1) => {
    const row = scrollerRef.current;
    if (!row) return;
    row.scrollBy({ left: dir * cardStepPx(), behavior: 'smooth' });
  };

  return (
    <section
      id="screenshots"
      className="relative scroll-mt-6 overflow-x-hidden bg-black text-white"
      aria-labelledby="features-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-purple-950/[0.08] to-black" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="pb-8 pt-16 sm:pb-10 sm:pt-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/90">
            Inside the app
          </p>
          <h2
            id="features-heading"
            className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:max-w-4xl md:text-5xl"
          >
            Everything your lab needs to lay out plates and ship figures
          </h2>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {FEATURES.map((feature, index) => (
            <article
              key={feature.image}
              data-carousel-card
              className={`relative w-[min(18.5rem,100%)] shrink-0 snap-start sm:w-[22rem] md:w-[26rem] ${GLASS_CARD} overflow-hidden`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80" />
              <div className="relative aspect-[16/10] w-full bg-neutral-900/80">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 296px, 416px"
                  priority={index === 0}
                />
              </div>
              <div className="relative space-y-3 px-5 py-6 sm:px-6 sm:py-7">
                <span className="inline-flex rounded-full border border-white/15 bg-white/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-200/95">
                  {feature.tag}
                </span>
                <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 sm:text-[0.9375rem]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-end pb-14 pt-6">
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous features"
              disabled={edge.start}
              onClick={() => scrollByDir(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white shadow-lg backdrop-blur-md transition enabled:hover:border-white/25 enabled:hover:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <span aria-hidden className="text-lg leading-none">
                ‹
              </span>
            </button>
            <button
              type="button"
              aria-label="Next features"
              disabled={edge.end}
              onClick={() => scrollByDir(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white shadow-lg backdrop-blur-md transition enabled:hover:border-white/25 enabled:hover:bg-white/[0.12] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <span aria-hidden className="text-lg leading-none">
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Screenshots = memo(ScreenshotsComponent);
