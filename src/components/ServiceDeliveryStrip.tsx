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
    <section className="py-14 bg-hiwi-stone border-y border-hiwi-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-hiwi-dark text-balance">
            FAST {serviceLabel.toUpperCase()} DELIVERY ACROSS ADDIS ABABA &amp; ADDIS ABEBA
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Prepared fresh at our Summit Fiyel Bet kitchen (Plus Code{' '}
            <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-hiwi-border">
              XVW2+PCH
            </code>
            ) and delivered piping hot with stainless chafing warmers to every Addis Ababa &amp; Addis Abeba
            neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {zones.map((z) => (
            <Link
              key={z.href}
              href={z.href}
              className="bg-white border border-hiwi-border hover:border-hiwi-primary rounded-xl p-4 flex items-center justify-between gap-3 transition-all shadow-card hover:shadow-card-hover group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-hiwi-cream border border-hiwi-border flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-hiwi-primary" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-extrabold uppercase tracking-wide text-hiwi-dark group-hover:text-hiwi-primary transition-colors block truncate">
                    {z.name}
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5 tabular-nums">{z.timing}</span>
                </div>
              </div>
              <ArrowRight
                className="w-4 h-4 text-stone-500 group-hover:text-hiwi-primary transition-colors shrink-0"
                strokeWidth={1.75}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
