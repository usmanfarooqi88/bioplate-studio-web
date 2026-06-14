'use client';

import Image from 'next/image';
import { memo, useEffect, useRef, useState } from 'react';

const FEATURES = [
  {
    tag: 'LAYOUT',
    title: 'Flexible grid layouts',
    description:
      'Build 2×2 through 4×4 plates with precise margins and gutters—labels stay organized from the first grid.',
    image: '/screenshots/app_screen_1.jpg',
    color: 'from-purple-500 to-purple-900',
  },
  {
    tag: 'PANELS',
    title: 'Smart panel editing',
    description:
      'Select any cell to swap imagery, tune typography, duplicate work, or remove panels without breaking the plate.',
    image: '/screenshots/app_screen_2.jpg',
    color: 'from-blue-500 to-blue-900',
  },
  {
    tag: 'IMPORT',
    title: 'Publication-ready plates',
    description:
      'Batch-import JPG, PNG, WebP, or PSD files and watch each asset land in the next open slot with automatic lettering.',
    image: '/screenshots/app_screen_3.jpg',
    color: 'from-teal-500 to-teal-900',
  },
  {
    tag: 'SCALE BARS',
    title: 'Publication-ready scale bars per panel',
    description:
      'Toggle scale bars, choose print presets from millimeters to centimeters, set orientation, thickness, color, and apply across all panels.',
    image: '/screenshots/app_screen_5.jpg',
    color: 'from-pink-500 to-pink-900',
  },
  {
    tag: 'PREFERENCES',
    title: 'Advanced customization',
    description:
      'Preferences keep relabeling rules, scale modes, safety prompts, and UI density aligned with how your lab actually works.',
    image: '/screenshots/app_screen_6.jpg',
    color: 'from-purple-500 to-pink-900',
  },
];

function ScreenshotsComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;

      const sectionTop = scrollY + rect.top;
      const sectionHeight = container.offsetHeight;

      const triggerStart = sectionTop - windowHeight * 0.5;
      const triggerEnd = sectionTop + sectionHeight - windowHeight * 0.5;

      if (scrollY < triggerStart) {
        setActiveIndex(0);
        return;
      }

      if (scrollY >= triggerEnd) {
        setActiveIndex(FEATURES.length - 1);
        return;
      }

      const progressInSection =
        (scrollY - triggerStart) / (triggerEnd - triggerStart);
      const rawIndex = progressInSection * FEATURES.length;
      const newIndex = Math.floor(rawIndex);
      const clampedIndex = Math.max(0, Math.min(newIndex, FEATURES.length - 1));

      setActiveIndex(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const feature = FEATURES[activeIndex];

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative bg-black"
      style={{ height: `${FEATURES.length * 100}vh` }}
      aria-label="App features"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        <div
          className={`absolute -inset-1/2 bg-gradient-to-br ${feature.color} opacity-10 blur-3xl transition-all duration-1000 ease-out`}
        />
      </div>

      <div className="sticky top-0 z-10 flex h-screen max-h-screen flex-col items-center justify-center overflow-hidden bg-black/95 px-4 pb-8 pt-28 backdrop-blur-sm sm:pt-32">
        <div className="flex w-full max-w-3xl min-h-0 flex-1 flex-col items-center justify-center gap-5 overflow-y-auto py-4 sm:gap-6 md:gap-8">
          <span className="badge-accent shrink-0">{feature.tag}</span>

          <div className="feature-text w-full shrink-0 px-2 text-center sm:px-6">
            <h2 className="mx-auto mb-3 max-w-2xl text-3xl font-bold leading-tight text-white sm:mb-4 sm:text-4xl md:text-5xl">
              {feature.title}
            </h2>
            <p className="mx-auto max-w-2xl break-words text-base leading-relaxed text-white/70 sm:text-lg">
              {feature.description}
            </p>
          </div>

          <div className="relative w-full max-w-2xl shrink-0">
            <div
              className={`pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br ${feature.color} opacity-20 blur-2xl`}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[16/10] max-h-[34vh] w-full sm:max-h-[38vh]">
                <Image
                  key={feature.image}
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority={activeIndex === 0}
                />
              </div>
            </div>
          </div>

          <div className="flex shrink-0 gap-2 pt-1">
            {FEATURES.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? 'w-8 bg-purple-500'
                    : 'w-2 bg-white/30'
                }`}
                aria-hidden
              />
            ))}
          </div>

          <p className="shrink-0 font-mono text-xs text-gray-500">
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(FEATURES.length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </section>
  );
}

export const Screenshots = memo(ScreenshotsComponent);
