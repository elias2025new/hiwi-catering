import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { HIWI_SCHEMA_PROVIDER, HIWI_SCHEMA_AREA_SERVED } from '@/data/services';

export const metadata: Metadata = {
  title: {
    absolute: 'Wedding Catering Services in Addis Ababa | Hiwi Catering',
  },
  description:
    'Plan your dream wedding with Hiwi Catering in Addis Ababa. Traditional Agelgil feasts, Melse banquets & hot buffet stations. Book a free tasting today!',
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
    'የመልስ ምግብ ዝግጅት',
  ],
  openGraph: {
    title: 'Wedding Catering Services in Addis Ababa | Hiwi Catering',
    description:
      'Full-service wedding and Melse catering in Addis Ababa. Traditional Agelgil feasts, authentic wats, and modern chafing dish buffets.',
    url: 'https://hiwicatering.com/services/wedding-catering',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/wedding-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Wedding Catering Services Addis Ababa - Traditional Melse and Buffet Feasts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Catering Services in Addis Ababa | Hiwi Catering',
    description:
      'Full-service wedding and Melse catering in Addis Ababa. Traditional Agelgil feasts and modern buffets.',
    images: ['/images/wedding-catering.jpg'],
  },
};

const WEDDING_FAQS = [
  {
    question: "What is included in Hiwi Catering's wedding catering package in Addis Ababa?",
    answer:
      'Our wedding packages include full food preparation, commercial stainless steel bain-marie chafing dish warmers, traditional Agelgil woven presentation for VIP or family tables, plates, cutlery, uniformed buffet attendants and servers, and a traditional Ethiopian Coffee Ceremony (Buna) setup.',
  },
  {
    question: 'Do you cater for traditional Melse celebrations as well as the main wedding?',
    answer:
      'Yes. We offer comprehensive two-day or multi-event catering packages for the main wedding reception and the traditional Melse. We specialize in authentic Agelgil setups, seasoned Doro Wat, succulent Kitfo, Tibs, and specialized fasting delicacies.',
  },
  {
    question: 'Can we arrange a food tasting session before confirming our wedding booking?',
    answer:
      'Yes, absolutely! We provide a private menu tasting consultation for the bride, groom, and key family members to sample our signature wats, meats, and rice pilafs prior to finalizing the menu.',
  },
  {
    question: 'How many wedding guests can Hiwi Catering handle?',
    answer:
      'We cater weddings ranging from intimate receptions of 100 guests to large celebrations exceeding 1,500+ guests with multiple synchronized buffet lines to prevent guest queues.',
  },
];

