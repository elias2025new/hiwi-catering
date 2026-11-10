import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Phone, Send, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: 'Direct Event Catering Inquiry | Hiwi Catering Addis Ababa',
  description: 'Book your event catering consultation with Hiwi Catering in Addis Ababa. Quick inquiry form for weddings, birthdays, graduations, and corporate banquets.',
  keywords: [
    'catering inquiry Addis Ababa',
    'book catering Addis Ababa',
    'wedding catering booking Ethiopia',
    'catering quote Addis Ababa',
    'Hiwi Catering inquiry form'
  ],
  openGraph: {
    title: 'Event Catering Inquiry & Consultation | Hiwi Catering Addis Ababa',
    description: 'Get in touch for your upcoming event in Addis Ababa. We respond within 24 hours with custom menu options.',
    url: 'https://hiwicatering.com/inquiry',
    images: ['/images/contact-bg.jpg']
  }
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
        item: 'https://hiwicatering.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Event Inquiry',
        item: 'https://hiwicatering.com/inquiry'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-2.5 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-black font-semibold uppercase tracking-wider">Event Inquiry Form</span>
        </div>
      </div>

      {/* Main Form Section - Sized to fit in single mobile screen */}
      <section className="relative min-h-[calc(100dvh-130px)] flex flex-col justify-center items-center py-4 px-3 sm:py-12 sm:px-6 overflow-hidden">
        {/* Background Image with Dark Contrast Tint */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Hiwi Catering Event Atmosphere Addis Ababa"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col justify-center">
          
          {/* Elevated Johnny Burke Inquiry Card */}
          <InquiryForm 
            title="READY TO MAKE YOUR NEXT EVENT PERFECT?"
            subtitle="Fill out this quick form & our team will contact you within 24 hours"
          />

          {/* Direct Support & Trust Strip Under Form */}
          <div className="mt-3 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-white/90 text-[10px] sm:text-xs tracking-wider uppercase font-medium text-center">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-hiwi-gold" />
              <span>Summit Fiyel Bet</span>
            </span>
            <span className="text-white/40">•</span>
            <a 
              href="tel:+251963138123" 
              className="flex items-center gap-1 hover:text-hiwi-gold transition-colors font-bold"
            >
              <Phone className="w-3 h-3 text-hiwi-gold" />
              <span>0963 138 123</span>
            </a>
            <span className="text-white/40">•</span>
            <a 
              href="https://t.me/hiwicatering" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-hiwi-gold transition-colors"
            >
              <Send className="w-3 h-3 text-hiwi-gold" />
              <span>@hiwicatering</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
