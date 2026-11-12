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
        <Script src="https://cdn.jsdelivr.net/gh/southbag-agent/southbag.js@ffb01b96602e488702acd5897ddc384f0d65cbec/southbag.js" integrity="sha384-dUuMJLfNDWaxW0dKYOA/XcF6mMyMa5kzHCkzNSkMQpeRpqjfn6/l+AFUi5Nd6Y9v" crossOrigin="anonymous" strategy="afterInteractive" data-app="documentation" />
        <PalantirEvents />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
