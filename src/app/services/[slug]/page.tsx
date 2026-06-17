import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { serviceDetails, servicesList } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const slugs = ["websites", "ecommerce", "email-marketing", "seo"] as const;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.he[slug as keyof typeof serviceDetails.he];
  if (!service) return {};
  return {
    title: `${service.title} | ETW Israel`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails.he[slug as keyof typeof serviceDetails.he];
  if (!service) notFound();

  const serviceItem = servicesList.he.find((s) => s.slug === slug);

  return (
    <main>
      <Nav locale="he" />

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[400px] h-[400px] top-[10%] -left-[10%]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link href="/#services" className="text-brand text-sm font-medium hover:text-brand-light transition-colors mb-6 inline-block">
            ← חזרה לשירותים
          </Link>
          {serviceItem && (
            <div className="w-16 h-16 mb-6 relative">
              <Image
                src={serviceItem.icon}
                alt={service.title}
                width={64}
                height={64}
                className="object-contain drop-shadow-[0_0_20px_rgba(137,90,246,0.3)]"
              />
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6 font-extrabold">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-brand-light font-medium mb-6">{service.subtitle}</p>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-deep-purple">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">מה כלול</p>
          <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-12 font-extrabold">
            הכל ב<span className="text-gradient">חבילה אחת</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <h3 className="text-base font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">איך זה עובד</p>
          <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-12 font-extrabold">
            התהליך <span className="text-gradient">שלנו</span>
          </h2>
          <div className="space-y-6">
            {service.process.map((p, i) => (
              <div key={i} className="glass-card-gradient rounded-xl p-8 flex gap-6 items-start">
                <span className="text-brand font-extrabold text-2xl shrink-0" dir="ltr" style={{ fontFamily: "Inter" }}>
                  {p.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING CTA ═══ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-aurora">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <p className="text-gray-500 text-sm mb-2">{service.priceLabel}</p>
          <p className="text-5xl md:text-6xl font-extrabold text-gradient mb-6" dir="ltr">
            {service.price}
          </p>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-light">
            בלי הפתעות. בלי עלויות נסתרות. שיחה קצרה ונדע בדיוק מה אתם צריכים.
          </p>
          <a
            href="https://calendly.com/dan-etw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-base inline-block font-semibold"
          >
            קבעו שיחה חינם
          </a>
        </div>
      </section>

      <Footer locale="he" />
    </main>
  );
}
