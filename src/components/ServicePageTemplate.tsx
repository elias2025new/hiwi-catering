import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, Send, ChevronRight } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';
import InquiryForm from '@/components/InquiryForm';
import ServiceDeliveryStrip from '@/components/ServiceDeliveryStrip';
import type { FaqItem } from '@/data/faqs';

export interface ServiceStatItem {
  value: string;
  label: string;
}

interface ServicePageTemplateProps {
  breadcrumbLabel: string;
  title: string;
  intro: string;
  stats: ServiceStatItem[];
  inquiryCtaLabel: string;
  heroImage: string;
  heroImageAlt: string;
  aeoQuestion: string;
  aeoAnswer: ReactNode;
  extraSection?: ReactNode;
  deliveryStripLabel: string;
  inquiryTitle: string;
  inquirySubtitle: string;
  faqs: FaqItem[];
  faqTitle: string;
  faqSubtitle: string;
  bottomTitle: string;
  bottomSubtitle: string;
  bottomCtaLabel: string;
}

export default function ServicePageTemplate({
  breadcrumbLabel,
  title,
  intro,
  stats,
  inquiryCtaLabel,
  heroImage,
  heroImageAlt,
  aeoQuestion,
  aeoAnswer,
  extraSection,
  deliveryStripLabel,
  inquiryTitle,
  inquirySubtitle,
  faqs,
  faqTitle,
  faqSubtitle,
  bottomTitle,
  bottomSubtitle,
  bottomCtaLabel,
}: ServicePageTemplateProps) {
  return (
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-100 selection:text-hiwi-primary">
      {/* Breadcrumb Navigation */}
      <div className="bg-hiwi-stone border-b border-hiwi-border py-3 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider font-medium">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.75} />
          <Link href="/services" className="hover:text-hiwi-primary transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">{breadcrumbLabel}</span>
        </div>
      </div>

      {/* Hero Section (Enlarged Product Visual + Primary Terracotta CTA) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-hiwi-cream border-b border-hiwi-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-hiwi-dark leading-[1.1] text-balance">
                {title}
              </h1>

              <p className="text-base text-stone-700 leading-relaxed">{intro}</p>

              {/* Key Stats Grouped by Spacing */}
              <div className="grid grid-cols-3 gap-6 py-4 border-y border-hiwi-border">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="text-lg sm:text-2xl font-black text-hiwi-dark block tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-xs text-stone-600 font-medium block mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
                <Link
                  href="/inquiry"
                  className="py-3.5 px-7 rounded-lg bg-hiwi-primary hover:bg-hiwi-hover active:scale-[0.98] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-warm text-center inline-flex items-center justify-center"
                >
                  {inquiryCtaLabel}
                </Link>
                <a
                  href="tel:+251963138123"
                  className="py-3.5 px-7 rounded-lg border-2 border-hiwi-dark text-hiwi-dark hover:bg-hiwi-dark hover:text-white text-xs font-bold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-2 tabular-nums"
                >
                  <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
                  <span>0963 138 123</span>
                </a>
                <a
                  href="https://t.me/hiwicatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-lg border border-stone-300 bg-white text-hiwi-dark hover:border-hiwi-primary hover:text-hiwi-primary text-xs font-bold uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" strokeWidth={1.75} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Concentric Framed Food/Setup Photo */}
            <div className="lg:col-span-6">
              <div className="w-full bg-white border border-hiwi-border rounded-2xl p-2 shadow-warm-lg">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-hiwi-stone">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AEO / GEO Direct Answer Overview */}
      <section className="py-14 bg-white border-b border-hiwi-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-hiwi-cream p-6 sm:p-8 border border-hiwi-border rounded-2xl shadow-card space-y-3">
            <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
              {aeoQuestion}
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{aeoAnswer}</p>
          </div>
        </div>
      </section>

      {extraSection}

      {/* Local Delivery Strip */}
      <ServiceDeliveryStrip serviceLabel={deliveryStripLabel} />

      {/* Direct Service Inquiry */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <InquiryForm title={inquiryTitle} subtitle={inquirySubtitle} />
        </div>
      </section>

      {/* Service FAQs */}
      <FaqAccordion faqs={faqs} title={faqTitle} subtitle={faqSubtitle} />

      {/* Dark Bottom CTA Banner */}
      <section className="bg-hiwi-dark text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight text-balance">
            {bottomTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto leading-relaxed">
            {bottomSubtitle}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inquiry"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg bg-hiwi-primary text-white hover:bg-hiwi-hover text-xs font-extrabold uppercase tracking-wider transition-colors shadow-warm flex items-center justify-center"
            >
              {bottomCtaLabel}
            </Link>
            <a
              href="tel:+251963138123"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg border-2 border-white text-white hover:bg-white hover:text-hiwi-dark text-xs font-extrabold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 tabular-nums"
            >
              <PhoneCall className="w-4 h-4" strokeWidth={1.75} />
              <span>Call: 0963 138 123</span>
            </a>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-8 rounded-lg border border-white/35 text-stone-200 hover:text-white hover:border-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>Telegram Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
