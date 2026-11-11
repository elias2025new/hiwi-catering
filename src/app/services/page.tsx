import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle, 
  ChevronRight, 
  PhoneCall, 
  Send, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Utensils, 
  HeartHandshake 
} from 'lucide-react';
import { CATERING_SERVICES } from '@/data/services';
import InquiryForm from '@/components/InquiryForm';
import ServiceDeliveryStrip from '@/components/ServiceDeliveryStrip';

export const metadata: Metadata = {
  title: {
    absolute: 'Catering Services in Addis Ababa | Hiwi Catering',
  },
  description: 'Explore full-service catering in Addis Ababa by Hiwi Catering. Authentic Habesha feasts, hot buffets, and uniformed staff for weddings, birthdays & events.',
  alternates: {
    canonical: 'https://hiwicatering.com/services',
  },
  keywords: [
    'catering services Addis Ababa',
    'catering service Ethiopia',
    'wedding catering service Addis Ababa',
    'birthday catering Addis Ababa',
    'graduation catering Addis Ababa',
    'corporate catering Addis Ababa',
    'የምግብ ዝግጅት አገልግሎት አዲስ አበባ',
    'የሰርግ ምግብ ዝግጅት'
  ],
  openGraph: {
    title: 'Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Fresh Habesha feasts & modern buffets for weddings, birthdays, graduations & events across Addis Ababa. Call 0963 138 123.',
    url: 'https://hiwicatering.com/services',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/corporate-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Catering Services in Addis Ababa - Full-Service Buffets and Banquets'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Fresh Habesha feasts & modern buffets for weddings, birthdays, graduations & events across Addis Ababa.',
    images: ['/images/corporate-catering.jpg']
  }
};

const SERVICE_IMAGES: Record<string, string> = {
  'wedding-catering': '/images/wedding-catering.jpg',
  'birthday-catering': '/images/social-catering.jpg',
  'graduation-catering': '/images/corporate-catering.jpg',
  'showers-and-events': '/images/corporate-catering.jpg',
};

