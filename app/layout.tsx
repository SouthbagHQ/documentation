import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { PalantirEvents } from '@/components/palantir-events';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {/* Palantir: Southbag's shared PostHog wiring (see public/palantir.js). */}
        <Script src="/palantir.js" strategy="afterInteractive" data-app="documentation" />
        <PalantirEvents />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
