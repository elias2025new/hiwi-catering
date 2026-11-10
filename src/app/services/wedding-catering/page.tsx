import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Send, 
  Check, 
  Utensils, 
  HeartHandshake, 
  Users, 
  Clock, 
  MapPin, 
  ShieldCheck,
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: {
    absolute: 'Wedding Catering Services in Addis Ababa | Hiwi Catering',
  },
  description: 'Plan your dream wedding with Hiwi Catering in Addis Ababa. Traditional Agelgil feasts, Melse banquets & hot buffet stations. Book a free tasting today!',
  alternates: {
    canonical: 'https://hiwicatering.com/services/wedding-catering',
  },
  keywords: [
    'wedding catering services in Addis Ababa',
    'wedding catering Addis Ababa',
    'catering service for wedding',
    'catering service Addis Ababa',
    'traditional Ethiopian wedding food',
    'Melse catering Addis Ababa',
    'Agelgil catering',
    'wedding buffet catering Ethiopia',
    'የሰርግ ምግብ ዝግጅት',
    'የመልስ ምግብ ዝግጅት'
  ],
  openGraph: {
    title: 'Wedding Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Full-service wedding and Melse catering in Addis Ababa. Traditional Agelgil feasts, authentic wats, and modern chafing dish buffets.',
    url: 'https://hiwicatering.com/services/wedding-catering',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/wedding-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Wedding Catering Services Addis Ababa - Traditional Melse and Buffet Feasts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Full-service wedding and Melse catering in Addis Ababa. Traditional Agelgil feasts and modern buffets.',
    images: ['/images/wedding-catering.jpg']
  }
};

const WEDDING_FAQS = [
  {
    question: "What is included in Hiwi Catering's wedding catering package in Addis Ababa?",
    answer: "Our wedding packages include full food preparation, commercial stainless steel bain-marie chafing dish warmers, traditional Agelgil woven presentation for VIP or family tables, plates, cutlery, uniformed buffet attendants and servers, and a traditional Ethiopian Coffee Ceremony (Buna) setup."
  },
  {
    question: "Do you cater for traditional Melse celebrations as well as the main wedding?",
    answer: "Yes. We offer comprehensive two-day or multi-event catering packages for the main wedding reception and the traditional Melse. We specialize in authentic Agelgil setups, seasoned Doro Wat, succulent Kitfo, Tibs, and specialized fasting delicacies."
  },
  {
    question: "Can we arrange a food tasting session before confirming our wedding booking?",
    answer: "Yes, absolutely! We provide a private menu tasting consultation for the bride, groom, and key family members to sample our signature wats, meats, and rice pilafs prior to finalizing the menu."
  },
  {
    question: "How many wedding guests can Hiwi Catering handle?",
    answer: "We cater weddings ranging from intimate receptions of 100 guests to large celebrations exceeding 1,500+ guests with multiple synchronized buffet lines to prevent guest queues."
  }
];

