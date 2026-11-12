import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Send,
  Check,
  ShieldCheck,
  Phone,
  ChevronRight,
  Users,
  Utensils,
} from 'lucide-react';
import { CATERING_PACKAGES } from '@/data/packages';
import InquiryForm from '@/components/InquiryForm';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: {
    absolute: 'Catering Prices & Packages Addis Ababa | Hiwi Catering',
  },
  description:
    'Transparent per-person catering prices in Addis Ababa & Abeba starting at 750 ETB. Hot Habesha feasts & buffets across Bole, Ayat & Summit. Call 0963 138 123.',
  alternates: {
    canonical: 'https://hiwicatering.com/pricing',
  },
  keywords: [
    'catering prices Addis Ababa',
    'catering cost per person Addis Ababa',
    'catering packages Addis Ababa',
    'catering in addis abeba',
    'wedding catering prices Addis Ababa',
    'birthday catering prices Ethiopia',
    'Habesha catering menu prices',
    'catering price per plate Addis Ababa',
    'የምግብ ዝግጅት ዋጋ',
    'የሰርግ ምግብ ዋጋ አዲስ አበባ',
  ],
  openGraph: {
    title: 'Catering Prices & Packages Addis Ababa | Hiwi Catering',
    description:
      'Honest, transparent catering rates from 750 ETB/guest across Bole, Ayat, Summit & Addis Ababa.',
    url: 'https://hiwicatering.com/pricing',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: ['/images/corporate-catering.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering Prices & Packages Addis Ababa | Hiwi Catering',
    description: 'Per-person catering packages starting at 750 ETB across Addis Ababa & Addis Abeba.',
    images: ['/images/corporate-catering.jpg'],
  },
};

const PRICING_FAQS = [
  {
    question: 'How are catering prices calculated in Addis Ababa with Hiwi Catering?',
    answer:
      'Our catering prices are calculated on a transparent per-person (per plate) basis in Ethiopian Birr (ETB), multiplied by your confirmed guest count. Classic celebration buffets start at 750 ETB/person, Royal Habesha banquets are 1,150 ETB/person, and full Grand Wedding majesty tiers are 1,650 ETB/person. All packages already include professional food preparation, stainless steel chafing dish warmers, serving utensils, buffet attendants, and punctual setup across Addis Ababa with no hidden service charges.',
    category: 'Pricing',
  },
  {
    question: 'What is included in every Hiwi Catering package?',
    answer:
      'Every package includes fresh food cooked on the day of the event using high-grade local meat, authentic Ethiopian spices, and teff injera. We provide heavy-duty stainless steel bain-marie warmers with food-safe fuel cells, serving utensils, buffet table decor, polite uniformed attendants to manage line replenishment, and arrival at your venue 1 hour prior to guest mealtime.',
    category: 'Inclusions',
  },
  {
    question: 'What is the minimum guest count required to book?',
    answer:
      'Our Classic Celebration Tier has a minimum guest requirement of 40 guests, the Royal Habesha Banquet requires 50 guests, and the Grand Wedding Majesty Tier requires 100 guests. If you are hosting a smaller intimate gathering (under 40 guests), we can prepare customized bulk Agelgil trays and takeaway banquet warmers - contact us on Telegram for a custom arrangement.',
    category: 'Guests',
  },
  {
    question: 'Are there transportation or delivery fees for locations outside Summit?',
    answer:
      'Standard delivery, logistics, and on-site setup across all 11 sub-cities of Addis Ababa (including Bole, CMC, Ayat, Kazanchis, Megenagna, Sarbet, Old Airport, Piassa, and Lebu) are factored into our service packages. For events hosted just outside the city perimeter (such as Bishoftu, Sebeta, Burayu, or Legetafo), a modest transport fuel surcharge is calculated transparently based on distance.',
    category: 'Delivery',
  },
  {
    question: 'Can we substitute dishes or customize items between package tiers?',
    answer:
      "Absolutely! We customize menus to match your family's culinary traditions. You can substitute equal-tier dishes (for instance, adjusting spice levels in Doro Wat, selecting Lamb Tibs instead of Beef Tibs, or adding specialty fasting wats) at no extra charge. If you wish to add luxury specialty items like whole roasted sheep, extra Kitfo trays, or specialty fish dishes, we provide clear itemized add-on pricing.",
    category: 'Customization',
  },
  {
    question: 'How do you handle Ethiopian Orthodox Fasting (Yetsom) days?',
    answer:
      'We adhere strictly to Ethiopian Orthodox Tewahedo fasting rules. On Wednesdays, Fridays, and throughout major fasting seasons (Abiy Tsom / Great Lent, Filseta, etc.), our kitchen prepares a sumptuous 100% vegan Yetsom Beyaynetu - featuring slow-simmered Shiro, Misir Wat, Kik Alicha, seasoned Gomen, Timatim Fitfit, and fresh salads - prepared using dedicated non-dairy/non-meat utensils at no additional surcharge.',
    category: 'Dietary',
  },
  {
    question: 'What is your deposit policy and payment schedule?',
    answer:
      'To secure your date on our catering calendar, an initial deposit of 30% to 50% is required upon agreement. The remaining balance is payable on or just prior to the event date. We accept direct bank transfers (Commercial Bank of Ethiopia, Telebirr, Awash Bank, Dashen Bank, etc.) or cash. We recommend booking major weddings and large events 3 to 6 weeks ahead.',
    category: 'Payment',
  },
  {
    question: 'Can we have a private food tasting before confirming our wedding or banquet?',
    answer:
      'Yes! For wedding banquets and large events exceeding 100 guests, we invite the host family, bride, and groom to our Summit Fiyel Bet kitchen for a complimentary food tasting session. You can taste our Doro Wat, Kitfo, Tibs, and rice pilaf to adjust seasonings to your exact liking.',
    category: 'Tasting',
  },
];