export default function WeddingCateringPage() {
  const serviceSchema = {
    '@type': 'Service',
    name: 'Wedding Catering Services in Addis Ababa',
    serviceType: 'Wedding and Melse Banquet Catering',
    url: 'https://hiwicatering.com/services/wedding-catering',
    provider: HIWI_SCHEMA_PROVIDER,
    areaServed: HIWI_SCHEMA_AREA_SERVED,
    description:
      'Full-service wedding and Melse catering in Addis Ababa and Addis Abeba with traditional Agelgil presentation, stainless steel chafing dish buffets, and professional staff.',
    offers: {
      '@type': 'Offer',
      price: '1650',
      priceCurrency: 'ETB',
      availability: 'https://schema.org/InStock',
    },
  };

  const breadcrumbSchema = {
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
        name: 'Services',
        item: 'https://hiwicatering.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Wedding Catering',
        item: 'https://hiwicatering.com/services/wedding-catering',
      },
    ],
  };

  const sampleMenuSection = (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
            SAMPLE WEDDING BANQUET DISHES
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Every wedding menu can be tailored to your family&apos;s cultural traditions and dietary preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 bg-hiwi-cream border border-hiwi-border rounded-2xl space-y-4">
            <h3 className="text-sm font-extrabold text-hiwi-dark uppercase tracking-wider border-b border-hiwi-border pb-3">
              1. Traditional Royal Wats
            </h3>
            <ul className="space-y-3 text-sm text-stone-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-1" strokeWidth={2} />
                <span>
                  <strong className="text-hiwi-dark">Signature Doro Wat:</strong> Slow-simmered organic chicken with
                  berbere and farm eggs.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-1" strokeWidth={2} />
                <span>
                  <strong className="text-hiwi-dark">Special Gurage Kitfo:</strong> Prepared with seasoned clarified
                  butter (niter kibbeh) and mitmita.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-1" strokeWidth={2} />
                <span>
                  <strong className="text-hiwi-dark">Siga Wat &amp; Alicha Wat:</strong> Prime tender beef cuts
                  slow-cooked to melt in your mouth.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 bg-hiwi-cream border border-hiwi-border rounded-2xl space-y-4">
            <h3 className="text-sm font-extrabold text-hiwi-dark uppercase tracking-wider border-b border-hiwi-border pb-3">
              2. Modern Buffet Warmers
            </h3>
            <ul className="space-y-3 text-sm text-stone-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-1" strokeWidth={2} />
                <span>
                  <strong className="text-hiwi-dark">Seasoned Saffron Rice Pilaf:</strong> Fragrant rice infused with
                  vegetables and spices.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-1" strokeWidth={2} />
                <span>
                  <strong className="text-hiwi-dark">Derek Tibs:</strong> Tender pan-seared beef cubes with rosemary,
                  onions, and jalapenos.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-1" strokeWidth={2} />
                <span>
                  <strong className="text-hiwi-dark">Fresh Abyssinian Salad:</strong> Garden-crisp lettuce, tomatoes,
                  and house dressing.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 bg-hiwi-cream border border-hiwi-border rounded-2xl space-y-4">
            <h3 className="text-sm font-extrabold text-hiwi-dark uppercase tracking-wider border-b border-hiwi-border pb-3">
              3. Fasting (Yetsom) Delicacies
            </h3>
            <ul className="space-y-3 text-sm text-stone-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-1" strokeWidth={2} />
                <span>
                  <strong className="text-hiwi-dark">Yetsom Beyaynetu:</strong> Misir Wat, Kik Alicha, Shiro, Gomen,
                  and Tikil Gomen.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-1" strokeWidth={2} />
                <span>
                  <strong className="text-hiwi-dark">Crispy Sambusa:</strong> Spiced green lentil filling wrapped in
                  golden pastry.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-1" strokeWidth={2} />
                <span>
                  <strong className="text-hiwi-dark">Beetroot &amp; Potato Salad:</strong> Sweet earthy beets with
                  red onions and lime.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...serviceSchema }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', ...breadcrumbSchema }),
        }}
      />

      <ServicePageTemplate
        breadcrumbLabel="Wedding Catering"
        title="WEDDING & MELSE CATERING SERVICES IN ADDIS ABABA"
        intro="Your wedding day deserves culinary perfection. Hiwi Catering prepares lavish wedding and Melse feasts across Addis Ababa, blending traditional Ethiopian heritage with multi-line stainless buffet hospitality."
        stats={[
          { value: '100 – 1,500+', label: 'Guest Capacity' },
          { value: 'Dual Style', label: 'Agelgil & Buffet' },
          { value: 'Buna Setup', label: 'Jebena Coffee Service' },
        ]}
        inquiryCtaLabel="Request Wedding Proposal"
        heroImage="/images/wedding-catering.jpg"
        heroImageAlt="Hiwi Wedding Catering Services Addis Ababa - Traditional Melse and Buffet Feast"
        aeoQuestion="WHY CHOOSE HIWI CATERING FOR YOUR WEDDING IN ADDIS ABABA?"
        aeoAnswer={
          <>
            When searching for a <strong>catering service for wedding</strong> receptions in Addis Ababa &amp; Addis
            Abeba, couples require reliability, generous portions, authentic flavors, and food served piping hot.{' '}
            <strong>Hiwi Catering Services</strong>, based in Summit Fiyel Bet, delivers full-service wedding catering
            across Bole, CMC, Kazanchis, and all sub-cities. We provide dual options: traditional Agelgil setups with
            teff injera, freshly prepared Doro Wat and Gurage Kitfo, plus multi-station stainless steel bain-marie
            warmers with rice pilaf, roasted meats, and salads.
          </>
        }
        extraSection={sampleMenuSection}
        deliveryStripLabel="Wedding Catering"
        inquiryTitle="PLAN YOUR WEDDING CATERING WITH HIWI"
        inquirySubtitle="Share your wedding date, venue area, and guest estimate for a menu consultation within 24 hours."
        faqs={WEDDING_FAQS}
        faqTitle="Wedding Catering FAQs"
        faqSubtitle="Common questions regarding wedding catering services, tastings, and bookings in Addis Ababa."
        bottomTitle="BOOK A WEDDING TASTING AT OUR SUMMIT KITCHEN"
        bottomSubtitle="Complimentary menu tasting sessions for the bride, groom, and family elders before confirming your wedding date."
        bottomCtaLabel="Submit Wedding Inquiry"
      />
    </>
  );
}
