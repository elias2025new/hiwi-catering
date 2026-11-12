import Link from 'next/link';
import { MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import { ADDIS_ABABA_LOCATIONS } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-hiwi-dark text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Brand Frame */}
        <div className="mb-12">
          <Link href="/" className="inline-block group" aria-label="Hiwi Catering Homepage">
            <div className="rounded-lg border-2 border-white px-5 py-2.5 text-center transition-colors duration-200 group-hover:bg-white group-hover:text-hiwi-dark">
              <span className="block text-xl sm:text-2xl font-black tracking-[0.18em] uppercase text-white group-hover:text-hiwi-dark leading-tight">
                HIWI CATERING
              </span>
              <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-stone-300 group-hover:text-stone-700 mt-0.5">
                catering &amp; events
              </span>
            </div>
          </Link>
        </div>

        {/* 4 Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-xs">
          {/* Column 1: Service Area */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Service Area
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 text-stone-300">
              {ADDIS_ABABA_LOCATIONS.map((loc) => (
                <Link
                  key={loc.name}
                  href={loc.href || '/locations'}
                  className="hover:text-white transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
            <Link
              href="/locations"
              className="inline-block text-xs font-bold uppercase tracking-wider text-hiwi-gold hover:text-white transition-colors pt-1"
            >
              All Delivery Areas &rarr;
            </Link>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Links
            </h4>
            <ul className="space-y-2.5 text-stone-300 uppercase tracking-wider font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Events &amp; Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Delivery Areas
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Contact & Exact Pin */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Contact
            </h4>
            <div className="space-y-3 text-stone-300 leading-relaxed">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-hiwi-gold shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>
                  Summit Fiyel Bet Area (
                  <code className="font-mono tabular-nums text-stone-100 bg-white/10 px-1 py-0.5 rounded">
                    XVW2+PCH
                  </code>
                  ),
                  <br />
                  Addis Ababa (Addis Abeba), Ethiopia
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-hiwi-gold shrink-0" strokeWidth={1.75} />
                <a
                  href="tel:+251963138123"
                  className="hover:text-white transition-colors font-semibold text-white tabular-nums"
                >
                  0963 138 123
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-hiwi-gold shrink-0" strokeWidth={1.75} />
                <a
                  href="https://t.me/hiwicatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Telegram: @hiwicatering
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <ExternalLink className="w-4 h-4 text-hiwi-gold shrink-0" strokeWidth={1.75} />
                <a
                  href="https://maps.app.goo.gl/HKTMRDEuVvdDDnnN6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hiwi-gold hover:text-white transition-colors font-semibold"
                >
                  View Exact Google Maps Pin
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Verified Direct Booking & Guides */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Book &amp; Guides
            </h4>
            <ul className="space-y-2.5 text-stone-300 uppercase tracking-wider font-medium">
              <li>
                <a
                  href="https://t.me/hiwicatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Telegram Channel
                </a>
              </li>
              <li>
                <Link href="/inquiry" className="hover:text-white transition-colors">
                  Event Inquiry Form
                </Link>
              </li>
              <li>
                <Link href="/locations/bole" className="hover:text-white transition-colors">
                  Bole Catering Guide
                </Link>
              </li>
              <li>
                <Link href="/locations/ayat" className="hover:text-white transition-colors">
                  Ayat Catering Guide
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  Catering FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-300 uppercase tracking-wider">
          <div className="tabular-nums">
            &copy; {new Date().getFullYear()} HIWI CATERING &amp; EVENTS. ADDIS ABABA, ETHIOPIA.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <span className="text-stone-600" aria-hidden="true">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              TERMS OF USE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
