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
    <div className="bg-white text-gray-900 font-sans">
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 uppercase tracking-wider text-[11px] font-medium">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-black font-bold">Terms of Use</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-primary block">
          Hiwi Catering Services
        </span>
        <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-[0.12em] text-black">
          TERMS &amp; BOOKING GUIDELINES
        </h1>
        <div className="w-12 h-0.5 bg-black" />

        <div className="space-y-5 text-sm text-gray-600 font-light leading-relaxed pt-2">
          <p>
            By submitting a catering request or reviewing package estimates on <strong>hiwicatering.com</strong>, you agree to the general event booking terms outlined below.
          </p>
          <h2 className="text-base font-black uppercase tracking-wider text-black pt-2">
            1. Package Estimates &amp; Custom Proposals
          </h2>
          <p>
            Listed per-person ETB rates (Classic 750 ETB, Royal Habesha 1,150 ETB, and Grand Wedding 1,650 ETB) serve as transparent starting guides. Final written quotations depend on confirmed guest count, specific meat/fasting selections, venue location across Addis Ababa, and staff/equipment inclusions.
          </p>
          <h2 className="text-base font-black uppercase tracking-wider text-black pt-2">
            2. Date Confirmation &amp; Guest Counts
          </h2>
          <p>
            Event dates are reserved once a menu proposal is approved and an advance booking deposit is confirmed. Final guest count adjustments are finalized prior to ingredient procurement so all dishes are prepared fresh on the morning of your celebration.
          </p>
          <h2 className="text-base font-black uppercase tracking-wider text-black pt-2">
            3. Direct Support
          </h2>
          <p>
            For full terms specific to corporate seminars, weddings, or tasting appointments in Summit Fiyel Bet, please reach us at{' '}
            <a href="tel:+251963138123" className="text-black font-semibold underline">
              0963 138 123
            </a>{' '}
            or via{' '}
            <Link href="/contact" className="text-black font-semibold underline">
              Contact Us
            </Link>.
          </p>
        </div>
      </article>
    </div>
  );
}
