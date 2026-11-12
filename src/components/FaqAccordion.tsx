'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '@/data/faqs';

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about catering services in Addis Ababa & Addis Abeba with Hiwi Catering.',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-16 sm:py-20 bg-white border-t border-hiwi-border"
      id="faqs"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 space-y-3">
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance"
          >
            {title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="divide-y divide-hiwi-border border-y border-hiwi-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left py-5 px-2 sm:px-4 flex items-center justify-between gap-4 font-bold text-hiwi-dark hover:text-hiwi-primary focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-hiwi-primary' : 'text-stone-600'
                    }`}
                    strokeWidth={1.75}
                  />
                </button>
                {/* Kept in initial DOM so crawlers and AI answer engines index every answer */}
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-2 sm:px-4 pb-5 pt-0.5 text-sm text-stone-600 font-normal leading-relaxed">
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