export default function ServicesPage() {
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
        name: 'Catering Services',
        item: 'https://hiwicatering.com/services'
      }
    ]
  };

  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hiwi Catering Services Addis Ababa',
    description: 'Comprehensive catering solutions in Addis Ababa including weddings, birthdays, graduations, and corporate events.',
    itemListElement: CATERING_SERVICES.map((s, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: s.title,
      url: `https://hiwicatering.com/services/${s.slug}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 font-mono uppercase tracking-wider text-[11px]">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-bold">Catering Services</span>
        </div>
      </div>

      {/* Page Header (Johnny Burke Theme) */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block mb-2">
              Event &amp; Banquet Catering • Addis Ababa
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[0.12em] text-black leading-tight font-sans">
              CATERING SERVICES IN ADDIS ABABA
            </h1>
            <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          </div>

          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            From grand 1,500+ guest wedding banquets to milestone graduations, corporate seminars, and birthday dinners, Hiwi Catering prepares authentic Habesha feasts and contemporary buffets delivered piping hot anywhere in Addis Ababa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call: 0963 138 123</span>
            </a>

            <Link
              href="/pricing"
              className="w-full sm:w-auto py-3.5 px-8 border-2 border-black text-black hover:bg-black hover:text-white text-xs font-extrabold uppercase tracking-[0.2em] transition-all text-center inline-flex items-center justify-center gap-2"
            >
              <span>View Package Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 border-2 border-gray-300 text-black hover:border-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all text-center inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: @hiwicatering</span>
            </a>
          </div>

          <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400 pt-1">
            Summit Fiyel Bet HQ • Dispatch Across All 11 Sub-Cities
          </div>
        </div>
      </section>

      {/* Services Grid (Johnny Burke Sharp Boxed Layout with Real Food Photography) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CATERING_SERVICES.map((service) => {
              const imageSrc = SERVICE_IMAGES[service.slug] || '/images/corporate-catering.jpg';

              return (
                <div
                  key={service.slug}
                  className="bg-white border border-gray-200 hover:border-black transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between group shadow-sm hover:shadow-lg"
                >
                  <div>
                    {/* Visual Photo Card */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 border border-gray-200 mb-6">
                      <Image
                        src={imageSrc}
                        alt={`${service.title} in Addis Ababa by Hiwi Catering`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 550px"
                      />
                      <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 font-mono">
                        {service.amharicTitle}
                      </div>
                      <div className="absolute top-3 right-3 bg-white/95 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 font-mono border border-gray-300">
                        {service.capacityRange}
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black group-hover:text-hiwi-primary transition-colors">
                      <Link href={`/services/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h2>

                    <p className="mt-3 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-6 border-t border-gray-200 pt-4">
                      <h3 className="text-[11px] font-bold text-black uppercase tracking-[0.15em] mb-3">
                        Menu Highlights:
                      </h3>
                      <ul className="space-y-2 text-xs text-gray-600 font-light">
                        {service.menuHighlights.slice(0, 4).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-black shrink-0 mt-1.5" />
                            <span className="leading-snug">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest block">Starting from</span>
                      <span className="text-2xl font-black text-black">
                        {service.startingPrice} ETB <span className="text-xs font-mono font-normal text-gray-400">/ guest</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1 sm:flex-none py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors text-center inline-flex items-center justify-center gap-2"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href="tel:+251963138123"
                        className="p-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors inline-flex items-center justify-center"
                        aria-label={`Call to book ${service.title}`}
                      >
                        <PhoneCall className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included with Every Service (Johnny Burke Dark Band) */}
      <section className="bg-[#1F2024] text-white py-16 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-gold block">
              Hiwi Catering Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-[0.15em] text-white">
              INCLUDED WITH EVERY CATERING BOOKING
            </h2>
            <div className="w-12 h-0.5 bg-white/40 mx-auto my-3" />
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              We handle the complete food and dining setup so you can focus on entertaining your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <div className="w-10 h-10 border border-white/20 text-white flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-5 h-5 text-hiwi-gold" />
              </div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Stainless Warmers</h3>
              <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">
                Heavy-duty bain-marie chafing dishes keep food piping hot throughout your entire celebration.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <div className="w-10 h-10 border border-white/20 text-white flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5 text-hiwi-gold" />
              </div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">1-Hour Early Setup</h3>
              <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">
                Our logistics crew arrives 1 hour prior to dining to arrange buffet tables and test dish temperatures.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <div className="w-10 h-10 border border-white/20 text-white flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-5 h-5 text-hiwi-gold" />
              </div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Pure Teff Injera</h3>
              <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">
                Freshly baked, soft genuine teff injera rolls delivered daily to complement your wats and meats.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <div className="w-10 h-10 border border-white/20 text-white flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-5 h-5 text-hiwi-gold" />
              </div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Uniformed Staff</h3>
              <p className="text-xs text-gray-400 font-light mt-2 leading-relaxed">
                Polite, professionally dressed buffet attendants manage line flow, dish replenishment, and cleanliness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Delivery Links */}
      <ServiceDeliveryStrip serviceLabel="Event Catering" />

      {/* Direct Inquiry Form Section */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <InquiryForm 
            title="PLAN YOUR EVENT CATERING"
            subtitle="Tell us about your upcoming celebration and our culinary team will prepare a custom proposal"
          />
        </div>
      </section>

      {/* Johnny Burke Bottom CTA Banner */}
      <section className="bg-[#1A1A1A] text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-gold block">
            Summit Fiyel Bet • Addis Ababa
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-white leading-tight">
            READY TO PLAN YOUR EVENT MENU?
          </h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto" />
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Contact Hiwi Catering today for a personalized menu consultation, food tasting session, or instant price quotation.
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
              <Sparkles className="w-4 h-4" />
              <span>Event Inquiry Online</span>
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
