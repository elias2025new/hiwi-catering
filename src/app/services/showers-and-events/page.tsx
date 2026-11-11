import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Send, 
  Heart, 
  Users, 
  MapPin, 
  ShieldCheck,
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';
import InquiryForm from '@/components/InquiryForm';
import ServiceDeliveryStrip from '@/components/ServiceDeliveryStrip';
import { HIWI_SCHEMA_PROVIDER, HIWI_SCHEMA_AREA_SERVED } from '@/data/services';

export const metadata: Metadata = {
  title: {
    absolute: 'Corporate & Event Catering Addis Ababa | Hiwi Catering',
  },
  description: 'Professional event catering in Addis Ababa for corporate seminars, business luncheons, bridal & baby showers. Punctual delivery. Book your date today!',
  alternates: {
    canonical: 'https://hiwicatering.com/services/showers-and-events',
  },
  keywords: [
    'corporate catering Addis Ababa',
    'seminar catering Addis Ababa',
    'bridal shower catering Addis Ababa',
    'baby shower catering Addis Ababa',
    'event catering Addis Ababa',
    'catering service Addis Ababa',
    'business lunch catering Ethiopia',
    'የስብሰባ ምግብ ዝግጅት'
  ],
  openGraph: {
    title: 'Corporate & Event Catering Addis Ababa | Hiwi Catering',
    description: 'Punctual, polished catering for corporate seminars, showers, and executive events in Addis Ababa.',
    url: 'https://hiwicatering.com/services/showers-and-events',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/corporate-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Corporate and Event Catering Services Addis Ababa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate & Event Catering Addis Ababa | Hiwi Catering',
    description: 'Punctual, polished catering for corporate seminars, showers, and executive events in Addis Ababa.',
    images: ['/images/corporate-catering.jpg']
  }
};

const EVENT_FAQS = [
  {
    question: "Do you provide corporate invoices and tax receipts for seminars?",
    answer: "Yes, Hiwi Catering provides official company quotations, invoices, and payment receipts suited for NGO, corporate, and embassy procurement requirements in Addis Ababa."
  },
  {
    question: "Can Hiwi Catering handle full-day seminars with coffee breaks and lunch?",
    answer: "Yes. We offer complete seminar packages including morning highland coffee and tea ceremony with pastries, mid-day hot buffet or executive boxed lunches, and afternoon refreshments."
  },
  {
    question: "What menu items work best for bridal and baby showers?",
    answer: "For showers, we recommend elegant finger food spreads, mini wraps, gourmet sandwiches, seasoned chicken and beef skewers, colorful fruit bowls, and custom dessert displays, alongside our signature hot buffets."
  }
];

