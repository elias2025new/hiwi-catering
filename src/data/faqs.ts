export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const CATERING_FAQS: FaqItem[] = [
  {
    question: "Where is Hiwi Catering located and which areas near Summit, Ayat, and Bole do you serve?",
    answer: "Hiwi Catering is headquartered in Summit Fiyel Bet, Addis Ababa (Addis Abeba), at Plus Code XVW2+PCH (8.996818, 38.851122). From our central kitchen, we provide rapid hot buffet dispatch across Bole Sub-City (Atlas, Medhanialem, Rwanda, Gerji, Bole Bulbula), Ayat & Tafo Corridor (Ayat Condominium, Meri), CMC, Kazanchis, Megenagna, Sarbet, Old Airport, Piassa, and Lebu.",
    category: "General"
  },
  {
    question: "What types of catering services do you offer?",
    answer: "Hiwi Catering provides full-service catering across Addis Ababa for Weddings (including traditional Melse feasts), Birthday Parties (kids and adults), Graduation Celebrations, Bridal & Baby Showers, Seminars, Corporate Luncheons, and Family Gatherings. We provide food preparation, stainless steel chafing dish buffets, traditional Agelgil setups, uniformed waitstaff, and full clean-up.",
    category: "Services"
  },
  {
    question: "Do you offer both Fasting (Yetsom) and Non-Fasting (Yefisik) menus?",
    answer: "Yes, absolutely. Hiwi Catering specializes in authentic Ethiopian cuisine. We prepare dedicated Fasting menus (Yetsom Beyaynetu including Shiro, Misir, Gomen, Kik Alicha, and fresh salads) adhering strictly to Ethiopian Orthodox fasting traditions, as well as rich non-fasting feasts (Doro Wat, Siga Wat, Kitfo, and Tibs).",
    category: "Menu"
  },
  {
    question: "How much does catering cost in Addis Ababa with Hiwi Catering?",
    answer: "Our catering packages start at 750 ETB per person for classic celebrations, birthdays, and seminars, 1,150 ETB per person for our Royal Habesha Banquet, and 1,650 ETB per person for all-inclusive Grand Wedding packages. Final pricing depends on your confirmed guest count, menu selection, and service requirements. Custom estimates can be requested via our inquiry form or Telegram (@hiwicatering).",
    category: "Pricing"
  },
  {
    question: "How far in advance should we book Hiwi Catering for an event?",
    answer: "For major celebrations such as weddings and large graduation banquets (100+ guests), we recommend booking 3 to 6 weeks in advance to reserve your preferred date. For birthdays, showers, and smaller corporate seminars (30-80 guests), bookings can typically be accommodated with 4 to 7 days notice depending on availability.",
    category: "Booking"
  },
  {
    question: "Do you supply plates, warmers, and servers for the event?",
    answer: "Yes. Our packages include heavy-duty stainless steel chafing dishes (bain-marie warmers) to keep all stews, meats, and rice piping hot throughout your celebration. Depending on the chosen tier, we supply serving utensils, diningware, and polite, uniformed servers and buffet attendants to manage food replenishment.",
    category: "Equipment & Staff"
  },
  {
    question: "How can I inquire or book Hiwi Catering for an event?",
    answer: "You can use our online Event Inquiry form on this website to share your event type, date, location in Addis Ababa, and details. You can also message us directly on Telegram (@hiwicatering) or call 0963 138 123 for immediate inquiries, menu customization, and tasting session scheduling.",
    category: "Booking"
  }
];
