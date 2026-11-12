import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { HIWI_SCHEMA_PROVIDER, HIWI_SCHEMA_AREA_SERVED } from '@/data/services';

export const metadata: Metadata = {
  title: {
    absolute: 'Birthday Catering Services in Addis Ababa | Hiwi Catering',
  },
  description:
    'Celebrate stress-free with Hiwi Catering in Addis Ababa. Delicious birthday buffets, kids menus, finger foods & traditional wats. Call 0963 138 123 today!',
  alternates: {
    canonical: 'https://hiwicatering.com/services/birthday-catering',
  },
  keywords: [
    'birthday catering services in Addis Ababa',
    'birthday catering Addis Ababa',
    'catering service for birthday',
    'kids birthday party catering Addis Ababa',
    'catering service Addis Ababa',
    'birthday party buffet Addis Ababa',
    'የልደት ምግብ ዝግጅት',
  ],
  openGraph: {
    title: 'Birthday Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Vibrant, delicious birthday buffets and finger foods in Addis Ababa.',
    url: 'https://hiwicatering.com/services/birthday-catering',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/social-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Birthday Catering Services Addis Ababa - Kids and Adult Party Buffets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birthday Catering Services in Addis Ababa | Hiwi Catering',
    description: 'Stress-free birthday catering in Addis Ababa with custom buffets and finger foods.',
    images: ['/images/social-catering.jpg'],
  },
};

const BIRTHDAY_FAQS = [
  {
    question: "What menu options work best for children's birthday parties?",
    answer:
      "For children's parties, we prepare easy-to-eat favorites including crispy Sambusas, tender chicken and beef skewers, seasoned mild rice, pasta, and mini pizza bites, alongside traditional Ethiopian platters for adult guests.",
  },
  {
    question: 'Can Hiwi Catering handle adult milestone birthdays (30th, 50th, 60th)?',
    answer:
      'Yes. For adult celebrations, we provide complete formal or semi-formal buffet spreads with Doro Wat, Siga Wat, Kitfo, Tibs, seasoned pilaf, fresh salads, and traditional coffee ceremonies.',
  },
  {
    question: 'What is the minimum number of guests for birthday catering in Addis Ababa?',
    answer:
      'Our birthday catering packages start at a minimum of 30 guests. We scale up smoothly to accommodate large celebrations of 300+ guests anywhere in Addis Ababa.',
  },
  {
    question: 'Do you provide equipment like warmers and plates for home parties?',
    answer:
      'Yes. Even for home or backyard birthdays, we bring stainless steel chafing dish warmers to keep all food fresh and hot, along with serving spoons, plates, napkins, and clean-up options.',
  },
];

export default function BirthdayCateringPage() {
  const serviceSchema = {
    '@type': 'Service',
    name: 'Birthday Catering Services in Addis Ababa',
    serviceType: 'Birthday Party and Family Celebration Catering',
    url: 'https://hiwicatering.com/services/birthday-catering',
    provider: HIWI_SCHEMA_PROVIDER,
    areaServed: HIWI_SCHEMA_AREA_SERVED,
    description:
      'Full-service birthday party catering in Addis Ababa and Addis Abeba with custom kids menus, adult traditional banquets, and chafing dish buffets.',
    offers: {
      '@type': 'Offer',
      price: '750',
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
        name: 'Birthday Catering',
        item: 'https://hiwicatering.com/services/birthday-catering',
      },
    ],
  };

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
        breadcrumbLabel="Birthday Catering"
        title="BIRTHDAY PARTY CATERING IN ADDIS ABABA"
        intro="Celebrate with family and friends instead of cooking all weekend. Hiwi Catering delivers crisp sambusa trays, grilled skewers, saffron rice, and hot Habesha buffets straight to home compounds and venues."
        stats={[
          { value: '30 – 300+', label: 'Guest Capacity' },
          { value: 'Kids & Adults', label: 'Dual Party Menus' },
          { value: '100% Hot', label: 'Chafing Warmers Included' },
        ]}
        inquiryCtaLabel="Request Birthday Quote"
        heroImage="/images/social-catering.jpg"
        heroImageAlt="Hiwi Birthday Party Catering Buffet in Addis Ababa - Sambusas, Grill and Hot Chafing Dishes"
        aeoQuestion="HOW DOES BIRTHDAY CATERING WORK WITH HIWI CATERING IN ADDIS ABABA?"
        aeoAnswer={
          <>
            When booking a <strong>catering service for birthday</strong> celebrations in Addis Ababa &amp; Addis Abeba,
            hosts look for flavor variety, punctual delivery, and effortless setup.{' '}
            <strong>Hiwi Catering Services</strong>, based in Summit Fiyel Bet, arrives 1 hour before party time with
            stainless steel bain-marie warmers, sets up fresh teff injera, signature wats, rice pilaf, finger foods,
            and salads, and handles buffet replenishment—starting from 750 ETB per guest.
          </>
        }
        deliveryStripLabel="Birthday Catering"
        inquiryTitle="PLAN YOUR BIRTHDAY CATERING WITH HIWI"
        inquirySubtitle="Share your guest estimate and neighborhood to receive custom kids & adult buffet menus within 24 hours."
        faqs={BIRTHDAY_FAQS}
        faqTitle="Birthday Catering FAQs"
        faqSubtitle="Common questions regarding birthday party catering packages and dietary accommodations."
        bottomTitle="BOOK YOUR BIRTHDAY BUFFET FROM 750 ETB / GUEST"
        bottomSubtitle="Let our Summit kitchen prepare your birthday feast while you welcome guests across any Addis Ababa sub-city."
        bottomCtaLabel="Submit Birthday Inquiry"
      />
    </>
  );
}
