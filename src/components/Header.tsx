'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setEventsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
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
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-2 text-xs font-bold uppercase tracking-wide text-white bg-hiwi-primary hover:bg-hiwi-hover active:scale-[0.98] transition-all tabular-nums whitespace-nowrap"
              aria-label="Call 0963 138 123"
            >
              <PhoneCall className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} />
              <span>0963 138 123</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-hiwi-border bg-hiwi-cream text-hiwi-dark hover:bg-hiwi-stone transition-colors shrink-0"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
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
    </header>

    {/* Mobile Full-Height Drawer rendered outside blurred sticky header so fixed inset-0 covers full viewport */}
    {mobileMenuOpen && (
      <div
        className="lg:hidden fixed inset-0 z-[60] flex justify-end"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div
          className="fixed inset-0 bg-hiwi-dark/60 backdrop-blur-sm animate-feedback-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        <nav className="relative z-10 w-[86vw] max-w-sm h-dvh bg-white shadow-warm-lg border-l border-hiwi-border flex flex-col justify-between overflow-y-auto animate-feedback-in">
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-hiwi-border pb-4 mb-5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border-2 border-hiwi-dark px-3 py-1 text-center"
              >
                <span className="block text-sm font-black tracking-[0.14em] uppercase text-hiwi-dark leading-tight">
                  HIWI CATERING
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-600 mt-0.5">
                  catering &amp; events
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-hiwi-border bg-hiwi-cream text-hiwi-dark hover:bg-hiwi-stone transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="flex flex-col space-y-1 text-sm font-bold tracking-wide uppercase">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3.5 rounded-lg transition-colors ${
                  pathname === '/'
                    ? 'text-hiwi-primary bg-hiwi-cream font-extrabold'
                    : 'text-hiwi-dark hover:bg-hiwi-stone'
                }`}
              >
                HOME
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3.5 rounded-lg transition-colors ${
                  pathname === '/contact'
                    ? 'text-hiwi-primary bg-hiwi-cream font-extrabold'
                    : 'text-hiwi-dark hover:bg-hiwi-stone'
                }`}
              >
                CONTACT US
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3.5 rounded-lg transition-colors ${
                  pathname === '/about'
                    ? 'text-hiwi-primary bg-hiwi-cream font-extrabold'
                    : 'text-hiwi-dark hover:bg-hiwi-stone'
                }`}
              >
                ABOUT
              </Link>

              <div className="py-0.5">
                <button
                  type="button"
                  onClick={() => setMobileEventsOpen((prev) => !prev)}
                  aria-expanded={mobileEventsOpen}
                  className={`w-full flex items-center justify-between py-3 px-3.5 text-left rounded-lg uppercase tracking-wide transition-colors ${
                    pathname.startsWith('/services')
                      ? 'text-hiwi-primary bg-hiwi-cream font-extrabold'
                      : 'text-hiwi-dark hover:bg-hiwi-stone'
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

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    mobileEventsOpen ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-3 pl-3 border-l-2 border-hiwi-border space-y-1 text-xs font-semibold normal-case tracking-normal py-1">
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 px-3 rounded-md text-hiwi-dark font-bold hover:bg-hiwi-stone uppercase tracking-wider"
                      >
                        ALL EVENTS &rarr;
                      </Link>
                      {CATERING_SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 px-3 rounded-md text-stone-700 hover:bg-hiwi-cream hover:text-hiwi-primary transition-colors"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3.5 rounded-lg transition-colors ${
                  pathname === '/pricing'
                    ? 'text-hiwi-primary bg-hiwi-cream font-extrabold'
                    : 'text-hiwi-dark hover:bg-hiwi-stone'
                }`}
              >
                PRICING &amp; PACKAGES
              </Link>
              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3.5 rounded-lg transition-colors ${
                  pathname.startsWith('/locations')
                    ? 'text-hiwi-primary bg-hiwi-cream font-extrabold'
                    : 'text-hiwi-dark hover:bg-hiwi-stone'
                }`}
              >
                DELIVERY AREAS
              </Link>
            </div>
          </div>

          {/* Mobile Drawer Actions */}
          <div className="p-5 sm:p-6 bg-hiwi-cream border-t border-hiwi-border space-y-2.5">
            <Link
              href="/inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-lg bg-hiwi-primary text-white text-center font-extrabold text-xs tracking-wider uppercase block hover:bg-hiwi-hover transition-colors shadow-warm"
            >
              INQUIRE / GET A QUOTE
            </Link>
            <a
              href="tel:+251963138123"
              className="w-full py-3 rounded-lg border-2 border-hiwi-dark bg-white text-hiwi-dark text-center font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-hiwi-dark hover:text-white transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 shrink-0" strokeWidth={1.75} />
              <span>Call: 0963 138 123</span>
            </a>
            <a
              href="https://t.me/hiwicatering"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg border border-hiwi-border bg-white text-stone-700 text-center font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:border-hiwi-dark hover:text-hiwi-dark transition-colors"
            >
              <Send className="w-4 h-4 text-hiwi-primary shrink-0" strokeWidth={1.75} />
              <span>Telegram @hiwicatering</span>
            </a>
          </div>
        </nav>
      </div>
    )}
    </>
  );
}
