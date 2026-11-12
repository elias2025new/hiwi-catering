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
} from 'lucide-react';
import { CATERING_SERVICES } from '@/data/services';
import AnimatedLogoText from '@/components/AnimatedLogoText';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-hiwi-border">
      {/* Top Info Strip */}
      <div className="bg-hiwi-dark text-stone-200 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 tracking-wide font-medium text-center sm:text-left">
          <div className="flex items-center justify-center gap-1.5 text-stone-200">
            <MapPin className="w-3.5 h-3.5 text-hiwi-gold shrink-0" strokeWidth={1.75} />
            <span className="truncate">Summit Fiyel Bet, Addis Ababa, Ethiopia</span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 text-stone-100">
            <a
              href="tel:+251963138123"
              className="flex items-center gap-1.5 hover:text-hiwi-gold transition-colors font-semibold tabular-nums"
              aria-label="Call Hiwi Catering at 0963 138 123"
            >
              <Phone className="w-3.5 h-3.5 text-hiwi-gold shrink-0" strokeWidth={1.75} />
              <span>0963 138 123</span>
            </a>

            <span className="text-stone-600" aria-hidden="true">|</span>

            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-hiwi-gold transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-hiwi-gold shrink-0" strokeWidth={1.75} />
              <span className="hidden sm:inline">Telegram: @hiwicatering</span>
              <span className="sm:hidden">Telegram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Boxed Brand Mark */}
          <Link href="/" className="inline-block group shrink-0" aria-label="Hiwi Catering Homepage">
            <div className="rounded-lg border-2 border-hiwi-dark px-2.5 py-1 sm:px-5 sm:py-2 text-center transition-colors duration-200 group-hover:bg-hiwi-dark group-hover:text-white">
              <span className="block text-sm sm:text-2xl font-black tracking-[0.14em] uppercase text-hiwi-dark group-hover:text-white leading-tight">
                <AnimatedLogoText />
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-stone-700 group-hover:text-stone-200 mt-0.5">
                catering &amp; events
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items - Strictly HOME, CONTACT US, ABOUT, EVENTS */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-10 tracking-wider text-xs font-bold uppercase"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className={`transition-colors py-2 border-b-2 ${
                pathname === '/'
                  ? 'border-hiwi-primary text-hiwi-primary font-extrabold'
                  : 'border-transparent text-stone-800 hover:text-hiwi-primary'
              }`}
            >
              HOME
            </Link>

            <Link
              href="/contact"
              className={`transition-colors py-2 border-b-2 ${
                pathname === '/contact'
                  ? 'border-hiwi-primary text-hiwi-primary font-extrabold'
                  : 'border-transparent text-stone-800 hover:text-hiwi-primary'
              }`}
            >
              CONTACT US
            </Link>

            <Link
              href="/about"
              className={`transition-colors py-2 border-b-2 ${
                pathname === '/about'
                  ? 'border-hiwi-primary text-hiwi-primary font-extrabold'
                  : 'border-transparent text-stone-800 hover:text-hiwi-primary'
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
                onClick={() => setEventsDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 transition-colors py-2 border-b-2 uppercase tracking-wider ${
                  pathname.startsWith('/services')
                    ? 'border-hiwi-primary text-hiwi-primary font-extrabold'
                    : 'border-transparent text-stone-800 hover:text-hiwi-primary'
                }`}
                aria-expanded={eventsDropdownOpen}
                aria-haspopup="true"
              >
                <span>EVENTS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    eventsDropdownOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={1.75}
                />
              </button>

              {eventsDropdownOpen && (
                <div className="absolute top-full -left-4 w-64 bg-white rounded-xl shadow-warm-lg border border-hiwi-border p-1.5 z-50 animate-feedback-in">
                  <Link
                    href="/services"
                    className="block px-3.5 py-2.5 rounded-md text-xs font-extrabold tracking-wider text-hiwi-dark hover:bg-hiwi-stone transition-colors uppercase"
                    onClick={() => setEventsDropdownOpen(false)}
                  >
                    ALL EVENTS &rarr;
                  </Link>
                  <div className="my-1 border-t border-hiwi-border" />
                  {CATERING_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-3.5 py-2.5 rounded-md text-xs font-semibold text-stone-700 hover:bg-hiwi-cream hover:text-hiwi-primary transition-colors tracking-normal normal-case"
                      onClick={() => setEventsDropdownOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+251963138123"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-hiwi-dark text-hiwi-dark px-4 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-hiwi-dark hover:text-white transition-all duration-200 tabular-nums"
              aria-label="Call 0963 138 123"
            >
              <PhoneCall className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>0963 138 123</span>
            </a>

            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-hiwi-primary text-white px-5 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-hiwi-hover transition-all duration-200 shadow-warm active:scale-[0.98]"
            >
              <span>INQUIRE / GET A QUOTE</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href="tel:+251963138123"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide text-white bg-hiwi-primary hover:bg-hiwi-hover active:scale-[0.98] transition-all tabular-nums"
              aria-label="Call 0963 138 123"
            >
              <PhoneCall className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>0963 138 123</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-hiwi-dark hover:bg-hiwi-stone transition-colors shrink-0"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.75} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-hiwi-dark/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 border-r border-hiwi-border animate-feedback-in">
            <div>
              <div className="flex items-center justify-between border-b border-hiwi-border pb-4 mb-6">
                <div className="rounded-lg border-2 border-hiwi-dark px-3 py-1 text-center">
                  <span className="block text-sm font-black tracking-[0.16em] uppercase text-hiwi-dark leading-none">
                    HIWI CATERING
                  </span>
                  <span className="block text-[10px] font-semibold tracking-widest uppercase text-stone-600 mt-0.5">
                    catering &amp; events
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-stone-600 hover:bg-hiwi-stone hover:text-hiwi-dark transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" strokeWidth={1.75} />
                </button>
              </div>

              <div className="flex flex-col space-y-1 text-xs font-bold tracking-wider uppercase">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-2 rounded-lg border-b border-hiwi-border ${
                    pathname === '/' ? 'text-hiwi-primary bg-hiwi-cream' : 'text-stone-800 hover:text-hiwi-primary'
                  }`}
                >
                  HOME
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-2 rounded-lg border-b border-hiwi-border ${
                    pathname === '/contact' ? 'text-hiwi-primary bg-hiwi-cream' : 'text-stone-800 hover:text-hiwi-primary'
                  }`}
                >
                  CONTACT US
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-2 rounded-lg border-b border-hiwi-border ${
                    pathname === '/about' ? 'text-hiwi-primary bg-hiwi-cream' : 'text-stone-800 hover:text-hiwi-primary'
                  }`}
                >
                  ABOUT
                </Link>

                <div className="border-b border-hiwi-border py-1">
                  <button
                    type="button"
                    onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
                    className={`w-full flex items-center justify-between py-2.5 px-2 text-left rounded-lg uppercase tracking-wider ${
                      pathname.startsWith('/services') ? 'text-hiwi-primary' : 'text-stone-800'
                    }`}
                  >
                    <span>EVENTS</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileEventsOpen ? 'rotate-180' : ''
                      }`}
                      strokeWidth={1.75}
                    />
                  </button>

                  {mobileEventsOpen && (
                    <div className="pl-3 pb-2 space-y-1 text-xs font-semibold normal-case tracking-normal">
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 px-2 rounded-md text-hiwi-dark font-bold hover:bg-hiwi-stone uppercase"
                      >
                        ALL EVENTS &rarr;
                      </Link>
                      {CATERING_SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 px-2 rounded-md text-stone-700 hover:bg-hiwi-cream hover:text-hiwi-primary"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-2 rounded-lg border-b border-hiwi-border ${
                    pathname === '/pricing' ? 'text-hiwi-primary bg-hiwi-cream' : 'text-stone-800 hover:text-hiwi-primary'
                  }`}
                >
                  PRICING &amp; PACKAGES
                </Link>
                <Link
                  href="/locations"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-2 rounded-lg border-b border-hiwi-border ${
                    pathname.startsWith('/locations') ? 'text-hiwi-primary bg-hiwi-cream' : 'text-stone-800 hover:text-hiwi-primary'
                  }`}
                >
                  DELIVERY AREAS
                </Link>
              </div>
            </div>

            {/* Mobile Drawer Actions */}
            <div className="mt-8 pt-6 border-t border-hiwi-border space-y-2.5">
              <Link
                href="/inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-hiwi-primary text-white text-center font-bold text-xs tracking-wider uppercase block hover:bg-hiwi-hover transition-colors shadow-warm"
              >
                INQUIRE / GET A QUOTE
              </Link>
              <a
                href="tel:+251963138123"
                className="w-full py-3 rounded-lg border-2 border-hiwi-dark text-hiwi-dark text-center font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-hiwi-dark hover:text-white transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>Call: 0963 138 123</span>
              </a>
              <a
                href="https://t.me/hiwicatering"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg border border-hiwi-border text-stone-700 text-center font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:border-hiwi-dark hover:text-hiwi-dark transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-hiwi-primary" strokeWidth={1.75} />
                <span>Telegram @hiwicatering</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
