import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
});

const gambarino = localFont({
  variable: '--font-gambarino',
  src: './assets/fonts/gambarino.woff2',
});

export const metadata: Metadata = {
  title: 'Loqaat - Marketing Agency',
  description: 'Your marketing partner.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${jost.variable} ${gambarino}`}>{children}</body>
    </html>
  );
}
