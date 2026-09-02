import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata = {
  title: 'Shree Amarjyot Timber Mart | Wood Processing & Manufacturing',
  description: 'Professional wood processing and manufacturing solutions focused on quality, precision, and reliability. Pine wood pallets, jungle wood pallets, and custom timber processing.',
  keywords: 'wood processing, timber mart, pine wood pallets, jungle wood pallets, timber processing, wood manufacturing, Navsari, Gujarat',
  openGraph: {
    title: 'Shree Amarjyot Timber Mart | Wood Processing & Manufacturing',
    description: 'Professional wood processing and manufacturing solutions focused on quality, precision, and reliability.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
