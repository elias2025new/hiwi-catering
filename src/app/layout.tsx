import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hiwicatering.com'),
  title: {
    default: 'Catering in Addis Ababa & Abeba | Hiwi Catering',
    template: '%s | Hiwi Catering'
  },
  description: 'Full-service catering in Addis Ababa & Addis Abeba for weddings, birthdays, graduations & corporate events. Serving Bole, Ayat, CMC & Summit. Call 0963 138 123.',
  keywords: [
    'catering',
    'catering in addis abeba',
    'catering in addis ababa',
    'catering service Addis Ababa',
    'catering Bole Addis Ababa',
    'catering Ayat Addis Ababa',
    'catering Summit Fiyel Bet',
    'wedding catering Addis Ababa',
    'birthday catering Addis Ababa',
    'graduation catering Addis Ababa',
    'corporate catering Addis Ababa',
    'Ethiopian catering service',
    'የሰርግ ምግብ ዝግጅት',
    'የምርቃት ምግብ',
    'የልደት ምግብ ዝግጅት',
    'ኬተሪንግ ሰርቪስ'
  ],
  authors: [{ name: 'Hiwi Catering Services' }],
  creator: 'Hiwi Catering Services',
  publisher: 'Hiwi Catering Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hiwicatering.com',
    siteName: 'Hiwi Catering Services',
    title: 'Catering in Addis Ababa & Abeba | Hiwi Catering',
    description: 'Wedding, birthday, graduation, and corporate catering in Addis Ababa & Addis Abeba. Summit Fiyel Bet kitchen serving Bole, Ayat & all 11 sub-cities.',
    images: [
      {
        url: '/images/wedding-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Catering Services Addis Ababa & Addis Abeba - Weddings, Buffets & Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering in Addis Ababa & Abeba | Hiwi Catering',
    description: 'Wedding, birthday, graduation & event catering across Bole, Ayat, Summit & Addis Ababa. Call 0963 138 123.',
    images: ['/images/wedding-catering.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className={`${poppins.className} min-h-screen flex flex-col font-sans antialiased bg-white text-gray-900 selection:bg-hiwi-100 selection:text-hiwi-primary`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
