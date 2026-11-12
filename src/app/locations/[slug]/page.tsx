import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Clock,
  PhoneCall,
  Send,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  Utensils,
} from 'lucide-react';
import { CATERING_LOCATIONS, getLocationBySlug } from '@/data/locations';
import { CATERING_PACKAGES } from '@/data/packages';
import FaqAccordion from '@/components/FaqAccordion';
import InquiryForm from '@/components/InquiryForm';

export const dynamicParams = false;

export function generateStaticParams() {
  return CATERING_LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) {
    return {};
  }

  return {
    title: {
      absolute: location.seoTitle,
    },
    description: location.seoDescription,
    alternates: {
      canonical: `https://hiwicatering.com/locations/${location.slug}`,
    },
    keywords: [
      `catering ${location.shortName}`,
      `catering in ${location.shortName} Addis Ababa`,
      `catering in ${location.shortName} Addis Abeba`,
      'catering near me Addis Ababa',
      'event catering Addis Ababa',
      ...location.neighborhoodsCovered.slice(0, 4),
    ],
    openGraph: {
      title: location.seoTitle,
      description: location.seoDescription,
      url: `https://hiwicatering.com/locations/${location.slug}`,
      siteName: 'Hiwi Catering Services',
      locale: 'en_US',
      type: 'website',
      images: ['/images/corporate-catering.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.seoTitle,
      description: location.seoDescription,
      images: ['/images/corporate-catering.jpg'],
    },
  };
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) {
    notFound();
  }

  const otherLocations = CATERING_LOCATIONS.filter((l) => l.slug !== location.slug);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Event & Wedding Catering in ${location.name}, Addis Ababa`,
    serviceType: 'Local Event Catering & Hot Buffet Setup',
    url: `https://hiwicatering.com/locations/${location.slug}`,
    description: location.seoDescription,
    provider: {
      '@type': 'FoodEstablishment',
      '@id': 'https://hiwicatering.com/#business',
      name: 'Hiwi Catering Services',
      telephone: '+251963138123',
      hasMap: 'https://maps.app.goo.gl/HKTMRDEuVvdDDnnN6',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 8.996818,
        longitude: 38.851122,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Summit Fiyel Bet Area (Plus Code XVW2+PCH)',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
      },
    },
    areaServed: [
      { '@type': 'Place', name: location.name },
      ...location.neighborhoodsCovered.map((n) => ({ '@type': 'Place', name: n })),
      { '@type': 'AdministrativeArea', name: 'Addis Ababa' },
      { '@type': 'AdministrativeArea', name: 'Addis Abeba' },
    ],
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '750',
      highPrice: '1650',
      priceCurrency: 'ETB',
      offerCount: CATERING_PACKAGES.length,
    },
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
        name: 'Delivery Areas',
        item: 'https://hiwicatering.com/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.name,
        item: `https://hiwicatering.com/locations/${location.slug}`,
      },
    ],
  };

  return (
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-primary selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-hiwi-stone border-b border-hiwi-border py-3 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider text-[11px] font-semibold">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" strokeWidth={1.75} />
          <Link href="/locations" className="hover:text-hiwi-primary transition-colors">
            Locations
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">{location.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-hiwi-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-hiwi-amber block mb-2.5">
                  {location.subCityLabel}
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-hiwi-dark leading-tight text-balance">
                  {location.h1}
                </h1>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {location.localSummary}
              </p>

              {/* Local Logistics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-hiwi-border py-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                    Hot Kitchen Transit
                  </span>
                  <span className="text-sm font-black uppercase text-hiwi-dark block mt-1 tabular-nums">
                    {location.dispatchTime}
                  </span>
                </div>
                <div className="sm:border-x border-hiwi-border sm:px-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                    Starting Rate
                  </span>
                  <span className="text-sm font-black uppercase text-hiwi-dark block mt-1 tabular-nums">
                    From 750 ETB / Guest
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                    Route Access
                  </span>
                  <span className="text-sm font-black uppercase text-hiwi-dark block mt-1 tabular-nums">
                    {location.distanceFromKitchen}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-1">
                <a
                  href="tel:+251963138123"
                  className="py-3.5 px-6 bg-hiwi-primary text-white hover:bg-hiwi-hover rounded-lg text-xs font-extrabold uppercase tracking-[0.16em] shadow-warm transition-colors inline-flex items-center justify-center gap-2 tabular-nums whitespace-nowrap"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                  <span>Call: 0963 138 123</span>
                </a>
                <Link
                  href="/inquiry"
                  className="py-3.5 px-6 border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white rounded-lg text-xs font-extrabold uppercase tracking-[0.16em] transition-colors inline-flex items-center justify-center whitespace-nowrap"
                >
                  Book {location.shortName} Event
                </Link>
                <a
                  href="https://t.me/hiwicatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 border border-hiwi-border bg-hiwi-stone text-hiwi-dark hover:border-hiwi-dark rounded-lg text-xs font-bold uppercase tracking-[0.16em] transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Send className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Right Column: Neighborhood & Kitchen Proximity Box */}
            <div className="lg:col-span-5 bg-hiwi-stone border border-hiwi-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-card">
              <div>
                <div className="flex items-center gap-2 text-hiwi-dark mb-3">
                  <MapPin className="w-4 h-4 text-hiwi-primary shrink-0" strokeWidth={1.75} />
                  <h2 className="text-sm font-black uppercase tracking-wider">
                    {location.shortName} Neighborhoods Covered
                  </h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-stone-700">
                  {location.neighborhoodsCovered.map((zone) => (
                    <li key={zone} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-hiwi-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                      <span>{zone}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-hiwi-border pt-5 space-y-2">
                <h3 className="text-xs font-black uppercase tracking-wider text-hiwi-dark">
                  Venue &amp; Dispatch Logistics
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {location.venueLogisticsNote}
                </p>
              </div>

              <div className="border-t border-hiwi-border pt-5 flex flex-col gap-2.5 text-xs">
                <div className="flex items-center gap-2 text-stone-700">
                  <Clock className="w-3.5 h-3.5 text-hiwi-dark shrink-0" strokeWidth={1.75} />
                  <span>
                    Dispatched from Summit Fiyel Bet (<span className="font-mono font-semibold text-hiwi-dark">XVW2+PCH</span>)
                  </span>
                </div>
                <a
                  href="https://maps.app.goo.gl/HKTMRDEuVvdDDnnN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-hiwi-primary font-bold uppercase tracking-wider text-[11px] hover:underline"
                >
                  <span>
                    Verify Kitchen Pin on Google Maps (<span className="font-mono">8.996818, 38.851122</span>)
                  </span>
                  <ExternalLink className="w-3 h-3" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Strengths & Event Types */}
      <section className="py-14 sm:py-16 bg-hiwi-stone border-b border-hiwi-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {location.highlights.map((item) => (
              <div key={item.title} className="bg-white border border-hiwi-border rounded-2xl p-6 sm:p-7 space-y-3 shadow-card">
                <h2 className="text-base font-black uppercase tracking-tight text-hiwi-dark">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* AEO / Local Package Summary Box */}
          <div className="bg-white border border-hiwi-border rounded-2xl p-6 sm:p-8 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-hiwi-amber block">
                Menu &amp; Package Recommendation &bull; {location.shortName}
              </span>
              <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-hiwi-dark text-balance">
                POPULAR EVENTS &amp; TIERS FOR {location.shortName.toUpperCase()} HOSTS
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {location.recommendedTierNote}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {location.popularEvents.map((ev) => (
                  <li key={ev} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-hiwi-dark">
                    <CheckCircle2 className="w-4 h-4 text-hiwi-primary shrink-0" strokeWidth={1.75} />
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/pricing"
                className="py-3.5 px-6 bg-hiwi-primary text-white hover:bg-hiwi-hover rounded-lg text-xs font-extrabold uppercase tracking-[0.16em] text-center shadow-warm transition-colors inline-flex items-center justify-center gap-2"
              >
                <Utensils className="w-4 h-4" strokeWidth={1.75} />
                <span>Compare Full ETB Prices</span>
              </Link>
              <Link
                href="/services"
                className="py-3 px-6 border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white rounded-lg text-xs font-bold uppercase tracking-[0.16em] transition-colors text-center"
              >
                Explore All Event Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <FaqAccordion
        faqs={location.faqs}
        title={`${location.shortName} Catering FAQs`}
        subtitle={`Common questions from hosts booking Hiwi Catering in ${location.name}, Addis Ababa & Addis Abeba.`}
      />

      {/* Inquiry Form */}
      <section className="py-16 bg-hiwi-stone border-t border-hiwi-border px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <InquiryForm
            title={`REQUEST A QUOTE FOR ${location.shortName.toUpperCase()}`}
            subtitle={`Share your venue area in ${location.shortName}, guest count, and event date for a 24-hour proposal`}
          />
        </div>
      </section>

      {/* Other Neighborhood Corridors */}
      <section className="py-12 bg-white border-t border-hiwi-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-stone-600 block">
            Other Addis Ababa &amp; Addis Abeba Service Zones
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="py-2.5 px-5 border border-hiwi-border bg-hiwi-cream text-hiwi-dark hover:border-hiwi-dark hover:bg-hiwi-dark hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
