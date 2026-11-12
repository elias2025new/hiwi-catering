import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Award,
  Users,
  Utensils,
  Star,
} from 'lucide-react';
import { ADDIS_ABABA_LOCATIONS } from '@/data/services';

export const metadata: Metadata = {
  title: {
    absolute: 'About Hiwi Catering Addis Ababa | Summit Fiyel Bet Kitchen',
  },
  description:
    'Learn about Hiwi Catering in Addis Ababa. Commercial prep kitchen in Summit Fiyel Bet. Dedicated to authentic Habesha banquets, hot buffets & citywide service.',
  alternates: {
    canonical: 'https://hiwicatering.com/about',
  },
  keywords: [
    'about Hiwi Catering',
    'catering company Addis Ababa',
    'catering Summit Fiyel Bet',
    'best catering team Addis Ababa',
    'Ethiopian catering company',
    'ስለ ሂዊ ኬተሪንግ',
  ],
  openGraph: {
    title: 'About Hiwi Catering Addis Ababa | Summit Fiyel Bet Kitchen',
    description:
      'Learn about Hiwi Catering in Addis Ababa. Commercial prep kitchen in Summit Fiyel Bet. Authentic Habesha banquets and hot chafing buffets.',
    url: 'https://hiwicatering.com/about',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/corporate-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'About Hiwi Catering Services - Summit Fiyel Bet, Addis Ababa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Hiwi Catering Addis Ababa | Summit Fiyel Bet Kitchen',
    description: 'Learn about Hiwi Catering in Addis Ababa. Commercial prep kitchen in Summit Fiyel Bet.',
    images: ['/images/corporate-catering.jpg'],
  },
};

