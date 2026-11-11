'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Thank you Hiwi Catering so much for everything! Our wedding reception in Bole was a huge success, and we had the best night ever!! Your reliability, punctuality, and delicious hot food brought us so much relief during planning. Our guests are still raving about the doro wat and fresh buffet spread!',
    author: 'Selam & Dawit',
    event: 'Grand Wedding Reception, Bole',
    image: '/images/testimonial-couple.jpg',
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
      "We hired Hiwi Catering for our daughter's graduation celebration near Ayat & CMC with 120 guests. The setup was ready 1 hour ahead of time, portions were abundant, and every dish tasted like premium authentic home cooking. Highly recommended!",
    author: 'W/ro Almaz Tadesse',
    event: 'Graduation Celebration, Ayat & CMC',
    image: '/images/social-catering.jpg',
  },
];

export default function HomeTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const current = TESTIMONIALS[activeTestimonial];

  return (
    <section className="bg-[#24252A] text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em] text-white">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-12 h-0.5 bg-white mx-auto my-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-96 w-full overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={current.image}
                alt={`Hiwi Catering Client Testimonial - ${current.event}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-1.5 text-hiwi-gold" aria-label="Client Satisfaction">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-hiwi-gold" />
              ))}
            </div>

            <blockquote className="text-sm sm:text-base md:text-lg text-gray-200 font-light leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div>
              <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                &mdash; {current.author}
              </div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-light">
                {current.event}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                }
                className="w-10 h-10 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-xs text-gray-400 tracking-widest uppercase px-2 font-mono">
                {activeTestimonial + 1} / {TESTIMONIALS.length}
              </div>
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
                }
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
  );
}
