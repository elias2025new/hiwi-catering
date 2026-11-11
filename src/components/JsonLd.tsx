interface JsonLdProps {
  type?: 'LocalBusiness' | 'Service' | 'FAQPage' | 'BreadcrumbList';
  data?: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  if (data) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', ...data }) }}
      />
    );
  }

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://hiwicatering.com/#website',
        url: 'https://hiwicatering.com',
        name: 'Hiwi Catering Services',
        alternateName: 'Hiwi Catering Addis Ababa & Addis Abeba',
        inLanguage: 'en',
        publisher: {
          '@id': 'https://hiwicatering.com/#business',
        },
      },
      {
        '@type': 'FoodEstablishment',
        '@id': 'https://hiwicatering.com/#business',
        name: 'Hiwi Catering Services',
        alternateName: [
          'Hiwi Catering',
          'Hiwi Catering Addis Ababa',
          'Hiwi Catering Addis Abeba',
          'ኬተሪንግ ሰርቪስ',
          'Catering Service in Addis Ababa',
        ],
        slogan: 'The Taste You Love!',
        url: 'https://hiwicatering.com',
        telephone: '+251963138123',
        logo: 'https://hiwicatering.com/icon.svg',
        image: [
          'https://hiwicatering.com/images/wedding-catering.jpg',
          'https://hiwicatering.com/images/corporate-catering.jpg',
          'https://hiwicatering.com/images/gallery-3.jpg',
        ],
        description:
          'Full-service Ethiopian and international catering in Addis Ababa and Addis Abeba for weddings, birthdays, graduations, bridal showers, and corporate seminars. Commercial kitchen headquartered in Summit Fiyel Bet (XVW2+PCH) with rapid dispatch to Bole, Ayat, CMC, and all 11 sub-cities.',
        servesCuisine: ['Ethiopian', 'Habesha Feast', 'Buffet', 'International Pilaf', 'Vegetarian Fasting'],
        priceRange: '$$ (750 ETB - 1,650 ETB per person)',
        currenciesAccepted: 'ETB',
        paymentAccepted: 'Cash, Telebirr, CBE Birr, Bank Transfer',
        hasMap: 'https://maps.app.goo.gl/HKTMRDEuVvdDDnnN6',
        hasMenu: 'https://hiwicatering.com/pricing',
        menu: 'https://hiwicatering.com/pricing',
        potentialAction: {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://hiwicatering.com/inquiry',
            actionPlatform: [
              'https://schema.org/DesktopWebPlatform',
              'https://schema.org/MobileWebPlatform',
            ],
          },
          result: {
            '@type': 'Reservation',
            name: 'Event Catering Quote & Reservation',
          },
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Summit Fiyel Bet Area (Plus Code XVW2+PCH)',
          addressLocality: 'Addis Ababa',
          addressRegion: 'Addis Ababa',
          postalCode: '1000',
          addressCountry: 'ET',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 8.996818,
          longitude: 38.851122,
        },
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Addis Ababa',
            sameAs: 'https://www.wikidata.org/wiki/Q3624',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Addis Abeba',
            sameAs: 'https://www.wikidata.org/wiki/Q3624',
          },
          { '@type': 'Place', name: 'Bole Sub-City' },
          { '@type': 'Place', name: 'Ayat & Tafo Corridor' },
          { '@type': 'Place', name: 'Summit Fiyel Bet' },
          { '@type': 'Place', name: 'CMC' },
          { '@type': 'Place', name: 'Kazanchis' },
          { '@type': 'Place', name: 'Megenagna' },
          { '@type': 'Place', name: 'Sarbet' },
          { '@type': 'Place', name: 'Old Airport' },
          { '@type': 'Place', name: 'Piassa' },
          { '@type': 'Place', name: 'Lebu' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '07:00',
            closes: '22:00',
          },
        ],
        sameAs: [
          'https://t.me/hiwicatering',
          'https://maps.app.goo.gl/HKTMRDEuVvdDDnnN6',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Hiwi Catering Services Menu',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Wedding Catering Service Addis Ababa',
                description: 'Full wedding feast with traditional Melse, Agelgil, and modern chafing dish buffets.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Birthday Catering Service Addis Ababa',
                description: 'Kids and adult birthday catering with custom finger foods and buffets.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Graduation Catering Service Addis Ababa',
                description: 'Generous university and family graduation feast packages.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Showers and Seminar Catering Addis Ababa',
                description: 'Bridal shower, baby shower, and corporate conference food setups.',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
    />
  );
}
