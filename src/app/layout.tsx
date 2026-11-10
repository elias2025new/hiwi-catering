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
    default: 'Catering in Addis Ababa | Wedding & Event Catering | Hiwi Catering',
    template: '%s | Hiwi Catering Services'
  },
  description: 'Premier full-service catering in Addis Ababa for weddings, corporate events, and birthdays. Authentic Habesha feasts & buffets across Bole, CMC & Summit. Call 0963 138 123!',
  keywords: [
    'catering',
    'catering service',
    'catering Addis Ababa',
    'catering service Addis Ababa',
    'catering service for birthday',
    'catering service for wedding',
    'catering service for graduation',
    'best catering in Addis Ababa',
    'Ethiopian catering service',
    'catering Summit Addis Ababa',
    'catering Fiyel Bet Addis Ababa',
    'wedding catering Addis Ababa',
    'birthday catering Addis Ababa',
    'graduation catering Addis Ababa',
    'corporate catering Addis Ababa',
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
    title: 'Hiwi Catering Addis Ababa | The Taste You Love!',
    description: 'Premier catering in Addis Ababa: Weddings, Birthdays, Graduations, and Events. Headquartered in Summit Fiyel Bet with city-wide delivery and buffet service.',
    images: [
      {
        url: '/images/hiwi-flyer.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Catering Services Addis Ababa - The Taste You Love!',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiwi Catering Addis Ababa | Full-Service Event Catering',
    description: 'Wedding, birthday, and graduation catering in Addis Ababa. Authentic Habesha feasts & modern buffet setups.',
    images: ['/images/hiwi-flyer.jpg'],
  },
  alternates: {
    canonical: 'https://hiwicatering.com',
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
