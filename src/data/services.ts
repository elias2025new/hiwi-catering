export interface CateringService {
  slug: string;
  title: string;
  amharicTitle: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  menuHighlights: string[];
  capacityRange: string;
  idealFor: string[];
  startingPrice: number; // in ETB per person
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export const CATERING_SERVICES: CateringService[] = [
  {
    slug: "wedding-catering",
    title: "Wedding Catering Services",
    amharicTitle: "የሰርግ ምግብ ዝግጅት",
    tagline: "Unforgettable feasts for your special day in Addis Ababa",
    shortDesc: "Comprehensive wedding banquets featuring traditional Ethiopian Agelgil & Melse celebrations along with modern buffet chafing dish setups.",
    fullDesc: "Hiwi Catering brings elegance and rich culinary heritage to your wedding in Addis Ababa. From pre-wedding festivities to traditional Melse banquets and grand receptions, we handle everything from hot chafing dishes to traditional injera platters with seasoned doro wat, kitfo, and tibs.",
    features: [
      "Custom menus tailored to your guest size (100 to 1,000+ guests)",
      "Traditional Agelgil & modern stainless steel chafing dish setups",
      "Dedicated culinary staff, servers, and table attendants",
      "Full Fasting (Yetsom Beyaynetu) and Non-Fasting (Yefisik) options",
      "Complimentary tasting consultation for the bride & groom"
    ],
    menuHighlights: [
      "Signature Doro Wat with organic local eggs",
      "Freshly prepared Gurage-style Kitfo (mitmita & ayib)",
      "Tender Beef Tibs & Derek Tibs",
      "Aromatic seasoned saffron & vegetable rice pilaf",
      "Abyssinian gourmet salads with house dressing",
      "Fasting Beyaynetu (Misir, Shiro, Gomen, Tikil Gomen, Kik Alicha)"
    ],
    capacityRange: "100 - 1,500+ Guests",
    idealFor: ["Grand Weddings", "Traditional Melse", "Engagement Receptions", "Bridal Dinners"],
    startingPrice: 950,
    image: "/images/hiwi-flyer.jpg",
    seoTitle: "Wedding Catering Services in Addis Ababa | Hiwi Catering",
    seoDescription: "Plan your dream wedding with Hiwi Catering in Addis Ababa. Traditional Agelgil feasts, Melse banquets & hot buffet stations. Book a free tasting today!"
  },
  {
    slug: "birthday-catering",
    title: "Birthday Party Catering",
    amharicTitle: "የልደት ምግብ ዝግጅት",
    tagline: "Flavorful, fun, and hassle-free birthday banquets",
    shortDesc: "Delightful catering for children's parties, milestone birthdays, and family celebrations with mouthwatering finger foods, buffets, and custom setups.",
    fullDesc: "Celebrate birthdays across Addis Ababa without the stress of cooking. Hiwi Catering delivers vibrant buffet spreads, savory finger foods, and wholesome meals designed to please guests of all ages, from toddlers to grandparents.",
    features: [
      "Flexible guest sizes from 30 to 300+ guests",
      "Kids-friendly menu options alongside gourmet traditional items",
      "Buffet presentation with temperature-controlled warmers",
      "On-site setup and clean-up options",
      "Customizable dietary preferences (vegetarian, fasting, gluten-free)"
    ],
    menuHighlights: [
      "Crispy Sambusa (meat & lentil options)",
      "Mini beef & chicken skewers (Tibs on sticks)",
      "Seasoned fried rice & pasta primavera",
      "Traditional mixed meat platter (Injera rolls & wats)",
      "Fresh tropical fruit bowls & vibrant salads"
    ],
    capacityRange: "30 - 300+ Guests",
    idealFor: ["Kids Birthdays", "Sweet 16 / 18th Milestone", "Adult & Golden Celebrations", "Intimate Backyard Parties"],
    startingPrice: 650,
    image: "/images/hiwi-flyer.jpg",
    seoTitle: "Birthday Catering Services in Addis Ababa | Hiwi Catering",
    seoDescription: "Celebrate stress-free with Hiwi Catering in Addis Ababa. Delicious birthday buffets, kids menus, finger foods & traditional wats. Call 0963 138 123 today!"
  },
  {
    slug: "graduation-catering",
    title: "Graduation Catering Services",
    amharicTitle: "የምርቃት ምግብ ዝግጅት",
    tagline: "Honor achievements with a grand culinary banquet",
    shortDesc: "Generous and celebratory feast packages crafted for university and college graduations, welcoming extended family and friends with authentic hospitality.",
    fullDesc: "Graduation is a landmark milestone for Ethiopian families. Hiwi Catering takes pride in preparing generous, festive platters that reflect the pride and warmth of your celebration, delivered hot and fresh anywhere in Addis Ababa.",
    features: [
      "High-volume serving capability for large family gatherings",
      "Combo traditional Habesha platters & modern hot chafing warmers",
      "Prompt delivery and professional buffet setup across Addis Ababa",
      "Generous portion sizes honoring Ethiopian hospitality",
      "Flexible packages for lunch, dinner, or all-day festivities"
    ],
    menuHighlights: [
      "Special Graduation Doro Wat with whole chicken cuts",
      "Siga Wat (Spicy tender beef stew) & Alicha Wat",
      "Special Kitfo with Kocho and Ayib",
      "Spiced yellow rice with caramelized onions & veggies",
      "Crisp garden salad with fresh lime vinaigrette"
    ],
    capacityRange: "50 - 500+ Guests",
    idealFor: ["University Graduations", "College Celebrations", "Family Milestone Honors"],
    startingPrice: 850,
    image: "/images/hiwi-flyer.jpg",
    seoTitle: "Graduation Catering Services in Addis Ababa | Hiwi Catering",
    seoDescription: "Celebrate academic milestone with Hiwi Catering in Addis Ababa. Generous traditional Habesha platters, modern buffets & hot chafing warmers. Book today!"
  },
  {
    slug: "showers-and-events",
    title: "Showers, Seminars & Corporate Events",
    amharicTitle: "የስብሰባ እና ልዩ ዝግጅቶች ምግብ",
    tagline: "Polished corporate seminars, bridal showers, and executive gatherings",
    shortDesc: "Punctual, professional catering for business meetings, conferences, bridal showers, baby showers, and family gatherings.",
    fullDesc: "From executive corporate seminars requiring punctual coffee breaks and gourmet lunches to intimate bridal and baby showers with chic finger foods, Hiwi Catering provides seamless culinary execution for business and private clients across Addis Ababa.",
    features: [
      "Corporate invoicing and structured quote options",
      "Punctual setup honoring your event schedule",
      "Individual lunch boxes or continuous buffet lines",
      "Full coffee and tea ceremony accompaniment",
      "Clean, modern presentation with attentive service"
    ],
    menuHighlights: [
      "Executive buffet with grilled chicken, beef, and steamed veggies",
      "Traditional Ethiopian fasting & non-fasting corporate buffets",
      "Assorted gourmet sandwiches, wraps, and savory pastries",
      "Fresh Ethiopian highland coffee ceremony setup",
      "Custom pastry & dessert displays for bridal & baby showers"
    ],
    capacityRange: "25 - 400+ Guests",
    idealFor: ["Bridal Showers", "Baby Showers", "NGO & Corporate Seminars", "Business Luncheons", "Family Reunions"],
    startingPrice: 750,
    image: "/images/hiwi-flyer.jpg",
    seoTitle: "Corporate & Event Catering Addis Ababa | Hiwi Catering",
    seoDescription: "Professional event catering in Addis Ababa for corporate seminars, business luncheons, bridal & baby showers. Punctual delivery. Book your date today!"
  }
];

export const ADDIS_ABABA_LOCATIONS = [
  { name: "Summit / Fiyel Bet", desc: "Our home headquarters and main commercial kitchen, ensuring rapid dispatch." },
  { name: "CMC & Safari", desc: "Adjacent service zone with lightning-fast delivery and setup." },
  { name: "Bole Sub-City", desc: "Atlas, Rwanda, Medhanialem, Olympia, and Japan areas." },
  { name: "Ayat & Tafo Corridor", desc: "Ayat Condominium, Meri, and surrounding residential communities." },
  { name: "Kazanchis & Kirkos", desc: "Hotels, embassies, and corporate venues." },
  { name: "Megenagna & Yeka", desc: "Gurd Shola, Lem Hotel, and 22 Mazoria zones." },
  { name: "Sarbet & Old Airport", desc: "Private residences, diplomatic halls, and garden venues." },
  { name: "Piassa & Arada", desc: "Historical downtown, heritage halls, and church receptions." },
  { name: "Lebu & Jomo", desc: "South-west Addis residential and private event venues." }
];
