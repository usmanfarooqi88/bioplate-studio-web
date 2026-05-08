'use client';

import { useEffect, useRef, useState } from 'react';
import {
  SCROLL_VIDEO_1080,
  getScrollVideoSrcForViewport,
} from '@/lib/scrollVideoSource';
import { Logo } from './Logo';

/**
 * Hero section that synchronizes a full-bleed video with page scroll progress.
 */
export function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoSrc, setVideoSrc] = useState<string>(SCROLL_VIDEO_1080);

  useEffect(() => {
    const updateVideoQuality = () => {
      setVideoSrc(getScrollVideoSrcForViewport());
    };

    updateVideoQuality();
    window.addEventListener('resize', updateVideoQuality);
    return () => window.removeEventListener('resize', updateVideoQuality);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollEnd = rect.height - window.innerHeight;
      const scrolled = -rect.top;

      const progress = Math.max(
        0,
        Math.min(1, scrolled / Math.max(1, scrollEnd))
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', onVisibilityChange);
  }, [videoSrc]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          key={videoSrc}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[8] h-96 bg-gradient-to-b from-transparent via-black/50 to-black transition-opacity duration-700"
          style={{
            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.6) * 2.5)),
          }}
        />

        <div
          className="absolute inset-0 z-10 transition-opacity duration-700"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 3) }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-8 z-[30] flex justify-center md:top-12">
            <div className="pointer-events-auto">
              <Logo
                width={200}
                height={64}
                className="h-[56px] w-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="flex h-full flex-col items-center justify-center px-6">
            <h1 className="mb-12 max-w-4xl px-4 text-center text-3xl font-bold leading-tight text-white drop-shadow-2xl md:text-4xl lg:text-5xl">
              Create publication-ready morphology plates for mycology and
              biological research
            </h1>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#download"
                className="transform rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:from-purple-500 hover:to-purple-700"
              >
                Download Free
              </a>
              <a
                href="#features"
                className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center px-6 transition-all duration-700"
          style={{
            opacity: Math.max(0, Math.min(1, (scrollProgress - 0.3) * 3)),
            transform: `translateY(${Math.max(0, (0.4 - scrollProgress) * 100)}px)`,
          }}
        >
          <div className="text-center">
            <h2 className="mb-6 text-5xl font-bold text-white drop-shadow-2xl md:text-7xl">
              Professional Scientific Plates
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-200 drop-shadow-lg md:text-2xl">
              Multi-panel layouts • Automatic labeling • Scale bars •
              High-resolution export
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2">
          <div className="h-24 w-1 overflow-hidden rounded-full bg-white/20">
            <div
              className="w-full bg-gradient-to-b from-purple-400 to-teal-400 transition-all duration-100"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          <span className="font-mono text-xs text-white/60">
            {Math.round(scrollProgress * 100)}%
          </span>
          <div
            className="mt-2 animate-bounce transition-opacity duration-300"
            style={{ opacity: scrollProgress < 0.95 ? 0.5 : 0 }}
          >
            <svg
              className="h-5 w-5 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
