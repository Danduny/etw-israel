const services = [
  {
    title: "Landing Page",
    description:
      "High-converting single-page sites designed to turn visitors into leads. Fast delivery, mobile-first, optimized for performance.",
    price: "$1,800",
  },
  {
    title: "Business Website",
    description:
      "Multi-page websites that establish credibility and drive growth. Custom design, CMS integration, SEO-ready from day one.",
    price: "$3,500",
  },
  {
    title: "E-Commerce Store",
    description:
      "Full online stores built to sell. Product catalogs, payment processing, inventory management, and conversion-optimized checkout.",
    price: "$5,500",
  },
  {
    title: "SEO",
    description:
      "Technical audits, keyword strategy, on-page optimization, and link building. Measurable rankings growth, month over month.",
    price: "$1,200/mo",
  },
  {
    title: "Email Marketing",
    description:
      "Automated flows, campaign strategy, list segmentation, and analytics. Turn your subscriber list into predictable revenue.",
    price: "$1,200/mo",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label mb-6">ETW Agency &middot; Israel</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            We build digital
            <br />
            <span className="text-gradient">that performs.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Web design, e-commerce, SEO, and email marketing for Israeli
            businesses. Premium quality. No fluff.
          </p>
          <a
            href="mailto:exposethewealth@gmail.com"
            className="btn-primary inline-block px-8 py-4 text-base"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-24 sm:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-4">What we do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-16">
            Services &amp; Pricing
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card glass-card card-accent rounded-lg p-6 flex flex-col"
              >
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>
                <p className="text-sm text-gray-500">
                  Starting from{" "}
                  <span className="text-brand font-semibold text-base">
                    {s.price}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 px-6">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Ready to start?
          </h2>
          <p className="text-gray-400 mb-10 text-lg font-light">
            Tell us what you need. We will get back to you within 24 hours with a
            clear scope and timeline.
          </p>
          <a
            href="mailto:exposethewealth@gmail.com"
            className="btn-primary inline-block px-8 py-4 text-base"
          >
            exposethewealth@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <span>&copy; {new Date().getFullYear()} ETW Agency</span>
          <a
            href="https://etw.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            etw.agency
          </a>
        </div>
      </footer>
    </main>
  );
}