export default function WeddingCateringPage() {
  const serviceSchema = {
    '@type': 'Service',
    name: 'Wedding Catering Services in Addis Ababa',
    serviceType: 'Wedding and Melse Banquet Catering',
    url: 'https://hiwicatering.com/services/wedding-catering',
    provider: {
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
    },
    areaServed: [
      'Summit Fiyel Bet',
      'Bole',
      'CMC',
      'Kazanchis',
      'Sarbet',
      'Ayat',
      'Megenagna',
      'Addis Ababa'
    ],
    description: 'Full-service wedding and Melse catering in Addis Ababa with traditional Agelgil presentation, stainless steel chafing dish buffets, and professional staff.',
    offers: {
      '@type': 'Offer',
      price: '1650',
      priceCurrency: 'ETB',
      availability: 'https://schema.org/InStock'
    }
  };

  const breadcrumbSchema = {
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
        name: 'Services',
        item: 'https://hiwicatering.com/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Wedding Catering',
        item: 'https://hiwicatering.com/services/wedding-catering'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...serviceSchema }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...breadcrumbSchema }) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 font-mono uppercase tracking-wider text-[11px]">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-bold">Wedding Catering</span>
        </div>
      </div>

      {/* Hero Section (Johnny Burke Theme) */}
      <section className="py-14 sm:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block mb-2">
                  Grand Weddings &amp; Melse Banquets
                </span>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.12em] text-black leading-tight font-sans">
                  WEDDING CATERING SERVICES IN ADDIS ABABA
                </h1>
                <div className="w-12 h-0.5 bg-black my-4" />
              </div>

              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Your wedding day deserves nothing less than culinary perfection. Hiwi Catering specializes in creating lavish wedding feasts across Addis Ababa, blending time-honored Ethiopian culinary heritage with polished modern buffet hospitality.
              </p>

              {/* Johnny Burke Boxed Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-y border-gray-200 py-4 text-center sm:text-left">
                <div>
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    100 - 1,500+
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Guest Capacity
                  </span>
                </div>
                <div className="border-x border-gray-200 px-2 sm:px-4">
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    Dual Style
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Agelgil &amp; Buffet
                  </span>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black block">
                    Buna Setup
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider uppercase block mt-0.5">
                    Traditional Ceremony
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+251963138123"
                  className="py-3.5 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>Call: 0963 138 123</span>
                </a>
                <Link
                  href="/inquiry"
                  className="py-3.5 px-8 border-2 border-black text-black hover:bg-black hover:text-white text-xs font-extrabold uppercase tracking-[0.2em] transition-all text-center inline-flex items-center justify-center"
                >
                  Wedding Inquiry
                </Link>
                <a
                  href="https://t.me/hiwicatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 border-2 border-gray-300 text-black hover:border-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all text-center inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Right Column: Sharp Editorial Framed Wedding Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white border border-gray-200 p-3 sm:p-4 shadow-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/images/wedding-catering.jpg"
                    alt="Hiwi Wedding Catering Services Addis Ababa - Traditional Melse and Buffet Feast"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="p-3 bg-black text-white text-center mt-3">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white block">
                    Wedding &amp; Melse Banquet Setup
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 block mt-0.5 font-mono">
                    Summit Fiyel Bet • Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AEO / GEO Direct Answer Section (Johnny Burke Boxed) */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-8 border border-gray-200 shadow-sm space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-hiwi-primary block">
              Culinary Excellence
            </span>
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black">
              WHY CHOOSE HIWI CATERING FOR YOUR WEDDING IN ADDIS ABABA?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              When searching for a <strong>catering service for wedding</strong> in Addis Ababa, couples require reliability, generous portions, authentic flavors, and food served piping hot. <strong>Hiwi Catering Services</strong>, based in Summit Fiyel Bet, delivers full-service wedding catering across Bole, CMC, Kazanchis, and all sub-cities. We provide dual options: exquisite traditional Agelgil setups with injera, freshly slaughtered and seasoned beef/chicken wats, Gurage-style Kitfo, and modern multi-station stainless steel bain-marie warmers with seasoned rice pilaf, roasted meats, and salads.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Menu Highlights (Johnny Burke Sharp Grid) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-primary block">
              Menu Selection
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-[0.15em] text-black">
              SAMPLE WEDDING BANQUET DISHES
            </h2>
            <div className="w-12 h-0.5 bg-black mx-auto my-3" />
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              Every wedding menu can be tailored to your family&apos;s cultural traditions and dietary preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 bg-white border border-gray-200 hover:border-black transition-colors space-y-4">
              <div className="text-xs font-black text-black uppercase tracking-[0.15em] border-b border-gray-200 pb-2">
                1. Traditional Royal Wats
              </div>
              <ul className="space-y-3 text-xs text-gray-600 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Signature Doro Wat:</strong> Slow-simmered organic chicken with berbere and farm eggs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Special Gurage Kitfo:</strong> Prepared with seasoned clarified butter (niter kibbeh) and mitmita.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Siga Wat &amp; Alicha Wat:</strong> Prime tender beef cuts slow-cooked to melt in your mouth.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 bg-white border border-gray-200 hover:border-black transition-colors space-y-4">
              <div className="text-xs font-black text-black uppercase tracking-[0.15em] border-b border-gray-200 pb-2">
                2. Modern Buffet Warmers
              </div>
              <ul className="space-y-3 text-xs text-gray-600 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Seasoned Saffron Rice Pilaf:</strong> Fragrant rice infused with vegetables and spices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Derek Tibs:</strong> Tender pan-seared beef cubes with rosemary, onions, and jalapenos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Fresh Abyssinian Salad:</strong> Garden-crisp lettuce, tomatoes, and house dressing.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 bg-white border border-gray-200 hover:border-black transition-colors space-y-4">
              <div className="text-xs font-black text-black uppercase tracking-[0.15em] border-b border-gray-200 pb-2">
                3. Fasting (Yetsom) Delicacies
              </div>
              <ul className="space-y-3 text-xs text-gray-600 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Yetsom Beyaynetu:</strong> Misir Wat, Kik Alicha, Shiro, Gomen, and Tikil Gomen.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Crispy Sambusa:</strong> Spiced green lentil filling wrapped in golden pastry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span><strong>Beetroot &amp; Potato Salad:</strong> Sweet earthy beets with red onions and lime.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Inquiry for Weddings */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <InquiryForm 
            title="PLAN YOUR WEDDING CATERING WITH HIWI"
            subtitle="Fill out this quick form and our wedding specialist will contact you within 24 hours"
          />
        </div>
      </section>

      {/* Wedding FAQs */}
      <FaqAccordion
        faqs={WEDDING_FAQS}
        title="Wedding Catering FAQs"
        subtitle="Common questions regarding wedding catering services, tastings, and bookings in Addis Ababa."
      />

      {/* Johnny Burke Dark Footer Banner */}
      <section className="bg-[#1A1A1A] text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-gold block">
            Summit Fiyel Bet • Addis Ababa
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-white leading-tight">
            BOOK YOUR WEDDING TASTING SESSION
          </h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto" />
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Reserve your wedding date with Hiwi Catering. Complimentary menu tasting sessions available for the bride, groom, and family elders.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-8 bg-white text-black hover:bg-gray-200 text-xs font-black uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-black" />
              <span>Call: 0963 138 123</span>
            </a>
            <Link
              href="/inquiry"
              className="w-full sm:w-auto py-3.5 px-8 border-2 border-white text-white hover:bg-white hover:text-black text-xs font-extrabold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Wedding Inquiry</span>
            </Link>
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
