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
    <div className="bg-white text-gray-900 font-sans">
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2 uppercase tracking-wider text-[11px] font-medium">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-black font-bold">Privacy Policy</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-hiwi-primary block">
          Hiwi Catering Services
        </span>
        <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-[0.12em] text-black">
          PRIVACY POLICY
        </h1>
        <div className="w-12 h-0.5 bg-black" />

        <div className="space-y-5 text-sm text-gray-600 font-light leading-relaxed pt-2">
          <p>
            Hiwi Catering Services (&ldquo;we&rdquo;, &ldquo;our&rdquo;, headquartered in Summit Fiyel Bet, Addis Ababa, Ethiopia) respects your privacy. This policy explains what information we collect when you request a catering quote on <strong>hiwicatering.com</strong>.
          </p>
          <h2 className="text-base font-black uppercase tracking-wider text-black pt-2">
            1. Information You Provide
          </h2>
          <p>
            When you submit our online inquiry form, call <strong>0963 138 123</strong>, or message our official Telegram account (<strong>@hiwicatering</strong>), we collect only the contact details and event details you voluntarily share—such as your name, phone number, preferred event date, venue area (e.g., Bole, Ayat, Summit, CMC), and menu preferences.
          </p>
          <h2 className="text-base font-black uppercase tracking-wider text-black pt-2">
            2. How We Use Your Details
          </h2>
          <p>
            Your details are used strictly to prepare catering quotations, check kitchen date availability, arrange tastings, and coordinate food delivery and setup for your celebration. We do not sell, rent, or distribute customer phone numbers or event information to third-party advertisers.
          </p>
          <h2 className="text-base font-black uppercase tracking-wider text-black pt-2">
            3. Questions or Updates
          </h2>
          <p>
            To update or remove inquiry details you have shared with our team, please call{' '}
            <a href="tel:+251963138123" className="text-black font-semibold underline">
              0963 138 123
            </a>{' '}
            or message us on{' '}
            <a href="https://t.me/hiwicatering" target="_blank" rel="noopener noreferrer" className="text-black font-semibold underline">
              Telegram (@hiwicatering)
            </a>.
          </p>
        </div>
      </article>
    </div>
  );
}
