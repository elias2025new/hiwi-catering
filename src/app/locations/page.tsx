import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  PhoneCall,
  Send,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { CATERING_LOCATIONS } from '@/data/locations';
import { ADDIS_ABABA_LOCATIONS } from '@/data/services';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: {
    absolute: 'Catering Delivery Areas Addis Ababa & Abeba | Hiwi Catering',
  },
  description:
    'Fast local catering near you in Bole, Ayat, Summit Fiyel Bet (XVW2+PCH), CMC & Kazanchis. Hot buffets across Addis Ababa & Abeba. Call 0963 138 123.',
  alternates: {
    canonical: 'https://hiwicatering.com/locations',
  },
  keywords: [
    'catering near me Addis Ababa',
    'catering in addis abeba',
    'catering Bole Sub-City',
    'catering Ayat Addis Ababa',
    'catering Summit Fiyel Bet',
    'catering CMC Addis Ababa',
    'event catering delivery Addis Ababa',
  ],
  openGraph: {
    title: 'Catering Delivery Areas Addis Ababa & Abeba | Hiwi Catering',
    description:
      'Priority local catering delivery across Bole, Ayat, Summit & CMC, Kazanchis, and all 11 sub-cities of Addis Ababa.',
    url: 'https://hiwicatering.com/locations',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: ['/images/corporate-catering.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering Delivery Areas Addis Ababa & Abeba | Hiwi Catering',
    description: 'Serving Bole, Ayat, Summit Fiyel Bet, CMC & all 11 sub-cities of Addis Ababa.',
    images: ['/images/corporate-catering.jpg'],
  },
};

export default function LocationsHubPage() {
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
    ],
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
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
          <span className="text-black font-bold">Delivery Areas &amp; Sub-Cities</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block">
            Summit Fiyel Bet Kitchen • All 11 Sub-Cities
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.12em] text-black leading-tight">
            CATERING DELIVERY AREAS IN ADDIS ABABA &amp; ADDIS ABEBA
          </h1>
          <div className="w-12 h-0.5 bg-black mx-auto" />
          <p className="text-xs sm:text-base text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Dispatched hot from our commercial kitchen in <strong>Summit Fiyel Bet (Plus Code XVW2+PCH)</strong>, our catering teams serve private compounds, villas, hotels, offices, and tented celebrations—with express routes into <strong>Ayat</strong>, <strong>CMC</strong>, and <strong>Bole Sub-City</strong>.
          </p>

          {/* HQ Pin Verification Strip */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs">
            <a
              href="https://maps.app.goo.gl/HKTMRDEuVvdDDnnN6"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-black text-white hover:bg-gray-800 font-bold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-hiwi-gold" />
              <span>Exact Kitchen Pin (8.996818, 38.851122)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="tel:+251963138123"
              className="py-3 px-6 border-2 border-black text-black hover:bg-black hover:text-white font-extrabold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Dispatch: 0963 138 123</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dedicated Corridor Guides */}
      <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-[0.15em] text-black">
              PRIORITY CORRIDORS &amp; AREA GUIDES
            </h2>
            <div className="w-12 h-0.5 bg-black mx-auto my-4" />
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              Select your neighborhood corridor to view estimated kitchen travel times, local venue logistics, and recommended packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CATERING_LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white border border-gray-200 p-7 flex flex-col justify-between hover:border-black hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-hiwi-primary">{loc.heroBadge}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-black">
                    {loc.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-700 bg-gray-50 border border-gray-200 px-3 py-2">
                    <Clock className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>{loc.dispatchTime}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {loc.localSummary}
                  </p>
                  <div className="pt-1 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                      Key Zones Covered:
                    </span>
                    <ul className="space-y-1 text-xs text-gray-700">
                      {loc.neighborhoodsCovered.slice(0, 4).map((zone) => (
                        <li key={zone} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-hiwi-primary shrink-0" />
                          <span>{zone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="w-full py-3 px-5 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Explore {loc.shortName} Catering</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete City Coverage Matrix */}
      <section className="py-16 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-3xl font-black uppercase tracking-[0.12em] text-black">
              ALL ADDIS ABABA NEIGHBORHOODS WE SERVE
            </h2>
            <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDIS_ABABA_LOCATIONS.map((item) => (
              <div key={item.name} className="border border-gray-200 p-5 bg-gray-50 space-y-1.5">
                <h3 className="text-sm font-black uppercase tracking-wider text-black">
                  {item.href && item.href !== '/locations' ? (
                    <Link href={item.href} className="hover:text-hiwi-primary transition-colors">
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )}
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking Inquiry */}
      <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <InquiryForm
            title="CHECK DATE AVAILABILITY FOR YOUR SUB-CITY"
            subtitle="Tell us your neighborhood (Bole, Ayat, Summit, CMC, or elsewhere) and event date"
          />
        </div>
      </section>

      {/* Dark Bottom Banner */}
      <section className="bg-[#1A1A1A] text-white py-14 px-4 sm:px-6 text-center space-y-5">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-gold block">
          Summit Fiyel Bet HQ • Hot Delivery Guaranteed
        </span>
        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-[0.15em]">
          READY FOR HOT BUFFET SETUP AT YOUR VENUE?
        </h2>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+251963138123"
            className="py-3.5 px-8 bg-white text-black hover:bg-gray-200 text-xs font-black uppercase tracking-[0.2em] inline-flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>0963 138 123</span>
          </a>
          <a
            href="https://t.me/hiwicatering"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 border-2 border-white text-white hover:bg-white hover:text-black text-xs font-extrabold uppercase tracking-[0.2em] inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Telegram Chat</span>
          </a>
        </div>
      </section>
    </div>
  );
}
