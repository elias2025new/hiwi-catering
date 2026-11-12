import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  PhoneCall,
  Send,
  ArrowRight,
  ShieldCheck,
  Clock,
  Utensils,
  HeartHandshake,
} from 'lucide-react';
import { CATERING_SERVICES } from '@/data/services';
import InquiryForm from '@/components/InquiryForm';
import ServiceDeliveryStrip from '@/components/ServiceDeliveryStrip';

export const metadata: Metadata = {
  title: {
    absolute: 'Catering Services in Addis Ababa | Hiwi Catering',
  },
  description:
    'Explore full-service catering in Addis Ababa by Hiwi Catering. Authentic Habesha feasts, hot buffets, and uniformed staff for weddings, birthdays & events.',
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
    'የሰርግ ምግብ ዝግጅት',
  ],
  openGraph: {
    title: 'Catering Services in Addis Ababa | Hiwi Catering',
    description:
      'Fresh Habesha feasts & modern buffets for weddings, birthdays, graduations & events across Addis Ababa. Call 0963 138 123.',
    url: 'https://hiwicatering.com/services',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/corporate-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Catering Services in Addis Ababa - Full-Service Buffets and Banquets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering Services in Addis Ababa | Hiwi Catering',
    description:
      'Fresh Habesha feasts & modern buffets for weddings, birthdays, graduations & events across Addis Ababa.',
    images: ['/images/corporate-catering.jpg'],
  },
};

