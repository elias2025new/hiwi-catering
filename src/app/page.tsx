import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  MapPin,
  Phone,
  Sparkles,
  Leaf,
  Award,
  Utensils,
  ArrowRight,
} from 'lucide-react';
import { CATERING_FAQS } from '@/data/faqs';
import InquiryForm from '@/components/InquiryForm';
import HomeTestimonials from '@/components/HomeTestimonials';
import HomeFaqSection from '@/components/HomeFaqSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Catering in Addis Ababa & Abeba | Hiwi Catering',
  },
  description:
    'Full-service catering in Addis Ababa & Addis Abeba for weddings, birthdays, graduations & events across Bole, Ayat & Summit. Call 0963 138 123.',
  alternates: {
    canonical: 'https://hiwicatering.com',
  },
  openGraph: {
    title: 'Catering in Addis Ababa & Abeba | Hiwi Catering',
    description:
      'Authentic Habesha feasts & modern chafing buffets delivered across Bole, Ayat, Summit & all 11 sub-cities of Addis Ababa.',
    url: 'https://hiwicatering.com',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: ['/images/hero-bg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering in Addis Ababa & Abeba | Hiwi Catering',
    description:
      'Weddings, graduations, birthdays & corporate catering across Bole, Ayat & Addis Ababa.',
    images: ['/images/hero-bg.jpg'],
  },
};

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CATERING_FAQS.slice(0, 5).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-100 selection:text-hiwi-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========================================================================= */}
      {/* 1. FEATURED PRODUCT HERO (Unobscured Culinary Spread + Prominent CTA)     */}
      {/* ========================================================================= */}
      <section className="bg-hiwi-cream border-b border-hiwi-border py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clear Offer & Primary CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-black uppercase tracking-tight text-hiwi-dark leading-[1.1] text-balance">
              CATERING SERVICE IN ADDIS ABABA FOR WEDDINGS, EVENTS &amp; PARTIES
            </h1>

            <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Authentic Habesha Doro Wat, Kitfo, fasting Beyaynetu, and gleaming chafing dish buffets prepared fresh
              at our Summit Fiyel Bet kitchen and delivered hot across Bole, Ayat, CMC, and all 11 sub-cities—starting
              at <span className="font-bold text-hiwi-dark tabular-nums">750 ETB / guest</span>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#inquiry-form"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-hiwi-primary hover:bg-hiwi-hover active:scale-[0.98] text-white font-extrabold uppercase text-xs sm:text-sm tracking-wider transition-all duration-200 shadow-warm text-center"
              >
                GET MY CUSTOM QUOTE
              </a>

              <a
                href="tel:+251963138123"
                className="w-full sm:w-auto px-7 py-4 rounded-lg border-2 border-hiwi-dark hover:bg-hiwi-dark hover:text-white text-hiwi-dark font-extrabold uppercase text-xs sm:text-sm tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-2.5 text-center tabular-nums"
                aria-label="Call Hiwi Catering at 0963 138 123"
              >
                <Phone className="w-4 h-4" strokeWidth={1.75} />
                <span>0963 138 123</span>
              </a>
            </div>
          </div>

          {/* Right Column: Enlarged Authentic Banquet Photography (outer rounded-2xl p-2 -> inner rounded-lg) */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-hiwi-border rounded-2xl p-2 shadow-warm-lg">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-lg bg-hiwi-stone">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Hiwi Catering Hot Stainless Chafing Dish Buffet with Doro Wat, Derek Tibs and Injera in Addis Ababa"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS BAR (Consistent Icon Treatment & Tabular Figures)                */}
      {/* ========================================================================= */}
      <section className="bg-hiwi-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
              <Users className="w-5 h-5 text-hiwi-gold" strokeWidth={1.75} />
            </div>
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-white tabular-nums">
              25 – 1,500+
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-300 font-semibold">
              GUEST CAPACITY PER EVENT
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
              <Utensils className="w-5 h-5 text-hiwi-gold" strokeWidth={1.75} />
            </div>
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-white tabular-nums">
              750 ETB
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-300 font-semibold">
              PACKAGES STARTING PER GUEST
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-hiwi-gold" strokeWidth={1.75} />
            </div>
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-white tabular-nums">
              11
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-300 font-semibold">
              ADDIS SUB-CITIES COVERED
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FULL-SERVICE EVENT CATERING BY OCCASION                                */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-hiwi-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
              FULL-SERVICE WEDDING, CORPORATE &amp; PARTY CATERING
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              From Bole weddings and Melse ceremonies to Ayat graduations and Kazanchis seminars, every event receives
              hot bain-marie warmers and attentive service across Addis Ababa &amp; Addis Abeba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Weddings */}
            <div className="flex flex-col bg-hiwi-cream border border-hiwi-border rounded-2xl p-2 group hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-lg bg-hiwi-stone">
                <Image
                  src="/images/wedding-catering.jpg"
                  alt="Full-Service Wedding Catering Addis Ababa - Hiwi Catering"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-hiwi-dark">
                  WEDDINGS &amp; MELSE BANQUETS
                </h3>
                <p className="text-sm text-stone-600 font-normal leading-relaxed mt-3 mb-6 flex-grow">
                  Bespoke wedding tasting consultations, multi-line hot buffets, Agelgil setups, and uniformed staff for
                  receptions from <span className="tabular-nums font-medium">100 to 1,500+</span> guests.
                </p>
                <Link
                  href="/services/wedding-catering"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>EXPLORE WEDDING CATERING</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </Link>
              </div>
            </div>

            {/* Card 2: Corporate Events */}
            <div className="flex flex-col bg-hiwi-cream border border-hiwi-border rounded-2xl p-2 group hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-lg bg-hiwi-stone">
                <Image
                  src="/images/corporate-catering.jpg"
                  alt="Corporate Conference and Seminar Catering Addis Ababa - Hiwi Catering"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-hiwi-dark">
                  CORPORATE &amp; SEMINAR BUFFETS
                </h3>
                <p className="text-sm text-stone-600 font-normal leading-relaxed mt-3 mb-6 flex-grow">
                  Punctual morning coffee breaks, executive boxed meals, and hot mixed or fasting buffets for NGOs,
                  embassies, and office meetings across Kazanchis and Bole.
                </p>
                <Link
                  href="/services/showers-and-events"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-hiwi-dark text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>EXPLORE CORPORATE EVENTS</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </Link>
              </div>
            </div>

            {/* Card 3: Social Celebrations */}
            <div className="flex flex-col bg-hiwi-cream border border-hiwi-border rounded-2xl p-2 group hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-lg bg-hiwi-stone">
                <Image
                  src="/images/social-catering.jpg"
                  alt="Birthday Party, Graduation and Social Event Catering in Addis Ababa"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-hiwi-dark">
                  BIRTHDAYS &amp; GRADUATIONS
                </h3>
                <p className="text-sm text-stone-600 font-normal leading-relaxed mt-3 mb-6 flex-grow">
                  Abundant home-style wats, crisp sambusa finger food risers, and warm backyard tent buffets delivered
                  hot to private compounds and halls.
                </p>
                <Link
                  href="/services/birthday-catering"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-hiwi-dark text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>EXPLORE SOCIAL PARTIES</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLIENT STORIES (Interactive Spotlight Island)                          */}
      {/* ========================================================================= */}
      <HomeTestimonials />

      {/* ========================================================================= */}
      {/* 5. AUTHENTIC ETHIOPIAN MENUS (Show the Actual Culinary Offerings)         */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
              HOT HABESHA FEASTS, FASTING BEYAYNETU &amp; VIP BUFFETS
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Every dish is prepared fresh to order with authentic Berbere, pure niter kibbeh, and soft daily-baked teff
              Injera—tailored to your guest dietary needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu 1 */}
            <div className="flex flex-col bg-hiwi-cream border border-hiwi-border rounded-2xl p-2 group hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-lg bg-hiwi-stone">
                <Image
                  src="/images/traditional-feast.jpg"
                  alt="Traditional Ethiopian Habesha Feast Catering - Doro Wat, Kitfo, Derek Tibs and Injera"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-hiwi-dark">
                  TRADITIONAL HABESHA FEAST
                </h3>
                <p className="text-sm text-stone-600 font-normal leading-relaxed mt-3 mb-6 flex-grow">
                  Slow-simmered Doro Wat with boiled eggs, Gurage Kitfo topped with Ayib, smoky Derek Tibs, Siga Wat,
                  and rolled teff Injera.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-hiwi-dark text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  SEE PRICING &amp; MENU
                </Link>
              </div>
            </div>

            {/* Menu 2 */}
            <div className="flex flex-col bg-hiwi-cream border border-hiwi-border rounded-2xl p-2 group hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-lg bg-hiwi-stone">
                <Image
                  src="/images/fasting-special.jpg"
                  alt="Ethiopian Fasting Tsom Special Catering Platter - Shiro, Misir Wat, Kik Alicha and Beyaynetu"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-hiwi-dark">
                  FASTING (TSOM) BEYAYNETU
                </h3>
                <p className="text-sm text-stone-600 font-normal leading-relaxed mt-3 mb-6 flex-grow">
                  Colorful 100% plant-based spreads: gourmet Shiro Wat, Misir Wat, Kik Alicha, seasoned Gomen, Key Sir
                  beetroot, and crisp salads.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-hiwi-dark text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  SEE PRICING &amp; MENU
                </Link>
              </div>
            </div>

            {/* Menu 3 */}
            <div className="flex flex-col bg-hiwi-cream border border-hiwi-border rounded-2xl p-2 group hover:shadow-card-hover transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-lg bg-hiwi-stone">
                <Image
                  src="/images/vip-buffet.jpg"
                  alt="VIP Buffet and Traditional Ethiopian Buna Coffee Ceremony Setup in Addis Ababa"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-hiwi-dark">
                  VIP BUFFET &amp; BUNA CEREMONY
                </h3>
                <p className="text-sm text-stone-600 font-normal leading-relaxed mt-3 mb-6 flex-grow">
                  Dual chafing stations featuring spiced roast meats, fragrant rice pilafs, Mesob centerpieces, and live
                  traditional Jebena coffee service.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-bold uppercase tracking-wider transition-colors shadow-warm"
                >
                  SEE PRICING &amp; MENU
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5B. QUICK CATERING OVERVIEW (Structured GEO / AEO Reference Grid)         */}
      {/* ========================================================================= */}
      <section className="bg-hiwi-stone border-y border-hiwi-border py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
              HIWI CATERING OVERVIEW AT A GLANCE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-hiwi-border rounded-2xl p-6 space-y-2 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-hiwi-amber block">
                Per-Guest Pricing (ETB)
              </span>
              <p className="font-extrabold text-hiwi-dark text-base tabular-nums">
                750 – 1,650 ETB / Guest
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Classic Buffets (<span className="tabular-nums">750</span> ETB), Royal Habesha Banquet (
                <span className="tabular-nums">1,150</span> ETB), and Grand Wedding Majesty (
                <span className="tabular-nums">1,650</span> ETB).
              </p>
            </div>

            <div className="bg-white border border-hiwi-border rounded-2xl p-6 space-y-2 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-hiwi-amber block">
                Kitchen Location
              </span>
              <p className="font-extrabold text-hiwi-dark text-base">
                Summit Fiyel Bet (<code className="font-mono text-sm">XVW2+PCH</code>)
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                GPS <code className="font-mono tabular-nums text-xs">8.996818, 38.851122</code> —{' '}
                <span className="tabular-nums">10–15</span> min to Ayat &amp;{' '}
                <span className="tabular-nums">15–25</span> min to Bole Sub-City.
              </p>
            </div>

            <div className="bg-white border border-hiwi-border rounded-2xl p-6 space-y-2 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-hiwi-amber block">
                Dietary Coverage
              </span>
              <p className="font-extrabold text-hiwi-dark text-base">
                Fasting (Tsom) &amp; Non-Fasting
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Dedicated vegan Yetsom Beyaynetu alongside Doro Wat, Kitfo, Derek Tibs &amp; traditional Buna ceremonies.
              </p>
            </div>

            <div className="bg-white border border-hiwi-border rounded-2xl p-6 space-y-2 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-hiwi-amber block">
                Direct Booking Line
              </span>
              <p className="font-extrabold text-hiwi-dark text-base tabular-nums">
                0963 138 123 / @hiwicatering
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed tabular-nums">
                Open daily 7:00 AM – 10:00 PM; event buffet setups coordinated 24/7 across all 11 sub-cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SPECIFIC HOSPITALITY PILLARS (Consistent Icon Frames, High Contrast)   */}
      {/* ========================================================================= */}
      <section className="bg-hiwi-dark text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white text-balance">
              BUILT FOR SEAMLESS LARGE-GROUP HOSPITALITY IN ADDIS ABABA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-center max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-hiwi-gold" strokeWidth={1.75} />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-white">
                Custom Fasting &amp; Meat Ratios
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
                Separate vegetarian Yetsom cooklines alongside classic Habesha buffets ensure Orthodox fasting and
                non-fasting guests are served with zero compromise.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-hiwi-gold" strokeWidth={1.75} />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-white">
                Daily Summit Market Sourcing
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
                Pure teff injera, inspected cuts, spices prepared in-house, and fresh vegetables cooked hours before
                dispatch from our hygienic Fiyel Bet commercial kitchen.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                <Award className="w-6 h-6 text-hiwi-gold" strokeWidth={1.75} />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-white">
                1-Hour Early Heated Setup
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed max-w-sm">
                Uniformed servers arrive early to ignite heavy-duty stainless chafing warmers and organize serving lines
                before your first guests walk in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SUB-CITY COVERAGE CORRIDORS (Distinct Addis Venue Photos)              */}
      {/* ========================================================================= */}
      <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-hiwi-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
              SERVING ALL 11 SUB-CITIES IN ADDIS ABABA &amp; ADDIS ABEBA
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Whether your reception is in a Bole hotel ballroom, an Ayat tented compound, Summit, or Kazanchis, our
              thermal fleet delivers piping-hot banquets directly to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Link
              href="/locations/bole"
              className="bg-hiwi-cream border border-hiwi-border rounded-2xl p-2 group hover:shadow-card-hover block transition-shadow"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-lg bg-hiwi-dark">
                <Image
                  src="/images/venue-1.jpg"
                  alt="Catering in Bole Sub-City Addis Ababa - Atlas, Medhanialem, Rwanda & Gerji"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white text-center">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight group-hover:text-hiwi-gold transition-colors">
                    BOLE SUB-CITY
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 mt-1">
                    Medhanialem, Atlas, Gerji &amp; Reception Halls &rarr;
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/locations/ayat"
              className="bg-hiwi-cream border border-hiwi-border rounded-2xl p-2 group hover:shadow-card-hover block transition-shadow"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-lg bg-hiwi-dark">
                <Image
                  src="/images/venue-2.jpg"
                  alt="Catering in Ayat, CMC and Summit Addis Ababa"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white text-center">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight group-hover:text-hiwi-gold transition-colors">
                    AYAT, CMC &amp; SUMMIT
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 mt-1 tabular-nums">
                    10–15 Min Express Compound &amp; Tent Dispatch &rarr;
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/locations/sarbet-and-old-airport"
              className="bg-hiwi-cream border border-hiwi-border rounded-2xl p-2 group hover:shadow-card-hover block transition-shadow"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-lg bg-hiwi-dark">
                <Image
                  src="/images/venue-3.jpg"
                  alt="Catering in Old Airport, Sarbet and Kazanchis Addis Ababa"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 text-white text-center">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight group-hover:text-hiwi-gold transition-colors">
                    OLD AIRPORT &amp; SARBET
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-200 mt-1">
                    Private Estates, Embassies &amp; Outdoor Gardens &rarr;
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/locations"
              className="inline-flex items-center justify-center py-3.5 px-8 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-bold uppercase tracking-wider transition-colors shadow-warm"
            >
              EXPLORE ALL DELIVERY AREAS
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center py-3.5 px-8 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              SEE ALL CATERING SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. DIRECT EVENT CONSULTATION FORM                                         */}
      {/* ========================================================================= */}
      <section
        id="inquiry-form"
        className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-hiwi-dark"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Hiwi Catering Traditional Buna Coffee Ceremony and Buffet Service in Addis Ababa"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
        </div>

        <div className="relative z-10 max-w-xl mx-auto">
          <InquiryForm
            title="GET A CUSTOM CATERING QUOTE IN 24 HOURS"
            subtitle="Share your event date, guest count, and Addis Ababa sub-city for custom menu options and pricing."
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS                                             */}
      {/* ========================================================================= */}
      <div className="bg-white">
        <HomeFaqSection faqs={CATERING_FAQS.slice(0, 5)} />
      </div>

      {/* ========================================================================= */}
      {/* 10. CULINARY & EVENT GALLERY (6 Distinct Authentic Photographs)           */}
      {/* ========================================================================= */}
      <section className="bg-hiwi-cream py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
              BANQUET SPREADS &amp; DISH PRESENTATION
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Recent Habesha platters, fasting Beyaynetu selections, Buna coffee stations, and outdoor marquee setups
              prepared by our Summit kitchen.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              {
                src: '/images/gallery-1.jpg',
                alt: 'Authentic Habesha Doro Wat, Kitfo, Derek Tibs and Injera Platter in Addis Ababa',
              },
              {
                src: '/images/gallery-2.jpg',
                alt: 'Vibrant Ethiopian Fasting Yetsom Beyaynetu Vegetarian Platter on Teff Injera',
              },
              {
                src: '/images/gallery-3.jpg',
                alt: 'Traditional Buna Coffee Ceremony and VIP Buffet Hall Setup in Addis Ababa',
              },
              {
                src: '/images/gallery-4.jpg',
                alt: 'Evening Garden Celebration Buffet with Sambusa Appetizers and Chafing Dishes',
              },
              {
                src: '/images/gallery-5.jpg',
                alt: 'Gleaming Stainless Steel Chafing Dish Reception Buffet Spread in Addis Ababa',
              },
              {
                src: '/images/gallery-6.jpg',
                alt: 'Outdoor Marquee Tent Wedding & Banquet Table Arrangement in Addis Ababa',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-hiwi-border rounded-2xl p-1.5 group shadow-card overflow-hidden"
              >
                <div className="relative h-44 sm:h-60 md:h-64 overflow-hidden rounded-lg bg-hiwi-stone">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#inquiry-form"
              className="inline-flex items-center justify-center py-3.5 px-8 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm"
            >
              REQUEST YOUR EVENT MENU
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
