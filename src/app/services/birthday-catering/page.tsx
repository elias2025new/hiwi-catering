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
    absolute: 'Birthday Catering Services in Addis Ababa | Hiwi Catering',
  },
  description: 'Celebrate stress-free with Hiwi Catering in Addis Ababa. Delicious birthday buffets, kids menus, finger foods & traditional wats. Call 0963 138 123 today!',
  alternates: {
    canonical: 'https://hiwicatering.com/services/birthday-catering',
  },
  keywords: [
    'birthday catering services in Addis Ababa',
    'birthday catering Addis Ababa',
    'catering service for birthday',
    'kids birthday party catering Addis Ababa',
    'catering service Addis Ababa',
    'birthday party buffet Addis Ababa',
    'የልደት ምግብ ዝግጅት'
  ],
  openGraph: {
    title: 'Birthday Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Vibrant, delicious birthday buffets and finger foods in Addis Ababa. The Taste You Love!',
    url: 'https://hiwicatering.com/services/birthday-catering',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/social-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Birthday Catering Services Addis Ababa - Kids and Adult Party Buffets'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birthday Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Stress-free birthday catering in Addis Ababa with custom buffets and finger foods.',
    images: ['/images/social-catering.jpg']
  }
};

const BIRTHDAY_FAQS = [
  {
    question: "What menu options work best for children's birthday parties?",
    answer: "For children's parties, we prepare easy-to-eat favorites including crispy Sambusas, tender chicken and beef skewers, seasoned mild rice, pasta, and mini pizza bites, alongside traditional Ethiopian platters for adult guests."
  },
  {
    question: "Can Hiwi Catering handle adult milestone birthdays (30th, 50th, 60th)?",
    answer: "Yes. For adult celebrations, we provide complete formal or semi-formal buffet spreads with Doro Wat, Siga Wat, Kitfo, Tibs, seasoned pilaf, fresh salads, and traditional coffee ceremonies."
  },
  {
    question: "What is the minimum number of guests for birthday catering in Addis Ababa?",
    answer: "Our birthday catering packages start at a minimum of 30 guests. We scale up smoothly to accommodate large celebrations of 300+ guests anywhere in Addis Ababa."
  },
  {
    question: "Do you provide equipment like warmers and plates for home parties?",
    answer: "Yes. Even for home or backyard birthdays, we bring stainless steel chafing dish warmers to keep all food fresh and hot, along with serving spoons, plates, napkins, and clean-up options."
  }
];

export default function BirthdayCateringPage() {
  const serviceSchema = {
    '@type': 'Service',
    name: 'Birthday Catering Services in Addis Ababa',
    serviceType: 'Birthday Party and Family Celebration Catering',
    url: 'https://hiwicatering.com/services/birthday-catering',
    provider: HIWI_SCHEMA_PROVIDER,
    areaServed: HIWI_SCHEMA_AREA_SERVED,
    description: 'Full-service birthday party catering in Addis Ababa and Addis Abeba with custom kids menus, adult traditional banquets, and chafing dish buffets.',
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
        name: 'Birthday Catering',
        item: 'https://hiwicatering.com/services/birthday-catering'
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
          <span className="text-black font-bold">Birthday Catering</span>
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
                  Vibrant Celebrations • Addis Ababa
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.12em] text-black leading-tight font-sans">
                  BIRTHDAY CATERING SERVICES IN ADDIS ABABA
                </h1>
                <div className="w-12 h-0.5 bg-black my-4" />
              </div>

              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Celebrate your loved ones without spending hours over a hot kitchen stove. Hiwi Catering delivers vibrant buffet spreads, savory finger foods, and comforting Habesha banquets designed to delight guests of all generations across Addis Ababa.
              </p>

              {/* Johnny Burke Boxed Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-y border-gray-200 py-4 text-center sm:text-left">
                <div>
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    30 - 300+
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Guest Capacity
                  </span>
                </div>
                <div className="border-x border-gray-200 px-2 sm:px-4">
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    Custom Combos
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Kids &amp; Adults
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    100% Hot
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Chafing Dishes Included
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
                  Birthday Inquiry
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

            {/* Right Column: Sharp Editorial Framed Birthday Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white border border-gray-200 p-3 sm:p-4 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/images/social-catering.jpg"
                    alt="Hiwi Birthday Party Catering Services Addis Ababa"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="p-3 bg-black text-white text-center mt-3">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white block">
                    Birthday &amp; Private Celebrations
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
              Hassle-Free Hospitality
            </span>
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
              HOW DOES BIRTHDAY CATERING WORK WITH HIWI CATERING IN ADDIS ABABA?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              When booking a <strong>catering service for birthday</strong> celebrations in Addis Ababa &amp; Addis Abeba, hosts look for delicious variety, on-time delivery, and hassle-free setup. <strong>Hiwi Catering Services</strong>, based in Summit Fiyel Bet, provides end-to-end birthday food preparation. We arrive 1 hour before party time with stainless steel bain-marie warmers, set up your buffet table with fresh injera rolls, wats, seasoned rice, finger foods, and salads, and provide buffet replenishment. Packages start at 750 ETB per guest with zero stress.
            </p>
          </div>
        </div>
      </section>

      {/* Local Delivery Links */}
      <ServiceDeliveryStrip serviceLabel="Birthday Catering" />

      {/* Direct Inquiry for Birthdays */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <InquiryForm 
            title="PLAN YOUR BIRTHDAY CATERING WITH HIWI"
            subtitle="Fill out this quick form and our celebration coordinator will contact you within 24 hours"
          />
        </div>
      </section>

      {/* Birthday FAQs */}
      <FaqAccordion
        faqs={BIRTHDAY_FAQS}
        title="Birthday Catering FAQs"
        subtitle="Common questions regarding birthday party catering packages and dietary accommodations."
      />

      {/* Johnny Burke Dark Footer Banner */}
      <section className="bg-[#1A1A1A] text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-gold block">
            Summit Fiyel Bet • Addis Ababa
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-white leading-tight">
            BOOK YOUR BIRTHDAY FEAST TODAY
          </h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto" />
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Let our kitchen handle the cooking while you celebrate. Full chafing warmers, teff injera, and fresh buffets delivered anywhere in Addis Ababa.
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
              <span>Submit Birthday Inquiry</span>
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
