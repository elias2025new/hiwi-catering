'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaqItem } from '@/data/faqs';

export default function HomeFaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Heading and Intro */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.15em] text-black">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-12 h-0.5 bg-black my-4" />
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Hiwi Catering delivers fresh, hot buffets across Bole, Ayat, Summit, CMC, and all 11 sub-cities of Greater Addis Ababa (Addis Abeba). Here are answers to common questions about menus, pricing, and booking timelines.
          </p>
          <div className="pt-4 flex flex-wrap gap-3">
            <Link
              href="/faqs"
              className="inline-block py-3 px-6 bg-black text-white hover:bg-gray-800 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              READ ALL FAQS
            </Link>
            <Link
              href="/contact"
              className="inline-block py-3 px-6 border border-black text-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Right Column: Clean Accordion (All answers kept in DOM for SEO & AEO) */}
        <div className="lg:col-span-7 divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-gray-900 hover:text-hiwi-primary transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-answer-${index}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg font-light text-gray-500 font-mono w-4">
                      {isOpen ? '−' : '+'}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </button>

                <div
                  id={`home-faq-answer-${index}`}
                  className={
                    isOpen
                      ? 'pl-7 pt-3 text-xs sm:text-sm text-gray-600 font-light leading-relaxed'
                      : 'hidden'
                  }
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
