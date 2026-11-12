'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Thank you Hiwi Catering so much for everything! Our wedding reception in Bole was a huge success, and we had the best night ever. Your reliability, punctuality, and delicious hot food brought us so much relief during planning. Our guests are still raving about the doro wat and fresh buffet spread!',
    author: 'Selam & Dawit',
    event: 'Grand Wedding Reception, Bole',
    image: '/images/hero-bg.jpg',
  },
  {
    quote:
      'Exceptional catering service for our corporate annual conference in Kazanchis. The VIP buffet was impeccably arranged in warm chafing dishes, the fasting options were generous and colorful, and the uniformed staff were polite and attentive throughout.',
    author: 'Yonas Mekonnen',
    event: 'Executive Corporate Seminar, Kazanchis',
    image: '/images/corporate-catering.jpg',
  },
  {
    quote:
      "We hired Hiwi Catering for our daughter's graduation celebration near Ayat & CMC with 120 guests. The setup was ready 1 hour ahead of time, portions were abundant, and every dish tasted like authentic home cooking. Highly recommended!",
    author: 'W/ro Almaz Tadesse',
    event: 'Graduation Celebration, Ayat & CMC',
    image: '/images/social-catering.jpg',
  },
];

export default function HomeTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const current = TESTIMONIALS[activeTestimonial];

  return (
    <section className="bg-hiwi-dark text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white text-balance">
            HOSTS ACROSS ADDIS ABABA ON WORKING WITH HIWI
          </h2>
        </div>

        <div
          key={activeTestimonial}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto animate-feedback-in"
        >
          {/* Outer rounded-2xl (16px) - p-2 (8px) => Inner rounded-lg (8px) */}
          <div className="lg:col-span-5">
            <div className="bg-hiwi-charcoal border border-white/10 rounded-2xl p-2 shadow-2xl">
              <div className="relative h-72 sm:h-88 w-full overflow-hidden rounded-lg">
                <Image
                  src={current.image}
                  alt={`Hiwi Catering Client Event - ${current.event}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-1.5 text-hiwi-gold" aria-label="5-Star Client Experience">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-hiwi-gold" strokeWidth={1.75} />
              ))}
            </div>

            <blockquote className="text-base sm:text-lg text-stone-100 font-normal leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div>
              <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                &mdash; {current.author}
              </div>
              <div className="text-xs sm:text-sm text-stone-300 mt-1 font-medium">
                {current.event}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                  }
                  className="w-10 h-10 rounded-lg border border-white/25 hover:border-hiwi-gold hover:bg-white hover:text-hiwi-dark text-white flex items-center justify-center transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={1.75} />
                </button>
                <div className="text-xs text-stone-300 font-semibold px-2 tabular-nums">
                  {activeTestimonial + 1} / {TESTIMONIALS.length}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
                  }
                  className="w-10 h-10 rounded-lg border border-white/25 hover:border-hiwi-gold hover:bg-white hover:text-hiwi-dark text-white flex items-center justify-center transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={1.75} />
                </button>
              </div>

              {/* Tactile Slide Pills */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.author}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeTestimonial}
                    aria-label={`View story from ${t.author}`}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeTestimonial
                        ? 'w-7 bg-hiwi-gold'
                        : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
