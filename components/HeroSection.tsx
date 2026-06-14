'use client';

import gsap from 'gsap';
import {
  Download,
  Grid3X3,
  Ruler,
  Tags,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Logo } from '@/components/Logo';
import {
  SCROLL_VIDEO_1080,
  getScrollVideoMimeType,
  getScrollVideoSrcForViewport,
  type ScrollVideoSrc,
} from '@/lib/scrollVideoSource';
import { useBoomerangVideo } from '@/lib/useBoomerangVideo';

const FEATURE_BADGES = [
  { icon: Grid3X3, label: 'Grid layouts' },
  { icon: Tags, label: 'Auto-labeling' },
  { icon: Ruler, label: 'Scale bars' },
  { icon: Download, label: 'Export' },
] as const;

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
] as const;

/**
 * BioPlate Studio hero — boomerang canvas video, GSAP mouse parallax, glass UI.
 */
export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const [canvasEl, setCanvasEl] = useState<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [videoSrc, setVideoSrc] = useState<ScrollVideoSrc>(SCROLL_VIDEO_1080);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const updateSrc = () => setVideoSrc(getScrollVideoSrcForViewport());
    updateSrc();
    window.addEventListener('resize', updateSrc);
    return () => window.removeEventListener('resize', updateSrc);
  }, []);

  useBoomerangVideo(
    videoEl,
    canvasEl,
    videoSrc,
    mounted && !reduceMotion
  );

  useEffect(() => {
    if (!mounted || reduceMotion) return;
    const layer = parallaxRef.current;
    if (!layer) return;

    const xTo = gsap.quickTo(layer, 'x', {
      duration: 0.8,
      ease: 'power3.out',
      overwrite: 'auto',
    });
    const yTo = gsap.quickTo(layer, 'y', {
      duration: 0.8,
      ease: 'power3.out',
      overwrite: 'auto',
    });

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      xTo(dx * 18);
      yTo(dy * 12);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mounted, reduceMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !reduceMotion) return;

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else video.play().catch(() => {});
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [reduceMotion, videoSrc]);

  const reveal = (delayMs: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${delayMs}ms, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${delayMs}ms`,
  });

  return (
    <section
      className="relative min-h-svh w-full overflow-hidden"
      aria-label="BioPlate Studio hero"
    >
      {/* Hidden video for frame capture */}
      <video
        key={`capture-${videoSrc}`}
        ref={(node) => {
          videoRef.current = node;
          setVideoEl(node);
        }}
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        aria-hidden
      >
        <source src={videoSrc} type={getScrollVideoMimeType(videoSrc)} />
      </video>

      {/* Canvas boomerang background */}
      {!reduceMotion ? (
        <canvas
          ref={(node) => {
            canvasRef.current = node;
            setCanvasEl(node);
          }}
          className="absolute inset-0 h-full w-full scale-105 object-cover will-change-transform"
          aria-hidden
        />
      ) : (
        <video
          key={`loop-${videoSrc}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src={videoSrc} type={getScrollVideoMimeType(videoSrc)} />
        </video>
      )}

      {/* Atmospheric overlays */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(168,85,247,0.18),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(20,184,166,0.14),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[12] h-48 sm:h-64"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)',
        }}
        aria-hidden
      />

      {/* Fixed navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-safe-top sm:px-6 md:px-10">
        <div
          className="glass-effect mx-auto mt-4 flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
          style={reveal(0)}
        >
          <a href="#" className="flex shrink-0 items-center" aria-label="BioPlate Studio home">
            <Logo width={140} height={44} className="h-9 w-auto sm:h-10" />
          </a>

          <div className="flex items-center gap-4 sm:gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light text-white/70 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              className="btn-gradient-primary px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Download now
            </a>
          </div>
        </div>
      </nav>

      {/* Parallax content */}
      <div
        ref={parallaxRef}
        className="relative z-10 flex min-h-svh flex-col items-center justify-center px-4 pb-16 pt-28 will-change-transform sm:px-6 md:px-10"
      >
        <div className="mx-auto w-full max-w-5xl text-center">
          <h1
            className="font-heading text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={reveal(220)}
          >
            Create Publication-Ready Morphology Plates
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl"
            style={reveal(360)}
          >
            Design complex multi-panel layouts with precision. Built for
            mycologists and biological researchers.
          </p>

          {/* Feature badges */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            style={reveal(480)}
          >
            {FEATURE_BADGES.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className="glass-effect flex items-center gap-2.5 px-4 py-2.5"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.7s ease ${520 + index * 90}ms, transform 0.7s ease ${520 + index * 90}ms`,
                }}
              >
                <Icon
                  className="h-4 w-4 text-purple-300"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-sm text-gray-200">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center" style={reveal(720)}>
            <a
              href="#download"
              className="btn-gradient-primary px-8 py-4 text-base"
              aria-label="Download BioPlate Studio now"
            >
              Download Now
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          style={reveal(900)}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
            Scroll
          </span>
          <div className="animate-bounce-slow">
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
    </section>
  );
}
