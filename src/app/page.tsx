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
    images: ['/images/wedding-catering.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering in Addis Ababa & Abeba | Hiwi Catering',
    description: 'Weddings, graduations, birthdays & corporate catering across Bole, Ayat & Addis Ababa.',
    images: ['/images/wedding-catering.jpg'],
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
    <div className="bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Johnny Burke Full-Screen Atmospheric Hero)                */}
      {/* ========================================================================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hiwi Catering Service in Addis Ababa and Addis Abeba - Wedding, Buffet, and Event Catering"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-6 pt-0 sm:pt-4">
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.12] sm:leading-[1.08] font-sans drop-shadow-md">
            CATERING SERVICE IN ADDIS ABABA &amp; ABEBA FOR WEDDINGS, EVENTS &amp; PARTIES
          </h1>

          <div className="space-y-3 max-w-xl mx-auto">
            <p className="text-xs sm:text-base md:text-lg text-gray-200 font-normal leading-relaxed max-w-md sm:max-w-xl mx-auto drop-shadow">
              Authentic Habesha banquets &amp; modern chafing buffets dispatched fresh from Summit Fiyel Bet across Bole, Ayat, CMC, and all 11 sub-cities.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 pt-0.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              <span className="px-2.5 py-1 bg-black/45 backdrop-blur-sm rounded border border-white/15 text-gray-200 shadow-sm">
                Weddings &amp; Events
              </span>
              <span className="px-2.5 py-1 bg-black/45 backdrop-blur-sm rounded border border-white/15 text-gray-200 shadow-sm">
                100% Hot Buffets
              </span>
              <span className="px-2.5 py-1 bg-black/45 backdrop-blur-sm rounded border border-hiwi-gold/40 text-hiwi-gold shadow-sm font-black">
                &ldquo;The Taste You Love!&rdquo;
              </span>
            </div>
          </div>

          <div className="pt-10 sm:pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <a
              href="#inquiry-form"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-black font-extrabold uppercase text-xs tracking-[0.2em] transition-all duration-200 shadow-lg text-center"
            >
              GET MY CUSTOM QUOTE
            </a>

            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto px-8 py-3 sm:py-3.5 border-2 border-white hover:bg-white hover:text-black text-white font-extrabold uppercase text-xs tracking-[0.2em] transition-all duration-200 shadow-lg inline-flex items-center justify-center gap-2.5 text-center"
              aria-label="Call Hiwi Catering at 0963 138 123"
            >
              <Phone className="w-4 h-4" />
              <span>0963 138 123</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS COUNTER STRIP (Johnny Burke Dark Band - 100% Verifiable Facts)  */}
      {/* ========================================================================= */}
      <section className="bg-[#1F2024] text-white py-10 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              25 - 1,500+
            </span>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              <Users className="w-4 h-4 text-hiwi-gold" />
              <span>GUEST CAPACITY PER EVENT</span>
            </div>
          </div>

          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              750 ETB
            </span>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              <Utensils className="w-4 h-4 text-hiwi-gold" />
              <span>PACKAGES STARTING PER GUEST</span>
            </div>
          </div>

          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              11
            </span>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              <MapPin className="w-4 h-4 text-hiwi-gold" />
              <span>ADDIS SUB-CITIES COVERED</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CATERING FOR EVERY OCCASION (3 Column Cards)                           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-black">
            CATERING FOR EVERY OCCASION
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Whether you&apos;re planning a wedding in Bole, a family graduation in Ayat, or a corporate workshop in Kazanchis, we bring consistent culinary excellence to every celebration across Addis Ababa &amp; Addis Abeba.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Card 1: Weddings */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/wedding-catering.jpg"
                alt="Full-Service Wedding Catering Addis Ababa - Hiwi Catering"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                WEDDINGS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                Your wedding deserves food and service that feel effortless and exceptional. As a full-service catering partner, we take care of every detail, so your day is joyful, memorable, and completely yours.
              </p>
              <Link
                href="/services/wedding-catering"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 2: Corporate Events */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/corporate-catering.jpg"
                alt="Corporate Conference and Seminar Catering Addis Ababa - Hiwi Catering"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                CORPORATE EVENTS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                Elevate your next meeting or gala with Addis Ababa&apos;s trusted corporate caterer. From executive lunches to large-scale events, we deliver exceptional cuisine, seamless service, and a polished experience.
              </p>
              <Link
                href="/services/showers-and-events"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 3: Social & Family */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/social-catering.jpg"
                alt="Birthday Party, Graduation and Social Event Catering in Addis Ababa"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                SOCIAL CELEBRATIONS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                We are a full-service catering company that believes events are about more than food—they&apos;re about creating a personalized experience, reflecting your style, and delighting your guests.
              </p>
              <Link
                href="/services/birthday-catering"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT OUR CLIENTS SAY (Interactive Client Spotlight Island)            */}
      {/* ========================================================================= */}
      <HomeTestimonials />

      {/* ========================================================================= */}
      {/* 5. A SNEAK PEEK AT OUR MENU (3 Menu Cards)                                */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-black">
            A SNEAK PEEK AT OUR MENU
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Exceptional menus for every season &amp; celebration. From intimate dinner parties to grand celebrations, our specialty menus can be fully customized to reflect your tastes and dietary preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Menu Card 1 */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/traditional-feast.jpg"
                alt="Traditional Ethiopian Habesha Feast Catering - Doro Wat, Siga Wat and Injera"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                TRADITIONAL HABESHA FEAST
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                Authentic Doro Wat with hard-boiled eggs, tender Siga Wat, rich Kitfo, freshly seasoned Tibs, and warm hand-rolled Injera cooked with heritage Ethiopian spices.
              </p>
              <Link
                href="/pricing"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                SEE PRICING &amp; MENU
              </Link>
            </div>
          </div>

          {/* Menu Card 2 */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/fasting-special.jpg"
                alt="Ethiopian Fasting Tsom Special Catering Platter - Shiro, Misir and Vegetables"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                FASTING (TSOM) SPECIALS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                A colorful and rich vegan spread: authentic slow-simmered Shiro Tegabino, spicy Misir Wat, Kik Alicha, braised Gomen, Fosolia, and crisp seasonal garden salads.
              </p>
              <Link
                href="/pricing"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                SEE PRICING &amp; MENU
              </Link>
            </div>
          </div>

          {/* Menu Card 3 */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/vip-buffet.jpg"
                alt="VIP Buffet and International Event Catering in Addis Ababa"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                VIP BUFFET &amp; DESSERTS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                Indulgent chafing dish setups featuring roasted meats, aromatic rice pilafs, Mediterranean salads, delicate canapés, and freshly prepared artisanal desserts.
              </p>
              <Link
                href="/pricing"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                SEE PRICING &amp; MENU
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5B. AEO / GEO QUICK CATERING SUMMARY (Extractable Facts & Answers)       */}
      {/* ========================================================================= */}
      <section className="bg-gray-50 border-y border-gray-200 py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-primary block mb-1.5">
              Quick Facts • Addis Ababa &amp; Addis Abeba
            </span>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-[0.12em] text-black">
              HIWI CATERING OVERVIEW AT A GLANCE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="bg-white border border-gray-200 p-5 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">
                Per-Guest Pricing (ETB)
              </span>
              <p className="font-bold text-black">750 – 1,650 ETB / Guest</p>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Classic Buffets (750 ETB), Royal Habesha Banquet (1,150 ETB), and Grand Wedding Majesty (1,650 ETB).
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-5 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">
                Kitchen Location
              </span>
              <p className="font-bold text-black">Summit Fiyel Bet (XVW2+PCH)</p>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Pinned at 8.996818, 38.851122 with fast dispatch to Ayat (10–15 mins) &amp; Bole Sub-City (15–25 mins).
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-5 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">
                Dietary Coverage
              </span>
              <p className="font-bold text-black">Fasting (Tsom) &amp; Non-Fasting</p>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Dedicated Yetsom Beyaynetu alongside Doro Wat, Kitfo, Derek Tibs &amp; Buna ceremonies.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-5 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">
                Direct Booking Line
              </span>
              <p className="font-bold text-black">0963 138 123 / @hiwicatering</p>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Open daily 7:00 AM – 10:00 PM; event buffet setups coordinated 24/7 across all 11 sub-cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY CHOOSE HIWI CATERING (Johnny Burke 3-Pillar Dark Section)           */}
      {/* ========================================================================= */}
      <section className="bg-[#1C1D21] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-white">
              WHY CHOOSE HIWI CATERING FOR YOUR NEXT EVENT
            </h2>
            <div className="w-12 h-0.5 bg-white mx-auto my-4" />
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-light">
              Quality is at heart of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-center max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                Fully Customized Experiences
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                We don&apos;t believe in one-size-fits-all catering. Instead of offering rigid packages, we dedicate our time to understanding your vision and creating a completely unique experience tailored to you.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                Local &amp; Sustainable Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                Our commitment to quality is uncompromised. We source the finest fresh organic produce, prime butchered meats, and hand-selected spices directly from trusted local farmers and markets.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                Excellence in Every Detail
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                We demand excellence in everything we do — from initial menu planning and punctual delivery to training each uniformed team member. Our full-service approach ensures peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SERVING ALL 11 SUB-CITIES (Linked Hyperlocal Corridor Cards)           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-black">
            SERVING ALL 11 SUB-CITIES IN ADDIS ABABA
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Whether you&apos;re hosting in Bole Sub-City, Ayat Condominium, Summit, or Kazanchis, our mobile catering crews deliver piping-hot buffets directly to your compound, hall, or office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Link
            href="/locations/bole"
            className="relative h-64 sm:h-72 group overflow-hidden bg-gray-900 border border-gray-200 block"
          >
            <Image
              src="/images/venue-1.jpg"
              alt="Catering in Bole Sub-City Addis Ababa - Atlas, Medhanialem, Rwanda & Gerji"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white text-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider group-hover:text-hiwi-gold transition-colors">
                BOLE SUB-CITY
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1">
                Medhanialem, Atlas, Gerji &amp; Reception Halls &rarr;
              </p>
            </div>
          </Link>

          <Link
            href="/locations/ayat"
            className="relative h-64 sm:h-72 group overflow-hidden bg-gray-900 border border-gray-200 block"
          >
            <Image
              src="/images/venue-2.jpg"
              alt="Catering in Ayat, CMC and Summit Addis Ababa"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white text-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider group-hover:text-hiwi-gold transition-colors">
                AYAT, CMC &amp; SUMMIT
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1">
                10–15 Min Express Compound &amp; Tent Dispatch &rarr;
              </p>
            </div>
          </Link>

          <Link
            href="/locations/sarbet-and-old-airport"
            className="relative h-64 sm:h-72 group overflow-hidden bg-gray-900 border border-gray-200 block"
          >
            <Image
              src="/images/venue-3.jpg"
              alt="Catering in Old Airport, Sarbet and Kazanchis Addis Ababa"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white text-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider group-hover:text-hiwi-gold transition-colors">
                OLD AIRPORT &amp; SARBET
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1">
                Private Estates, Embassies &amp; Outdoor Gardens &rarr;
              </p>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/locations"
            className="inline-block py-3 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            EXPLORE ALL DELIVERY AREAS
          </Link>
          <Link
            href="/services"
            className="inline-block py-3 px-8 border-2 border-black text-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            SEE ALL CATERING SERVICES
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. DIRECT EVENT BOOKING / CONSULTATION FORM (Johnny Burke Center Card)    */}
      {/* ========================================================================= */}
      <section id="inquiry-form" className="relative py-8 sm:py-16 px-3 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Hiwi Catering Event Reception and Dining Atmosphere in Addis Ababa"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-xl mx-auto">
          <InquiryForm
            title="READY TO MAKE YOUR NEXT EVENT PERFECT?"
            subtitle="Fill out this form and we will get in touch with you within 24 hours"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS (Interactive Client Island, Full DOM)      */}
      {/* ========================================================================= */}
      <HomeFaqSection faqs={CATERING_FAQS.slice(0, 5)} />

      {/* ========================================================================= */}
      {/* 10. OUR GALLERY (Johnny Burke Visual Photo Grid)                          */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-black">
            OUR GALLERY
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {[
            { src: '/images/gallery-1.jpg', alt: 'Authentic Habesha Stews and Delicacies Catering in Addis Ababa' },
            { src: '/images/gallery-2.jpg', alt: 'Vibrant Fasting Tsom Vegetarian Platter Catering' },
            { src: '/images/gallery-3.jpg', alt: 'Stainless Steel Chafing Dishes and Hot Buffet Catering Addis Ababa' },
            { src: '/images/gallery-4.jpg', alt: 'Celebration Dining Table Setup for Weddings and Birthdays' },
            { src: '/images/gallery-5.jpg', alt: 'Professional Uniformed Waitstaff and Buffet Attendants' },
            { src: '/images/gallery-6.jpg', alt: 'Wedding Floral Table and Banquet Presentation in Addis Ababa' },
          ].map((item, idx) => (
            <div key={idx} className="relative h-44 sm:h-60 md:h-64 overflow-hidden bg-gray-100 group border border-gray-200">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#inquiry-form"
            className="inline-block py-3 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            REQUEST YOUR EVENT MENU
          </a>
        </div>
      </section>
    </div>
  );
}
