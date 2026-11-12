import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Send,
  ChevronRight,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { ADDIS_ABABA_LOCATIONS } from '@/data/services';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Hiwi Catering Addis Ababa | Summit Fiyel Bet',
  },
  description:
    'Get in touch with Hiwi Catering in Addis Ababa. Commercial kitchen in Summit Fiyel Bet. Call 0963 138 123 or submit an online event inquiry today!',
  alternates: {
    canonical: 'https://hiwicatering.com/contact',
  },
  keywords: [
    'contact Hiwi Catering',
    'catering service Addis Ababa phone',
    'catering Summit Addis Ababa',
    'catering Fiyel Bet Addis Ababa',
    'catering Addis Ababa address',
    'book catering Addis Ababa',
  ],
  openGraph: {
    title: 'Contact Hiwi Catering Addis Ababa | Summit Fiyel Bet',
    description:
      'Call 0963 138 123 or submit an inquiry for wedding, birthday, and event catering across Addis Ababa.',
    url: 'https://hiwicatering.com/contact',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/contact-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Hiwi Catering Services in Addis Ababa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Hiwi Catering Addis Ababa | Summit Fiyel Bet',
    description: 'Call 0963 138 123 or submit an event inquiry with Hiwi Catering.',
    images: ['/images/contact-bg.jpg'],
  },
};

