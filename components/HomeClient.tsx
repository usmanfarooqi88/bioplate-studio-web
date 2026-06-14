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
        <Screenshots />
        <DownloadCTA />
        <Footer />
      </main>
    </>
  );
}
