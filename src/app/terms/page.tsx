import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Use & Booking Guidelines | Hiwi Catering',
  },
  description: 'Event booking guidelines, deposit expectations, guest count confirmation, and delivery terms for Hiwi Catering Services in Addis Ababa.',
  alternates: {
    canonical: 'https://hiwicatering.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-primary selection:text-white">
      <div className="bg-hiwi-stone border-b border-hiwi-border py-3 text-xs text-stone-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 uppercase tracking-wider text-[11px] font-semibold">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">Terms of Use</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white border border-hiwi-border rounded-2xl p-6 sm:p-10 shadow-card space-y-6">
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-hiwi-dark text-balance">
            TERMS &amp; BOOKING GUIDELINES
          </h1>

          <div className="space-y-5 text-sm sm:text-base text-stone-700 leading-relaxed">
            <p>
              By submitting a catering request or reviewing package estimates on <strong className="text-hiwi-dark">hiwicatering.com</strong>, you agree to the general event booking terms outlined below.
            </p>
            <h2 className="text-base font-black uppercase tracking-wider text-hiwi-dark pt-2">
              1. Package Estimates &amp; Custom Proposals
            </h2>
            <p className="tabular-nums">
              Listed per-person ETB rates (Classic 750 ETB, Royal Habesha 1,150 ETB, and Grand Wedding 1,650 ETB) serve as transparent starting guides. Final written quotations depend on confirmed guest count, specific meat/fasting selections, venue location across Addis Ababa, and staff/equipment inclusions.
            </p>
            <h2 className="text-base font-black uppercase tracking-wider text-hiwi-dark pt-2">
              2. Date Confirmation &amp; Guest Counts
            </h2>
            <p>
              Event dates are reserved once a menu proposal is approved and an advance booking deposit is confirmed. Final guest count adjustments are finalized prior to ingredient procurement so all dishes are prepared fresh on the morning of your celebration.
            </p>
            <h2 className="text-base font-black uppercase tracking-wider text-hiwi-dark pt-2">
              3. Direct Support
            </h2>
            <p>
              For full terms specific to corporate seminars, weddings, or tasting appointments in Summit Fiyel Bet, please reach us at{' '}
              <a href="tel:+251963138123" className="text-hiwi-primary font-semibold hover:underline tabular-nums">
                0963 138 123
              </a>{' '}
              or via{' '}
              <Link href="/contact" className="text-hiwi-primary font-semibold hover:underline">
                Contact Us
              </Link>.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
