'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '@/data/faqs';

export default function HomeFaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-hiwi-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Heading and Intro */}
        <div className="lg:col-span-5 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Hiwi Catering delivers fresh, hot buffets across Bole, Ayat, Summit, CMC, and all 11 sub-cities of
            Greater Addis Ababa (Addis Abeba). Here are answers to common questions about menus, pricing, and booking
            timelines.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/faqs"
              className="inline-flex items-center justify-center py-3 px-6 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-bold uppercase tracking-wider transition-colors shadow-warm"
            >
              READ ALL FAQS
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center py-3 px-6 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Right Column: Animated CSS Grid Accordion (All answers kept in SSR DOM for SEO & AEO) */}
        <div className="lg:col-span-7 divide-y divide-hiwi-border border-y border-hiwi-border">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="py-1">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full py-4 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-hiwi-dark hover:text-hiwi-primary transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-hiwi-primary' : 'text-stone-600'
                    }`}
                    strokeWidth={1.75}
                  />
                </button>

                <div
                  id={`home-faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm text-stone-600 font-normal leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
