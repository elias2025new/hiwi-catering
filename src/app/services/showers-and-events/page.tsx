import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { HIWI_SCHEMA_PROVIDER, HIWI_SCHEMA_AREA_SERVED } from '@/data/services';

export const metadata: Metadata = {
  title: {
    absolute: 'Corporate & Event Catering Addis Ababa | Hiwi Catering',
  },
  description:
    'Professional event catering in Addis Ababa for corporate seminars, business luncheons, bridal & baby showers. Punctual delivery. Book your date today!',
  alternates: {
    canonical: 'https://hiwicatering.com/services/showers-and-events',
  },
  keywords: [
    'corporate catering Addis Ababa',
    'seminar catering Addis Ababa',
    'bridal shower catering Addis Ababa',
    'baby shower catering Addis Ababa',
    'event catering Addis Ababa',
    'catering service Addis Ababa',
    'business lunch catering Ethiopia',
    'የስብሰባ ምግብ ዝግጅት',
  ],
  openGraph: {
    title: 'Corporate & Event Catering Addis Ababa | Hiwi Catering',
    description:
      'Punctual, polished catering for corporate seminars, showers, and executive events in Addis Ababa.',
    url: 'https://hiwicatering.com/services/showers-and-events',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/corporate-catering.jpg',
        width: 1200,
        height: 630,
        alt: 'Hiwi Corporate and Event Catering Services Addis Ababa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate & Event Catering Addis Ababa | Hiwi Catering',
    description:
      'Punctual, polished catering for corporate seminars, showers, and executive events in Addis Ababa.',
    images: ['/images/corporate-catering.jpg'],
  },
};

const EVENT_FAQS = [
  {
    question: 'Do you provide corporate invoices and tax receipts for seminars?',
    answer:
      'Yes, Hiwi Catering provides official company quotations, invoices, and payment receipts suited for NGO, corporate, and embassy procurement requirements in Addis Ababa.',
  },
  {
    question: 'Can Hiwi Catering handle full-day seminars with coffee breaks and lunch?',
    answer:
      'Yes. We offer complete seminar packages including morning highland coffee and tea ceremony with pastries, mid-day hot buffet or executive boxed lunches, and afternoon refreshments.',
  },
  {
    question: 'What menu items work best for bridal and baby showers?',
    answer:
      'For showers, we recommend elegant finger food spreads, mini wraps, gourmet sandwiches, seasoned chicken and beef skewers, colorful fruit bowls, and custom dessert displays, alongside our signature hot buffets.',
  },
];

export default function ShowersAndEventsPage() {
  const serviceSchema = {
    '@type': 'Service',
    name: 'Corporate & Event Catering Services in Addis Ababa',
    serviceType: 'Corporate and Private Event Catering',
    url: 'https://hiwicatering.com/services/showers-and-events',
    provider: HIWI_SCHEMA_PROVIDER,
    areaServed: HIWI_SCHEMA_AREA_SERVED,
    description:
      'Corporate catering, seminar lunch setups, and bridal/baby shower catering in Addis Ababa and Addis Abeba with punctual delivery and high-standard hygiene.',
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
        name: 'Showers & Seminars',
        item: 'https://hiwicatering.com/services/showers-and-events',
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
        breadcrumbLabel="Showers & Seminars"
        title="CORPORATE SEMINARS, SHOWERS & EVENT CATERING IN ADDIS ABABA"
        intro="Whether hosting an executive business workshop in Kazanchis or an intimate bridal or baby shower in Bole, Hiwi Catering delivers polished food service, coffee breaks, and strict schedule punctuality."
        stats={[
          { value: 'Corporate', label: 'Pro-Forma & Receipts' },
          { value: 'Full Day', label: 'Coffee Breaks & Lunch' },
          { value: '100% Hot', label: 'Chafing Dish Buffets' },
        ]}
        inquiryCtaLabel="Request Corporate Quote"
        heroImage="/images/vip-buffet.jpg"
        heroImageAlt="Hiwi Corporate Event and VIP Hospitality Catering Services Addis Ababa"
        aeoQuestion="HOW DOES HIWI CATERING HANDLE CORPORATE SEMINARS & SHOWERS IN ADDIS ABABA?"
        aeoAnswer={
          <>
            For seminars, workshops, bridal showers, and baby showers in Addis Ababa and Addis Abeba,{' '}
            <strong>Hiwi Catering Services</strong> provides structured per-person packages starting from 750 ETB/guest
            (25 to 400+ guests). Corporate and NGO bookings across Kazanchis, Bole, and CMC include formal pro-forma
            quotations, official receipts, punctual morning coffee/Buna breaks, and hot chafing dish buffet or executive
            boxed lunch setups.
          </>
        }
        deliveryStripLabel="Corporate & Event Catering"
        inquiryTitle="PLAN YOUR CORPORATE OR SHOWER CATERING"
        inquirySubtitle="Share your workshop schedule or shower date for a formal quotation within 24 hours."
        faqs={EVENT_FAQS}
        faqTitle="Showers & Seminars FAQs"
        faqSubtitle="Common questions regarding corporate seminar catering, invoicing, and private showers."
        bottomTitle="BOOK YOUR CORPORATE OR PRIVATE EVENT CATERING"
        bottomSubtitle="Official company invoices, timely setup across conference venues, and tailored fasting & meat buffets."
        bottomCtaLabel="Submit Event Inquiry"
      />
    </>
  );
}
