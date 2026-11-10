import Link from 'next/link';
import { MapPin, Phone, Send, Mail } from 'lucide-react';
import { ADDIS_ABABA_LOCATIONS } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white border-t border-black/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Brand & Logo Frame */}
        <div className="mb-12">
          <Link href="/" className="inline-block group" aria-label="Hiwi Catering Homepage">
            <div className="border-[2px] border-white px-5 py-2.5 text-center transition-all duration-200 group-hover:bg-white group-hover:text-black">
              <span className="block text-xl sm:text-2xl font-black tracking-[0.2em] uppercase text-white group-hover:text-black leading-tight font-sans">
                HIWI CATERING
              </span>
              <span className="block text-xs font-serif italic tracking-widest text-gray-300 group-hover:text-gray-800 -mt-0.5">
                catering &amp; events
              </span>
            </div>
          </Link>
        </div>

        {/* 4 Multi-Column Grid - Exactly matching Johnny Burke structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-xs">
          
          {/* Column 1: Service Area */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white font-sans">
              Service Area
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-gray-400">
              {ADDIS_ABABA_LOCATIONS.map((loc) => (
                <span key={loc.name} className="hover:text-white transition-colors">
                  {loc.name}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links (Strictly Home, Contact, About, Events) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white font-sans">
              Links
            </h4>
            <ul className="space-y-2.5 text-gray-400 uppercase tracking-wider font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing &amp; Packages
                </Link>
              </li>
              <li>
                <Link href="/inquiry" className="hover:text-white transition-colors">
                  Event Inquiry
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white font-sans">
              Contact
            </h4>
            <div className="space-y-2.5 text-gray-400 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span>
                  Summit Fiyel Bet Area,<br />
                  Addis Ababa, Ethiopia
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                <a href="tel:+251963138123" className="hover:text-white transition-colors font-semibold">
                  0963 138 123
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-white shrink-0" />
                <a 
                  href="https://t.me/hiwicatering" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Telegram: @hiwicatering
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <span>catering@hiwicatering.com</span>
              </p>
            </div>
          </div>

          {/* Column 4: Check us on (Social Links) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest uppercase text-white font-sans">
              Check Us On
            </h4>
            <ul className="space-y-2.5 text-gray-400 uppercase tracking-wider font-medium">
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
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 uppercase tracking-wider">
          <div>
            &copy; {new Date().getFullYear()} HIWI CATERING &amp; EVENTS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              PRIVACY POLICY
            </Link>
            <span>|</span>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              TERMS OF USE
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
