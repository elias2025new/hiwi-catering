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
    <div className="bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider text-[11px] font-medium">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/locations" className="hover:text-black transition-colors">
            Locations
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-black font-bold">{location.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block mb-2">
                  {location.subCityLabel}
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.1em] text-black leading-tight">
                  {location.h1}
                </h1>
                <div className="w-12 h-0.5 bg-black my-4" />
              </div>

              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                {location.localSummary}
              </p>

              {/* Local Logistics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-gray-200 py-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">
                    Hot Kitchen Transit
                  </span>
                  <span className="text-sm font-black uppercase text-black block mt-1">
                    {location.dispatchTime}
                  </span>
                </div>
                <div className="sm:border-x border-gray-200 sm:px-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">
                    Starting Rate
                  </span>
                  <span className="text-sm font-black uppercase text-black block mt-1">
                    From 750 ETB / Guest
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">
                    Route Access
                  </span>
                  <span className="text-sm font-black uppercase text-black block mt-1">
                    {location.distanceFromKitchen}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="tel:+251963138123"
                  className="py-3.5 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call: 0963 138 123</span>
                </a>
                <Link
                  href="/inquiry"
                  className="py-3.5 px-8 border-2 border-black text-black hover:bg-black hover:text-white text-xs font-extrabold uppercase tracking-[0.2em] transition-colors inline-flex items-center justify-center"
                >
                  Book {location.shortName} Event
                </Link>
                <a
                  href="https://t.me/hiwicatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 border-2 border-gray-300 text-black hover:border-black text-xs font-extrabold uppercase tracking-[0.2em] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Right Column: Neighborhood & Kitchen Proximity Box */}
            <div className="lg:col-span-5 bg-gray-50 border border-gray-200 p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-black mb-2">
                  <MapPin className="w-4 h-4 text-hiwi-primary shrink-0" />
                  <h2 className="text-sm font-black uppercase tracking-widest">
                    {location.shortName} Neighborhoods Covered
                  </h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-gray-700">
                  {location.neighborhoodsCovered.map((zone) => (
                    <li key={zone} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                      <span>{zone}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-5 space-y-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-black">
                  Venue &amp; Dispatch Logistics
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {location.venueLogisticsNote}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-5 flex flex-col gap-2.5 text-xs">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>Dispatched from Summit Fiyel Bet (XVW2+PCH)</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/HKTMRDEuVvdDDnnN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-hiwi-primary font-bold uppercase tracking-wider text-[11px] hover:underline"
                >
                  <span>Verify Kitchen Pin on Google Maps (8.996818, 38.851122)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Strengths & Event Types */}
      <section className="py-14 sm:py-16 bg-gray-50 border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {location.highlights.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 p-7 space-y-3">
                <span className="w-8 h-0.5 bg-black block" />
                <h2 className="text-base font-black uppercase tracking-wider text-black">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* AEO / Local Package Summary Box */}
          <div className="bg-white border border-gray-200 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-hiwi-primary block">
                Menu &amp; Package Recommendation • {location.shortName}
              </span>
              <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-black">
                POPULAR EVENTS &amp; TIERS FOR {location.shortName.toUpperCase()} HOSTS
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {location.recommendedTierNote}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {location.popularEvents.map((ev) => (
                  <span
                    key={ev}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 text-[11px] font-bold uppercase tracking-wider text-gray-800"
                  >
                    {ev}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/pricing"
                className="py-3.5 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] text-center inline-flex items-center justify-center gap-2"
              >
                <Utensils className="w-4 h-4" />
                <span>Compare Full ETB Prices</span>
              </Link>
              <Link
                href="/services"
                className="py-3 px-6 border border-black text-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-[0.2em] text-center"
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
      <section className="py-16 bg-gray-50 border-t border-gray-200 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <InquiryForm
            title={`REQUEST A QUOTE FOR ${location.shortName.toUpperCase()}`}
            subtitle={`Share your venue area in ${location.shortName}, guest count, and event date for a 24-hour proposal`}
          />
        </div>
      </section>

      {/* Other Neighborhood Corridors */}
      <section className="py-12 bg-white border-t border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500 block">
            Other Addis Ababa &amp; Addis Abeba Service Zones
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="py-2.5 px-5 border border-gray-300 hover:border-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
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
