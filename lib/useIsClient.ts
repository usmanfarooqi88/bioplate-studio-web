'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/**
 * Returns false during SSR and the first client hydration pass, then true.
 * Use to defer UI that must not mismatch server HTML (or browser extensions).
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
