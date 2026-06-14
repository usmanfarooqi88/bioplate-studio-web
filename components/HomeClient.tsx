'use client';

import { useCallback, useState } from 'react';
import { DownloadCTA } from '@/components/DownloadCTA';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { HeroSection } from '@/components/HeroSection';
import { Screenshots } from '@/components/Screenshots';

/**
 * Landing page client shell with video preloading transition.
 * Structure:
 * - HeroSection (boomerang video + GSAP parallax)
 * - Screenshots
 * - DownloadCTA
 * - Footer
 */
export function HomeClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    window.setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <main
        className={`relative transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <HeroSection />

        {/* Smooth hero → features blend */}
        <div
          className="pointer-events-none relative -mt-32 h-32 sm:-mt-40 sm:h-40"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(26,0,51,0.15) 20%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,1) 100%)',
          }}
          aria-hidden
        />

        <Screenshots />
        <DownloadCTA />
        <Footer />
      </main>
    </>
  );
}
