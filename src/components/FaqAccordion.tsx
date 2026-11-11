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
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about catering services in Addis Ababa & Addis Abeba with Hiwi Catering."
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-14 sm:py-16 bg-white border-t border-gray-200" id="faqs" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 id="faq-heading" className="text-xl sm:text-3xl font-black uppercase tracking-[0.12em] text-black">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left py-4 px-2 sm:px-4 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-hiwi-primary focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-black shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {/* Kept in initial DOM so crawlers and AI answer engines index every answer */}
                <div
                  id={`faq-panel-${index}`}
                  className={isOpen ? 'px-2 sm:px-4 pb-5 pt-1 text-xs sm:text-sm text-gray-600 font-light leading-relaxed' : 'hidden'}
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
