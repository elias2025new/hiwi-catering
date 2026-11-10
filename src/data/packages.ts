export interface CateringPackage {
  id: string;
  name: string;
  amharicName: string;
  pricePerPerson: number; // ETB
  badge?: string;
  minGuests: number;
  description: string;
  includes: string[];
  dishes: string[];
  recommendedFor: string;
}

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: "silver-buffet",
    name: "Classic Celebration Tier",
    amharicName: "መደበኛ ዝግጅት",
    pricePerPerson: 750,
    minGuests: 40,
    description: "Great value buffet package suited for birthday parties, family get-togethers, and intimate gatherings.",
    includes: [
      "Stainless steel chafing dish warmers setup",
      "Disposable plates, cutlery & napkins",
      "1 Dedicated buffet assistant",
      "Setup 1 hour prior to event start"
    ],
    dishes: [
      "Spicy Beef Tibs / Siga Wat",
      "Seasoned Yellow Rice Pilaf",
      "Vegetable Pasta Primavera",
      "Fresh Garden Salad with House Dressing",
      "Crispy Sambusa (1 per guest)",
      "Traditional Injera"
    ],
    recommendedFor: "Birthdays, Family Reunions, Informal Showers"
  },
  {
    id: "gold-habesha",
    name: "Royal Habesha Banquet Tier",
    amharicName: "ልዩ የሀበሻ ግብዣ",
    pricePerPerson: 1150,
    badge: "Most Popular",
    minGuests: 50,
    description: "Our hallmark traditional Ethiopian feast. Lavish wats, succulent meats, fresh kitfo, and fasting options.",
    includes: [
      "Traditional Agelgil or deluxe stainless buffet presentation",
      "Ceramic plates, metallic cutlery, and linen napkins",
      "2 Professional uniformed buffet attendants",
      "Traditional Ethiopian Coffee Ceremony (Buna) setup",
      "Full clean-up service after meal"
    ],
    dishes: [
      "Signature Doro Wat with tender chicken and boiled eggs",
      "Authentic Gurage Kitfo with Ayib & Gomen",
      "Juicy Derek Tibs with rosemary & green chilies",
      "Special Fasting Beyaynetu (Misir, Shiro, Tikil Gomen)",
      "Aromatic Spiced Rice Pilaf",
      "Fresh Injera & Bread rolls"
    ],
    recommendedFor: "Graduations, Engagements, Family Milestones"
  },
  {
    id: "platinum-wedding",
    name: "Grand Wedding Majesty Tier",
    amharicName: "የሰርግ ክብረ በዓል",
    pricePerPerson: 1650,
    badge: "Ultimate Luxury",
    minGuests: 100,
    description: "The complete VIP wedding feast for couples who desire culinary excellence, flawless service, and regal presentation.",
    includes: [
      "Full VIP banquet chafing stations & Agelgil centerpieces",
      "Dedicated Chef on-site & head server coordinator",
      "Full table service or multi-line buffet management",
      "Traditional Ethiopian Coffee Ceremony with incense & popcorn",
      "Pre-wedding menu tasting session for the bride & groom",
      "Full cleanup and pack-away service"
    ],
    dishes: [
      "Grand Doro Wat with seasoned farm eggs",
      "Prime Beef Tibs & Siga Wat",
      "Fresh Special Kitfo with seasoned butter & Ayib",
      "Gourmet Fasting Delicacies (5 varieties of wats & salads)",
      "Seasoned Saffron Rice & Buttered Herb Potatoes",
      "Signature Abyssinian salad platter",
      "Assorted dessert bites & seasonal fresh fruit display"
    ],
    recommendedFor: "Weddings, Traditional Melse, High-Profile Corporate Galas"
  }
];
