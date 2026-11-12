import Link from 'next/link';
import { Check, Send } from 'lucide-react';
import { CATERING_PACKAGES } from '@/data/packages';

export default function PricingTable() {
  return (
    <section className="py-20 bg-white" id="pricing" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-extrabold text-hiwi-dark tracking-tight text-balance"
          >
            Catering Packages &amp; Pricing
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            All packages include fresh culinary preparation, stainless steel chafing dish buffets, traditional or modern
            presentation, and dedicated uniformed staff. Custom quotes available for all guest counts.
          </p>
          <div className="pt-1">
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
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-7 sm:p-8 ${
                  isFeatured
                    ? 'border-2 border-hiwi-primary shadow-warm-lg bg-gradient-to-b from-white to-hiwi-cream md:-translate-y-2 md:scale-[1.02] z-10'
                    : 'border border-hiwi-border bg-white shadow-card hover:shadow-card-hover'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-hiwi-primary text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-warm uppercase tracking-wider">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold text-hiwi-amber uppercase tracking-wider mb-1">
                    {pkg.amharicName}
                  </div>
                  <h3 className="text-xl font-extrabold text-hiwi-dark tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6 pb-6 border-b border-hiwi-border">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                        From
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-hiwi-primary tabular-nums">
                        {pkg.pricePerPerson.toLocaleString()}
                      </span>
                      <span className="text-sm font-bold text-hiwi-dark">ETB</span>
                      <span className="text-xs font-medium text-stone-600">/ person</span>
                    </div>
                    <div className="text-xs text-stone-600 mt-1.5 font-medium tabular-nums">
                      Min. {pkg.minGuests} guests &bull; Flexible menu substitutions
                    </div>
                  </div>

                  {/* Menu Highlights */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold text-hiwi-dark uppercase tracking-wider mb-2.5">
                        Included Dishes:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                        {pkg.dishes.map((dish, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-hiwi-primary shrink-0 mt-2"
                              aria-hidden="true"
                            />
                            <span>{dish}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service Inclusions */}
                    <div className="pt-2">
                      <div className="text-xs font-bold text-hiwi-dark uppercase tracking-wider mb-2.5">
                        Service &amp; Equipment:
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                        {pkg.includes.map((inc, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-hiwi-primary shrink-0 mt-0.5" strokeWidth={2} />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Actions (outer rounded-2xl p-8 -> inner rounded-xl buttons) */}
                <div className="mt-8 pt-6 border-t border-hiwi-border flex flex-col gap-3">
                  <Link
                    href="/inquiry"
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 ${
                      isFeatured
                        ? 'bg-hiwi-primary text-white hover:bg-hiwi-hover shadow-warm'
                        : 'bg-hiwi-dark text-white hover:bg-stone-800'
                    }`}
                  >
                    Inquire About This Package
                  </Link>
                  <a
                    href="https://t.me/hiwicatering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-hiwi-primary transition-colors py-1"
                  >
                    <Send className="w-3.5 h-3.5 text-hiwi-primary" strokeWidth={1.75} />
                    <span>Ask about customization on Telegram</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fasting Callout (outer rounded-2xl p-6 sm:p-8 -> rounded-lg buttons) */}
        <div className="mt-12 p-6 sm:p-8 bg-hiwi-cream rounded-2xl border border-hiwi-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-extrabold text-hiwi-dark">
              Need a 100% Fasting (Yetsom Beyaynetu) or Custom Mixed Feast?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
              We prepare separate Ethiopian Orthodox fasting dishes for Wednesdays, Fridays, and major fasting
              seasons with zero dairy or cross-contact.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="/pricing"
              className="px-5 py-3 bg-hiwi-primary text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-hiwi-hover transition-colors shadow-warm text-center"
            >
              Full Pricing &amp; Comparison &rarr;
            </Link>
            <Link
              href="/inquiry"
              className="px-5 py-3 bg-white border border-hiwi-primary text-hiwi-primary font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-hiwi-50 transition-colors text-center"
            >
              Event Inquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
