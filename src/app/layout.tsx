import { Metadata } from 'next';
import { Bricolage_Grotesque, Sora } from 'next/font/google';

import './tailwind.css';
import './globals.css';

const sora = Sora({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

const bricolage = Bricolage_Grotesque({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Sea Click & Sun'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${bricolage.variable} ${sora.variable}`} lang="fr">
      <body>{children}</body>
    </html>
  );
}
