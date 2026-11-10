import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ChevronRight, 
  PhoneCall, 
  Send, 
  Sparkles, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { CATERING_FAQS } from '@/data/faqs';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | Hiwi Catering Addis Ababa',
  description: 'Find answers to common questions about catering services, pricing, menus, delivery locations in Addis Ababa, fasting options, and equipment by Hiwi Catering.',
  keywords: [
    'catering FAQs Addis Ababa',
    'catering questions Ethiopia',
    'catering cost FAQ Addis Ababa',
    'wedding catering FAQ',
    'Ethiopian fasting food catering FAQ',
    'የምግብ ዝግጅት ጥያቄዎች'
  ],
  openGraph: {
    title: 'Catering FAQs | Hiwi Catering Addis Ababa',
    description: 'Everything you need to know about catering with Hiwi Catering in Addis Ababa. Pricing, menus, delivery & equipment.',
    url: 'https://hiwicatering.com/faqs',
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
    <>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-hiwi-primary">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-hiwi-primary font-semibold">Frequently Asked Questions</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-orange-50/70 to-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-black text-hiwi-dark tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Everything you need to know about booking Hiwi Catering in Addis Ababa - from menu customization and pricing to delivery logistics and fasting dishes.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+251963138123"
              className="inline-flex items-center gap-2 px-5 py-3 bg-hiwi-primary hover:bg-hiwi-hover text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-warm hover:shadow-warm-lg transition-all"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call Us: 0963 138 123</span>
            </a>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#229ED9] hover:bg-[#1e88be] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Telegram Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FaqAccordion
            faqs={CATERING_FAQS}
            title="General Catering Questions"
            subtitle="Click any question to view our detailed answer."
          />
        </div>
      </section>

      {/* Quick Help Card */}
      <section className="py-12 bg-cream-bg border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border-2 border-orange-100 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xl font-bold text-hiwi-dark">
                Have a unique event requirement or question not listed?
              </h2>
              <p className="text-sm text-gray-600">
                Our kitchen managers in Summit Fiyel Bet are ready to tailor menus, discuss guest numbers, or schedule a food tasting.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/contact"
                className="px-5 py-3 bg-hiwi-primary hover:bg-hiwi-hover text-white text-xs font-bold rounded-xl shadow-warm text-center transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/inquiry"
                className="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl text-center transition-all"
              >
                Event Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
