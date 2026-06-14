'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initializes Lenis smooth scroll. Skips when reduced motion is preferred.
 */
export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotion) return;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const lenis = new Lenis({
      duration: isMobile ? 0.9 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: isMobile ? 1.5 : 2,
      wheelMultiplier: 1,
      infinite: false,
      autoRaf: true,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, [enabled]);
}
