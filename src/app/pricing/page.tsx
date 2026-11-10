import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Sparkles, 
  Send, 
  Check, 
  X,
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Flame, 
  Users, 
  HeartHandshake, 
  Coffee, 
  Utensils, 
  Award, 
  CheckCircle2,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { CATERING_PACKAGES } from '@/data/packages';
import InquiryForm from '@/components/InquiryForm';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Catering Packages & Pricing Addis Ababa | Hiwi Catering Services',
  description: 'Explore transparent per-person catering prices in Addis Ababa. Packages starting from 750 ETB/person for birthdays, graduations, and luxury weddings. Fresh Habesha banquets, stainless chafing warmers & professional staff across all sub-cities.',
  keywords: [
    'catering prices Addis Ababa',
    'catering cost per person Addis Ababa',
    'catering packages Addis Ababa',
    'wedding catering prices Addis Ababa',
    'birthday catering prices Ethiopia',
    'Habesha catering menu prices',
    'catering price per plate Addis Ababa',
    'የምግብ ዝግጅት ዋጋ',
    'የሰርግ ምግብ ዋጋ አዲስ አበባ'
  ],
  openGraph: {
    title: 'Catering Packages & Pricing in Addis Ababa | Hiwi Catering',
    description: 'Honest, transparent catering rates from 750 ETB/guest. Authentic Habesha feasts, hot stainless buffet stations, and dedicated service staff across Addis Ababa.',
    url: 'https://hiwicatering.com/pricing',
    images: ['/images/corporate-catering.jpg']
  }
};

const PRICING_FAQS = [
  {
    question: "How are catering prices calculated in Addis Ababa with Hiwi Catering?",
    answer: "Our catering prices are calculated on a transparent per-person (per plate) basis in Ethiopian Birr (ETB), multiplied by your confirmed guest count. Classic celebration buffets start at 750 ETB/person, Royal Habesha banquets are 1,150 ETB/person, and full Grand Wedding majesty tiers are 1,650 ETB/person. All packages already include professional food preparation, stainless steel chafing dish warmers, serving utensils, buffet attendants, and punctual setup across Addis Ababa with no hidden service charges.",
    category: "Pricing"
  },
  {
    question: "What is included in every Hiwi Catering package?",
    answer: "Every package includes fresh food cooked on the day of the event using high-grade local meat, authentic Ethiopian spices, and teff injera. We provide heavy-duty stainless steel bain-marie warmers with food-safe fuel cells, serving utensils, buffet table decor, polite uniformed attendants to manage line replenishment, and arrival at your venue 1 hour prior to guest mealtime.",
    category: "Inclusions"
  },
  {
    question: "What is the minimum guest count required to book?",
    answer: "Our Classic Celebration Tier has a minimum guest requirement of 40 guests, the Royal Habesha Banquet requires 50 guests, and the Grand Wedding Majesty Tier requires 100 guests. If you are hosting a smaller intimate gathering (under 40 guests), we can prepare customized bulk Agelgil trays and takeaway banquet warmers - contact us on Telegram for a custom arrangement.",
    category: "Guests"
  },
  {
    question: "Are there transportation or delivery fees for locations outside Summit?",
    answer: "Standard delivery, logistics, and on-site setup across all 11 sub-cities of Addis Ababa (including Bole, CMC, Ayat, Kazanchis, Megenagna, Sarbet, Old Airport, Piassa, and Lebu) are factored into our service packages. For events hosted just outside the city perimeter (such as Bishoftu, Sebeta, Burayu, or Legetafo), a modest transport fuel surcharge is calculated transparently based on distance.",
    category: "Delivery"
  },
  {
    question: "Can we substitute dishes or customize items between package tiers?",
    answer: "Absolutely! We customize menus to match your family's culinary traditions. You can substitute equal-tier dishes (for instance, adjusting spice levels in Doro Wat, selecting Lamb Tibs instead of Beef Tibs, or adding specialty fasting wats) at no extra charge. If you wish to add luxury specialty items like whole roasted sheep, extra Kitfo trays, or specialty fish dishes, we provide clear itemized add-on pricing.",
    category: "Customization"
  },
  {
    question: "How do you handle Ethiopian Orthodox Fasting (Yetsom) days?",
    answer: "We adhere strictly to Ethiopian Orthodox Tewahedo fasting rules. On Wednesdays, Fridays, and throughout major fasting seasons (Abiy Tsom / Great Lent, Filseta, etc.), our kitchen prepares a sumptuous 100% vegan Yetsom Beyaynetu - featuring slow-simmered Shiro, Misir Wat, Kik Alicha, seasoned Gomen, Timatim Fitfit, and fresh salads - prepared using dedicated non-dairy/non-meat utensils at no additional surcharge.",
    category: "Dietary"
  },
  {
    question: "What is your deposit policy and payment schedule?",
    answer: "To secure your date on our catering calendar, an initial deposit of 30% to 50% is required upon agreement. The remaining balance is payable on or just prior to the event date. We accept direct bank transfers (Commercial Bank of Ethiopia, Telebirr, Awash Bank, Dashen Bank, etc.) or cash. We recommend booking major weddings and large events 3 to 6 weeks ahead.",
    category: "Payment"
  },
  {
    question: "Can we have a private food tasting before confirming our wedding or banquet?",
    answer: "Yes! For wedding banquets and large events exceeding 100 guests, we invite the host family, bride, and groom to our Summit Fiyel Bet kitchen for a complimentary food tasting session. You can taste our Doro Wat, Kitfo, Tibs, and rice pilaf to adjust seasonings to your exact liking.",
    category: "Tasting"
  }
];