const PRICING_ADDONS = [
  {
    title: 'Traditional Ethiopian Buna Ceremony',
    amharicTitle: 'ባህላዊ የቡና ስነ-ስርዓት',
    price: '3,500 ETB',
    priceUnit: 'flat per event',
    description:
      'Authentic Jebena coffee ceremony with incense (Itan), freshly roasted beans, porcelain cups (Finjal), fresh ketema grass carpet, and popcorn (Fendisha).',
    idealFor: 'Weddings, Melse & VIP family receptions',
  },
  {
    title: 'VIP Agelgil Presentation Table',
    amharicTitle: 'የአገልግል ማዕድ ዝግጅት',
    price: '2,500 ETB',
    priceUnit: 'flat setup',
    description:
      'Artisanal woven Ethiopian Agelgil centerpieces lined for the bride/groom or elder tables, creating traditional hospitality warmth.',
    idealFor: 'Melse celebrations, engagements & family elders',
  },
  {
    title: 'Additional Uniformed Service Attendant',
    amharicTitle: 'ተጨማሪ አስተናጋጅ',
    price: '1,200 ETB',
    priceUnit: 'per server',
    description:
      'Dedicated polite attendant for table-side drink service, clearing plates, or tending elder tables.',
    idealFor: 'Gatherings exceeding 150 guests',
  },
  {
    title: 'Crispy Appetizer & Sambusa Station',
    amharicTitle: 'የሳምቡሳ እና አፔታይዘር ዝግጅት',
    price: '120 ETB',
    priceUnit: 'per guest',
    description:
      'Golden beef and spiced lentil sambusas paired with Awaze dipping sauce as welcome snacks before the buffet opens.',
    idealFor: 'Cocktail hours, showers & seminars',
  },
  {
    title: 'Fresh Fruit & Dessert Display',
    amharicTitle: 'የፍራፍሬ እና ጣፋጭ ማዕድ',
    price: '180 ETB',
    priceUnit: 'per guest',
    description:
      'Seasonal sliced Ethiopian fruits (papaya, pineapple, watermelon, bananas) paired with bite-sized sweet pastries.',
    idealFor: 'Graduations, birthday parties & galas',
  },
  {
    title: 'Custom Beverage & Ambo Water Service',
    amharicTitle: 'የመጠጥ እና ውሀ አቅርቦት',
    price: 'Custom',
    priceUnit: 'per crate selection',
    description:
      'Chilled bottled still water, sparkling Ambo water, assorted soft drinks, and natural juices served with cups on ice.',
    idealFor: 'All event sizes across Addis Ababa',
  },
];

