'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Phone,
  PhoneCall, 
  Send, 
  ChevronDown, 
  MapPin, 
  Mail
} from 'lucide-react';
import { CATERING_SERVICES } from '@/data/services';
import AnimatedLogoText from '@/components/AnimatedLogoText';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Black Bar - Johnny Burke Style */}
      <div className="bg-[#1C1917] text-gray-300 text-[11px] sm:text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 tracking-wide font-medium text-center sm:text-left">
          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 text-gray-300 uppercase">
            <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
            <span className="truncate">Summit Fiyel Bet, Addis Ababa, Ethiopia</span>
          </div>

          {/* Phone & Telegram/Email */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-gray-200">
            <a 
              href="tel:+251963138123" 
              className="flex items-center gap-1.5 hover:text-white transition-colors uppercase font-semibold"
              aria-label="Call Hiwi Catering at 0963 138 123"
            >
              <Phone className="w-3.5 h-3.5 text-white shrink-0" />
              <span>0963 138 123</span>
            </a>

            <span className="text-gray-600">|</span>

            <a 
              href="https://t.me/hiwicatering" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors uppercase"
            >
              <Send className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="hidden sm:inline">Telegram: @hiwicatering</span>
              <span className="sm:hidden">Telegram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          
          {/* Johnny Burke Boxed Logo Frame */}
          <Link href="/" className="inline-block group shrink-0" aria-label="Hiwi Catering Homepage">
            <div className="border-[2px] border-black px-2.5 py-1 sm:px-5 sm:py-2.5 text-center transition-all duration-200 group-hover:bg-black group-hover:text-white">
              <span className="block text-sm sm:text-2xl font-black tracking-[0.16em] uppercase text-black group-hover:text-white leading-tight font-sans">
                <AnimatedLogoText />
              </span>
              <span className="block text-[9px] sm:text-xs font-serif italic tracking-widest text-gray-700 group-hover:text-gray-200 -mt-0.5">
                catering &amp; events
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items - Strictly HOME, CONTACT US, ABOUT, EVENTS (No links after Events) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 tracking-widest text-xs font-bold uppercase" aria-label="Main Navigation">
            <Link 
              href="/" 
              className={`transition-colors py-2 border-b-2 ${
                pathname === '/' 
                  ? 'border-hiwi-primary text-hiwi-primary font-black' 
                  : 'border-transparent text-gray-800 hover:text-hiwi-primary'
              }`}
            >
              HOME
            </Link>

            <Link 
              href="/contact" 
              className={`transition-colors py-2 border-b-2 ${
                pathname === '/contact' 
                  ? 'border-hiwi-primary text-hiwi-primary font-black' 
                  : 'border-transparent text-gray-800 hover:text-hiwi-primary'
              }`}
            >
              CONTACT US
            </Link>

            <Link 
              href="/about" 
              className={`transition-colors py-2 border-b-2 ${
                pathname === '/about' 
                  ? 'border-hiwi-primary text-hiwi-primary font-black' 
                  : 'border-transparent text-gray-800 hover:text-hiwi-primary'
              }`}
            >
              ABOUT
            </Link>

            {/* EVENTS dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setEventsDropdownOpen(true)}
              onMouseLeave={() => setEventsDropdownOpen(false)}
            >
              <button 
                type="button"
                className={`flex items-center gap-1.5 transition-colors py-2 border-b-2 uppercase tracking-widest ${
                  pathname.startsWith('/services') 
                    ? 'border-hiwi-primary text-hiwi-primary font-black' 
                    : 'border-transparent text-gray-800 hover:text-hiwi-primary'
                }`}
                aria-expanded={eventsDropdownOpen}
                aria-haspopup="true"
              >
                <span>EVENTS</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${eventsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {eventsDropdownOpen && (
                <div className="absolute top-full -left-4 w-64 bg-white rounded-none shadow-xl border border-gray-200 py-2 mt-0 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-xs font-black tracking-wider text-black hover:bg-gray-50 border-b border-gray-100 uppercase"
                    onClick={() => setEventsDropdownOpen(false)}
                  >
                    ALL EVENTS &rarr;
                  </Link>
                  {CATERING_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:text-hiwi-primary transition-colors tracking-wide normal-case"
                      onClick={() => setEventsDropdownOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+251963138123" 
              className="inline-flex items-center gap-2 border-2 border-black text-black px-5 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-200"
              aria-label="Call 0963 138 123"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>0963 138 123</span>
            </a>

            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 bg-hiwi-primary text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-hiwi-hover transition-colors shadow-sm"
            >
              <span>INQUIRE / GET A QUOTE</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Phone Call & Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <a
              href="tel:+251963138123"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-white bg-hiwi-primary active:bg-hiwi-hover"
              aria-label="Call 0963 138 123"
            >
              <PhoneCall className="w-3 h-3" />
              <span>0963 138 123</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-black hover:text-hiwi-primary focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop (dark overlay covering the left 35%) */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Right-to-Left Slide Drawer (Takes 65% of screen width) */}
      <aside
        aria-label="Mobile Navigation Drawer"
        className={`fixed top-0 right-0 bottom-0 h-full w-[65%] max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div>
          {/* Drawer Header with Title and Close X Button */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-gray-50/70">
            <span className="text-xs font-black tracking-widest uppercase text-gray-900">
              NAVIGATION
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-gray-700 hover:text-hiwi-primary focus:outline-none transition-colors"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col text-xs font-bold tracking-widest uppercase divide-y divide-gray-100 px-4 py-2">
            <Link
              href="/"
              className={`py-3 text-sm ${pathname === '/' ? 'text-hiwi-primary font-black' : 'text-gray-900 hover:text-hiwi-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>

            <Link
              href="/about"
              className={`py-3 text-sm ${pathname === '/about' ? 'text-hiwi-primary font-black' : 'text-gray-900 hover:text-hiwi-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>

            <Link
              href="/pricing"
              className={`py-3 text-sm ${pathname === '/pricing' ? 'text-hiwi-primary font-black' : 'text-gray-900 hover:text-hiwi-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              PRICING &amp; PACKAGES
            </Link>

            <Link
              href="/inquiry"
              className={`py-3 text-sm ${pathname === '/inquiry' ? 'text-hiwi-primary font-black' : 'text-gray-900 hover:text-hiwi-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              EVENT INQUIRY
            </Link>

            <Link
              href="/contact"
              className={`py-3 text-sm ${pathname === '/contact' ? 'text-hiwi-primary font-black' : 'text-gray-900 hover:text-hiwi-primary'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>

            {/* Events Accordion Item */}
            <div className="py-2">
              <div className="flex items-center justify-between py-1">
                <Link
                  href="/services"
                  className={`text-sm tracking-widest font-bold uppercase ${
                    pathname.startsWith('/services') ? 'text-hiwi-primary font-black' : 'text-gray-900 hover:text-hiwi-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  EVENTS
                </Link>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileEventsOpen(!mobileEventsOpen);
                  }}
                  className="p-2 text-gray-700 hover:text-hiwi-primary focus:outline-none transition-colors"
                  aria-expanded={mobileEventsOpen}
                  aria-label="Toggle Events dropdown"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileEventsOpen ? 'rotate-180 text-hiwi-primary' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Collapsible Events Submenu - Strictly English */}
              {mobileEventsOpen && (
                <div className="pl-3 pt-1 pb-2 space-y-2 border-l-2 border-hiwi-primary/30 ml-1 mt-1 animate-in fade-in-50 duration-150">
                  <Link
                    href="/services"
                    className="block py-1 text-xs font-bold text-hiwi-primary uppercase tracking-wider hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Events &rarr;
                  </Link>

                  {CATERING_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block py-1 text-xs font-semibold text-gray-700 hover:text-hiwi-primary transition-colors tracking-normal normal-case"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Quick Contact & Action Buttons in Drawer Bottom */}
        <div className="p-4 border-t border-gray-200 bg-gray-50/50 flex flex-col gap-2.5">
          <a
            href="tel:+251963138123"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-3 text-[11px] font-black uppercase tracking-wider text-white bg-black active:bg-gray-800 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-white" />
            <span>CALL 0963 138 123</span>
          </a>

          <Link
            href="/inquiry"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-3 text-[11px] font-black uppercase tracking-wider text-white bg-hiwi-primary active:bg-hiwi-hover transition-colors shadow-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>INQUIRE / GET A QUOTE</span>
          </Link>

          <a
            href="https://t.me/hiwicatering"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-2 px-3 text-[11px] font-bold tracking-wider text-gray-800 bg-white border border-gray-300 hover:border-hiwi-primary transition-colors"
          >
            <Send className="w-3 h-3 text-hiwi-primary" />
            <span>Telegram: @hiwicatering</span>
          </a>
        </div>
      </aside>
    </header>
  );
}
