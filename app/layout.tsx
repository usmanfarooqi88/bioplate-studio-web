import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BioPlate Studio - Create Publication-Ready Morphology Plates',
  description:
    'Professional desktop app for creating scientific morphology plates for mycology and biological research.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/videos/mushroom-scroll-1080.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
