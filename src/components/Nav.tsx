import Link from "next/link";
import { content, type Locale } from "@/lib/content";

export default function Nav({ locale }: { locale: Locale }) {
  const t = content[locale].nav;
  const isHe = locale === "he";
  const prefix = isHe ? "" : "/en";

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={prefix || "/"} className="text-lg font-bold tracking-tight" dir="ltr">
          ETW<span className="text-brand">.</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href={`${prefix}/#services`} className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            {t.services}
          </Link>
          <Link href={`${prefix}/#portfolio`} className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            {t.portfolio}
          </Link>
          <Link href={`${prefix}/rental`} className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            {t.rental}
          </Link>
          <Link href={`${prefix}/blog`} className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
            {t.blog}
          </Link>
          <Link
            href={t.langHref}
            className="text-xs text-gray-500 hover:text-white transition-colors font-medium tracking-wide"
          >
            {t.langSwitch}
          </Link>
          <a
            href="https://calendly.com/dan-etw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2.5 text-xs font-semibold tracking-wide"
            style={{ animation: "none" }}
          >
            {t.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
