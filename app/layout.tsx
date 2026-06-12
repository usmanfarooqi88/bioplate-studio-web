import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { EXTENSION_HYDRATION_GUARD_SCRIPT } from '@/lib/extensionHydrationGuard';
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
      <body className={inter.className} suppressHydrationWarning>
        <Script
          id="extension-hydration-guard"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: EXTENSION_HYDRATION_GUARD_SCRIPT,
          }}
        />
        <div suppressHydrationWarning>{children}</div>
      </body>
    </html>
  );
}
