'use client';

import { useCallback, useState } from 'react';
import { DownloadCTA } from '@/components/DownloadCTA';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Screenshots } from '@/components/Screenshots';
import { HeroBackgroundVideo } from '@/components/HeroBackgroundVideo';
import { ScrollVideo } from '@/components/ScrollVideo';

/**
 * Landing page client shell with video preloading transition.
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
        <div className="relative isolate">
          <div className="sticky top-0 z-0 h-svh w-full">
            <HeroBackgroundVideo />
          </div>
          <div className="relative z-10 -mt-svh">
            <ScrollVideo />
            <Features />
          </div>
        </div>
        <Screenshots />
        <DownloadCTA />
        <Footer />
      </main>
    </>
  );
}