export default function ContactPage() {
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
        name: 'Contact Us',
        item: 'https://hiwicatering.com/contact',
      },
    ],
  };

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Hiwi Catering Services',
    description:
      'Official contact and event consultation page for Hiwi Catering Services in Addis Ababa, Ethiopia.',
    url: 'https://hiwicatering.com/contact',
    mainEntity: {
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
  };

  return (
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-100 selection:text-hiwi-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-hiwi-stone border-b border-hiwi-border py-3 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider font-medium">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">Contact Us</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-hiwi-dark leading-tight text-balance">
            CONTACT HIWI CATERING
          </h1>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl mx-auto">
            Based in <strong>Summit Fiyel Bet</strong> (
            <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-hiwi-border">
              XVW2+PCH
            </code>
            ), serving weddings, celebrations, and corporate banquets across Bole, Ayat, CMC, and every sub-city of
            Addis Ababa (Addis Abeba).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Box 1: Direct Line */}
            <div className="bg-white border border-hiwi-border rounded-2xl p-6 sm:p-7 space-y-5 shadow-card">
              <div className="flex items-center gap-3.5 border-b border-hiwi-border pb-4">
                <div className="w-11 h-11 rounded-xl bg-hiwi-cream border border-hiwi-border flex items-center justify-center text-hiwi-primary shrink-0">
                  <Phone className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-stone-600 block">
                    Phone &amp; Direct Line
                  </span>
                  <a
                    href="tel:+251963138123"
                    className="text-lg font-black text-hiwi-dark hover:text-hiwi-primary transition-colors block tabular-nums"
                  >
                    0963 138 123
                  </a>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                Available <span className="tabular-nums font-semibold">7</span> days a week for immediate questions,
                tasting appointments, and urgent event quotes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:+251963138123"
                  className="py-3 px-4 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-extrabold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow-warm"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.75} />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://t.me/hiwicatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-extrabold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" strokeWidth={1.75} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Box 2: Commercial Kitchen */}
            <div className="bg-white border border-hiwi-border rounded-2xl p-6 sm:p-7 space-y-4 shadow-card">
              <div className="flex items-center gap-3.5 border-b border-hiwi-border pb-4">
                <div className="w-11 h-11 rounded-xl bg-hiwi-cream border border-hiwi-border flex items-center justify-center text-hiwi-primary shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-stone-600 block">
                    Central Kitchen &amp; Office
                  </span>
                  <h3 className="text-base font-extrabold uppercase tracking-tight text-hiwi-dark">
                    Summit Fiyel Bet Area
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
                <div>
                  <strong className="text-hiwi-dark font-bold uppercase tracking-wider block text-xs mb-1">
                    Physical Address &amp; Coordinates:
                  </strong>
                  <span>
                    Summit, Fiyel Bet Area (Plus Code{' '}
                    <code className="font-mono text-xs bg-hiwi-stone px-1.5 py-0.5 rounded">XVW2+PCH</code>, near CMC
                    &amp; Summit Safari corridor), Addis Ababa, Ethiopia
                  </span>
                  <span className="block text-xs font-mono tabular-nums text-stone-600 mt-1.5">
                    GPS: 8.996818, 38.851122
                  </span>
                </div>

                <div>
                  <strong className="text-hiwi-dark font-bold uppercase tracking-wider block text-xs mb-1">
                    Operating Hours:
                  </strong>
                  <span className="text-stone-700 tabular-nums">
                    Monday – Sunday: 7:00 AM – 10:00 PM
                    <br />
                    <span className="text-hiwi-primary font-semibold text-xs">
                      Catering deliveries &amp; setups dispatched 24/7 as requested
                    </span>
                  </span>
                </div>

                <div>
                  <strong className="text-hiwi-dark font-bold uppercase tracking-wider block text-xs mb-1">
                    Kitchen Dispatch:
                  </strong>
                  <span className="tabular-nums">
                    Express transit to Ayat (10–15 mins), Summit &amp; CMC (5–12 mins), and Bole Sub-City (15–25 mins)
                    across Addis Ababa &amp; Addis Abeba.
                  </span>
                </div>

                <div className="pt-1">
                  <a
                    href="https://maps.app.goo.gl/HKTMRDEuVvdDDnnN6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-lg bg-hiwi-dark text-white hover:bg-stone-800 text-xs font-extrabold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                    <span>Open Exact Pin on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Box 3: Sub-Cities Served */}
            <div className="bg-white border border-hiwi-border rounded-2xl p-6 sm:p-7 space-y-3 shadow-card">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-hiwi-cream border border-hiwi-border flex items-center justify-center text-hiwi-primary shrink-0">
                  <Building2 className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-hiwi-dark">
                  Sub-Cities Served in Addis Ababa
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-stone-600">We deliver and set up full buffet banquets across:</p>
              <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm text-stone-700 pt-1">
                {ADDIS_ABABA_LOCATIONS.map((loc) => (
                  <Link
                    key={loc.name}
                    href={loc.href || '/locations'}
                    className="flex items-center gap-2 py-0.5 hover:text-hiwi-primary transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-hiwi-primary rounded-full shrink-0" />
                    <span className="font-medium truncate underline-offset-2 hover:underline">{loc.name}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/locations"
                className="inline-block text-xs font-bold uppercase tracking-wider text-hiwi-primary hover:underline pt-1"
              >
                Explore All Addis Ababa Delivery Guides &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <InquiryForm
              title="GET A CUSTOM CATERING QUOTE IN 24 HOURS"
              subtitle="Share your event date, guest count, and venue neighborhood across Addis Ababa."
            />
          </div>
        </div>
      </section>

      {/* Bottom Service Strip */}
      <section className="bg-hiwi-dark text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
              Planning a Wedding, Birthday, or Special Celebration?
            </h2>
            <p className="text-sm text-stone-300 max-w-xl">
              Schedule a wedding tasting consultation at our Summit Fiyel Bet kitchen and receive customized menu
              proposals within <span className="tabular-nums">24</span> hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+251963138123"
              className="py-3.5 px-6 rounded-lg bg-hiwi-primary hover:bg-hiwi-hover text-white text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-warm tabular-nums"
            >
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              <span>Call: 0963 138 123</span>
            </a>
            <Link
              href="/pricing"
              className="py-3.5 px-6 rounded-lg border-2 border-white text-white hover:bg-white hover:text-hiwi-dark text-xs font-bold uppercase tracking-wider transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
