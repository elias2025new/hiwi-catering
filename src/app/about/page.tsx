import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  MapPin, 
  PhoneCall, 
  Send, 
  ShieldCheck, 
  Award, 
  Clock, 
  Users, 
  Sparkles, 
  Utensils, 
  CheckCircle2,
  Building2,
  Star
} from 'lucide-react';
import { ADDIS_ABABA_LOCATIONS } from '@/data/services';

export const metadata: Metadata = {
  title: {
    absolute: 'About Hiwi Catering Addis Ababa | Summit Fiyel Bet Kitchen',
  },
  description: 'Learn about Hiwi Catering in Addis Ababa. Commercial prep kitchen in Summit Fiyel Bet. Dedicated to authentic Habesha banquets, hot buffets & citywide service.',
  alternates: {
    canonical: 'https://hiwicatering.com/about',
  },
  keywords: [
    'about Hiwi Catering',
    'catering company Addis Ababa',
    'catering Summit Fiyel Bet',
    'best catering team Addis Ababa',
    'Ethiopian catering company',
    'ስለ ሂዊ ኬተሪንግ'
  ],
  openGraph: {
    title: 'About Hiwi Catering Addis Ababa | Summit Fiyel Bet Kitchen',
    description: 'Learn about Hiwi Catering in Addis Ababa. Commercial prep kitchen in Summit Fiyel Bet. Authentic Habesha banquets and hot chafing buffets.',
    url: 'https://hiwicatering.com/about',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/corporate-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'About Hiwi Catering Services - Summit Fiyel Bet, Addis Ababa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Hiwi Catering Addis Ababa | Summit Fiyel Bet Kitchen',
    description: 'Learn about Hiwi Catering in Addis Ababa. Commercial prep kitchen in Summit Fiyel Bet.',
    images: ['/images/corporate-catering.jpg']
  }
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
        item: 'https://hiwicatering.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: 'https://hiwicatering.com/about'
      }
    ]
  };

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Hiwi Catering Services',
    description: 'Learn about Hiwi Catering Services, premier Ethiopian catering based in Summit Fiyel Bet, Addis Ababa.',
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
        addressCountry: 'ET'
      }
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider text-[11px] font-medium">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-black font-bold">About Us</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Johnny Burke 2-Column Story & Framed Image              */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block mb-2">
                Our Story &amp; Hospitality
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-black leading-tight">
                CRAFTING UNFORGETTABLE FEASTS IN ADDIS ABABA
              </h1>
              <div className="w-12 h-0.5 bg-black my-4" />
            </div>

            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Hiwi Catering was founded with a singular dedication: to celebrate life&apos;s most meaningful milestones with exceptional food and effortless hospitality. Headquartered in <strong>Summit Fiyel Bet</strong>, our commercial kitchen prepares authentic Habesha banquets and contemporary buffets crafted with unmatched pride, hygiene, and generous portions.
            </p>

            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              From grand traditional weddings with 1,500+ guests to university graduations, executive corporate conferences, and lively birthday parties, our mission remains steadfast: piping hot food, time-honored Ethiopian culinary authenticity, and attentive service that lets hosts enjoy their celebration as honored guests.
            </p>

            {/* Johnny Burke Boxed Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-y border-gray-200 py-4 text-center sm:text-left">
              <div>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                  Summit HQ
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                  Fiyel Bet Kitchen
                </span>
              </div>
              <div className="border-x border-gray-200 px-2 sm:px-4">
                <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                  All 11
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                  Sub-Cities Served
                </span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                  7 Days
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                  24/7 Setup Dispatch
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:+251963138123"
                className="py-3.5 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call: 0963 138 123</span>
              </a>

              <Link
                href="/services"
                className="py-3.5 px-8 border-2 border-black text-black hover:bg-black hover:text-white text-xs font-extrabold uppercase tracking-[0.2em] transition-all text-center inline-flex items-center justify-center gap-2"
              >
                <span>View Our Services</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Sharp Editorial Framed Catering Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white border border-gray-200 p-3 sm:p-4 shadow-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src="/images/corporate-catering.jpg"
                  alt="Hiwi Catering Hot Buffet and Chafing Dish Banquet Setup Addis Ababa"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
              <div className="p-3 bg-black text-white text-center mt-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white block">
                  Authentic Habesha Hospitality
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 block mt-0.5">
                  Summit Fiyel Bet • Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS COUNTER STRIP (Johnny Burke Dark Band)                           */}
      {/* ========================================================================= */}
      <section className="bg-[#1F2024] text-white py-10 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              500+
            </span>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              <Users className="w-4 h-4 text-hiwi-gold" />
              <span>EVENTS CATERED</span>
            </div>
          </div>

          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              100%
            </span>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              <Star className="w-4 h-4 text-hiwi-gold fill-hiwi-gold" />
              <span>PIPING HOT BUFFETS</span>
            </div>
          </div>

          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              11
            </span>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              <MapPin className="w-4 h-4 text-hiwi-gold" />
              <span>SUB-CITIES COVERED</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CULINARY STANDARDS: Johnny Burke 3-Pillar Dark Section                */}
      {/* ========================================================================= */}
      <section className="bg-[#1C1D21] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-white">
              OUR CULINARY STANDARDS &amp; PROMISE
            </h2>
            <div className="w-12 h-0.5 bg-white mx-auto my-4" />
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-light">
              Quality and food safety at the heart of every banquet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-center max-w-6xl mx-auto">
            
            {/* Pillar 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                Hygienic Commercial Kitchen
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                Food safety is our primary pillar. Our central prep facility in Summit adheres to strict hygiene standards, sanitized stainless steel food prep equipment, rigorous temperature controls, and fresh daily sourcing.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                100% Piping Hot Delivery
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                No lukewarm buffet trays. We transport all food in heavy-duty insulated thermal carriers and transfer them immediately into commercial stainless steel bain-marie warmers so every guest enjoys fresh, piping hot food.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                Authentic Habesha Recipes
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                Slow-simmered Berbere Doro Wat with organic chicken and eggs, prime Gurage Kitfo prepared with spiced clarified butter (niter kibbeh), aromatic rice pilafs, and rich fasting Beyaynetu crafted from authentic heritage recipes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DISPATCH NETWORK & SERVICE AREAS (Clean White Grid)                     */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block mb-2">
            Addis Ababa Delivery Radius
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-black">
            SERVING EVERY CORNER OF ADDIS ABABA
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            From Summit Fiyel Bet, our mobile catering vans dispatch commercial warmers, fresh injera, and culinary staff seamlessly across:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ADDIS_ABABA_LOCATIONS.map((loc) => (
            <div 
              key={loc.name}
              className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-black shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                  {loc.name}
                </h3>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                {loc.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block py-3.5 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            VISIT OUR SUMMIT KITCHEN &rarr;
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BOTTOM CTA BANNER: Matches Homepage & Contact                          */}
      {/* ========================================================================= */}
      <section className="bg-black text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-hiwi-gold block">
              The Taste You Love!
            </span>
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white">
              Ready to Plan Your Next Celebration?
            </h2>
            <p className="text-xs text-gray-400 font-light max-w-xl">
              Contact our team today to discuss menus, schedule a wedding tasting consultation, or receive a fast custom quote.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/inquiry"
              className="py-3 px-6 bg-hiwi-primary hover:bg-hiwi-hover text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors"
            >
              Get Custom Quote
            </Link>
            <a
              href="tel:+251963138123"
              className="py-3 px-6 border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>0963 138 123</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
