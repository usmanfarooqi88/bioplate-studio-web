'use client';

import { useCallback, useState } from 'react';
import { DownloadCTA } from '@/components/DownloadCTA';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ScrollVideo } from '@/components/ScrollVideo';
import { Screenshots } from '@/components/Screenshots';

/**
 * Landing page entry with video preloading transition.
 * Smooth scroll targets: #features (screenshots), #download (installers).
 */
export default function Home() {
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
        className={`bg-black transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ScrollVideo />
        <Screenshots />
        <DownloadCTA />
        <Footer />
      </main>
    </>
  );
}
