import Link from 'next/link';
import { Check, Send } from 'lucide-react';
import { CATERING_PACKAGES } from '@/data/packages';

export default function PricingTable() {
  return (
    <section className="py-20 bg-white" id="pricing" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-extrabold text-hiwi-dark tracking-tight">
            Catering Packages &amp; Pricing
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            All packages include professional food preparation, stainless steel chafing dish buffets, traditional or modern presentation, and dedicated staff. Custom quotes available for all guest counts.
          </p>
          <div className="mt-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-hiwi-primary hover:text-hiwi-hover hover:underline"
            >
              <span>View full pricing guide, side-by-side matrix &amp; add-on rates</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CATERING_PACKAGES.map((pkg) => {
            const isFeatured = pkg.badge === 'Most Popular';
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-8 ${
                  isFeatured
                    ? 'border-2 border-hiwi-primary shadow-warm-lg bg-gradient-to-b from-white to-hiwi-50/40 md:-translate-y-2'
                    : 'border border-gray-200 bg-white shadow-sm hover:shadow-md'
                }`}
              >
                {/* Badge if available */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-hiwi-primary text-white text-xs font-extrabold px-3 py-1 rounded-full shadow uppercase tracking-wider">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {pkg.amharicName}
                  </div>
                  <h3 className="text-xl font-extrabold text-hiwi-dark">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 min-h-[32px]">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-gray-500">Starting at</span>
                      <span className="text-3xl sm:text-4xl font-black text-hiwi-primary">
                        {pkg.pricePerPerson.toLocaleString()}
                      </span>
                      <span className="text-sm font-bold text-gray-600">ETB</span>
                      <span className="text-xs text-gray-400">/ person</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Min. {pkg.minGuests} guests • Flexible menu substitutions
                    </div>
                  </div>

                  {/* Menu Highlights */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Included Dishes:
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {pkg.dishes.map((dish, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-hiwi-primary font-bold">•</span>
                            <span>{dish}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service Inclusions */}
                    <div className="pt-2">
                      <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Service &amp; Equipment:
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {pkg.includes.map((inc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-2.5">
                  <Link
                    href="/inquiry"
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-center transition-all duration-200 ${
                      isFeatured
                        ? 'bg-hiwi-primary text-white hover:bg-hiwi-hover shadow-warm hover:shadow-warm-lg'
                        : 'bg-hiwi-dark text-white hover:bg-gray-800'
                    }`}
                  >
                    Inquire About This Package
                  </Link>
                  <a
                    href="https://t.me/hiwicatering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs text-gray-500 hover:text-hiwi-primary transition-colors py-1"
                  >
                    <Send className="w-3 h-3 text-hiwi-primary" />
                    <span>Ask about customization on Telegram</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Fasting and Custom Menus */}
        <div className="mt-12 p-6 bg-hiwi-50 rounded-2xl border border-hiwi-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-hiwi-dark">
              Need a 100% Fasting (Yetsom Beyaynetu) or Custom Mixed Feast?
            </h4>
            <p className="text-xs text-gray-600 mt-1">
              We adjust all dishes for Ethiopian Orthodox fasting days (Wednesday, Friday, and major fasting seasons) with no compromise on rich traditional flavor.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-2">
            <Link
              href="/pricing"
              className="px-5 py-2.5 bg-hiwi-primary text-white font-bold text-xs rounded-xl hover:bg-hiwi-hover transition-colors shadow-warm text-center"
            >
              Full Pricing &amp; Comparison &rarr;
            </Link>
            <Link
              href="/inquiry"
              className="px-5 py-2.5 bg-white border border-hiwi-primary text-hiwi-primary font-bold text-xs rounded-xl hover:bg-hiwi-50 transition-colors shadow-sm text-center"
            >
              Event Inquiry
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
