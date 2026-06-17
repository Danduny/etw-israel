import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blogArticles } from "@/lib/blog-content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const slugs = Object.keys(blogArticles.en);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.en[slug];
  if (!article) return {};
  return {
    title: `${article.title} | ETW Israel`,
    description: article.metaDescription,
  };
}

export default async function BlogPostPageEN({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = blogArticles.en[slug];
  if (!article) notFound();

  return (
    <main>
      <Nav locale="en" />

      <article className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="mb-8">
            <a href="/en/blog" className="text-brand text-sm font-medium hover:text-brand-light transition-colors">
              &larr; Back to Blog
            </a>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-brand text-[10px] font-bold tracking-[0.15em] px-2.5 py-1 rounded-full border border-brand/20 bg-brand/5">
              {article.category}
            </span>
            <span className="text-gray-600 text-xs" style={{ fontFamily: "Inter" }}>
              {article.date}
            </span>
            <span className="text-gray-600 text-xs">{article.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight mb-10 font-extrabold">
            {article.title}
          </h1>

          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-extrabold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-semibold
              prose-a:text-brand prose-a:no-underline hover:prose-a:text-brand-light
              prose-li:text-gray-400 prose-li:font-light"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }}
          />
        </div>
      </article>

      <section className="py-20 md:py-28 relative overflow-hidden bg-aurora">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-6 font-extrabold">
            Want to <span className="text-gradient">Talk?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-light">
            Book a free call and we&apos;ll tell you exactly what we can do for your business.
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

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
    .replace(/^(?!<[hul])((?!<).+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/\n{2,}/g, '\n');
}