export default function ShowersAndEventsPage() {
  const serviceSchema = {
    '@type': 'Service',
    name: 'Corporate & Event Catering Services in Addis Ababa',
    serviceType: 'Corporate and Private Event Catering',
    url: 'https://hiwicatering.com/services/showers-and-events',
    provider: HIWI_SCHEMA_PROVIDER,
    areaServed: HIWI_SCHEMA_AREA_SERVED,
    description: 'Corporate catering, seminar lunch setups, and bridal/baby shower catering in Addis Ababa and Addis Abeba with punctual delivery and high-standard hygiene.',
    offers: {
      '@type': 'Offer',
      price: '750',
      priceCurrency: 'ETB',
      availability: 'https://schema.org/InStock'
    }
  };

  const breadcrumbSchema = {
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
        name: 'Services',
        item: 'https://hiwicatering.com/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Showers & Seminars',
        item: 'https://hiwicatering.com/services/showers-and-events'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...serviceSchema }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...breadcrumbSchema }) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 font-mono uppercase tracking-wider text-[11px]">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-bold">Showers &amp; Seminars</span>
        </div>
      </div>

      {/* Hero Section (Johnny Burke Theme) */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block mb-2">
                  Executive &amp; Private Hospitality • Addis Ababa
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.12em] text-black leading-tight font-sans">
                  CORPORATE &amp; EVENT CATERING SERVICES IN ADDIS ABABA
                </h1>
                <div className="w-12 h-0.5 bg-black my-4" />
              </div>

              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Whether organizing an executive business conference or hosting an intimate bridal or baby shower, Hiwi Catering provides seamless food service with meticulous presentation and strict punctuality across Addis Ababa.
              </p>

              {/* Johnny Burke Boxed Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-y border-gray-200 py-4 text-center sm:text-left">
                <div>
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    Corporate
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Invoicing &amp; Receipts
                  </span>
                </div>
                <div className="border-x border-gray-200 px-2 sm:px-4">
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    Full Day
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Coffee Breaks &amp; Lunch
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    100% Hot
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Chafing Dish Buffets
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+251963138123"
                  className="py-3.5 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>Call: 0963 138 123</span>
                </a>
                <Link
                  href="/inquiry"
                  className="py-3.5 px-8 border-2 border-black text-black hover:bg-black hover:text-white text-xs font-extrabold uppercase tracking-[0.2em] transition-all text-center inline-flex items-center justify-center"
                >
                  Event Inquiry
                </Link>
                <a
                  href="https://t.me/hiwicatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 border-2 border-gray-300 text-black hover:border-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Right Column: Sharp Editorial Framed Corporate Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white border border-gray-200 p-3 sm:p-4 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/images/corporate-catering.jpg"
                    alt="Hiwi Event & Seminar Catering Services Addis Ababa"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="p-3 bg-black text-white text-center mt-3">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white block">
                    Corporate &amp; Event Hospitality
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 block mt-0.5 font-mono">
                    Summit Fiyel Bet • Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AEO / GEO Direct Answer Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-hiwi-primary block">
              Corporate &amp; Private Event Summary
            </span>
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
              HOW DOES HIWI CATERING HANDLE CORPORATE SEMINARS &amp; SHOWERS IN ADDIS ABABA?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              For seminars, workshops, bridal showers, and baby showers in Addis Ababa and Addis Abeba, <strong>Hiwi Catering Services</strong> provides structured per-person packages starting from 750 ETB/guest (25 to 400+ guests). Corporate and NGO bookings across Kazanchis, Bole, and CMC include formal pro-forma quotations, official receipts, punctual morning coffee/Buna breaks, and hot chafing dish buffet or executive boxed lunch setups.
            </p>
          </div>
        </div>
      </section>

      {/* Local Delivery Links */}
      <ServiceDeliveryStrip serviceLabel="Corporate &amp; Event Catering" />

      {/* Direct Inquiry for Corporate & Showers */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <InquiryForm 
            title="PLAN YOUR EVENT CATERING WITH HIWI"
            subtitle="Fill out this quick form and our event coordinator will contact you within 24 hours"
          />
        </div>
      </section>

      {/* Event FAQs */}
      <FaqAccordion
        faqs={EVENT_FAQS}
        title="Showers &amp; Seminars FAQs"
        subtitle="Common questions regarding corporate seminar catering, corporate invoicing, and private showers."
      />

      {/* Johnny Burke Dark Footer Banner */}
      <section className="bg-[#1A1A1A] text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-gold block">
            Summit Fiyel Bet • Addis Ababa
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-white leading-tight">
            BOOK YOUR CORPORATE OR PRIVATE EVENT
          </h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto" />
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Official company invoices, timely setup across all Addis Ababa conference venues, and customized hot buffet menus.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-8 bg-white text-black hover:bg-gray-200 text-xs font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-black" />
              <span>Call: 0963 138 123</span>
            </a>
            <Link
              href="/inquiry"
              className="w-full sm:w-auto py-3.5 px-8 border-2 border-white text-white hover:bg-white hover:text-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Event Inquiry</span>
            </Link>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 border border-white/40 text-gray-300 hover:text-white hover:border-white text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram Chat</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