export default function AboutPage() {
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
        name: 'About Us',
        item: 'https://hiwicatering.com/about',
      },
    ],
  };

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Hiwi Catering Services',
    description:
      'Learn about Hiwi Catering Services, premier Ethiopian catering based in Summit Fiyel Bet, Addis Ababa.',
    url: 'https://hiwicatering.com/about',
    mainEntity: {
      '@type': 'FoodEstablishment',
      '@id': 'https://hiwicatering.com/#business',
      name: 'Hiwi Catering Services',
      telephone: '+251963138123',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Summit Fiyel Bet Area',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET',
      },
    },
  };

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Hygienic Commercial Kitchen',
      desc: 'Food safety guides every batch prepared at our Summit kitchen, with sanitized stainless prep tables, strict temperature controls, and daily inspected sourcing.',
    },
    {
      icon: Utensils,
      title: '100% Piping Hot Delivery',
      desc: 'We transport freshly simmered wats and grilled cuts in insulated carriers directly into gleaming commercial bain-marie chafing warmers.',
    },
    {
      icon: Award,
      title: 'Authentic Habesha Recipes',
      desc: 'Slow-simmered Berbere Doro Wat with farm eggs, Gurage Kitfo with niter kibbeh, saffron rice pilafs, and dedicated fasting Beyaynetu.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-hiwi-stone border-b border-hiwi-border py-3 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider font-medium">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-hiwi-dark leading-[1.1] text-balance">
              CRAFTING UNFORGETTABLE HABESHA FEASTS IN ADDIS ABABA
            </h1>

            <p className="text-base text-stone-700 leading-relaxed">
              Headquartered in <strong className="text-hiwi-dark">Summit Fiyel Bet</strong>, Hiwi Catering prepares
              authentic Ethiopian banquets and heated buffet spreads built around freshness, kitchen hygiene, and
              attentive table hospitality.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              From grand Melse weddings serving <span className="tabular-nums font-semibold">1,500+</span> guests to
              university graduations, corporate seminars, and family birthdays, our crew delivers hot food on schedule so
              hosts enjoy the moment alongside their guests.
            </p>

            <div className="grid grid-cols-3 gap-6 py-4 border-y border-hiwi-border">
              <div>
                <span className="text-xl sm:text-2xl font-black text-hiwi-dark block">Summit HQ</span>
                <span className="text-xs text-stone-600 font-medium block mt-0.5">Fiyel Bet Kitchen</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-hiwi-dark block tabular-nums">All 11</span>
                <span className="text-xs text-stone-600 font-medium block mt-0.5">Sub-Cities Served</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-hiwi-dark block tabular-nums">7 Days</span>
                <span className="text-xs text-stone-600 font-medium block mt-0.5 tabular-nums">24/7 Setup Dispatch</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-1">
              <Link
                href="/inquiry"
                className="py-3.5 px-5 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm text-center inline-flex items-center justify-center whitespace-nowrap"
              >
                Request Custom Quote
              </Link>
              <a
                href="tel:+251963138123"
                className="py-3.5 px-5 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-bold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-2 tabular-nums whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                <span>Call: 0963 138 123</span>
              </a>
              <Link
                href="/services"
                className="py-3.5 px-5 rounded-lg border border-stone-300 bg-white text-hiwi-dark hover:border-hiwi-primary hover:text-hiwi-primary text-xs font-bold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Our Services</span>
                <ChevronRight className="w-4 h-4 shrink-0" strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full bg-white border border-hiwi-border rounded-2xl p-2 shadow-warm-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-hiwi-stone">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Hiwi Catering Hot Buffet and Chafing Dish Banquet Setup Addis Ababa"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dark Band */}
      <section className="bg-hiwi-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
              <Users className="w-5 h-5 text-hiwi-gold" strokeWidth={1.75} />
            </div>
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-white tabular-nums">500+</span>
            <span className="text-xs uppercase tracking-wider text-stone-300 font-semibold">EVENTS CATERED</span>
          </div>

          <div className="flex flex-col items-center space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
              <Star className="w-5 h-5 text-hiwi-gold fill-hiwi-gold" strokeWidth={1.75} />
            </div>
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-white tabular-nums">100%</span>
            <span className="text-xs uppercase tracking-wider text-stone-300 font-semibold">PIPING HOT BUFFETS</span>
          </div>

          <div className="flex flex-col items-center space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-hiwi-gold" strokeWidth={1.75} />
            </div>
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-white tabular-nums">11</span>
            <span className="text-xs uppercase tracking-wider text-stone-300 font-semibold">SUB-CITIES COVERED</span>
          </div>
        </div>
      </section>

      {/* Culinary Standards Dark Section */}
      <section className="bg-hiwi-charcoal text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white text-balance">
              OUR CULINARY STANDARDS &amp; PROMISE
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              Every banquet follows strict temperature, sourcing, and plating discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-hiwi-dark/60 border border-white/10 rounded-2xl p-8 flex flex-col items-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-hiwi-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dispatch Network Grid */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-hiwi-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
              SERVING EVERY CORNER OF ADDIS ABABA
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              From our Summit Fiyel Bet kitchen (Plus Code{' '}
              <code className="font-mono text-xs bg-hiwi-stone px-1.5 py-0.5 rounded">XVW2+PCH</code>, GPS{' '}
              <code className="font-mono tabular-nums text-xs bg-hiwi-stone px-1.5 py-0.5 rounded">
                8.996818, 38.851122
              </code>
              ), our catering vans deliver hot buffets and uniformed staff across Addis Ababa &amp; Addis Abeba:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {ADDIS_ABABA_LOCATIONS.map((loc) => (
              <Link
                key={loc.name}
                href={loc.href || '/locations'}
                className="p-6 bg-hiwi-cream border border-hiwi-border hover:border-hiwi-primary rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200 block group"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <MapPin className="w-4 h-4 text-hiwi-primary shrink-0" strokeWidth={1.75} />
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-hiwi-dark group-hover:text-hiwi-primary transition-colors">
                    {loc.name}
                  </h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{loc.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/locations"
              className="py-3.5 px-8 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-extrabold uppercase tracking-wider transition-colors"
            >
              EXPLORE ALL DELIVERY AREAS
            </Link>
            <Link
              href="/contact"
              className="py-3.5 px-8 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm"
            >
              VISIT OUR SUMMIT KITCHEN &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-hiwi-dark text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
              Ready to Plan Your Next Celebration?
            </h2>
            <p className="text-sm text-stone-300 max-w-xl">
              Contact our Summit team to discuss menus, schedule a wedding tasting consultation, or request a quote.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/inquiry"
              className="py-3.5 px-6 rounded-lg bg-hiwi-primary hover:bg-hiwi-hover text-white text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm"
            >
              Get Custom Quote
            </Link>
            <a
              href="tel:+251963138123"
              className="py-3.5 px-6 rounded-lg border-2 border-white text-white hover:bg-white hover:text-hiwi-dark text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 tabular-nums"
            >
              <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
              <span>0963 138 123</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
