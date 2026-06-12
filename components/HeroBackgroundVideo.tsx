'use client';

import { useEffect, useRef, useState } from 'react';
import {
  SCROLL_VIDEO_1080,
  getScrollVideoMimeType,
  getScrollVideoSrcForViewport,
  type ScrollVideoSrc,
} from '@/lib/scrollVideoSource';

/**
 * Full-viewport fixed video behind hero + features. Scroll overlays sit above.
 */
export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<ScrollVideoSrc>(SCROLL_VIDEO_1080);

  useEffect(() => {
    const updateVideoQuality = () => {
      setVideoSrc(getScrollVideoSrcForViewport());
    };

    updateVideoQuality();
    window.addEventListener('resize', updateVideoQuality);
    return () => window.removeEventListener('resize', updateVideoQuality);
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
    <div
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      aria-hidden
    >
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
        <source src={videoSrc} type={getScrollVideoMimeType(videoSrc)} />
      </video>
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/55" />
    </div>
  );
}
