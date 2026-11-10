interface JsonLdProps {
  type?: 'LocalBusiness' | 'Service' | 'FAQPage' | 'BreadcrumbList';
  data?: Record<string, any>;
}

export default function JsonLd({ type = 'LocalBusiness', data }: JsonLdProps) {
  // Master Schema for Hiwi Catering LocalBusiness / FoodEstablishment
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    '@id': 'https://hiwicatering.com/#business',
    name: 'Hiwi Catering Services',
    alternateName: ['Hiwi Catering', 'Hiwi Catering Addis Ababa', 'ኬተሪንግ ሰርቪስ', 'Catering Service in Addis Ababa'],
    slogan: 'The Taste You Love!',
    url: 'https://hiwicatering.com',
    telephone: '+251963138123',
    logo: 'https://hiwicatering.com/images/hiwi-flyer.jpg',
    image: 'https://hiwicatering.com/images/hiwi-flyer.jpg',
    description: 'Premier catering service in Addis Ababa providing full-service wedding catering, birthday catering, graduation banquets, showers, and corporate seminars. Located in Summit Fiyel Bet.',
    servesCuisine: ['Ethiopian', 'Habesha Feast', 'Buffet', 'International Pilaf', 'Vegetarian Fasting'],
    priceRange: '$$ (650 ETB - 1650 ETB per person)',
    currenciesAccepted: 'ETB',
    paymentAccepted: 'Cash, Telebirr, CBE Birr, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Summit Fiyel Bet Area, near CMC & Safari corridor',
      addressLocality: 'Addis Ababa',
      addressRegion: 'Addis Ababa',
      postalCode: '1000',
      addressCountry: 'ET'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.0165,
      longitude: 38.8350
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Addis Ababa' },
      { '@type': 'Place', name: 'Summit' },
      { '@type': 'Place', name: 'CMC' },
      { '@type': 'Place', name: 'Bole' },
      { '@type': 'Place', name: 'Ayat' },
      { '@type': 'Place', name: 'Kazanchis' },
      { '@type': 'Place', name: 'Megenagna' },
      { '@type': 'Place', name: 'Sarbet' },
      { '@type': 'Place', name: 'Old Airport' },
      { '@type': 'Place', name: 'Piassa' },
      { '@type': 'Place', name: 'Lebu' }
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
          'Sunday'
        ],
        opens: '07:00',
        closes: '22:00'
      }
    ],
    sameAs: [
      'https://t.me/hiwicatering'
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
            description: 'Full wedding feast with traditional Melse, Agelgil, and modern chafing dish buffets.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Birthday Catering Service Addis Ababa',
            description: 'Kids and adult birthday catering with custom finger foods and buffets.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Graduation Catering Service Addis Ababa',
            description: 'Generous university and family graduation feast packages.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Showers and Seminar Catering Addis Ababa',
            description: 'Bridal shower, baby shower, and corporate conference food setups.'
          }
        }
      ]
    }
  };

  const schemaContent = data ? { '@context': 'https://schema.org', ...data } : businessSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaContent) }}
    />
  );
}
