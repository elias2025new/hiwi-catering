import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Send, 
  Clock, 
  ChevronRight, 
  Building2,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { ADDIS_ABABA_LOCATIONS } from '@/data/services';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Hiwi Catering Addis Ababa | Summit Fiyel Bet',
  },
  description: 'Get in touch with Hiwi Catering in Addis Ababa. Commercial kitchen in Summit Fiyel Bet. Call 0963 138 123 or submit an online event inquiry today!',
  alternates: {
    canonical: 'https://hiwicatering.com/contact',
  },
  keywords: [
    'contact Hiwi Catering',
    'catering service Addis Ababa phone',
    'catering Summit Addis Ababa',
    'catering Fiyel Bet Addis Ababa',
    'catering Addis Ababa address',
    'book catering Addis Ababa'
  ],
  openGraph: {
    title: 'Contact Hiwi Catering Addis Ababa | Summit Fiyel Bet',
    description: 'Call 0963 138 123 or submit an inquiry for wedding, birthday, and event catering across Addis Ababa.',
    url: 'https://hiwicatering.com/contact',
    siteName: 'Hiwi Catering Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/contact-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Hiwi Catering Services in Addis Ababa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Hiwi Catering Addis Ababa | Summit Fiyel Bet',
    description: 'Call 0963 138 123 or submit an event inquiry with Hiwi Catering.',
    images: ['/images/contact-bg.jpg']
  }
};

export default function ContactPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hiwicatering.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact Us',
        item: 'https://hiwicatering.com/contact'
      }
    ]
  };

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Hiwi Catering Services',
    description: 'Official contact and event consultation page for Hiwi Catering Services in Addis Ababa, Ethiopia.',
    url: 'https://hiwicatering.com/contact',
    mainEntity: {
      '@type': 'FoodEstablishment',
      '@id': 'https://hiwicatering.com/#business',
      name: 'Hiwi Catering Services',
      telephone: '+251963138123',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Summit Fiyel Bet Area',
        addressLocality: 'Addis Ababa',
        addressCountry: 'ET'
      }
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Breadcrumb Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 uppercase tracking-wider text-[11px] font-medium">
          <Link href="/" className="hover:text-hiwi-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-black font-bold">Contact Us</span>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Editorial Section Header - Matches Homepage */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-hiwi-primary block mb-2">
            Direct Inquiries &amp; Consultations
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-black leading-tight">
            CONTACT HIWI CATERING
          </h1>
          <div className="w-12 h-0.5 bg-black mx-auto my-4" />
          <p className="text-xs sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Based in <strong>Summit Fiyel Bet</strong>, serving weddings, celebrations, and corporate banquets across every sub-city of Addis Ababa. Call us, message on Telegram, or submit your event details below.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & The Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Phone, Telegram, Kitchen Address & Service Radius */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Box 1: Direct Line & Quick Actions */}
            <div className="bg-white border border-gray-200 p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-3.5 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 border border-black flex items-center justify-center text-black shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 block">
                    Phone &amp; Direct Line
                  </span>
                  <a
                    href="tel:+251963138123"
                    className="text-base sm:text-lg font-black uppercase tracking-wider text-black hover:text-hiwi-primary transition-colors block"
                  >
                    0963 138 123
                  </a>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Available 7 days a week for immediate questions, private tastings, and urgent event consultations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href="tel:+251963138123"
                  className="py-3 px-4 bg-black text-white hover:bg-gray-800 text-[11px] font-bold uppercase tracking-[0.15em] text-center transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://t.me/hiwicatering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 border border-black text-black hover:bg-black hover:text-white text-[11px] font-bold uppercase tracking-[0.15em] text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Box 2: Commercial Kitchen & Physical Address */}
            <div className="bg-white border border-gray-200 p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3.5 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 border border-black flex items-center justify-center text-black shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 block">
                    Central Kitchen &amp; Office
                  </span>
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-black">
                    Summit Fiyel Bet Area
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-gray-600 font-light leading-relaxed">
                <div>
                  <strong className="text-black font-bold uppercase tracking-wider block text-[11px] mb-0.5">
                    Physical Address:
                  </strong>
                  <span>
                    Summit, Fiyel Bet Area (near CMC &amp; Summit Safari corridor), Addis Ababa, Ethiopia
                  </span>
                </div>

                <div>
                  <strong className="text-black font-bold uppercase tracking-wider block text-[11px] mb-0.5">
                    Operating Hours:
                  </strong>
                  <span className="text-gray-700">
                    Monday – Sunday: 7:00 AM – 10:00 PM<br />
                    <span className="text-hiwi-primary font-medium text-[11px]">
                      *Catering deliveries &amp; setups dispatched 24/7 as requested
                    </span>
                  </span>
                </div>

                <div>
                  <strong className="text-black font-bold uppercase tracking-wider block text-[11px] mb-0.5">
                    Kitchen Dispatch:
                  </strong>
                  <span>
                    Centrally positioned for rapid transport of hot bain-marie chafing dish warmers, fresh injera platters, and service crews across Addis Ababa.
                  </span>
                </div>
              </div>
            </div>

            {/* Box 3: Sub-Cities & Service Coverage */}
            <div className="bg-gray-50 border border-gray-200 p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-black shrink-0" />
                <h4 className="text-xs font-black uppercase tracking-[0.15em] text-black">
                  Sub-Cities Served in Addis Ababa
                </h4>
              </div>
              <p className="text-[11px] text-gray-500 font-light">
                We deliver and setup full buffet banquets across:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 pt-1">
                {ADDIS_ABABA_LOCATIONS.map((loc) => (
                  <div key={loc.name} className="flex items-center gap-1.5 py-0.5">
                    <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                    <span className="font-medium truncate">{loc.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: The Inquiry Form (Replaces the old mock map) */}
          <div className="lg:col-span-7">
            <InquiryForm 
              title="READY TO MAKE YOUR NEXT EVENT PERFECT?"
              subtitle="Fill out this quick form & our team will contact you within 24 hours"
              className="shadow-xl"
            />
          </div>

        </div>

      </section>

      {/* Bottom Service Strip - Consistent with Homepage */}
      <section className="bg-black text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-hiwi-gold block">
              The Taste You Love!
            </span>
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white">
              Planning a Wedding, Birthday, or Special Celebration?
            </h2>
            <p className="text-xs text-gray-400 font-light max-w-xl">
              We provide complimentary tasting consultations for weddings and customized menu proposals within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+251963138123"
              className="py-3 px-6 bg-hiwi-primary hover:bg-hiwi-hover text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 0963 138 123</span>
            </a>
            <Link
              href="/pricing"
              className="py-3 px-6 border border-white/30 hover:border-white text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
