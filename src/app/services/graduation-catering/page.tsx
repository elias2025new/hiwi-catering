import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { HIWI_SCHEMA_PROVIDER, HIWI_SCHEMA_AREA_SERVED } from '@/data/services';

export const metadata: Metadata = {
  title: {
    absolute: 'Graduation Catering Services in Addis Ababa | Hiwi Catering',
  },
  description:
    'Celebrate academic milestone with Hiwi Catering in Addis Ababa. Generous traditional Habesha platters, modern buffets & hot chafing warmers. Book today!',
  alternates: {
    canonical: 'https://hiwicatering.com/services/graduation-catering',
  },
  keywords: [
    'graduation catering services in Addis Ababa',
    'graduation catering Addis Ababa',
    'catering service for graduation',
    'graduation party food Addis Ababa',
    'catering service Addis Ababa',
    'university graduation feast Ethiopia',
    'የምርቃት ምግብ ዝግጅት',
  ],
  openGraph: {
    title: 'Graduation Catering Services in Addis Ababa | Hiwi Catering',
    description:
      'Generous traditional Ethiopian feasts and modern buffets for university graduations in Addis Ababa.',
    url: 'https://hiwicatering.com/services/graduation-catering',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/corporate-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Graduation Catering Services Addis Ababa - Traditional and Modern Banquets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graduation Catering Services in Addis Ababa | Hiwi Catering',
    description:
      'Generous traditional Ethiopian feasts and modern buffets for university graduations in Addis Ababa.',
    images: ['/images/corporate-catering.jpg'],
  },
};

const GRADUATION_FAQS = [
  {
    question: 'What makes Hiwi Catering the top choice for graduation catering in Addis Ababa?',
    answer:
      'Graduation in Ethiopia is a grand family celebration of honor. Hiwi Catering specializes in generous portion sizes, rich traditional Habesha dishes (Doro Wat, Siga Wat, Kitfo, and Beyaynetu), and professional chafing warmers that allow families to focus entirely on celebrating their graduate without kitchen exhaustion.',
  },
  {
    question: 'Can we mix traditional Ethiopian dishes with rice and salads for graduation parties?',
    answer:
      'Yes! Our most popular graduation tier is our Royal Habesha Banquet, which combines traditional wats and injera rolls with aromatic seasoned saffron rice pilaf, tender beef tibs, fresh garden salads, and crispy sambusas.',
  },
  {
    question: 'Do you deliver to graduation venues and compounds across Addis Ababa?',
    answer:
      'Yes. From our commercial kitchen in Summit Fiyel Bet, we deliver directly to your residence, event hall, church compound, or outdoor garden venue in Bole, CMC, Ayat, Kazanchis, Megenagna, Sarbet, and across the city.',
  },
  {
    question: 'How many guests can you cater for a graduation party?',
    answer:
      'We cater graduation gatherings from 50 guests up to 500+ guests with seamless buffet lines and dedicated service attendants.',
  },
];

export default function GraduationCateringPage() {
  const serviceSchema = {
    '@type': 'Service',
    name: 'Graduation Catering Services in Addis Ababa',
    serviceType: 'University and College Graduation Banquet Catering',
    url: 'https://hiwicatering.com/services/graduation-catering',
    provider: HIWI_SCHEMA_PROVIDER,
    areaServed: HIWI_SCHEMA_AREA_SERVED,
    description:
      'Full-service graduation catering in Addis Ababa and Addis Abeba with generous traditional feasts, stainless steel buffet warmers, and complete setup.',
    offers: {
      '@type': 'Offer',
      price: '850',
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
        name: 'Graduation Catering',
        item: 'https://hiwicatering.com/services/graduation-catering',
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
        breadcrumbLabel="Graduation Catering"
        title="GRADUATION CATERING SERVICES IN ADDIS ABABA"
        intro="Honor academic milestones with an abundant feast worthy of your family's pride. Hiwi Catering serves signature Doro Wat, Gurage Kitfo, saffron rice pilaf, and fasting Beyaynetu in heated stainless chafing warmers."
        stats={[
          { value: '50 – 500+', label: 'Guest Capacity' },
          { value: 'Royal Feast', label: 'Doro Wat & Kitfo' },
          { value: 'All 11', label: 'Sub-Cities Delivered' },
        ]}
        inquiryCtaLabel="Request Graduation Quote"
        heroImage="/images/corporate-catering.jpg"
        heroImageAlt="Hiwi Graduation Catering Services Addis Ababa - Hot Stainless Chafing Buffet Spread"
        aeoQuestion="WHAT IS INCLUDED IN A GRADUATION CATERING PACKAGE IN ADDIS ABABA?"
        aeoAnswer={
          <>
            When ordering a <strong>catering service for graduation</strong> in Addis Ababa &amp; Addis Abeba, families
            need abundant servings, punctual setup, and zero kitchen stress. <strong>Hiwi Catering Services</strong>{' '}
            supplies hot stainless steel bain-marie warmers loaded with Doro Wat, Siga Wat, beef tibs, saffron rice,
            Kitfo with Ayib, fasting Beyaynetu, teff injera, and fresh salads across Summit, Bole, Ayat, CMC, and every
            district.
          </>
        }
        deliveryStripLabel="Graduation Catering"
        inquiryTitle="PLAN YOUR GRADUATION CATERING WITH HIWI"
        inquirySubtitle="Share your ceremony date, compound location, and guest count for a fast proposal within 24 hours."
        faqs={GRADUATION_FAQS}
        faqTitle="Graduation Catering FAQs"
        faqSubtitle="Common questions regarding graduation party catering menus, capacity, and scheduling in Addis Ababa."
        bottomTitle="HONOR YOUR GRADUATE WITH A HOT HABESHA FEAST"
        bottomSubtitle="Reserve early during university graduation season. Hot stainless buffets, teff injera, and attentive attendants across Addis Ababa."
        bottomCtaLabel="Submit Graduation Inquiry"
      />
    </>
  );
}
