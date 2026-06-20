"use client";

import { useState } from "react";
import Link from "next/link";
import { content, type Locale } from "@/lib/content";

export default function Nav({ locale }: { locale: Locale }) {
  const t = content[locale].nav;
  const isHe = locale === "he";
  const prefix = isHe ? "" : "/en";
  const [open, setOpen] = useState(false);

  const links = [
    { href: `${prefix}/#services`, label: t.services },
    { href: `${prefix}/#portfolio`, label: t.portfolio },
    { href: `${prefix}/rental`, label: t.rental },
    { href: `${prefix}/blog`, label: t.blog },
    { href: `${prefix}/configurator`, label: t.configurator },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={prefix || "/"} className="text-lg font-bold tracking-tight" dir="ltr">
          ETW<span className="text-brand">.</span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block"
            >
              {l.label}
            </Link>
          ))}
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
            className="btn-primary px-5 py-2.5 text-xs font-semibold tracking-wide hidden sm:inline-block"
            style={{ animation: "none" }}
          >
            {t.cta}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden border-t border-white/5 bg-[#0a0a0f]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/dan-etw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2.5 text-xs font-semibold tracking-wide text-center"
            style={{ animation: "none" }}
          >
            {t.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