const PRICING_ADDONS = [
  {
    title: "Traditional Ethiopian Buna Ceremony",
    amharicTitle: "ባህላዊ የቡና ስነ-ስርዓት",
    price: "3,500 ETB",
    priceUnit: "flat per event",
    description: "Authentic Jebena coffee ceremony with incense (Itan), freshly roasted beans, traditional clay cups (Cini), grass carpet, and hot popcorn (Fendisha) served by a host in traditional attire.",
    idealFor: "Weddings, Melse, and VIP family receptions"
  },
  {
    title: "VIP Agelgil Presentation Table",
    amharicTitle: "የአገልግል ማዕድ ዝግጅት",
    price: "2,500 ETB",
    priceUnit: "flat setup",
    description: "Artisanal woven Ethiopian Agelgil centerpieces lined with fresh banana leaves for the bride/groom or elder VIP tables, providing regal traditional ambiance.",
    idealFor: "Melse celebrations, engagements & family elders"
  },
  {
    title: "Additional Uniformed Service Attendant",
    amharicTitle: "ተጨማሪ አስተናጋጅ",
    price: "1,200 ETB",
    priceUnit: "per server",
    description: "Dedicated polite server for table-side drink running, clearing plates, managing beverage stations, or attending to elder guests.",
    idealFor: "Larger events exceeding 150 guests"
  },
  {
    title: "Crispy Appetizer & Sambusa Station",
    amharicTitle: "የሳምቡሳ እና አፔታይዘር ዝግጅት",
    price: "120 ETB",
    priceUnit: "per guest",
    description: "Crispy beef and lentil sambusas served with spicy Awaze and green chili dipping sauce as welcoming finger-food before the main buffet opens.",
    idealFor: "Cocktail hours, showers & corporate networking"
  },
  {
    title: "Fresh Fruit & Dessert Display",
    amharicTitle: "የፍራፍሬ እና ጣፋጭ ማዕድ",
    price: "180 ETB",
    priceUnit: "per guest",
    description: "Artfully carved seasonal Ethiopian fruits (papaya, pineapple, watermelon, sweet bananas) paired with bite-sized honey pastries and sweet treats.",
    idealFor: "Graduations, birthday parties & gala dinners"
  },
  {
    title: "Custom Beverage & Ambo Water Service",
    amharicTitle: "የመጠጥ እና ውሀ አቅርቦት",
    price: "Custom",
    priceUnit: "based on crate selection",
    description: "Chilled bottled mineral water, sparkling Ambo water, assorted soft drinks, and natural juices delivered on ice with disposable or glassware cups.",
    idealFor: "All event sizes across Addis Ababa"
  }
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
        item: 'https://hiwicatering.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pricing & Packages',
        item: 'https://hiwicatering.com/pricing'
      }
    ]
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
        unitText: 'per person'
      },
      itemOffered: {
        '@type': 'Service',
        name: pkg.name,
        provider: {
          '@type': 'FoodEstablishment',
          name: 'Hiwi Catering Services',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Summit Fiyel Bet Area',
            addressLocality: 'Addis Ababa',
            addressCountry: 'ET'
          }
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 font-mono uppercase tracking-wider text-[11px]">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-bold">Pricing &amp; Packages</span>
        </div>
      </div>

      {/* Hero Section (Johnny Burke Theme) */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block mb-2">
              Transparent Per-Person Rates • Addis Ababa
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[0.12em] text-black leading-tight font-sans">
              CATERING PACKAGES &amp; PRICING IN ADDIS ABABA
            </h1>
            <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          </div>

          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Honest, per-person rates in Ethiopian Birr (ETB). Every booking includes professional culinary preparation at our Summit Fiyel Bet commercial kitchen, heavy-duty stainless steel chafing dish buffets, serving equipment, uniformed attendants, and punctual setup across all 11 sub-cities of Addis Ababa.
          </p>

          {/* Johnny Burke Boxed Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-y border-gray-200 py-6 max-w-4xl mx-auto text-center">
            <div className="p-3 bg-gray-50/70 border border-gray-200">
              <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black block">
                750 ETB
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-1">
                Starting Rate / Person
              </span>
            </div>
            <div className="p-3 bg-gray-50/70 border border-gray-200">
              <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black block">
                40 - 1,500+
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-1">
                Guest Capacity Range
              </span>
            </div>
            <div className="p-3 bg-gray-50/70 border border-gray-200">
              <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black block">
                100% Hot
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-1">
                Stainless Bain-Marie Warmers
              </span>
            </div>
            <div className="p-3 bg-gray-50/70 border border-gray-200">
              <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black block">
                All 11
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-1">
                Sub-Cities Covered
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call: 0963 138 123</span>
            </a>

            <a
              href="#pricing-cards"
              className="w-full sm:w-auto py-3.5 px-8 border-2 border-black text-black hover:bg-black hover:text-white text-xs font-extrabold uppercase tracking-[0.2em] transition-all text-center inline-flex items-center justify-center gap-2"
            >
              <span>Browse Package Tiers</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 border-2 border-gray-300 text-black hover:border-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all text-center inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: @hiwicatering</span>
            </a>
          </div>

          <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400 pt-1">
            Kitchen Hub: Summit Fiyel Bet • Addis Ababa, Ethiopia
          </div>

        </div>
      </section>

      {/* Main 3 Package Cards Section (Johnny Burke Sharp Boxed Style) */}
      <section className="py-16 sm:py-20 bg-white" id="pricing-cards" aria-labelledby="packages-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block">
              Transparent Menus
            </span>
            <h2 id="packages-title" className="text-2xl sm:text-4xl font-black uppercase tracking-[0.15em] text-black">
              SELECT YOUR CATERING TIER
            </h2>
            <div className="w-12 h-0.5 bg-black mx-auto my-3" />
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Every tier provides complete food preparation, hot stainless buffet presentation, serving equipment, and polite attendants. Custom menus available for any event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {CATERING_PACKAGES.map((pkg) => {
              const isFeatured = pkg.badge === 'Most Popular';
              return (
                <div
                  key={pkg.id}
                  id={pkg.id}
                  className={`relative flex flex-col justify-between transition-all duration-200 p-6 sm:p-8 ${
                    isFeatured
                      ? 'border-2 border-black bg-white shadow-2xl md:-translate-y-2'
                      : 'border border-gray-200 bg-white hover:border-black'
                  }`}
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-black px-4 py-1 uppercase tracking-[0.2em]">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                        {pkg.amharicName}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-black border border-gray-300 px-2 py-0.5 font-mono">
                        Min. {pkg.minGuests} Guests
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
                      {pkg.name}
                    </h3>

                    <p className="mt-2 text-xs text-gray-600 font-light leading-relaxed min-h-[36px]">
                      {pkg.description}
                    </p>

                    {/* Price Header */}
                    <div className="mt-6 mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">From</span>
                        <span className="text-4xl sm:text-5xl font-black text-black tracking-tight font-sans">
                          {pkg.pricePerPerson.toLocaleString()}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs font-black uppercase tracking-wider text-black">ETB</span>
                          <span className="text-[10px] text-gray-400 uppercase font-mono">/ person</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2 flex items-center gap-1.5 font-light">
                        <Users className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>Best for: <strong className="font-semibold text-black">{pkg.recommendedFor}</strong></span>
                      </div>
                    </div>

                    {/* Included Dishes */}
                    <div className="space-y-5">
                      <div>
                        <div className="text-[11px] font-bold text-black uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                          <Utensils className="w-3.5 h-3.5 text-hiwi-primary" />
                          <span>Menu Highlights:</span>
                        </div>
                        <ul className="space-y-2 text-xs text-gray-600 font-light">
                          {pkg.dishes.map((dish, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 bg-black shrink-0 mt-1.5" />
                              <span className="leading-snug">{dish}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Service & Equipment Inclusions */}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="text-[11px] font-bold text-black uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-black" />
                          <span>Equipment &amp; Staff:</span>
                        </div>
                        <ul className="space-y-2 text-xs text-gray-600 font-light">
                          {pkg.includes.map((inc, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                              <span className="leading-snug">{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-2.5">
                    <Link
                      href="/inquiry"
                      className={`w-full py-3.5 px-4 text-xs font-black text-center uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                        isFeatured
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'border-2 border-black text-black hover:bg-black hover:text-white'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Inquire About {pkg.name.split(' ')[0]}</span>
                    </Link>

                    <a
                      href={`https://t.me/hiwicatering?text=${encodeURIComponent(`Hello Hiwi Catering! I am inquiring about the ${pkg.name} (${pkg.pricePerPerson} ETB/person). Could you tell me more about availability and menu customization?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 text-xs text-gray-500 hover:text-black transition-colors py-1.5 font-bold uppercase tracking-wider"
                    >
                      <Send className="w-3 h-3" />
                      <span>Chat on Telegram</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fasting & Custom Menu Guarantee Callout (Dark Band) */}
          <div className="mt-14 p-8 sm:p-10 bg-[#1F2024] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-hiwi-gold block">
                Ethiopian Orthodox Fasting
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                WEDNESDAY, FRIDAY &amp; MAJOR FASTING SEASONS
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl leading-relaxed">
                We prepare separate 100% plant-based Yetsom Beyaynetu buffets (gourmet Shiro, slow-cooked Misir Wat, Kik Alicha, Tikil Gomen, Timatim Fitfit) cooked with dedicated vegan cookware and zero butter or dairy. Available on all tiers with no extra surcharge.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/inquiry"
                className="py-3 px-6 bg-white text-black hover:bg-gray-200 text-xs font-black uppercase tracking-[0.2em] transition-colors text-center inline-flex items-center justify-center"
              >
                Inquire For Fasting Event
              </Link>
              <a
                href="https://t.me/hiwicatering"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 border border-white/40 hover:border-white text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors text-center flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram Chat</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Side-by-Side Detailed Tier Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-gray-50 border-y border-gray-200" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-primary block">
              Side-By-Side Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-[0.15em] text-black">
              COMPARE PACKAGE INCLUSIONS
            </h2>
            <div className="w-12 h-0.5 bg-black mx-auto my-3" />
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              See side-by-side differences in menu selections, equipment, staffing levels, and presentation styles.
            </p>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="bg-white border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-black text-white">
                    <th className="py-4 px-6 text-xs font-black uppercase tracking-wider w-2/5">
                      Service / Feature
                    </th>
                    <th className="py-4 px-6 text-center w-1/5">
                      <div className="text-xs font-black uppercase tracking-wider text-white">Classic Celebration</div>
                      <div className="text-[11px] font-mono text-gray-300 mt-0.5">750 ETB / person</div>
                    </th>
                    <th className="py-4 px-6 text-center w-1/5 bg-[#1F2024] border-x border-white/10">
                      <div className="inline-block bg-white text-black text-[9px] font-black px-2 py-0.5 uppercase tracking-widest mb-1">
                        POPULAR
                      </div>
                      <div className="text-xs font-black uppercase tracking-wider text-white">Royal Habesha</div>
                      <div className="text-[11px] font-mono text-hiwi-gold mt-0.5">1,150 ETB / person</div>
                    </th>
                    <th className="py-4 px-6 text-center w-1/5">
                      <div className="text-xs font-black uppercase tracking-wider text-white">Grand Wedding</div>
                      <div className="text-[11px] font-mono text-gray-300 mt-0.5">1,650 ETB / person</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs text-gray-700">
                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Minimum Guest Count</td>
                    <td className="py-4 px-6 text-center font-medium">40 Guests</td>
                    <td className="py-4 px-6 text-center font-bold text-black bg-gray-50 border-x border-gray-200">
                      50 Guests
                    </td>
                    <td className="py-4 px-6 text-center font-medium">100 Guests</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Best Suited For</td>
                    <td className="py-4 px-6 text-center text-gray-500 font-light">Birthdays, reunions, small showers</td>
                    <td className="py-4 px-6 text-center text-black font-medium bg-gray-50 border-x border-gray-200">
                      Graduations, family milestones, engagements
                    </td>
                    <td className="py-4 px-6 text-center text-black font-medium">
                      Grand weddings, traditional Melse &amp; VIP galas
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Hot Buffet Warmers</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 text-black font-medium">
                        <Check className="w-3.5 h-3.5 text-black" /> Stainless Chafing Dishes
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center bg-gray-50 border-x border-gray-200">
                      <span className="inline-flex items-center gap-1 text-black font-bold">
                        <Check className="w-3.5 h-3.5 text-black" /> Deluxe Stainless Chafing
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 text-black font-bold">
                        <Check className="w-3.5 h-3.5 text-black" /> VIP Multi-Line Bain-Marie
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Habesha Meat Dishes</td>
                    <td className="py-4 px-6 text-center font-light">Beef Tibs or Siga Wat</td>
                    <td className="py-4 px-6 text-center bg-gray-50 border-x border-gray-200 font-medium text-black">
                      Doro Wat + Derek Tibs
                    </td>
                    <td className="py-4 px-6 text-center font-medium text-black">
                      Grand Doro Wat + Prime Derek Tibs + Siga Wat
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Authentic Gurage Kitfo (with Ayib)</td>
                    <td className="py-4 px-6 text-center text-gray-400 font-mono">Available as Add-on</td>
                    <td className="py-4 px-6 text-center bg-gray-50 border-x border-gray-200">
                      <span className="inline-flex items-center gap-1 text-black font-bold">
                        <Check className="w-3.5 h-3.5 text-black" /> Included
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 text-black font-bold">
                        <Check className="w-3.5 h-3.5 text-black" /> Premium Gurage Kitfo
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Fasting Beyaynetu Varieties</td>
                    <td className="py-4 px-6 text-center font-light">3 Varieties (Shiro, Misir, Salad)</td>
                    <td className="py-4 px-6 text-center bg-gray-50 border-x border-gray-200 font-medium">
                      4 Varieties + Injera
                    </td>
                    <td className="py-4 px-6 text-center font-medium">
                      5 Gourmet Varieties + Injera
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Diningware &amp; Cutlery</td>
                    <td className="py-4 px-6 text-center text-gray-500 font-light">Heavy-duty disposable plates</td>
                    <td className="py-4 px-6 text-center bg-gray-50 border-x border-gray-200 font-medium">
                      Ceramic plates &amp; metal cutlery
                    </td>
                    <td className="py-4 px-6 text-center font-medium">
                      VIP Ceramic plates, metallic cutlery &amp; napkins
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Traditional Agelgil Setup</td>
                    <td className="py-4 px-6 text-center text-gray-400 font-mono">Available as Add-on</td>
                    <td className="py-4 px-6 text-center bg-gray-50 border-x border-gray-200">
                      <span className="inline-flex items-center gap-1 text-black font-semibold">
                        <Check className="w-3.5 h-3.5 text-black" /> Optional Setup
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 text-black font-semibold">
                        <Check className="w-3.5 h-3.5 text-black" /> Full VIP Centerpieces
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Uniformed Service Staff</td>
                    <td className="py-4 px-6 text-center font-light">1 Buffet Assistant</td>
                    <td className="py-4 px-6 text-center bg-gray-50 border-x border-gray-200 font-medium">
                      2 Uniformed Attendants
                    </td>
                    <td className="py-4 px-6 text-center font-medium">
                      Head Coordinator + 4+ Servers
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Traditional Coffee (Buna) Ceremony</td>
                    <td className="py-4 px-6 text-center text-gray-400 font-mono">Available as Add-on</td>
                    <td className="py-4 px-6 text-center bg-gray-50 border-x border-gray-200">
                      <span className="inline-flex items-center gap-1 text-black font-semibold">
                        <Check className="w-3.5 h-3.5 text-black" /> Included
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center gap-1 text-black font-semibold">
                        <Check className="w-3.5 h-3.5 text-black" /> Deluxe Buna Ceremony
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-bold uppercase tracking-wider text-black text-[11px]">Punctual On-Site Setup</td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-4 h-4 text-black mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-gray-50 border-x border-gray-200">
                      <Check className="w-4 h-4 text-black mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-4 h-4 text-black mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Popular Add-ons & Customizations */}
      <section className="py-16 sm:py-20 bg-white" id="addons">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-primary block">
              Event Customization
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-[0.15em] text-black">
              POPULAR ADD-ONS &amp; CEREMONIES
            </h2>
            <div className="w-12 h-0.5 bg-black mx-auto my-3" />
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              Customize your chosen tier with traditional ceremonies, appetizer bars, additional staff, or dessert platters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRICING_ADDONS.map((addon, index) => (
              <div 
                key={index}
                className="bg-white p-6 border border-gray-200 hover:border-black transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 font-mono">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {addon.amharicTitle}
                    </span>
                    <span className="text-xs font-black text-black">
                      {addon.price}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold uppercase tracking-wider text-black">
                    {addon.title}
                  </h3>

                  <p className="text-xs text-gray-600 font-light mt-2 leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                  <span className="italic">{addon.idealFor}</span>
                  <span className="font-bold text-black">{addon.priceUnit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Inquiries Banner */}
          <div className="mt-10 p-6 sm:p-8 bg-[#1F2024] text-white border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-hiwi-gold" />
                <span>Specialized Habesha Requests &amp; Whole Roasted Sheep</span>
              </h4>
              <p className="text-xs text-gray-400 font-light mt-1">
                We handle custom requests including whole roasted lamb (Mule Tibs), Fish Dullet, and Western buffet stations.
              </p>
            </div>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 py-3 px-6 bg-white text-black hover:bg-gray-200 font-black text-xs uppercase tracking-[0.2em] transition-colors flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram Inquiry</span>
            </a>
          </div>

        </div>
      </section>

      {/* Direct Event Consultation & Inquiry Section */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200" id="inquiry">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <InquiryForm 
            title="READY TO BOOK OR INQUIRE ABOUT A PACKAGE?"
            subtitle="Fill out this quick form and our event team will get in touch with you within 24 hours"
          />
        </div>
      </section>

      {/* Pricing FAQs Section */}
      <FaqAccordion 
        faqs={PRICING_FAQS} 
        title="Frequently Asked Questions About Catering Prices in Addis Ababa"
        subtitle="Clear answers on our deposit policies, food tasting sessions, fasting adjustments, and logistics."
      />

      {/* Johnny Burke Bottom CTA Banner */}
      <section className="bg-[#1A1A1A] text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-gold block">
            Reserve Your Date
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-white leading-tight">
            TREAT YOUR GUESTS TO &ldquo;THE TASTE YOU LOVE!&rdquo;
          </h2>

          <div className="w-12 h-0.5 bg-white/40 mx-auto" />

          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Contact Hiwi Catering today to lock in your event date or schedule a menu tasting at our Summit Fiyel Bet commercial kitchen. Transparent rates, generous portions, and royal Ethiopian hospitality guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/inquiry"
              className="w-full sm:w-auto py-3.5 px-8 bg-white text-black hover:bg-gray-200 text-xs font-black uppercase tracking-[0.2em] transition-colors"
            >
              Submit Event Inquiry
            </Link>

            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-8 border-2 border-white text-white hover:bg-white hover:text-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 0963 138 123</span>
            </a>

            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 border border-white/40 text-gray-300 hover:text-white hover:border-white text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram Chat</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}