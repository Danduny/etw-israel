import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ETW Israel",
  description: "Guides, tips and insights on web design, SEO, digital marketing and online sales for businesses in Israel.",
};

const posts = blogPosts.en;

export default function BlogPageEN() {
  return (
    <main>
      <Nav locale="en" />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[400px] h-[400px] top-[10%] -right-[10%]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6 font-extrabold">
            Digital <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
            Practical guides, tips and comparisons to help you make smart decisions about your business&apos;s digital presence.
          </p>
        </div>
      </section>

      <section className="pb-28 md:pb-36 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="space-y-5">
            {posts.map((post, i) => (
              <article
                key={i}
                className="glass-card rounded-xl p-8 group hover:border-brand/20 transition-all duration-300 block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-brand text-[10px] font-bold tracking-[0.15em] px-2.5 py-1 rounded-full border border-brand/20 bg-brand/5">
                    {post.category}
                  </span>
                  <span className="text-gray-600 text-xs" style={{ fontFamily: "Inter" }}>
                    {post.date}
                  </span>
                  <span className="text-gray-600 text-xs">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold tracking-tight mb-3 group-hover:text-brand-light transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="text-brand text-sm font-medium mt-4">
                  Coming soon &rarr;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-aurora">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-6 font-extrabold">
            Want to <span className="text-gradient">Talk?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-light">
            Don&apos;t wait for an article. Book a call and we&apos;ll tell you exactly what we can do for your business.
          </p>
          <a
            href="https://calendly.com/dan-etw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-base inline-block font-semibold"
          >
            Book a Free Call
          </a>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}
