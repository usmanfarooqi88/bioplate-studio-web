'use client';

import dynamic from 'next/dynamic';

const HomeClient = dynamic(
  () => import('@/components/HomeClient').then((mod) => mod.HomeClient),
  {
    ssr: false,
    loading: () => (
      <main
        className="min-h-screen bg-black"
        aria-busy="true"
        aria-label="Loading BioPlate Studio"
      />
    ),
  }
);

/**
 * Client entry — disables SSR for the landing tree to avoid hydration drift.
 */
export function HomePage() {
  return <HomeClient />;
}
