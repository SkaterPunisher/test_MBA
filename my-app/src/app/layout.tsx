import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import '@/styles/global.scss';
import Footer from '@/components/common/Footer/Footer';

// Вашего шрифта не было и файлов тоже не было, поэтому такой
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Test MBA',
  description: 'Test MBA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${geistMono.variable} layout`}>
        <header></header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
