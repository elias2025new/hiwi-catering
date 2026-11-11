export interface LocationFaq {
  question: string;
  answer: string;
}

export interface CateringLocationGuide {
  slug: string;
  name: string;
  shortName: string;
  subCityLabel: string;
  seoTitle: string;
  seoDescription: string;
  heroBadge: string;
  h1: string;
  dispatchTime: string;
  distanceFromKitchen: string;
  neighborhoodsCovered: string[];
  popularEvents: string[];
  venueLogisticsNote: string;
  localSummary: string;
  recommendedTierNote: string;
  highlights: {
    title: string;
    detail: string;
  }[];
  faqs: LocationFaq[];
  priorityOrder: number;
}

export const CATERING_LOCATIONS: CateringLocationGuide[] = [
  {
    slug: "bole",
    name: "Bole Sub-City",
    shortName: "Bole",
    subCityLabel: "Bole Sub-City • Addis Ababa / Abeba",
    seoTitle: "Catering in Bole Addis Ababa & Abeba | Hiwi Catering",
    seoDescription:
      "Fast, hot event catering in Bole Sub-City (Atlas, Medhanialem, Rwanda, Bole Bulbula & Gerji). Weddings, corporate buffets & family feasts. Call 0963 138 123.",
    heroBadge: "Priority Delivery Zone • Bole Sub-City",
    h1: "CATERING SERVICES IN BOLE, ADDIS ABABA",
    dispatchTime: "15 – 25 mins from Summit Kitchen",
    distanceFromKitchen: "Direct Ring Road & Gerji–CMC Corridor",
    neighborhoodsCovered: [
      "Bole Medhanialem",
      "Atlas & Edna Mall Corridor",
      "Rwanda & Cameroon Street",
      "Bole Bulbula & Bole Arabsa Link",
      "Gerji & Imperial",
      "Olympia & Japan Embassy Area",
    ],
    popularEvents: [
      "Hotel & Hall Wedding Receptions",
      "Corporate Conferences & Diplomatic Dinners",
      "Apartment & Villa Family Gatherings",
      "Milestone Birthdays & Bridal Showers",
    ],
    venueLogisticsNote:
      "Bole events often take place in multi-story banquet halls, boutique hotels, and gated villa compounds with scheduled loading windows. Our crew arrives 60 to 90 minutes before service with insulated gastronorm carriers and stainless steel chafing warmers so food arrives steaming hot.",
    localSummary:
      "Looking for reliable catering near you in Bole, Addis Ababa or Addis Abeba? Hiwi Catering serves every neighborhood in Bole Sub-City—from busy corporate offices around Atlas and Olympia to family homes in Gerji and Bole Bulbula. Guests consistently choose our dual-cuisine spreads blending authentic Doro Wat, Kitfo, and Fasting Beyaynetu with international saffron rice and crisp salads.",
    recommendedTierNote:
      "Bole corporate clients frequently book our Classic & Executive buffet options (750+ ETB/guest), while Bole Medhanialem weddings and diplomatic compound dinners gravitate toward our Royal Habesha Banquet (1,150 ETB) and Grand Wedding Majesty (1,650 ETB) packages.",
    highlights: [
      {
        title: "Punctual Hall & Compound Load-In",
        detail:
          "Coordinated vehicle access and clean stainless steel chafing dish staging tailored for Bole villas, apartments, and rented event halls.",
      },
      {
        title: "Habesha + International Menu Balance",
        detail:
          "Ideal for diverse corporate teams, diaspora guests, and embassy gatherings needing mild fasting dishes alongside signature Ethiopian feasts.",
      },
      {
        title: "Hot-Hold Temperature Control",
        detail:
          "Heavy-duty bain-marie chafing warmers keep Tibs, Wats, and Saffron Pilaf hot throughout extended speeches and toasts.",
      },
    ],
    faqs: [
      {
        question: "How quickly can Hiwi Catering deliver to Bole Sub-City?",
        answer:
          "From our commercial kitchen near Summit Fiyel Bet (Plus Code XVW2+PCH), hot dispatch to Gerji, Bole Bulbula, Atlas, and Medhanialem typically takes 15 to 25 minutes. Our crew reaches your venue 1 hour before dining starts to finish buffet setup calmly.",
      },
      {
        question: "Do you cater corporate seminars and apartment gatherings in Bole?",
        answer:
          "Yes. We cater NGO workshops, office luncheons, and diplomatic or family compound events across Bole Rwanda, Atlas, Olympia, and Bole Arabsa with complete buffet setups or individual meal boxes.",
      },
      {
        question: "Can we request both Fasting (Tsom) and non-fasting menus in Bole?",
        answer:
          "Yes. Every Bole catering booking can run separate fasting (Yetsom Beyaynetu: Shiro, Misir, Gomen, Kik Alicha, salads) and non-fasting (Doro Wat, Kitfo, Derek Tibs) lines with zero cross-contamination.",
      },
    ],
    priorityOrder: 1,
  },
  {
    slug: "ayat",
    name: "Ayat & Tafo Corridor",
    shortName: "Ayat",
    subCityLabel: "Ayat & Lemi Kura / Yeka • Addis Ababa / Abeba",
    seoTitle: "Catering in Ayat Addis Ababa & Abeba | Hiwi Catering",
    seoDescription:
      "Express hot catering in Ayat, Ayat Condominium, Meri & Tafo from our neighboring Summit kitchen. Graduations, birthdays & Melse banquets. Call 0963 138 123.",
    heroBadge: "Express Neighboring Zone • Ayat Corridor",
    h1: "CATERING SERVICES IN AYAT, ADDIS ABABA",
    dispatchTime: "10 – 15 mins Express Dispatch",
    distanceFromKitchen: "Adjacent to Summit Fiyel Bet Kitchen",
    neighborhoodsCovered: [
      "Ayat Condominium Zones 1 – 7",
      "Ayat Real Estate & Villages",
      "Meri & CMC East Extension",
      "Tafo & Kara Corridor",
      "Summit Safari – Ayat Link Road",
      "Tsebel & Church Grounds",
    ],
    popularEvents: [
      "Home & Tent Graduation Celebrations",
      "Traditional Melse & Family Reunions",
      "Kids & Adult Compound Birthday Parties",
      "Mahber, Christening & Memorial Feasts",
    ],
    venueLogisticsNote:
      "Ayat celebrations commonly feature spacious home compounds, condominium courtyards, and tented marquee gatherings (100 to 500+ guests). Because Ayat borders our Summit Fiyel Bet kitchen directly, we replenish fresh injera, hot wats, and buna service rapidly with minimal traffic risk.",
    localSummary:
      "Searching for catering near me in Ayat, Meri, or Tafo? Hiwi Catering operates right next door at Summit Fiyel Bet (8.996818, 38.851122), making us the fastest hot-kitchen caterer for families living across Ayat Condominium and Ayat Village in Addis Ababa / Addis Abeba.",
    recommendedTierNote:
      "Ayat families overwhelmingly favor our Classic Celebration Tier (750 ETB/guest) for vibrant compound birthdays and our generous Royal Habesha Banquet (1,150 ETB/guest) with Doro Wat, Kitfo, Derek Tibs, and live Ethiopian coffee ceremony for graduations and Melse feasts.",
    highlights: [
      {
        title: "Next-Door Express Kitchen Advantage",
        detail:
          "At only 10 to 15 minutes from our Summit preparation facility, stews, tibs, and baked items arrive straight from the stove.",
      },
      {
        title: "Tent & Compound Banquet Staging",
        detail:
          "Configured for outdoor garden tents, residential courtyards, and multi-station self-serve or attendant-led buffet lines.",
      },
      {
        title: "Generous Ethiopian Family Portions",
        detail:
          "Crafted for extended family hospitality—abundant fresh teff injera, rich berbere wats, ayib, and traditional Buna ceremony options.",
      },
    ],
    faqs: [
      {
        question: "Does Hiwi Catering charge high delivery fees for Ayat Condominium or Tafo?",
        answer:
          "No—because our main commercial kitchen is in the adjoining Summit Fiyel Bet corridor, Ayat, Meri, and Tafo are among our closest, most cost-efficient delivery zones in all of Addis Ababa.",
      },
      {
        question: "Can you serve large compound marquee tents in Ayat Village?",
        answer:
          "Yes. We regularly serve 100 to 500+ guest tented graduation, wedding, and Melse banquets in Ayat compounds using multiple hot bain-marie lines and uniformed waitstaff.",
      },
      {
        question: "Can we visit your kitchen before booking for an Ayat event?",
        answer:
          "Yes! Our Summit Fiyel Bet base (Plus Code XVW2+PCH) is a few minutes from Ayat roundabout. Call 0963 138 123 or message @hiwicatering to arrange an appointment or tasting.",
      },
    ],
    priorityOrder: 2,
  },
  {
    slug: "summit-and-cmc",
    name: "Summit Fiyel Bet & CMC",
    shortName: "Summit & CMC",
    subCityLabel: "Home Headquarters • Lemi Kura, Addis Ababa / Abeba",
    seoTitle: "Catering in Summit & CMC Addis Ababa | Hiwi Catering",
    seoDescription:
      "Headquartered at Summit Fiyel Bet (XVW2+PCH). Same-neighborhood hot buffet catering across Summit, CMC, Safari & Gurd Shola. Call 0963 138 123.",
    heroBadge: "Kitchen Headquarters • Summit Fiyel Bet",
    h1: "CATERING IN SUMMIT FIYEL BET & CMC",
    dispatchTime: "5 – 12 mins Same-Zone Dispatch",
    distanceFromKitchen: "0 – 4 km from Summit Fiyel Bet (8.996818, 38.851122)",
    neighborhoodsCovered: [
      "Summit Fiyel Bet (Kitchen HQ)",
      "Summit Condominium & Safari",
      "CMC Michael & TSEDEY Bank Area",
      "Altad & St. Gabriel Corridor",
      "Gurd Shola Border",
    ],
    popularEvents: [
      "Apartment Housewarmings & Birthdays",
      "Weddings, Melse & Engagements",
      "Private Menu Tastings near HQ",
      "School & Community Banquets",
    ],
    venueLogisticsNote:
      "Operating directly out of Summit Fiyel Bet lets us accommodate tighter turnaround times for local CMC and Summit families, provide mid-event hot pan top-ups if guest counts grow, and host in-person wedding menu consultations close to home.",
    localSummary:
      "When residents search for catering near Summit Fiyel Bet or CMC in Addis Ababa (Addis Abeba), Hiwi Catering is your local neighborhood kitchen. Located at Plus Code XVW2+PCH, we deliver piping-hot Ethiopian and continental buffets within minutes across Summit, Safari, and CMC Michael.",
    recommendedTierNote:
      "All three signature packages—Classic (750 ETB), Royal Habesha Banquet (1,150 ETB), and Grand Wedding Majesty (1,650 ETB)—are available with priority same-zone scheduling and flexible guest minimums starting from 30–40 guests for local birthdays and showers.",
    highlights: [
      {
        title: "Headquarters Right in Summit Fiyel Bet",
        detail:
          "Exact kitchen location pinned at 8.996818, 38.851122 (XVW2+PCH) for trusted local accountability and freshness.",
      },
      {
        title: "Fastest Restocking & Tasting Access",
        detail:
          "Proximity to CMC and Safari simplifies pre-event tastings for engaged couples and rapid on-site staffing.",
      },
      {
        title: "Flexible Neighborhood Minimums",
        detail:
          "Well-suited for 30-guest family dinners in Summit apartments up to 1,000+ guest church hall weddings.",
      },
    ],
    faqs: [
      {
        question: "Where exactly is Hiwi Catering located in Summit?",
        answer:
          "Our commercial preparation kitchen is located in the Summit Fiyel Bet area of Addis Ababa (Plus Code XVW2+PCH, coordinates 8.996818, 38.851122), minutes from CMC Michael and Safari.",
      },
      {
        question: "Do you support small family birthdays in Summit Condominium or CMC?",
        answer:
          "Yes! Because we are right in your neighborhood, we happily prepare hot buffet spreads for intimate 30 to 60 guest home and apartment gatherings.",
      },
    ],
    priorityOrder: 3,
  },
  {
    slug: "kazanchis-and-kirkos",
    name: "Kazanchis & Kirkos",
    shortName: "Kazanchis",
    subCityLabel: "Kirkos Sub-City • Addis Ababa / Abeba",
    seoTitle: "Corporate & Event Catering in Kazanchis | Hiwi Catering",
    seoDescription:
      "Punctual corporate seminars, NGO luncheons, and social event catering in Kazanchis & Kirkos, Addis Ababa. Official invoices & hot buffets. Call 0963 138 123.",
    heroBadge: "Business & NGO District • Kazanchis & Kirkos",
    h1: "CATERING SERVICES IN KAZANCHIS & KIRKOS",
    dispatchTime: "20 – 30 mins via Megenagna – Kazanchis Link",
    distanceFromKitchen: "Direct Central East-West Highway",
    neighborhoodsCovered: [
      "Kazanchis Business & UN/ECA District",
      "Bambis & Urael",
      "Meskel Square & Stadium Corridor",
      "Mexico & Kirkos Sub-City",
      "Cherkos & Olympia North",
    ],
    popularEvents: [
      "Full-Day Workshops & Training Seminars",
      "Morning Buna Coffee Breaks & Afternoon Snacks",
      "Executive Board Luncheons",
      "Office Year-End & Team Celebrations",
    ],
    venueLogisticsNote:
      "Conference catering in Kazanchis runs strictly by agenda slots—a 10:30 AM coffee break or 12:30 PM working lunch cannot wait. Our crew stages silent chafing setups before keynote sessions break and supports formal NGO/corporate invoicing.",
    localSummary:
      "Need dependable catering in Kazanchis or Kirkos? Hiwi Catering partners with offices, NGOs, training halls, and social venues across central Addis Ababa / Addis Abeba for strictly punctual hot buffets, executive boxed meals, and traditional Ethiopian highland coffee ceremonies.",
    recommendedTierNote:
      "Organizations typically pair our Seminar Coffee & Lunch packages (from 750 ETB/person) with structured fasting and non-fasting trays so international staff and Ethiopian colleagues dine comfortably together.",
    highlights: [
      {
        title: "Official Quotations & Procurement Invoices",
        detail:
          "Clear pro-forma quotations, transparent ETB per-person breakdowns, and receipts suited for institutional finance teams.",
      },
      {
        title: "Timed Agenda Precision",
        detail:
          "Staggered arrival for morning pastry breaks, midday hot lunch service, and afternoon refreshments with quiet pack-up.",
      },
      {
        title: "Fasting & International Mixed Menus",
        detail:
          "Dedicated Yetsom Beyaynetu trays alongside grilled meats, pilaf, and crisp garden salads.",
      },
    ],
    faqs: [
      {
        question: "Do you provide official pro-forma quotes for Kazanchis offices and NGOs?",
        answer:
          "Yes. Submit your seminar date, guest count, and requirements via our Event Inquiry form or Telegram (@hiwicatering) and we provide itemized ETB quotations and tax receipts.",
      },
      {
        question: "Can you provide morning coffee breaks plus lunch for all-day Kazanchis seminars?",
        answer:
          "Yes. We deliver freshly brewed Ethiopian coffee and spiced tea with pastries in the morning, followed by hot buffet or executive lunch service at noon.",
      },
    ],
    priorityOrder: 4,
  },
  {
    slug: "sarbet-and-old-airport",
    name: "Sarbet & Old Airport",
    shortName: "Sarbet & Old Airport",
    subCityLabel: "Nifas Silk-Lafto & Lideta • Addis Ababa / Abeba",
    seoTitle: "Catering in Sarbet & Old Airport Addis Ababa | Hiwi Catering",
    seoDescription:
      "Refined villa, embassy & garden catering in Sarbet, Bisrate Gabriel & Old Airport, Addis Ababa. Bridal showers, weddings & family feasts. Call 0963 138 123.",
    heroBadge: "Garden Estates & Private Villas • Southwest Addis",
    h1: "CATERING IN SARBET & OLD AIRPORT, ADDIS ABABA",
    dispatchTime: "25 – 35 mins via Ring Road",
    distanceFromKitchen: "Express Ring Road Access from Summit",
    neighborhoodsCovered: [
      "Old Airport & Diplomatic Compounds",
      "Sarbet & Pushkin Square",
      "Bisrate Gabriel",
      "Mekanisa & Lebu Link",
      "Tor Hailoch & Lideta Border",
    ],
    popularEvents: [
      "Garden Weddings & Engagement Receptions",
      "Bridal & Baby Showers",
      "Embassy & Private Villa Dinners",
      "Sunday Extended Family Feasts",
    ],
    venueLogisticsNote:
      "Private estates and garden lawns around Old Airport and Sarbet prioritize discreet staff presentation, spotless table linen styling, and protective floor/lawn staging. Our uniformed attendants coordinate smoothly around compound security and outdoor seating.",
    localSummary:
      "Planning an outdoor garden party, bridal shower, or formal dinner near Sarbet, Bisrate Gabriel, or Old Airport? Hiwi Catering brings complete polished banquet stations, porcelain tableware, and heritage Ethiopian cooking across southwest Addis Ababa / Addis Abeba.",
    recommendedTierNote:
      "Host families in Old Airport and Sarbet frequently customize our Royal Habesha Banquet (1,150 ETB/guest) and Grand Wedding Majesty (1,650 ETB/guest) with porcelain place settings, finger-food starters, and on-site coffee ceremony service.",
    highlights: [
      {
        title: "Refined Garden & Estate Presentation",
        detail:
          "Crisp linens, polished stainless bain-maries, and courteous uniformed attendants suited for formal private compounds.",
      },
      {
        title: "Custom Showers & Reception Canapés",
        detail:
          "Finger foods, crispy sambusas, grilled skewers, and artisanal dessert bites paired cleanly with full hot dinner lines.",
      },
      {
        title: "Seamless Southwest Delivery",
        detail:
          "Thermal-sealed transit via Addis Ring Road keeps Doro Wat, Kitfo, and rice pilaf at serving temperature.",
      },
    ],
    faqs: [
      {
        question: "Do you serve Old Airport, Sarbet, and nearby Mekanisa/Lebu venues?",
        answer:
          "Yes. Our mobile catering trucks cover Sarbet, Old Airport, Bisrate Gabriel, Mekanisa, and Lebu regularly for private garden parties, showers, and family celebrations.",
      },
      {
        question: "Do you bring ceramic plates, cutlery, and waitstaff to Sarbet villa events?",
        answer:
          "Yes. Our Royal Habesha Banquet (1,150 ETB) and Grand Wedding Majesty (1,650 ETB) tiers include ceramic plates, metallic cutlery, linen napkins, chafing warmers, and uniformed attendants.",
      },
    ],
    priorityOrder: 5,
  },
];

export function getLocationBySlug(slug: string): CateringLocationGuide | undefined {
  return CATERING_LOCATIONS.find((loc) => loc.slug === slug);
}
