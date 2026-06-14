import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { EXTENSION_HYDRATION_GUARD_SCRIPT } from '@/lib/extensionHydrationGuard';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'BioPlate Studio - Create Publication-Ready Morphology Plates',
  description:
    'Professional desktop app for creating scientific morphology plates for mycology and biological research. Free, open-source, and designed for researchers.',
  keywords: ['mycology', 'morphology', 'scientific plates', 'research', 'biology'],
  authors: [{ name: 'Usman Farooqi' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
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
      className={`${inter.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <body className="bg-black text-white antialiased" suppressHydrationWarning>
        <Script
          id="extension-hydration-guard"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: EXTENSION_HYDRATION_GUARD_SCRIPT,
          }}
        />
        {children}
      </body>
    </html>
  );
}
