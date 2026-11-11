import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

interface ServiceDeliveryStripProps {
  serviceLabel: string;
}

export default function ServiceDeliveryStrip({ serviceLabel }: ServiceDeliveryStripProps) {
  const zones = [
    { name: 'Bole Sub-City', href: '/locations/bole', timing: '15–25 min dispatch' },
    { name: 'Ayat & Tafo', href: '/locations/ayat', timing: '10–15 min express' },
    { name: 'Summit & CMC', href: '/locations/summit-and-cmc', timing: '5–12 min same-zone' },
    { name: 'All 11 Sub-Cities', href: '/locations', timing: 'Full Addis coverage' },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-hiwi-primary block">
            Local Catering Near You • Addis Ababa &amp; Addis Abeba
          </span>
          <h2 className="text-lg sm:text-2xl font-black uppercase tracking-[0.12em] text-black">
            FAST {serviceLabel.toUpperCase()} DELIVERY ACROSS ADDIS
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Prepared fresh at our Summit Fiyel Bet kitchen (Plus Code XVW2+PCH) and delivered hot with stainless chafing warmers to every Addis Ababa &amp; Addis Abeba neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {zones.map((z) => (
            <Link
              key={z.href}
              href={z.href}
              className="bg-white border border-gray-200 hover:border-black p-4 flex items-center justify-between gap-3 transition-all group"
            >
              <div>
                <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black group-hover:text-hiwi-primary transition-colors">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{z.name}</span>
                </span>
                <span className="text-[11px] font-mono text-gray-500 block mt-1">{z.timing}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
