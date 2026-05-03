'use client';

import { useCallback, useState } from 'react';
import { DownloadCTA } from '@/components/DownloadCTA';
import { Footer } from '@/components/Footer';
import { Features } from '@/components/Features';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ScrollVideo } from '@/components/ScrollVideo';

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
        <Features />
        <DownloadCTA />
        <Footer />
      </main>
    </>
  );
}
