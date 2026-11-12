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
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-primary selection:text-white">
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
          <span className="text-hiwi-dark font-bold">Delivery Areas &amp; Sub-Cities</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-hiwi-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-hiwi-amber block">
            Summit Fiyel Bet Kitchen &bull; All <span className="tabular-nums">11</span> Sub-Cities
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-hiwi-dark leading-tight text-balance">
            CATERING DELIVERY AREAS IN ADDIS ABABA &amp; ADDIS ABEBA
          </h1>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-3xl mx-auto">
            Dispatched hot from our commercial kitchen in <strong className="text-hiwi-dark">Summit Fiyel Bet (Plus Code <span className="font-mono">XVW2+PCH</span>)</strong>, our catering teams serve private compounds, villas, hotels, offices, and tented celebrations&mdash;with express routes into <strong className="text-hiwi-dark">Ayat</strong>, <strong className="text-hiwi-dark">CMC</strong>, and <strong className="text-hiwi-dark">Bole Sub-City</strong>.
          </p>

          {/* HQ Pin Verification Strip */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs">
            <a
              href="tel:+251963138123"
              className="py-3.5 px-7 bg-hiwi-primary text-white hover:bg-hiwi-hover rounded-lg font-extrabold uppercase tracking-[0.16em] shadow-warm transition-colors inline-flex items-center gap-2 tabular-nums"
            >
              <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
              <span>Call Dispatch: 0963 138 123</span>
            </a>
            <a
              href="https://maps.app.goo.gl/HKTMRDEuVvdDDnnN6"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white rounded-lg font-bold uppercase tracking-[0.14em] transition-colors inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-hiwi-amber" strokeWidth={1.75} />
              <span>Exact Kitchen Pin (<span className="font-mono">8.996818, 38.851122</span>)</span>
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </section>

      {/* Dedicated Corridor Guides */}
      <section className="py-16 sm:py-20 bg-hiwi-stone border-b border-hiwi-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-hiwi-dark text-balance">
              PRIORITY CORRIDORS &amp; AREA GUIDES
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Select your neighborhood corridor to view estimated kitchen travel times, local venue logistics, and recommended packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CATERING_LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white border border-hiwi-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-card hover:shadow-card-hover hover:border-stone-400 transition-all"
              >
                <div className="space-y-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-hiwi-amber">
                    {loc.heroBadge}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-hiwi-dark">
                    {loc.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold tabular-nums text-stone-700 bg-hiwi-stone border border-hiwi-border rounded-lg px-3 py-2">
                    <Clock className="w-3.5 h-3.5 text-hiwi-dark shrink-0" strokeWidth={1.75} />
                    <span>{loc.dispatchTime}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {loc.localSummary}
                  </p>
                  <div className="pt-1 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                      Key Zones Covered:
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {loc.neighborhoodsCovered.slice(0, 4).map((zone) => (
                        <li key={zone} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-hiwi-primary shrink-0" strokeWidth={1.75} />
                          <span>{zone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-hiwi-border">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="w-full py-3 px-5 bg-hiwi-primary text-white hover:bg-hiwi-hover rounded-lg text-xs font-bold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Explore {loc.shortName} Catering</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete City Coverage Matrix */}
      <section className="py-16 bg-white border-b border-hiwi-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-hiwi-dark text-balance">
              ALL ADDIS ABABA NEIGHBORHOODS WE SERVE
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDIS_ABABA_LOCATIONS.map((item) => (
              <div key={item.name} className="border border-hiwi-border rounded-xl p-5 bg-hiwi-cream space-y-1.5">
                <h3 className="text-sm font-black uppercase tracking-wider text-hiwi-dark">
                  {item.href && item.href !== '/locations' ? (
                    <Link href={item.href} className="hover:text-hiwi-primary transition-colors">
                      {item.name}
                    </Link>
                  ) : (
                    item.name
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking Inquiry */}
      <section className="py-16 sm:py-20 bg-hiwi-stone px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <InquiryForm
            title="CHECK DATE AVAILABILITY FOR YOUR SUB-CITY"
            subtitle="Tell us your neighborhood (Bole, Ayat, Summit, CMC, or elsewhere) and event date"
          />
        </div>
      </section>

      {/* Dark Bottom Banner */}
      <section className="bg-hiwi-dark text-white py-14 sm:py-16 px-4 sm:px-6 text-center space-y-5">
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-hiwi-gold block">
          Summit Fiyel Bet HQ &bull; Hot Delivery Guaranteed
        </span>
        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-balance">
          READY FOR HOT BUFFET SETUP AT YOUR VENUE?
        </h2>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+251963138123"
            className="py-3.5 px-8 bg-hiwi-primary text-white hover:bg-hiwi-hover rounded-lg text-xs font-extrabold uppercase tracking-[0.18em] shadow-warm transition-colors inline-flex items-center gap-2 tabular-nums"
          >
            <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
            <span>0963 138 123</span>
          </a>
          <a
            href="https://t.me/hiwicatering"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 border-2 border-white/80 text-white hover:bg-white hover:text-hiwi-dark rounded-lg text-xs font-extrabold uppercase tracking-[0.18em] transition-colors inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" strokeWidth={1.75} />
            <span>Telegram Chat</span>
          </a>
        </div>
      </section>
    </div>
  );
}
