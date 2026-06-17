import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { servicesList, content } from "@/lib/content";

const portfolio = [
  {
    name: "VitaluxDENT",
    type: "Dental Clinic",
    url: "vitaluxdent.cz",
    scores: { bestPractices: 100, seo: 100 },
  },
  {
    name: "NajitZubare",
    type: "SaaS Platform — 8,800 Clinics",
    url: "najitzubare.cz",
    scores: { bestPractices: 96, seo: 100 },
  },
  {
    name: "Apartments Verona",
    type: "Tourist Apartment Rentals",
    url: "apartmentsverona.cz",
    scores: { bestPractices: 96, seo: 91 },
  },
  {
    name: "WillBeClean",
    type: "Cleaning Company — Europe",
    url: "willbeclean.eu",
    scores: { bestPractices: 100, seo: 91 },
  },
];

const t = content.en;
const services = servicesList.en;

export default function EnglishHome() {
  return (
    <main>
      <Nav locale="en" />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[500px] h-[500px] top-[10%] -right-[10%]" aria-hidden="true" />
        <div className="glow-orb w-[300px] h-[300px] bottom-[20%] -left-[5%] opacity-50" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="stagger-2 flex justify-center relative order-first lg:order-last">
              <div className="relative w-[220px] h-[280px] md:w-[280px] md:h-[360px] lg:w-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full" aria-hidden="true" />
                <Image
                  src="/images/mascot-lion.png"
                  alt="ETW Israel mascot"
                  width={400}
                  height={500}
                  className="relative z-10 drop-shadow-[0_0_60px_rgba(137,90,246,0.4)] float object-contain"
                  priority
                />
              </div>
            </div>

            <div className="order-last lg:order-first text-center lg:text-left">
              <div className="stagger-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 font-extrabold">
                  {t.hero.h1}
                  <br />
                  <span className="text-gradient">{t.hero.h1Accent}</span>
                </h1>
              </div>

              <div className="stagger-2">
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed mx-auto lg:mx-0">
                  {t.hero.sub}
                </p>
              </div>

              <div className="stagger-3">
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                  <a
                    href="https://calendly.com/dan-etw/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-8 py-4 text-sm font-semibold"
                  >
                    {t.hero.cta}
                  </a>
                  <a
                    href="#services"
                    className="px-8 py-4 text-sm font-medium text-gray-300 hover:text-white border border-white/10 rounded-lg hover:border-white/20 transition-all duration-200"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE DO — 3 pillars ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-deep-purple">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">{t.pillars.label}</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            {t.pillars.h2}
            <br />
            <span className="text-gradient">{t.pillars.h2Accent}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {t.pillars.items.map((card, i) => (
              <div
                key={i}
                className="glass-card-gradient rounded-xl p-8 h-full group hover:scale-[1.02] transition-transform duration-300"
              >
                <p className="text-brand text-xs font-bold tracking-[0.15em] mb-2" style={{ fontFamily: "Inter" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-bold tracking-tight mb-1">{card.title}</h3>
                <p className="text-brand-light/60 text-sm font-medium mb-4">{card.subtitle}</p>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES + PRICING ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden" id="services">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">{t.services.label}</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            {t.services.h2}
            <br />
            <span className="text-gradient">{t.services.h2Accent}</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Link
                key={i}
                href={`/en/services/${s.slug}`}
                className="service-card glass-card card-accent rounded-xl p-6 flex flex-col h-full group"
              >
                <div className="w-12 h-12 mb-5 relative">
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={48}
                    height={48}
                    className="object-contain drop-shadow-[0_0_15px_rgba(137,90,246,0.25)]"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-light transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">{s.desc}</p>
                <p className="text-sm text-gray-500">
                  {s.label}{" "}
                  <span className="text-brand font-semibold text-base">{s.price}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY ETW ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-aurora">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4 text-center">{t.whyUs.label}</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 font-extrabold text-center">
            {t.whyUs.h2}
            <br />
            <span className="text-gradient">{t.whyUs.h2Accent}</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.whyUs.items.map((prop, i) => (
              <div
                key={i}
                className="glass-card-purple rounded-xl p-8 h-full group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold tracking-tight">{prop.title}</h3>
                  <span className="text-2xl font-extrabold text-gradient shrink-0 ml-4">
                    {prop.stat}
                  </span>
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-3">{prop.desc}</p>
                <p className="text-brand/50 text-[10px] font-medium tracking-widest">{prop.statLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-deep-purple" id="portfolio">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">{t.portfolio.label}</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            {t.portfolio.h2}
            <br />
            <span className="text-gradient">{t.portfolio.h2Accent}</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {portfolio.map((project, i) => (
              <a
                key={i}
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-8 group hover:border-brand/20 transition-all duration-300 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-brand-light transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{project.type}</p>
                  </div>
                  <span className="text-brand text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200 shrink-0 ml-4" style={{ fontFamily: "Inter" }}>
                    {project.url}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </div>

                <div className="flex items-center gap-5 mt-5 pt-5 border-t border-white/5">
                  {[
                    { label: "SEO", value: project.scores.seo },
                    { label: "Best Practices", value: project.scores.bestPractices },
                  ].map((metric) => (
                    <div key={metric.label} className="flex items-center gap-2" style={{ fontFamily: "Inter" }}>
                      <span className="text-green-400 font-bold text-sm">{metric.value}</span>
                      <span className="text-gray-600 text-[10px] tracking-wider">{metric.label}</span>
                    </div>
                  ))}
                  <p className="text-[8px] text-gray-600 tracking-wider ml-auto">Google Lighthouse</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 md:py-44 relative overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[400px] h-[400px] top-[20%] left-1/2 -translate-x-1/2" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:flex justify-center relative">
              <div className="relative w-[360px] h-[460px]">
                <div className="absolute inset-0 bg-brand/15 blur-[80px] rounded-full" aria-hidden="true" />
                <Image
                  src="/images/mascot-lion-bust.png"
                  alt="ETW Israel"
                  width={360}
                  height={460}
                  className="relative z-10 drop-shadow-[0_0_50px_rgba(137,90,246,0.35)] object-contain float"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 font-extrabold">
                {t.cta.h2}
                <br />
                <span className="text-gradient">{t.cta.h2Accent}</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl font-light leading-relaxed mx-auto lg:mx-0">
                {t.cta.sub}
              </p>
              <a
                href="https://calendly.com/dan-etw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 sm:px-14 py-4 sm:py-5 text-base sm:text-lg inline-block font-semibold"
              >
                {t.cta.btn}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}
