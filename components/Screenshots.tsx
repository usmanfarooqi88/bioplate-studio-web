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

      const progressInSection = (scrollY - triggerStart) / (triggerEnd - triggerStart);
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

  const currentFeature = FEATURES[activeIndex];

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative bg-black"
      style={{ height: `${FEATURES.length * 100}vh` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black pointer-events-none" />
        
        {/* Dynamic glow based on active feature */}
        <div
          className={`absolute -inset-1/2 bg-gradient-to-br ${currentFeature.color} opacity-10 blur-3xl transition-all duration-1000 ease-out`}
        />
      </div>

      {/* Sticky content */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10">
          <div className="text-center space-y-4 md:space-y-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-out ${
                  activeIndex === index
                    ? 'opacity-100 relative scale-100'
                    : 'opacity-0 absolute inset-0 pointer-events-none scale-95'
                }`}
              >
                {/* Tag with enhanced styling */}
                <div className="mb-6 md:mb-8 inline-block">
                  <span className="badge-accent">
                    {feature.tag}
                  </span>
                </div>

                {/* Title with gradient effect */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight max-w-5xl mx-auto">
                  {feature.title}
                </h2>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
                  {feature.description}
                </p>

                {/* Screenshot with enhanced glass effect */}
                <div className="max-w-5xl mx-auto">
                  <div className="group relative">
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-6 md:-inset-8 rounded-[3rem] bg-gradient-to-br ${feature.color} opacity-20 blur-3xl group-hover:opacity-30 group-hover:blur-[40px] transition-all duration-700`}
                    />

                    {/* Glass container */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl hover:border-white/20 transition-all duration-300 group-hover:shadow-3xl group-hover:shadow-purple-500/20">
                      {/* Inner content */}
                      <div className="relative aspect-[16/10] bg-gradient-to-br from-white/10 to-transparent">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 80vw"
                          priority={index === 0}
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress dots with enhanced design */}
                <div className="flex justify-center gap-3 mt-14 md:mt-16">
                  {FEATURES.map((_, idx) => (
                    <div key={idx} className="relative group">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          idx === activeIndex
                            ? 'w-12 bg-gradient-to-r from-purple-500 to-teal-500 shadow-lg shadow-purple-500/50'
                            : idx < activeIndex
                            ? 'w-10 bg-gradient-to-r from-purple-400 to-purple-600 opacity-60'
                            : 'w-8 bg-white/20 hover:bg-white/30'
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* Feature count indicator */}
                <div className="mt-10 text-sm text-gray-500 font-mono">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(FEATURES.length).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const Screenshots = memo(ScreenshotsComponent);