const SERVICE_IMAGES: Record<string, string> = {
  'wedding-catering': '/images/wedding-catering.jpg',
  'birthday-catering': '/images/social-catering.jpg',
  'graduation-catering': '/images/corporate-catering.jpg',
  'showers-and-events': '/images/vip-buffet.jpg',
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
        item: 'https://hiwicatering.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Catering Services',
        item: 'https://hiwicatering.com/services',
      },
    ],
  };

  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hiwi Catering Services Addis Ababa',
    description:
      'Comprehensive catering solutions in Addis Ababa including weddings, birthdays, graduations, and corporate events.',
    itemListElement: CATERING_SERVICES.map((s, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: s.title,
      url: `https://hiwicatering.com/services/${s.slug}`,
    })),
  };

  const serviceStandards = [
    {
      icon: Utensils,
      title: 'Stainless Warmers',
      desc: 'Heavy-duty bain-marie chafing dishes keep stews and meats piping hot throughout your celebration.',
    },
    {
      icon: Clock,
      title: '1-Hour Early Setup',
      desc: 'Our crew arrives 1 hour before meal service to dress buffet lines and verify dish temperatures.',
    },
    {
      icon: ShieldCheck,
      title: 'Pure Teff Injera',
      desc: 'Freshly baked soft teff injera delivered daily from our hygienic Summit kitchen.',
    },
    {
      icon: HeartHandshake,
      title: 'Uniformed Staff',
      desc: 'Polite buffet attendants manage line flow, ladle replenishment, and dining cleanliness.',
    },
  ];

  return (
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-100 selection:text-hiwi-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-hiwi-stone border-b border-hiwi-border py-3 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider font-medium">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">Catering Services</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-14 sm:py-20 bg-hiwi-cream border-b border-hiwi-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-hiwi-dark leading-tight text-balance">
            CATERING SERVICES IN ADDIS ABABA &amp; ADDIS ABEBA
          </h1>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto">
            From grand <span className="tabular-nums font-semibold">1,500+</span> guest wedding banquets to milestone
            graduations, corporate seminars, and birthday parties, Hiwi Catering dispatches hot Habesha feasts and
            contemporary buffets anywhere in Addis Ababa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/inquiry"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg bg-hiwi-primary hover:bg-hiwi-hover text-white text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm text-center inline-flex items-center justify-center gap-2"
            >
              <span>Request Event Quote</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </Link>

            <Link
              href="/pricing"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-extrabold uppercase tracking-wider transition-all text-center inline-flex items-center justify-center"
            >
              <span>View Package Pricing</span>
            </Link>

            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-7 rounded-lg border border-stone-300 bg-white text-hiwi-dark hover:border-hiwi-primary hover:text-hiwi-primary text-xs font-bold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-2 tabular-nums"
            >
              <PhoneCall className="w-4 h-4 text-hiwi-primary" strokeWidth={1.75} />
              <span>0963 138 123</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CATERING_SERVICES.map((service) => {
              const imageSrc = SERVICE_IMAGES[service.slug] || '/images/corporate-catering.jpg';

              return (
                <div
                  key={service.slug}
                  className="bg-hiwi-cream border border-hiwi-border hover:border-hiwi-primary rounded-2xl p-4 sm:p-5 flex flex-col justify-between group shadow-card hover:shadow-card-hover transition-all duration-200"
                >
                  <div>
                    {/* Concentric Framed Food Photo (outer rounded-2xl - 20px pad -> inner rounded-lg) */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-hiwi-stone mb-5">
                      <Image
                        src={imageSrc}
                        alt={`${service.title} in Addis Ababa by Hiwi Catering`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 550px"
                      />
                    </div>

                    <div className="px-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-hiwi-amber tracking-wide">
                          {service.amharicTitle}
                        </span>
                        <span className="text-xs font-semibold text-stone-600 tabular-nums">
                          {service.capacityRange}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-hiwi-dark group-hover:text-hiwi-primary transition-colors text-balance">
                        <Link href={`/services/${service.slug}`}>{service.title}</Link>
                      </h2>

                      <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">{service.shortDesc}</p>

                      <div className="mt-6 border-t border-hiwi-border pt-4">
                        <h3 className="text-xs font-bold text-hiwi-dark uppercase tracking-wider mb-3">
                          Menu Highlights:
                        </h3>
                        <ul className="space-y-2 text-sm text-stone-700">
                          {service.menuHighlights.slice(0, 4).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-hiwi-primary shrink-0 mt-2"
                                aria-hidden="true"
                              />
                              <span className="leading-snug">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 pt-5 px-1 border-t border-hiwi-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-stone-600 font-medium block">Starting from</span>
                      <span className="text-2xl font-black text-hiwi-dark tabular-nums">
                        {service.startingPrice} ETB{' '}
                        <span className="text-xs font-semibold text-stone-600">/ guest</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1 sm:flex-none py-3 px-6 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-bold uppercase tracking-wider transition-colors shadow-warm text-center inline-flex items-center justify-center gap-2"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                      </Link>
                      <a
                        href="tel:+251963138123"
                        className="p-3 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white transition-colors inline-flex items-center justify-center"
                        aria-label={`Call to book ${service.title}`}
                      >
                        <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards Dark Band */}
      <section className="bg-hiwi-dark text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white text-balance">
              INCLUDED WITH EVERY CATERING BOOKING
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              We handle the complete kitchen preparation, warmers, and service team so you can focus on hosting your
              guests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceStandards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-hiwi-charcoal border border-white/10 text-center space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-hiwi-gold flex items-center justify-center mx-auto">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Delivery Links */}
      <ServiceDeliveryStrip serviceLabel="Event Catering" />

      {/* Direct Inquiry Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <InquiryForm
            title="PLAN YOUR EVENT CATERING"
            subtitle="Tell us your event type, guest estimate, and venue area for a tailored proposal within 24 hours."
          />
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-hiwi-dark text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight text-balance">
            READY TO PLAN YOUR EVENT MENU?
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto leading-relaxed">
            Contact Hiwi Catering today for a personalized menu consultation, tasting appointment, or fast price
            quotation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inquiry"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm flex items-center justify-center"
            >
              Submit Event Inquiry
            </Link>
            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg border-2 border-white text-white hover:bg-white hover:text-hiwi-dark text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 tabular-nums"
            >
              <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
              <span>Call: 0963 138 123</span>
            </a>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg border border-white/35 text-stone-200 hover:text-white hover:border-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Telegram Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
