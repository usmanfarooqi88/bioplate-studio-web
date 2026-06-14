'use client';

import { useEffect, useState } from 'react';
import { preloadHeroVideo } from '@/lib/preloadHeroVideo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    preloadHeroVideo();
  }, []);

  useEffect(() => {
    let animationFrame: number;
    let currentProgress = 0;
    let fadeTimeoutId = 0;
    let completeTimeoutId = 0;

    const animate = () => {
      currentProgress += Math.random() * 30;

      if (currentProgress > 90) {
        currentProgress = 90;
      }

      setProgress(currentProgress);

      if (currentProgress < 90) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    const completeTimer = window.setTimeout(() => {
      setProgress(100);

      fadeTimeoutId = window.setTimeout(() => {
        setFadeOut(true);

        completeTimeoutId = window.setTimeout(onComplete, 300);
      }, 300);
    }, 2000);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(completeTimer);
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(completeTimeoutId);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-300 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="mb-16 font-heading text-5xl font-bold tracking-tight text-white md:text-6xl">
        BioPlate Studio
      </h1>

      <div className="h-1 w-64 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-teal-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-sm font-light tracking-widest text-white/50">
        {Math.round(progress)}%
      </p>
    </div>
  );
}
