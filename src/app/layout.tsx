import type { Metadata } from 'next';
import { Bricolage_Grotesque, Sora } from 'next/font/google';

import { ThemeProvider } from '@/theme/ThemeProvider';

// import './globals.scss';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage'
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora'
});

export const metadata: Metadata = {
  description: 'Site WordPress Headless avec Next.js et Apollo',
  title: 'WordPress avec Next.js'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${bricolageGrotesque.variable} ${sora.variable}`}>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
