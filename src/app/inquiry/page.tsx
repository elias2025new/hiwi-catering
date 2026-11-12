import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Phone, Send, MapPin } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: {
    absolute: 'Book Event Catering Inquiry Addis Ababa | Hiwi Catering',
  },
  description:
    'Request a custom catering quote in Addis Ababa & Addis Abeba. Weddings, birthdays, graduations & corporate events in Bole, Ayat & Summit. Call 0963 138 123.',
  alternates: {
    canonical: 'https://hiwicatering.com/inquiry',
  },
  keywords: [
    'catering inquiry Addis Ababa',
    'book catering Addis Ababa',
    'catering in addis abeba',
    'wedding catering booking Ethiopia',
    'catering quote Addis Ababa',
    'Hiwi Catering inquiry form',
  ],
  openGraph: {
    title: 'Book Event Catering Inquiry Addis Ababa | Hiwi Catering',
    description:
      'Get in touch for your upcoming event in Addis Ababa & Addis Abeba. We respond within 24 hours with custom menu options.',
    url: 'https://hiwicatering.com/inquiry',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: ['/images/contact-bg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Event Catering Inquiry Addis Ababa | Hiwi Catering',
    description:
      'Submit your event catering request for weddings, birthdays & corporate banquets in Addis Ababa.',
    images: ['/images/contact-bg.jpg'],
  },
};

export default function InquiryPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hiwicatering.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Event Inquiry',
        item: 'https://hiwicatering.com/inquiry',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-hiwi-stone border-b border-hiwi-border py-2.5 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider font-medium">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">Event Inquiry Form</span>
        </div>
      </div>

      {/* Main Form Section */}
      <section className="relative min-h-[calc(100dvh-130px)] flex flex-col justify-center items-center py-10 px-4 sm:py-16 sm:px-6 overflow-hidden bg-hiwi-dark">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Hiwi Catering Traditional Buna Coffee Ceremony and Reception Setup in Addis Ababa"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-35"
          />
        </div>

        <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col justify-center space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight text-balance">
              REQUEST YOUR EVENT CATERING QUOTE
            </h1>
            <p className="text-xs sm:text-sm text-stone-200 max-w-md mx-auto leading-relaxed tabular-nums">
              Hot Habesha buffets starting at 750 ETB per guest, dispatched from Summit Fiyel Bet across Bole, Ayat,
              CMC &amp; all 11 sub-cities.
            </p>
          </div>

          <InquiryForm
            title="GET A CUSTOM CATERING QUOTE IN 24 HOURS"
            subtitle="Share your event date, guest count, and Addis Ababa sub-city."
          />

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-stone-200 text-xs font-medium text-center tabular-nums">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-hiwi-gold" strokeWidth={1.75} />
              <span>Summit Fiyel Bet</span>
            </span>
            <span className="text-stone-600" aria-hidden="true">|</span>
            <a
              href="tel:+251963138123"
              className="inline-flex items-center gap-1.5 hover:text-hiwi-gold transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-hiwi-gold" strokeWidth={1.75} />
              <span>0963 138 123</span>
            </a>
            <span className="text-stone-600" aria-hidden="true">|</span>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-hiwi-gold transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-hiwi-gold" strokeWidth={1.75} />
              <span>@hiwicatering</span>
            </a>
            <span className="text-stone-600" aria-hidden="true">|</span>
            <Link href="/pricing" className="hover:text-hiwi-gold transition-colors underline underline-offset-2">
              750+ ETB Prices
            </Link>
            <span className="text-stone-600" aria-hidden="true">|</span>
            <Link href="/locations" className="hover:text-hiwi-gold transition-colors underline underline-offset-2">
              Bole &amp; Ayat Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
