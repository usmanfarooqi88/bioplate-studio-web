'use client';

import { useEffect, useRef, useState } from 'react';
import { getScrollVideoSrcForViewport } from '@/lib/scrollVideoSource';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const videoSrc = getScrollVideoSrcForViewport();

    const video = document.createElement('video');
    video.src = videoSrc;
    video.preload = 'auto';
    video.muted = true;

    const updateProgressFromBuffer = () => {
      if (video.buffered.length > 0 && video.duration > 0) {
        const loaded = video.buffered.end(video.buffered.length - 1);
        const total = video.duration;
        setProgress(Math.min((loaded / total) * 100, 100));
      }
    };

    let fadeTimeoutId = 0;
    let completeTimeoutId = 0;
    let forceTimeoutId = 0;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      window.clearTimeout(forceTimeoutId);
      setProgress(100);
      fadeTimeoutId = window.setTimeout(() => {
        setFadeOut(true);
        completeTimeoutId = window.setTimeout(() => {
          onCompleteRef.current();
        }, 500);
      }, 500);
    };

    const onCanPlayThrough = () => finish();

    video.addEventListener('progress', updateProgressFromBuffer);
    video.addEventListener('loadedmetadata', updateProgressFromBuffer);
    video.addEventListener('canplaythrough', onCanPlayThrough);

    forceTimeoutId = window.setTimeout(() => finish(), 5000);

    video.load();

    return () => {
      window.clearTimeout(forceTimeoutId);
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(completeTimeoutId);
      video.removeEventListener('progress', updateProgressFromBuffer);
      video.removeEventListener('loadedmetadata', updateProgressFromBuffer);
      video.removeEventListener('canplaythrough', onCanPlayThrough);
      video.removeAttribute('src');
      video.load();
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="mb-8 animate-pulse">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/30 to-teal-500/30">
          <svg
            className="h-16 w-16 text-purple-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            />
          </svg>
        </div>
      </div>

      <h2 className="mb-6 animate-fade-in text-2xl font-semibold text-white">
        Loading BioPlate Studio
      </h2>

      <div className="h-2 w-80 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-teal-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 font-mono text-sm text-gray-400">{Math.round(progress)}%</p>

      <div className="mt-6 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-2 w-2 animate-pulse rounded-full bg-purple-400"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
