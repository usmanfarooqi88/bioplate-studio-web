export const SCROLL_VIDEO_1080 = '/videos/mushroom-scroll-1080.webm' as const;
export const SCROLL_VIDEO_4K = '/videos/mushroom-scroll-4k.webm' as const;

const LARGE_DISPLAY_MIN_CSS_PX = 2560;

export type ScrollVideoSrc = typeof SCROLL_VIDEO_1080 | typeof SCROLL_VIDEO_4K;

export function getScrollVideoSrcForViewport(): ScrollVideoSrc {
  if (typeof window === 'undefined') return SCROLL_VIDEO_1080;
  const isLargeDisplay =
    window.innerWidth >= LARGE_DISPLAY_MIN_CSS_PX ||
    window.screen.width >= LARGE_DISPLAY_MIN_CSS_PX;
  return isLargeDisplay ? SCROLL_VIDEO_4K : SCROLL_VIDEO_1080;
}

export function getScrollVideoMimeType(src: ScrollVideoSrc): string {
  return src.endsWith('.webm') ? 'video/webm' : 'video/mp4';
}
