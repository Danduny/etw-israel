import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/content";
import { blogArticles } from "@/lib/blog-content";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "בלוג | ETW Israel",
  description: "מדריכים, טיפים ותובנות על עיצוב אתרים, SEO, שיווק דיגיטלי ומכירות אונליין לעסקים בישראל.",
};

const posts = blogPosts.he;

export default function BlogPage() {
  return (
    <main>
      <Nav locale="he" />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[400px] h-[400px] top-[10%] -left-[10%]" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">בלוג</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6 font-extrabold">
            תובנות <span className="text-gradient">דיגיטליות</span>
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
            מדריכים מעשיים, טיפים והשוואות שיעזרו לך לקבל החלטות חכמות לגבי הנוכחות הדיגיטלית של העסק שלך.
          </p>
        </div>
      </section>

      <section className="pb-28 md:pb-36 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="space-y-5">
            {posts.map((post, i) => (
              <Link
                key={i}
                href={blogArticles.he[post.slug] ? `/blog/${post.slug}` : "#"}
                className="glass-card rounded-xl p-8 group hover:border-brand/20 transition-all duration-300 block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-brand text-[10px] font-bold tracking-[0.15em] px-2.5 py-1 rounded-full border border-brand/20 bg-brand/5">
                    {post.category}
                  </span>
                  <span className="text-gray-600 text-xs" dir="ltr" style={{ fontFamily: "Inter" }}>
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
                  {blogArticles.he[post.slug] ? "קראו עוד →" : "בקרוב →"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-aurora">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-6 font-extrabold">
            רוצים <span className="text-gradient">לדבר?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-light">
            לא צריכים לחכות למאמר. קבעו שיחה ונספר לכם בדיוק מה אפשר לעשות עם העסק שלכם.
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
