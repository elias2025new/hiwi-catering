import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy | Hiwi Catering Addis Ababa',
  },
  description: 'How Hiwi Catering Services handles event inquiry details, phone numbers, and booking consultations in Addis Ababa, Ethiopia.',
  alternates: {
    canonical: 'https://hiwicatering.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-hiwi-cream text-hiwi-dark font-sans selection:bg-hiwi-primary selection:text-white">
      <div className="bg-hiwi-stone border-b border-hiwi-border py-3 text-xs text-stone-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 uppercase tracking-wider text-[11px] font-semibold">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" strokeWidth={1.75} />
          <span className="text-hiwi-dark font-bold">Privacy Policy</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white border border-hiwi-border rounded-2xl p-6 sm:p-10 shadow-card space-y-6">
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-hiwi-dark text-balance">
            PRIVACY POLICY
          </h1>

          <div className="space-y-5 text-sm sm:text-base text-stone-700 leading-relaxed">
            <p>
              Hiwi Catering Services (&ldquo;we&rdquo;, &ldquo;our&rdquo;, headquartered in Summit Fiyel Bet, Addis Ababa, Ethiopia) respects your privacy. This policy explains what information we collect when you request a catering quote on <strong className="text-hiwi-dark">hiwicatering.com</strong>.
            </p>
            <h2 className="text-base font-black uppercase tracking-wider text-hiwi-dark pt-2">
              1. Information You Provide
            </h2>
            <p>
              When you submit our online inquiry form, call <strong className="text-hiwi-dark tabular-nums">0963 138 123</strong>, or message our official Telegram account (<strong className="text-hiwi-dark">@hiwicatering</strong>), we collect only the contact details and event details you voluntarily share&mdash;such as your name, phone number, preferred event date, venue area (e.g., Bole, Ayat, Summit, CMC), and menu preferences.
            </p>
            <h2 className="text-base font-black uppercase tracking-wider text-hiwi-dark pt-2">
              2. How We Use Your Details
            </h2>
            <p>
              Your details are used strictly to prepare catering quotations, check kitchen date availability, arrange tastings, and coordinate food delivery and setup for your celebration. We do not sell, rent, or distribute customer phone numbers or event information to third-party advertisers.
            </p>
            <h2 className="text-base font-black uppercase tracking-wider text-hiwi-dark pt-2">
              3. Questions or Updates
            </h2>
            <p>
              To update or remove inquiry details you have shared with our team, please call{' '}
              <a href="tel:+251963138123" className="text-hiwi-primary font-semibold hover:underline tabular-nums">
                0963 138 123
              </a>{' '}
              or message us on{' '}
              <a href="https://t.me/hiwicatering" target="_blank" rel="noopener noreferrer" className="text-hiwi-primary font-semibold hover:underline">
                Telegram (@hiwicatering)
              </a>.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
