import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Send, 
  Check, 
  Utensils, 
  Users, 
  Clock, 
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
    absolute: 'Graduation Catering Services in Addis Ababa | Hiwi Catering',
  },
  description: 'Celebrate academic milestone with Hiwi Catering in Addis Ababa. Generous traditional Habesha platters, modern buffets & hot chafing warmers. Book today!',
  alternates: {
    canonical: 'https://hiwicatering.com/services/graduation-catering',
  },
  keywords: [
    'graduation catering services in Addis Ababa',
    'graduation catering Addis Ababa',
    'catering service for graduation',
    'graduation party food Addis Ababa',
    'catering service Addis Ababa',
    'university graduation feast Ethiopia',
    'የምርቃት ምግብ ዝግጅት'
  ],
  openGraph: {
    title: 'Graduation Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Generous traditional Ethiopian feasts and modern buffets for university graduations in Addis Ababa. The Taste You Love!',
    url: 'https://hiwicatering.com/services/graduation-catering',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/corporate-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Graduation Catering Services Addis Ababa - Traditional and Modern Banquets'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graduation Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Generous traditional Ethiopian feasts and modern buffets for university graduations in Addis Ababa.',
    images: ['/images/corporate-catering.jpg']
  }
};

const GRADUATION_FAQS = [
  {
    question: "What makes Hiwi Catering the top choice for graduation catering in Addis Ababa?",
    answer: "Graduation in Ethiopia is a grand family celebration of honor. Hiwi Catering specializes in generous portion sizes, rich traditional Habesha dishes (Doro Wat, Siga Wat, Kitfo, and Beyaynetu), and professional chafing warmers that allow families to focus entirely on celebrating their graduate without kitchen exhaustion."
  },
  {
    question: "Can we mix traditional Ethiopian dishes with rice and salads for graduation parties?",
    answer: "Yes! Our most popular graduation tier is our Royal Habesha Banquet, which combines traditional wats and injera rolls with aromatic seasoned saffron rice pilaf, tender beef tibs, fresh garden salads, and crispy sambusas."
  },
  {
    question: "Do you deliver to graduation venues and compounds across Addis Ababa?",
    answer: "Yes. From our commercial kitchen in Summit Fiyel Bet, we deliver directly to your residence, event hall, church compound, or outdoor garden venue in Bole, CMC, Ayat, Kazanchis, Megenagna, Sarbet, and across the city."
  },
  {
    question: "How many guests can you cater for a graduation party?",
    answer: "We cater graduation gatherings from 50 guests up to 500+ guests with seamless buffet lines and dedicated service attendants."
  }
];

export default function GraduationCateringPage() {
  const serviceSchema = {
    '@type': 'Service',
    name: 'Graduation Catering Services in Addis Ababa',
    serviceType: 'University and College Graduation Banquet Catering',
    url: 'https://hiwicatering.com/services/graduation-catering',
    provider: HIWI_SCHEMA_PROVIDER,
    areaServed: HIWI_SCHEMA_AREA_SERVED,
    description: 'Full-service graduation catering in Addis Ababa and Addis Abeba with generous traditional feasts, stainless steel buffet warmers, and complete setup.',
    offers: {
      '@type': 'Offer',
      price: '850',
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
        name: 'Graduation Catering',
        item: 'https://hiwicatering.com/services/graduation-catering'
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
          <span className="text-black font-bold">Graduation Catering</span>
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
                  Academic Honors &amp; Banquets • Addis Ababa
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.12em] text-black leading-tight font-sans">
                  GRADUATION CATERING SERVICES IN ADDIS ABABA
                </h1>
                <div className="w-12 h-0.5 bg-black my-4" />
              </div>

              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Honor academic milestones with an abundant feast that reflects your family&apos;s pride. Hiwi Catering prepares rich traditional wats, fresh kitfo, savory rice pilaf, and complete stainless buffet warmers so your guests feel honored and satisfied.
              </p>

              {/* Johnny Burke Boxed Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-y border-gray-200 py-4 text-center sm:text-left">
                <div>
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    50 - 500+
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Guest Capacity
                  </span>
                </div>
                <div className="border-x border-gray-200 px-2 sm:px-4">
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    Royal Feast
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Doro Wat &amp; Kitfo
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    All 11
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Sub-Cities Delivered
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
                  Graduation Inquiry
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

            {/* Right Column: Sharp Editorial Framed Graduation Buffet Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white border border-gray-200 p-3 sm:p-4 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/images/corporate-catering.jpg"
                    alt="Hiwi Graduation Catering Services Addis Ababa - Habesha Banquets"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="p-3 bg-black text-white text-center mt-3">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white block">
                    Graduation Banquet &amp; Buffet Setup
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

      {/* AEO / GEO Direct Answer Section (Johnny Burke Boxed) */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-hiwi-primary block">
              Abundant Ethiopian Hospitality
            </span>
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
              WHAT IS INCLUDED IN A GRADUATION CATERING PACKAGE IN ADDIS ABABA?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              When ordering a <strong>catering service for graduation</strong> in Addis Ababa, families need hearty meals, fast setup, and zero stress. <strong>Hiwi Catering Services</strong> supplies hot stainless steel bain-marie buffet warmers loaded with signature Doro Wat, Siga Wat, tender beef tibs, seasoned yellow rice pilaf, fresh kitfo with ayib, fasting Beyaynetu, fresh injera, and salads. We also handle serving gear, table setup, and clean-up options across Summit, Bole, CMC, and all Addis Ababa districts.
            </p>
          </div>
        </div>
      </section>

      {/* Local Delivery Links */}
      <ServiceDeliveryStrip serviceLabel="Graduation Catering" />

      {/* Direct Inquiry for Graduations */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <InquiryForm 
            title="PLAN YOUR GRADUATION CATERING WITH HIWI"
            subtitle="Fill out this quick form and our banquet team will contact you within 24 hours"
          />
        </div>
      </section>

      {/* Graduation FAQs */}
      <FaqAccordion
        faqs={GRADUATION_FAQS}
        title="Graduation Catering FAQs"
        subtitle="Common questions regarding graduation party catering menus, capacity, and scheduling in Addis Ababa."
      />

      {/* Johnny Burke Dark Footer Banner */}
      <section className="bg-[#1A1A1A] text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-gold block">
            Summit Fiyel Bet • Addis Ababa
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-white leading-tight">
            HONOR YOUR GRADUATE WITH A ROYAL FEAST
          </h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto" />
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Reserve your date early during university graduation seasons. Hot stainless chafing buffets, teff injera, and generous Habesha hospitality.
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
              <span>Submit Graduation Inquiry</span>
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
