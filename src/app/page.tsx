'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Star, 
  MapPin,
  Phone, 
  PhoneCall, 
  Send, 
  Sparkles, 
  Leaf, 
  Award, 
  ChevronDown, 
  Plus, 
  Minus, 
  CheckCircle, 
  Calendar, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { CATERING_SERVICES } from '@/data/services';
import { CATERING_FAQS } from '@/data/faqs';
import InquiryForm from '@/components/InquiryForm';

export default function HomePage() {
  // Testimonials state
  const testimonials = [
    {
      quote: "Thank you Hiwi Catering so much for everything! Our wedding reception was a huge success, and we had the best night ever!! Your reliability, punctuality, and delicious hot food brought us so much relief during planning. Our guests are still raving about the doro wat and fresh buffet spread!",
      author: "Selam & Dawit",
      event: "Grand Wedding Reception, Bole",
      image: "/images/testimonial-couple.jpg"
    },
    {
      quote: "Exceptional catering service for our corporate annual conference in Kazanchis. The VIP buffet was impeccably arranged in warm chafing dishes, the fasting options were generous and colorful, and the uniformed staff were polite and attentive throughout.",
      author: "Yonas Mekonnen",
      event: "Executive Corporate Seminar, Kazanchis",
      image: "/images/corporate-catering.jpg"
    },
    {
      quote: "We hired Hiwi Catering for our daughter's graduation celebration in CMC with 120 guests. The setup was ready 1 hour ahead of time, portions were abundant, and every dish tasted like premium authentic home cooking. 10/10 recommended!",
      author: "W/ro Almaz Tadesse",
      event: "Graduation Celebration, CMC",
      image: "/images/social-catering.jpg"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Structured Data: FAQPage Schema for Google Rich Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CATERING_FAQS.slice(0, 5).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* Google FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Johnny Burke Full-Screen Atmospheric Hero)                */}
      {/* ========================================================================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:py-20 overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hiwi Catering Service in Addis Ababa - Wedding, Buffet, and Event Catering"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-6 pt-0 sm:pt-4">
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.12] sm:leading-[1.08] font-sans drop-shadow-md">
            CATERING SERVICE IN ADDIS ABABA FOR WEDDINGS, EVENTS &amp; PARTIES
          </h1>

          {/* Formatted Sub-Description */}
          <div className="space-y-3 max-w-xl mx-auto">
            <p className="text-xs sm:text-base md:text-lg text-gray-200 font-normal leading-relaxed max-w-md sm:max-w-xl mx-auto drop-shadow">
              Authentic Habesha banquets &amp; modern chafing buffets delivered fresh across all 11 sub-cities.
            </p>

            {/* Structured Value Badges - Formatted to fit beautifully on mobile */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 pt-0.5 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              <span className="px-2.5 py-1 bg-black/45 backdrop-blur-sm rounded border border-white/15 text-gray-200 shadow-sm">
                Weddings &amp; Events
              </span>
              <span className="px-2.5 py-1 bg-black/45 backdrop-blur-sm rounded border border-white/15 text-gray-200 shadow-sm">
                100% Hot Buffets
              </span>
              <span className="px-2.5 py-1 bg-black/45 backdrop-blur-sm rounded border border-hiwi-gold/40 text-hiwi-gold shadow-sm font-black">
                &ldquo;The Taste You Love!&rdquo;
              </span>
            </div>
          </div>

          {/* Dual Action Buttons matching Johnny Burke */}
          <div className="pt-10 sm:pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            {/* White Solid Button */}
            <a
              href="#inquiry-form"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-black font-extrabold uppercase text-xs tracking-[0.2em] transition-all duration-200 shadow-lg text-center"
            >
              GET MY CUSTOM QUOTE
            </a>

            {/* Outline Phone Button */}
            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto px-8 py-3 sm:py-3.5 border-2 border-white hover:bg-white hover:text-black text-white font-extrabold uppercase text-xs tracking-[0.2em] transition-all duration-200 shadow-lg inline-flex items-center justify-center gap-2.5 text-center"
              aria-label="Call Hiwi Catering at 0963 138 123"
            >
              <Phone className="w-4 h-4" />
              <span>0963 138 123</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS COUNTER STRIP (Johnny Burke Dark Band)                           */}
      {/* ========================================================================= */}
      <section className="bg-[#1F2024] text-white py-10 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Stat 1 */}
          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              500+
            </span>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              <Users className="w-4 h-4 text-hiwi-gold" />
              <span>HAPPY CLIENTS</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              5/5
            </span>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              <Star className="w-4 h-4 text-hiwi-gold fill-hiwi-gold" />
              <span>AVERAGE RATING</span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              11
            </span>
            <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-bold">
              <MapPin className="w-4 h-4 text-hiwi-gold" />
              <span>SUB-CITIES COVERED</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CATERING FOR EVERY OCCASION (3 Column Cards)                           */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-black">
            CATERING FOR EVERY OCCASION
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Whether you&apos;re planning an intimate wedding, corporate event, or social gathering, we bring the same level of excellence to every celebration.
          </p>
        </div>

        {/* 3 Occasion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Card 1: Weddings */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/wedding-catering.jpg"
                alt="Full-Service Wedding Catering Addis Ababa - Hiwi Catering"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                WEDDINGS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                Your wedding deserves food and service that feel effortless and exceptional. As a full-service catering partner, we take care of every detail, so your day is joyful, memorable, and completely yours.
              </p>
              <Link
                href="/services/wedding-catering"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 2: Corporate Events */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/corporate-catering.jpg"
                alt="Corporate Conference and Seminar Catering Addis Ababa - Hiwi Catering"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                CORPORATE EVENTS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                Elevate your next meeting or gala with Addis Ababa&apos;s trusted corporate caterer. From executive lunches to large-scale events, we deliver exceptional cuisine, seamless service, and a polished experience.
              </p>
              <Link
                href="/services/showers-and-events"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 3: Social & Family */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/social-catering.jpg"
                alt="Birthday Party, Graduation and Social Event Catering in Addis Ababa"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                SOCIAL CELEBRATIONS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                We are a full-service catering company that believes events are about more than food—they&apos;re about creating a personalized experience, reflecting your style, and delighting your guests.
              </p>
              <Link
                href="/services/birthday-catering"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT OUR CLIENTS SAY (Johnny Burke Dark Testimonial Spotlight)         */}
      {/* ========================================================================= */}
      <section className="bg-[#24252A] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-white">
              WHAT OUR CLIENTS SAY
            </h2>
            <div className="w-12 h-0.5 bg-white mx-auto my-4" />
          </div>

          {/* Two-Column Testimonial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
            
            {/* Left Column: Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt="Hiwi Catering Client Testimonial - Wedding Celebration in Addis Ababa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Right Column: Star Rating, Quote & Author */}
            <div className="lg:col-span-7 space-y-6">
              {/* 5 Stars */}
              <div className="flex items-center gap-1.5 text-hiwi-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-hiwi-gold" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-sm sm:text-base md:text-lg text-gray-200 font-light leading-relaxed italic">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </blockquote>

              {/* Author & Event */}
              <div>
                <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  — {testimonials[activeTestimonial].author}
                </div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-light">
                  {testimonials[activeTestimonial].event}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="w-10 h-10 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs text-gray-400 tracking-widest uppercase px-2 font-mono">
                  {activeTestimonial + 1} / {testimonials.length}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="w-10 h-10 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. A SNEAK PEEK AT OUR MENU (3 Menu Cards)                                */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-black">
            A SNEAK PEEK AT OUR MENU
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Exceptional menus for every season &amp; celebration. From intimate dinner parties to grand celebrations, our specialty menus can be fully customized to reflect your tastes and dietary preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Menu Card 1: Traditional Habesha Feast */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/traditional-feast.jpg"
                alt="Traditional Ethiopian Habesha Feast Catering - Doro Wat, Siga Wat and Injera"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                TRADITIONAL HABESHA FEAST
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                Authentic Doro Wat with hard-boiled eggs, tender Siga Wat, rich Kitfo, freshly seasoned Tibs, and warm hand-rolled Injera cooked with heritage Ethiopian spices.
              </p>
              <a
                href="#inquiry-form"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                SEE MENU
              </a>
            </div>
          </div>

          {/* Menu Card 2: Fasting (Tsom) Specials */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/fasting-special.jpg"
                alt="Ethiopian Fasting Tsom Special Catering Platter - Shiro, Misir and Vegetables"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                FASTING (TSOM) SPECIALS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                A colorful and rich vegan spread: authentic slow-simmered Shiro Tegabino, spicy Misir Wat, Kik Alicha, braised Gomen, Fosolia, and crisp seasonal garden salads.
              </p>
              <a
                href="#inquiry-form"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                SEE MENU
              </a>
            </div>
          </div>

          {/* Menu Card 3: VIP Buffet & Continental */}
          <div className="flex flex-col bg-white border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
              <Image
                src="/images/vip-buffet.jpg"
                alt="VIP Buffet and International Event Catering in Addis Ababa"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-black">
                VIP BUFFET &amp; DESSERTS
              </h3>
              <div className="w-8 h-0.5 bg-black mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                Indulgent chafing dish setups featuring roasted meats, aromatic rice pilafs, Mediterranean salads, delicate canapés, and freshly prepared artisanal desserts.
              </p>
              <a
                href="#inquiry-form"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                SEE MENU
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY CHOOSE HIWI CATERING (Johnny Burke 3-Pillar Dark Section)           */}
      {/* ========================================================================= */}
      <section className="bg-[#1C1D21] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-white">
              WHY CHOOSE HIWI CATERING FOR YOUR NEXT EVENT
            </h2>
            <div className="w-12 h-0.5 bg-white mx-auto my-4" />
            <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-light">
              Quality is at heart of everything we do.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-center max-w-6xl mx-auto">
            
            {/* Pillar 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                Fully Customized Experiences
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                We don&apos;t believe in one-size-fits-all catering. Instead of offering rigid packages, we dedicate our time to understanding your vision and creating a completely unique experience tailored to you.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                Local &amp; Sustainable Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                Our commitment to quality is uncompromised. We source the finest fresh organic produce, prime butchered meats, and hand-selected spices directly from trusted local farmers and markets.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white mb-2">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                Excellence in Every Detail
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                We demand excellence in everything we do — from initial menu planning and punctual delivery to training each uniformed team member. Our full-service approach ensures peace of mind.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SERVING ALL 11 SUB-CITIES IN ADDIS ABABA                                */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-black">
            SERVING ALL 11 SUB-CITIES IN ADDIS ABABA
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            From private residences and outdoor gardens to booked halls and corporate spaces, our mobile catering teams deliver piping-hot buffets anywhere you celebrate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          <div className="relative h-64 sm:h-72 group overflow-hidden bg-gray-900 border border-gray-200">
            <Image
              src="/images/venue-1.jpg"
              alt="Bole and Central Addis Ababa Catering"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white text-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                BOLE &amp; CENTRAL ADDIS
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1">
                Offices, Residences &amp; Reception Halls
              </p>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 group overflow-hidden bg-gray-900 border border-gray-200">
            <Image
              src="/images/venue-2.jpg"
              alt="CMC, Ayat and Summit Catering Addis Ababa"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white text-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                CMC, AYAT &amp; SUMMIT
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1">
                Compounds, Church Grounds &amp; Family Homes
              </p>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 group overflow-hidden bg-gray-900 border border-gray-200">
            <Image
              src="/images/venue-3.jpg"
              alt="Old Airport and Sarbet Catering Addis Ababa"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white text-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                OLD AIRPORT &amp; SARBET
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1">
                Private Estates, Embassies &amp; Outdoor Gardens
              </p>
            </div>
          </div>

        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-block py-3 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            SEE ALL CATERING SERVICES
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. DIRECT EVENT BOOKING / CONSULTATION FORM (Johnny Burke Center Card)    */}
      {/* ========================================================================= */}
      <section id="inquiry-form" className="relative py-8 sm:py-16 px-3 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Dark Tint */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Hiwi Catering Event Reception and Dining Atmosphere in Addis Ababa"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-xl mx-auto">
          <InquiryForm 
            title="READY TO MAKE YOUR NEXT EVENT PERFECT?"
            subtitle="Fill out this form and we will get in touch with you within 24 hours"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS (Johnny Burke Accordion Layout)              */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading and Intro */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.15em] text-black">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-12 h-0.5 bg-black my-4" />
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Hiwi Catering delivers fresh, hot buffets across all 11 sub-cities of Greater Addis Ababa. Here are answers to common questions about our menus, booking timelines, and equipment.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Accordion */}
          <div className="lg:col-span-7 divide-y divide-gray-200">
            {CATERING_FAQS.slice(0, 5).map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-gray-900 hover:text-hiwi-primary transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg font-light text-gray-500 font-mono w-4">
                        {isOpen ? '−' : '+'}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pl-7 pt-3 text-xs sm:text-sm text-gray-600 font-light leading-relaxed animate-in fade-in-50 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. OUR GALLERY (Johnny Burke Visual Photo Grid)                          */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-black">
            OUR GALLERY
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
        </div>

        {/* 6 Grid Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {[
            { src: '/images/gallery-1.jpg', alt: 'Authentic Habesha Stews and Delicacies Catering in Addis Ababa' },
            { src: '/images/gallery-2.jpg', alt: 'Vibrant Fasting Tsom Vegetarian Platter Catering' },
            { src: '/images/gallery-3.jpg', alt: 'Stainless Steel Chafing Dishes and Hot Buffet Catering Addis Ababa' },
            { src: '/images/gallery-4.jpg', alt: 'Celebration Dining Table Setup for Weddings and Birthdays' },
            { src: '/images/gallery-5.jpg', alt: 'Professional Uniformed Waitstaff and Buffet Attendants' },
            { src: '/images/gallery-6.jpg', alt: 'Wedding Floral Table and Banquet Presentation in Addis Ababa' },
          ].map((item, idx) => (
            <div key={idx} className="relative h-44 sm:h-60 md:h-64 overflow-hidden bg-gray-100 group border border-gray-200">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#inquiry-form"
            className="inline-block py-3 px-8 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            SEE FULL GALLERY
          </a>
        </div>
      </section>

    </div>
  );
}