export default function PricingPage() {
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
        name: 'Pricing & Packages',
        item: 'https://hiwicatering.com/pricing',
      },
    ],
  };

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Hiwi Catering Packages Addis Ababa',
    itemListElement: CATERING_PACKAGES.map((pkg, idx) => ({
      '@type': 'Offer',
      position: idx + 1,
      name: pkg.name,
      description: pkg.description,
      price: pkg.pricePerPerson,
      priceCurrency: 'ETB',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: pkg.pricePerPerson,
        priceCurrency: 'ETB',
        unitText: 'per person',
      },
      itemOffered: {
        '@type': 'Service',
        name: pkg.name,
        provider: {
          '@type': 'FoodEstablishment',
          '@id': 'https://hiwicatering.com/#business',
          name: 'Hiwi Catering Services',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Summit Fiyel Bet Area (Plus Code XVW2+PCH)',
            addressLocality: 'Addis Ababa',
            addressCountry: 'ET',
          },
        },
      },
    })),
  };

  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Hiwi Catering Buffet & Banquet Menu (Addis Ababa & Addis Abeba)',
    url: 'https://hiwicatering.com/pricing',
    inLanguage: ['en', 'am'],
    hasMenuSection: CATERING_PACKAGES.map((pkg) => ({
      '@type': 'MenuSection',
      name: `${pkg.name} (${pkg.pricePerPerson} ETB/person)`,
      description: pkg.description,
      hasMenuItem: pkg.dishes.map((dish) => ({
        '@type': 'MenuItem',
        name: dish,
        offers: {
          '@type': 'Offer',
          price: pkg.pricePerPerson,
          priceCurrency: 'ETB',
        },
      })),
    })),
  };

  return (
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-100 selection:text-hiwi-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-hiwi-stone border-b border-hiwi-border py-3 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider font-medium">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">Pricing &amp; Packages</span>
        </div>
      </div>

      {/* Pricing Hero */}
      <section className="py-14 sm:py-20 bg-hiwi-cream border-b border-hiwi-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-hiwi-dark leading-tight text-balance">
            CATERING PACKAGES &amp; PRICING IN ADDIS ABABA
          </h1>

          <p className="text-base text-stone-700 leading-relaxed max-w-3xl mx-auto">
            Transparent per-person rates in Ethiopian Birr (ETB). Every booking includes cooking from our Summit Fiyel
            Bet commercial kitchen, heavy-duty stainless chafing warmers, uniformed attendants, and setup across all{' '}
            <span className="tabular-nums font-semibold">11</span> sub-cities.
          </p>

          {/* 4 Stat Tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
            <div className="p-4 bg-white border border-hiwi-border rounded-xl shadow-card">
              <span className="text-2xl sm:text-3xl font-black text-hiwi-primary block tabular-nums">750 ETB</span>
              <span className="text-xs text-stone-600 font-medium block mt-1">Starting Rate / Person</span>
            </div>
            <div className="p-4 bg-white border border-hiwi-border rounded-xl shadow-card">
              <span className="text-2xl sm:text-3xl font-black text-hiwi-dark block tabular-nums">40 – 1,500+</span>
              <span className="text-xs text-stone-600 font-medium block mt-1">Guest Capacity Range</span>
            </div>
            <div className="p-4 bg-white border border-hiwi-border rounded-xl shadow-card">
              <span className="text-2xl sm:text-3xl font-black text-hiwi-dark block tabular-nums">100% Hot</span>
              <span className="text-xs text-stone-600 font-medium block mt-1">Stainless Bain-Marie</span>
            </div>
            <div className="p-4 bg-white border border-hiwi-border rounded-xl shadow-card">
              <span className="text-2xl sm:text-3xl font-black text-hiwi-dark block tabular-nums">All 11</span>
              <span className="text-xs text-stone-600 font-medium block mt-1">Sub-Cities Covered</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="#inquiry"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg bg-hiwi-primary hover:bg-hiwi-hover text-white text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm text-center inline-flex items-center justify-center"
            >
              Get Your Custom Quote
            </a>

            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-7 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-bold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-2 tabular-nums"
            >
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              <span>Call: 0963 138 123</span>
            </a>

            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-7 rounded-lg border border-stone-300 bg-white text-hiwi-dark hover:border-hiwi-primary hover:text-hiwi-primary text-xs font-bold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" strokeWidth={1.75} />
              <span>Telegram: @hiwicatering</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main 3 Package Tiers (Featured Popular Tier Enlarged & Accented) */}
      <section className="py-16 sm:py-20 bg-white" id="pricing-cards" aria-labelledby="packages-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
            <h2
              id="packages-title"
              className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance"
            >
              SELECT YOUR CATERING TIER
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Every tier provides freshly prepared Habesha &amp; buffet food, heated serving lines, and attendants.
              Equal-tier substitutions are always flexible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {CATERING_PACKAGES.map((pkg) => {
              const isFeatured = pkg.badge === 'Most Popular';
              return (
                <div
                  key={pkg.id}
                  id={pkg.id}
                  className={`relative rounded-2xl flex flex-col justify-between transition-all duration-200 p-7 sm:p-8 ${
                    isFeatured
                      ? 'border-2 border-hiwi-primary bg-gradient-to-b from-white to-hiwi-cream shadow-warm-lg md:-translate-y-2 md:scale-[1.03] z-10'
                      : 'border border-hiwi-border bg-white shadow-card hover:border-stone-400'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-hiwi-primary text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-warm uppercase tracking-wider">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-hiwi-amber tracking-wide">{pkg.amharicName}</span>
                      <span className="text-xs font-bold text-stone-700 tabular-nums">
                        Min. {pkg.minGuests} Guests
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-hiwi-dark">
                      {pkg.name}
                    </h3>

                    <p className="mt-2 text-sm text-stone-600 leading-relaxed">{pkg.description}</p>

                    <div className="mt-6 mb-6 pb-6 border-b border-hiwi-border">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-600">From</span>
                        <span
                          className={`text-4xl sm:text-5xl font-black tracking-tight tabular-nums ${
                            isFeatured ? 'text-hiwi-primary' : 'text-hiwi-dark'
                          }`}
                        >
                          {pkg.pricePerPerson.toLocaleString()}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-black uppercase text-hiwi-dark">ETB</span>
                          <span className="text-xs text-stone-600">/ person</span>
                        </div>
                      </div>
                      <div className="text-xs text-stone-600 mt-2.5 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-hiwi-primary shrink-0" strokeWidth={1.75} />
                        <span>
                          Best for: <strong className="font-semibold text-hiwi-dark">{pkg.recommendedFor}</strong>
                        </span>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <div className="text-xs font-bold text-hiwi-dark uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Utensils className="w-3.5 h-3.5 text-hiwi-primary" strokeWidth={1.75} />
                          <span>Menu Highlights:</span>
                        </div>
                        <ul className="space-y-2 text-sm text-stone-700">
                          {pkg.dishes.map((dish, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-hiwi-primary shrink-0 mt-2"
                                aria-hidden="true"
                              />
                              <span className="leading-snug">{dish}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-hiwi-border">
                        <div className="text-xs font-bold text-hiwi-dark uppercase tracking-wider mb-3 flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-hiwi-primary" strokeWidth={1.75} />
                          <span>Equipment &amp; Staff:</span>
                        </div>
                        <ul className="space-y-2 text-sm text-stone-700">
                          {pkg.includes.map((inc, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-0.5" strokeWidth={2} />
                              <span className="leading-snug">{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions (outer rounded-2xl p-8 -> inner rounded-xl button) */}
                  <div className="mt-8 pt-6 border-t border-hiwi-border flex flex-col gap-3">
                    <Link
                      href="/inquiry"
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-extrabold text-center uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        isFeatured
                          ? 'bg-hiwi-primary text-white hover:bg-hiwi-hover shadow-warm'
                          : 'bg-hiwi-dark text-white hover:bg-stone-800'
                      }`}
                    >
                      <span>Inquire About {pkg.name.split(' ')[0]}</span>
                    </Link>

                    <a
                      href={`https://t.me/hiwicatering?text=${encodeURIComponent(
                        `Hello Hiwi Catering! I am inquiring about the ${pkg.name} (${pkg.pricePerPerson} ETB/person). Could you tell me more about availability and menu customization?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 text-xs text-stone-700 hover:text-hiwi-primary transition-colors py-1 font-bold"
                    >
                      <Send className="w-3.5 h-3.5 text-hiwi-primary" strokeWidth={1.75} />
                      <span>Chat on Telegram</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fasting & Custom Menu Banner (outer rounded-2xl p-8 -> rounded-lg actions) */}
          <div className="mt-14 p-6 sm:p-10 bg-hiwi-dark text-white rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-hiwi-gold block">
                Ethiopian Orthodox Fasting
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                WEDNESDAY, FRIDAY &amp; MAJOR FASTING SEASONS
              </h3>
              <p className="text-sm text-stone-300 max-w-2xl leading-relaxed">
                We prepare dedicated 100% plant-based Yetsom Beyaynetu buffets (gourmet Shiro, slow-cooked Misir Wat,
                Kik Alicha, Tikil Gomen, Timatim Fitfit) cooked with separate vegan cookware and zero butter or dairy—at
                no extra surcharge.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/inquiry"
                className="py-3 px-6 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm text-center inline-flex items-center justify-center"
              >
                Inquire For Fasting Event
              </Link>
              <a
                href="https://t.me/hiwicatering"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-lg border border-white/35 hover:border-white text-white text-xs font-bold uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>Telegram Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="py-16 sm:py-20 bg-hiwi-stone border-y border-hiwi-border" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
              COMPARE PACKAGE INCLUSIONS
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              See side-by-side differences in menu dishes, chafing equipment, staffing levels, and diningware.
            </p>
          </div>

          <div className="bg-white border border-hiwi-border rounded-2xl overflow-hidden shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px] tabular-nums">
                <thead>
                  <tr className="border-b border-hiwi-border bg-hiwi-dark text-white">
                    <th className="py-4 px-6 text-xs font-extrabold uppercase tracking-wider w-2/5">
                      Service / Feature
                    </th>
                    <th className="py-4 px-6 text-center w-1/5">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                        Classic Celebration
                      </div>
                      <div className="text-xs text-stone-300 mt-1">750 ETB / person</div>
                    </th>
                    <th className="py-4 px-6 text-center w-1/5 bg-hiwi-charcoal border-x border-white/10">
                      <span className="inline-block bg-hiwi-primary text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1">
                        POPULAR
                      </span>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-white">Royal Habesha</div>
                      <div className="text-xs font-bold text-hiwi-gold mt-1">1,150 ETB / person</div>
                    </th>
                    <th className="py-4 px-6 text-center w-1/5">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-white">Grand Wedding</div>
                      <div className="text-xs text-stone-300 mt-1">1,650 ETB / person</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hiwi-border text-xs sm:text-sm text-stone-700">
                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Minimum Guest Count</td>
                    <td className="py-4 px-6 text-center font-medium">40 Guests</td>
                    <td className="py-4 px-6 text-center font-extrabold text-hiwi-dark bg-hiwi-cream border-x border-hiwi-border">
                      50 Guests
                    </td>
                    <td className="py-4 px-6 text-center font-medium">100 Guests</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Best Suited For</td>
                    <td className="py-4 px-6 text-center text-stone-600">Birthdays, reunions, small showers</td>
                    <td className="py-4 px-6 text-center text-hiwi-dark font-semibold bg-hiwi-cream border-x border-hiwi-border">
                      Graduations, engagements, family banquets
                    </td>
                    <td className="py-4 px-6 text-center text-hiwi-dark font-medium">
                      Grand weddings, traditional Melse &amp; VIP galas
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Hot Buffet Warmers</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 text-hiwi-dark font-medium">
                        <Check className="w-4 h-4 text-hiwi-primary" strokeWidth={2} /> Stainless Chafing Dishes
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center bg-hiwi-cream border-x border-hiwi-border">
                      <span className="inline-flex items-center gap-1.5 text-hiwi-dark font-bold">
                        <Check className="w-4 h-4 text-hiwi-primary" strokeWidth={2} /> Deluxe Stainless Chafing
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 text-hiwi-dark font-bold">
                        <Check className="w-4 h-4 text-hiwi-primary" strokeWidth={2} /> VIP Multi-Line Bain-Marie
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Habesha Meat Dishes</td>
                    <td className="py-4 px-6 text-center">Beef Tibs or Siga Wat</td>
                    <td className="py-4 px-6 text-center bg-hiwi-cream border-x border-hiwi-border font-semibold text-hiwi-dark">
                      Doro Wat + Derek Tibs
                    </td>
                    <td className="py-4 px-6 text-center font-semibold text-hiwi-dark">
                      Grand Doro Wat + Prime Derek Tibs + Siga Wat
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Authentic Gurage Kitfo (with Ayib)</td>
                    <td className="py-4 px-6 text-center text-stone-600">Available as Add-on</td>
                    <td className="py-4 px-6 text-center bg-hiwi-cream border-x border-hiwi-border">
                      <span className="inline-flex items-center gap-1.5 text-hiwi-dark font-bold">
                        <Check className="w-4 h-4 text-hiwi-primary" strokeWidth={2} /> Included
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 text-hiwi-dark font-bold">
                        <Check className="w-4 h-4 text-hiwi-primary" strokeWidth={2} /> Premium Gurage Kitfo
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Fasting Beyaynetu Varieties</td>
                    <td className="py-4 px-6 text-center">3 Varieties (Shiro, Misir, Salad)</td>
                    <td className="py-4 px-6 text-center bg-hiwi-cream border-x border-hiwi-border font-semibold text-hiwi-dark">
                      4 Varieties + Injera
                    </td>
                    <td className="py-4 px-6 text-center font-semibold text-hiwi-dark">
                      5 Gourmet Varieties + Injera
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Diningware &amp; Cutlery</td>
                    <td className="py-4 px-6 text-center text-stone-600">Heavy-duty disposable plates</td>
                    <td className="py-4 px-6 text-center bg-hiwi-cream border-x border-hiwi-border font-semibold text-hiwi-dark">
                      Ceramic plates &amp; metal cutlery
                    </td>
                    <td className="py-4 px-6 text-center font-semibold text-hiwi-dark">
                      VIP Ceramic plates, metallic cutlery &amp; napkins
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Traditional Agelgil Setup</td>
                    <td className="py-4 px-6 text-center text-stone-600">Available as Add-on</td>
                    <td className="py-4 px-6 text-center bg-hiwi-cream border-x border-hiwi-border">
                      <span className="inline-flex items-center gap-1.5 text-hiwi-dark font-semibold">
                        <Check className="w-4 h-4 text-hiwi-primary" strokeWidth={2} /> Optional Setup
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 text-hiwi-dark font-semibold">
                        <Check className="w-4 h-4 text-hiwi-primary" strokeWidth={2} /> Full VIP Centerpieces
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Uniformed Service Staff</td>
                    <td className="py-4 px-6 text-center">1 Buffet Assistant</td>
                    <td className="py-4 px-6 text-center bg-hiwi-cream border-x border-hiwi-border font-semibold text-hiwi-dark">
                      2 Uniformed Attendants
                    </td>
                    <td className="py-4 px-6 text-center font-semibold text-hiwi-dark">
                      Head Coordinator + 4+ Servers
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Traditional Coffee (Buna) Ceremony</td>
                    <td className="py-4 px-6 text-center text-stone-600">Available as Add-on</td>
                    <td className="py-4 px-6 text-center bg-hiwi-cream border-x border-hiwi-border">
                      <span className="inline-flex items-center gap-1.5 text-hiwi-dark font-semibold">
                        <Check className="w-4 h-4 text-hiwi-primary" strokeWidth={2} /> Included
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1.5 text-hiwi-dark font-semibold">
                        <Check className="w-4 h-4 text-hiwi-primary" strokeWidth={2} /> Deluxe Buna Ceremony
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold text-hiwi-dark">Punctual On-Site Setup</td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-4 h-4 text-hiwi-primary mx-auto" strokeWidth={2} />
                    </td>
                    <td className="py-4 px-6 text-center bg-hiwi-cream border-x border-hiwi-border">
                      <Check className="w-4 h-4 text-hiwi-primary mx-auto" strokeWidth={2} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-4 h-4 text-hiwi-primary mx-auto" strokeWidth={2} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Add-ons & Ceremonies */}
      <section className="py-16 sm:py-20 bg-white" id="addons">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
              POPULAR ADD-ONS &amp; CEREMONIES
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Enhance any package tier with live Jebena coffee service, extra attendants, or appetizer stations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRICING_ADDONS.map((addon, index) => (
              <div
                key={index}
                className="bg-hiwi-cream p-6 rounded-2xl border border-hiwi-border hover:border-hiwi-primary transition-all duration-200 flex flex-col justify-between shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-hiwi-amber tracking-wide">{addon.amharicTitle}</span>
                    <span className="text-sm font-black text-hiwi-primary tabular-nums">{addon.price}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-hiwi-dark">{addon.title}</h3>

                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{addon.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-hiwi-border flex items-center justify-between gap-2 text-xs text-stone-600">
                  <span>{addon.idealFor}</span>
                  <span className="font-bold text-hiwi-dark shrink-0">{addon.priceUnit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 sm:p-8 bg-hiwi-dark text-white rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-base font-extrabold uppercase tracking-tight text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-hiwi-gold" strokeWidth={1.75} />
                <span>Specialized Habesha Requests &amp; Whole Roasted Sheep</span>
              </h4>
              <p className="text-sm text-stone-300">
                We also accommodate custom whole roasted lamb (Mule Tibs), Fish Dullet, and international station requests.
              </p>
            </div>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 py-3 px-6 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-warm"
            >
              <Send className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Telegram Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 sm:py-20 bg-hiwi-stone border-t border-hiwi-border" id="inquiry">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <InquiryForm
            title="REQUEST A TAILORED PACKAGE QUOTE"
            subtitle="Fill out this quick form and our event team will contact you within 24 hours."
          />
        </div>
      </section>

      {/* Pricing FAQs */}
      <FaqAccordion
        faqs={PRICING_FAQS}
        title="Frequently Asked Questions About Catering Prices in Addis Ababa"
        subtitle="Clear answers on deposit terms, menu tastings, Orthodox fasting rules, and city-wide delivery."
      />

      {/* Bottom CTA Banner */}
      <section className="bg-hiwi-dark text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight text-balance">
            BOOK YOUR DATE OR MENU TASTING AT OUR SUMMIT KITCHEN
          </h2>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Lock in transparent per-person ETB pricing for weddings, graduations, or corporate events across Addis Ababa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/inquiry"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm"
            >
              Submit Event Inquiry
            </Link>

            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg border-2 border-white text-white hover:bg-white hover:text-hiwi-dark text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 tabular-nums"
            >
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              <span>Call: 0963 138 123</span>
            </a>

            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg border border-white/35 text-stone-200 hover:text-white hover:border-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
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
