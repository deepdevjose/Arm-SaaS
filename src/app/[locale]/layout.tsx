import type { Metadata } from 'next';
import { IBM_Plex_Mono, Sora } from 'next/font/google';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import '../globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora'
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'ARM Health',
  description: 'Enterprise SaaS for ARM fleet monitoring, diagnostics, and optimization.'
};

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${sora.variable} ${plexMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}