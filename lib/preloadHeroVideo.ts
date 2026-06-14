import {
  getScrollVideoMimeType,
  getScrollVideoSrcForViewport,
} from '@/lib/scrollVideoSource';

let preloadPromise: Promise<void> | null = null;

/**
 * Preloads the hero video while the loading screen is visible.
 * Reuses the same URL the hero will request (1080p or 4K by viewport).
 */
export function preloadHeroVideo(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (preloadPromise) return preloadPromise;

  preloadPromise = new Promise((resolve) => {
    const src = getScrollVideoSrcForViewport();
    const video = document.createElement('video');
    video.muted = true;
    video.preload = 'auto';
    video.playsInline = true;
    video.crossOrigin = 'anonymous';

    const source = document.createElement('source');
    source.src = src;
    source.type = getScrollVideoMimeType(src);
    video.appendChild(source);

    const finish = () => {
      video.removeEventListener('canplaythrough', finish);
      video.removeEventListener('error', finish);
      video.removeAttribute('src');
      video.load();
      resolve();
    };

    video.addEventListener('canplaythrough', finish);
    video.addEventListener('error', finish);
    video.load();

    window.setTimeout(finish, 5000);
  });

  return preloadPromise;
}
