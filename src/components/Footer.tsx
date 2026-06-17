import { content, type Locale } from "@/lib/content";

export default function Footer({ locale }: { locale: Locale }) {
  const t = content[locale].footer;

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <span dir="ltr">&copy; {new Date().getFullYear()} ETW Agency</span>
        <div className="flex items-center gap-6">
          <a
            href="https://calendly.com/dan-etw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition-colors"
          >
            {t.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
