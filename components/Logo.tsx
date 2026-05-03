'use client';

import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * BioPlate Studio logo — light variant asset for use on dark backgrounds.
 */
export function Logo({
  width = 200,
  height = 64,
  className = '',
}: LogoProps) {
  return (
    <Image
      src="/bioplate_logo_light.svg"
      alt="BioPlate Studio"
      width={width}
      height={height}
      className={className}
      priority
      unoptimized
    />
  );
}
