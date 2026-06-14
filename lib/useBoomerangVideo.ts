'use client';

import { useEffect, useRef } from 'react';

const CAPTURE_FPS = 30;
const MAX_WIDTH = 960;

/**
 * Captures video frames on first play, then loops them forward/backward on canvas.
 */
export function useBoomerangVideo(
  video: HTMLVideoElement | null,
  canvas: HTMLCanvasElement | null,
  src: string,
  enabled: boolean
) {
  const framesRef = useRef<ImageData[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!enabled || !video || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let cancelled = false;
    let capturing = true;
    let lastCaptureSlot = -1;
    let playbackIndex = 0;
    let playbackDirection = 1;
    let lastPlaybackTime = 0;
    const frameInterval = 1000 / CAPTURE_FPS;

    const resizeCanvas = () => {
      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh) return;
      const scale = Math.min(1, MAX_WIDTH / vw);
      canvas.width = Math.floor(vw * scale);
      canvas.height = Math.floor(vh * scale);
    };

    const captureFrame = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      framesRef.current.push(
        ctx.getImageData(0, 0, canvas.width, canvas.height)
      );
    };

    const startPlayback = () => {
      capturing = false;
      const frames = framesRef.current;
      if (frames.length < 2) return;

      playbackIndex = 0;
      playbackDirection = 1;
      lastPlaybackTime = performance.now();

      const tick = (now: number) => {
        if (cancelled) return;

        if (now - lastPlaybackTime >= frameInterval) {
          lastPlaybackTime = now;
          ctx.putImageData(frames[playbackIndex], 0, 0);

          const next = playbackIndex + playbackDirection;
          if (next >= frames.length) {
            playbackDirection = -1;
            playbackIndex = frames.length - 2;
          } else if (next < 0) {
            playbackDirection = 1;
            playbackIndex = 1;
          } else {
            playbackIndex = next;
          }
        }

        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const onTimeUpdate = () => {
      if (!capturing) return;
      const slot = Math.floor(video.currentTime * CAPTURE_FPS);
      if (slot > lastCaptureSlot) {
        lastCaptureSlot = slot;
        captureFrame();
      }
    };

    const onEnded = () => {
      video.pause();
      startPlayback();
    };

    const startCapture = () => {
      resizeCanvas();
      framesRef.current = [];
      lastCaptureSlot = -1;
      capturing = true;
      cancelAnimationFrame(rafRef.current);
      video.currentTime = 0;
      video.loop = false;
      video.play().catch(() => {});
    };

    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = 'anonymous';
    video.src = src;

    video.addEventListener('loadeddata', startCapture);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      startCapture();
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener('loadeddata', startCapture);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
      video.pause();
    };
  }, [video, canvas, src, enabled]);
}
