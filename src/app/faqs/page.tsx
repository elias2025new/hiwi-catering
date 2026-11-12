import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, PhoneCall, Send, MapPin } from 'lucide-react';
import { CATERING_FAQS } from '@/data/faqs';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: {
    absolute: 'Catering FAQs Addis Ababa & Abeba | Hiwi Catering',
  },
  description:
    'Answers about event catering in Addis Ababa & Addis Abeba: pricing (750-1,650 ETB), fasting options, Bole & Ayat delivery, chafing warmers & booking.',
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
    'የምግብ ዝግጅት ጥያቄዎች',
  ],
  openGraph: {
    title: 'Catering FAQs Addis Ababa & Abeba | Hiwi Catering',
    description:
      'Everything you need to know about booking Hiwi Catering in Addis Ababa & Addis Abeba: pricing, menus, Bole/Ayat delivery & equipment.',
    url: 'https://hiwicatering.com/faqs',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: ['/images/corporate-catering.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering FAQs Addis Ababa & Abeba | Hiwi Catering',
    description:
      'Pricing, fasting menus, equipment & delivery coverage across Summit, Bole, Ayat & Addis Ababa.',
    images: ['/images/corporate-catering.jpg'],
  },
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
        text: faq.answer,
      },
    })),
  };

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
        name: 'FAQs',
        item: 'https://hiwicatering.com/faqs',
      },
    ],
  };

  return (
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-100 selection:text-hiwi-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-hiwi-stone border-b border-hiwi-border py-3 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider font-medium">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">Frequently Asked Questions</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-14 sm:py-20 bg-hiwi-cream border-b border-hiwi-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-hiwi-dark leading-tight text-balance">
            FREQUENTLY ASKED CATERING QUESTIONS
          </h1>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl mx-auto">
            Direct answers about booking Hiwi Catering across Summit Fiyel Bet, Ayat, Bole, and all{' '}
            <span className="tabular-nums font-semibold">11</span> sub-cities of Addis Ababa (Addis Abeba)—including
            per-guest pricing, stainless chafing warmers, and fasting menus.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="tel:+251963138123"
              className="py-3.5 px-7 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm inline-flex items-center gap-2 tabular-nums"
            >
              <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
              <span>Call Us: 0963 138 123</span>
            </a>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-7 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-extrabold uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4" strokeWidth={1.75} />
              <span>Telegram Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FaqAccordion
        faqs={CATERING_FAQS}
        title="General Catering Questions"
        subtitle="Explore pricing, tasting schedules, fasting food preparation, and sub-city delivery logistics."
      />

      {/* Bottom Help Card */}
      <section className="py-14 bg-hiwi-stone border-t border-hiwi-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-hiwi-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-hiwi-amber">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>
                  Summit Fiyel Bet HQ &bull; Plus Code <code className="font-mono text-xs">XVW2+PCH</code>
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-hiwi-dark">
                Have a Custom Menu or Tasting Request?
              </h2>
              <p className="text-sm text-stone-600">
                Check delivery zones for Bole, Ayat &amp; Summit, compare rates, or submit your event date directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/locations"
                className="py-3 px-5 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-bold uppercase tracking-wider text-center transition-colors"
              >
                Delivery Areas
              </Link>
              <Link
                href="/pricing"
                className="py-3 px-5 rounded-lg border border-stone-300 bg-white text-hiwi-dark hover:border-hiwi-primary text-xs font-bold uppercase tracking-wider text-center transition-colors"
              >
                View Pricing
              </Link>
              <Link
                href="/inquiry"
                className="py-3 px-6 rounded-lg bg-hiwi-primary hover:bg-hiwi-hover text-white text-xs font-extrabold uppercase tracking-wider text-center transition-colors shadow-warm"
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
