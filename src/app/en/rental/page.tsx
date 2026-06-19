import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Rental for Businesses | ETW Israel",
  description:
    "A premium custom website for a monthly fee. Zero upfront cost. Design, development, hosting, domain and maintenance — all included.",
};

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We learn about your business, audience and goals. Together we define the right website for you.",
  },
  {
    num: "02",
    title: "Design & Build",
    desc: "We design and build a custom website. You approve every stage before we move forward.",
  },
  {
    num: "03",
    title: "Launch & Pay Monthly",
    desc: "The site goes live. You pay a fixed monthly fee, no surprises.",
  },
];

const included = [
  {
    title: "Custom Design",
    desc: "Not a template. A website designed from scratch specifically for your brand and audience.",
  },
  {
    title: "Professional Development",
    desc: "Cutting-edge technology, blazing speed, optimized for mobile and every screen size.",
  },
  {
    title: "Domain Included",
    desc: "We purchase and manage the domain for you. Included in the price.",
  },
  {
    title: "Hosting & SSL",
    desc: "Fast, secure hosting with SSL certificate. Fully managed by us.",
  },
  {
    title: "Basic SEO",
    desc: "Technical optimization from day one — meta tags, URL structure and sitemap.",
  },
  {
    title: "2 Content Updates/Month",
    desc: "Need to change text, swap an image or add a page? Included.",
  },
];

const faqs = [
  {
    q: "What happens after 12 months?",
    a: "After the minimum period, you continue month-to-month. Cancel anytime with 30 days notice.",
  },
  {
    q: "What if I want to leave before 12 months?",
    a: "Early cancellation requires payment of 80% of the remaining months. This protects our investment in design and development.",
  },
  {
    q: "Who owns the website and domain?",
    a: "As long as you pay, the website and domain are active and exclusively yours to use. Ownership stays with us. If you want to leave, you can purchase the domain separately.",
  },
  {
    q: "Can I buy the domain?",
    a: "Yes. If you decide to leave and want to keep the domain, we will offer a fair purchase price.",
  },
  {
    q: "What is not included?",
    a: "Paid advertising, ongoing SEO retainer, and major structural redesigns. All available as separate services.",
  },
  {
    q: "Why not just build a Wix site?",
    a: "Because Wix is a template everyone uses. With us you get a site designed specifically for your business, with high performance and built-in SEO — no platform limitations.",
  },
];

const tiers = [
  {
    name: "Basic",
    price: "790",
    desc: "Branding site up to 5 pages",
    features: [
      "Custom design",
      "Up to 5 pages",
      "Mobile responsive",
      "Hosting + SSL + domain",
      "1 content update/month",
    ],
  },
  {
    name: "Business",
    price: "990",
    desc: "Advanced site with extra features",
    popular: true,
    features: [
      "Everything in Basic",
      "Up to 10 pages",
      "Contact form + integrations",
      "Built-in basic SEO",
      "2 content updates/month",
      "Google Analytics",
    ],
  },
  {
    name: "Premium",
    price: "1,290",
    desc: "Full solution for businesses that want more",
    features: [
      "Everything in Business",
      "Unlimited pages",
      "Blog / news section",
      "Advanced animations & effects",
      "3 content updates/month",
      "Monthly performance report",
    ],
  },
];

export default function RentalPageEN() {
  return (
    <main>
      <Nav locale="en" />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90dvh] flex items-center pt-20 overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[500px] h-[500px] top-[10%] -right-[10%]" aria-hidden="true" />
        <div className="glow-orb w-[300px] h-[300px] bottom-[20%] -left-[5%] opacity-50" aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
          <div className="stagger-1">
            <p className="section-label mb-6">New Service</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 font-extrabold">
              A Premium Website
              <br />
              <span className="text-gradient">For a Monthly Fee</span>
            </h1>
          </div>

          <div className="stagger-2">
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              No 15,000 ₪ upfront. No loans. A custom website — design,
              development, hosting, domain and maintenance — all included in a
              fixed monthly payment.
            </p>
          </div>

          <div className="stagger-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/972559510042?text=Hi%2C%20I%27m%20interested%20in%20website%20rental"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-sm font-semibold"
              >
                Chat on WhatsApp
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 text-sm font-medium text-gray-300 hover:text-white border border-white/10 rounded-lg hover:border-white/20 transition-all duration-200"
              >
                Plans & Pricing
              </a>
            </div>
          </div>

          <div className="stagger-4 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <span>&#10003; Zero upfront cost</span>
            <span>&#10003; Custom design</span>
            <span>&#10003; Domain + hosting included</span>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-deep-purple">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            Three Steps
            <br />
            <span className="text-gradient">To Your Website</span>
          </h2>

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="glass-card-gradient rounded-xl p-8 flex gap-6 items-start"
              >
                <span
                  className="text-brand font-extrabold text-2xl shrink-0"
                  style={{ fontFamily: "Inter" }}
                >
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">What&apos;s Included</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            Everything in <span className="text-gradient">One Price</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {included.map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section
        className="py-28 md:py-36 relative overflow-hidden bg-aurora"
        id="pricing"
      >
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4 text-center">Plans & Pricing</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6 font-extrabold text-center">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto font-light">
            All plans include a 12-month minimum. After that — month-to-month,
            cancel with 30 days notice.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 flex flex-col h-full relative ${
                  tier.popular
                    ? "glass-card-purple border-brand/30"
                    : "glass-card"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-6 bg-brand text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{tier.desc}</p>
                <p className="mb-6">
                  <span
                    className="text-4xl font-extrabold text-gradient"
                    style={{ fontFamily: "Inter" }}
                  >
                    ₪{tier.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1"> / month</span>
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-300 font-light flex items-start gap-2"
                    >
                      <span className="text-brand mt-0.5 shrink-0">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/972559510042?text=Hi%2C%20I%27m%20interested%20in%20website%20rental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    tier.popular
                      ? "btn-primary"
                      : "btn-outline text-brand hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-deep-purple">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            Questions & <span className="text-gradient">Answers</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <h3 className="text-base font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-32 md:py-44 relative overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[400px] h-[400px] top-[20%] left-1/2 -translate-x-1/2" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 font-extrabold">
            Ready for a Website
            <br />
            <span className="text-gradient">Without the Big Investment?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
            A quick WhatsApp chat and we will figure out what you need. No sales
            pitch, no pressure.
          </p>
          <a
            href="https://wa.me/972559510042?text=Hi%2C%20I%27m%20interested%20in%20website%20rental"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 sm:px-14 py-4 sm:py-5 text-base sm:text-lg inline-block font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}
