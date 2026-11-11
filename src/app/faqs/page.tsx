import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  PhoneCall,
  Send,
  MapPin,
} from 'lucide-react';
import { CATERING_FAQS } from '@/data/faqs';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: {
    absolute: 'Catering FAQs Addis Ababa & Abeba | Hiwi Catering',
  },
  description: 'Answers about event catering in Addis Ababa & Addis Abeba: pricing (750-1,650 ETB), fasting options, Bole & Ayat delivery, chafing warmers & booking.',
  alternates: {
    canonical: 'https://hiwicatering.com/faqs',
  },
  keywords: [
    'catering FAQs Addis Ababa',
    'catering in addis abeba',
    'catering questions Ethiopia',
    'catering cost FAQ Addis Ababa',
    'wedding catering FAQ',
    'Ethiopian fasting food catering FAQ',
    'የምግብ ዝግጅት ጥያቄዎች'
  ],
  openGraph: {
    title: 'Catering FAQs Addis Ababa & Abeba | Hiwi Catering',
    description: 'Everything you need to know about booking Hiwi Catering in Addis Ababa & Addis Abeba: pricing, menus, Bole/Ayat delivery & equipment.',
    url: 'https://hiwicatering.com/faqs',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: ['/images/corporate-catering.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering FAQs Addis Ababa & Abeba | Hiwi Catering',
    description: 'Pricing, fasting menus, equipment & delivery coverage across Summit, Bole, Ayat & Addis Ababa.',
    images: ['/images/corporate-catering.jpg']
  }
};

export default function FaqsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CATERING_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

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
        name: 'FAQs',
        item: 'https://hiwicatering.com/faqs'
      }
    ]
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider text-[11px] font-medium">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-black font-bold">Frequently Asked Questions</span>
        </div>
      </div>

      {/* Editorial Page Header */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block">
            Answers &amp; Booking Guide • Addis Ababa &amp; Addis Abeba
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.12em] text-black leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div className="w-12 h-0.5 bg-black mx-auto" />
          <p className="text-xs sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Direct answers about booking Hiwi Catering across Summit Fiyel Bet, Ayat, Bole, and all 11 sub-cities of Addis Ababa—including pricing per guest, chafing warmers, and fasting menus.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+251963138123"
              className="py-3.5 px-7 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call Us: 0963 138 123</span>
            </a>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-7 border-2 border-black text-black hover:bg-black hover:text-white text-xs font-extrabold uppercase tracking-[0.2em] transition-all inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Telegram Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FaqAccordion
        faqs={CATERING_FAQS}
        title="General Catering Questions"
        subtitle="Explore pricing, tasting schedules, fasting food preparation, and sub-city delivery logistics."
      />

      {/* Quick Help & Delivery Links Strip */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-hiwi-primary">
                <MapPin className="w-3.5 h-3.5" />
                <span>Summit Fiyel Bet HQ • Plus Code XVW2+PCH</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-black">
                Have a Unique Event Requirement or Tasting Request?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-light">
                Check delivery zones for Bole, Ayat &amp; Summit, review transparent packages, or send your event date directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/locations"
                className="py-3 px-6 border-2 border-black text-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-[0.15em] text-center transition-colors"
              >
                Delivery Areas
              </Link>
              <Link
                href="/pricing"
                className="py-3 px-6 border-2 border-gray-300 text-black hover:border-black text-xs font-bold uppercase tracking-[0.15em] text-center transition-colors"
              >
                View Pricing
              </Link>
              <Link
                href="/inquiry"
                className="py-3 px-6 bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-[0.15em] text-center transition-colors"
              >
                Event Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
