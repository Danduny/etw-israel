import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "בונים אתר — קונפיגורטור | ETW Israel",
  description:
    "בנו את הבריף לאתר שלכם ב-4 צעדים פשוטים. בחרו סוג, סגנון, תוספות וקבלו הצעה מותאמת אישית תוך 24 שעות.",
  openGraph: {
    title: "בונים אתר — קונפיגורטור | ETW Israel",
    description:
      "בנו את הבריף לאתר שלכם ב-4 צעדים פשוטים. הצעה מותאמת תוך 24 שעות.",
    url: "https://etw.co.il/configurator",
    siteName: "ETW Israel",
    locale: "he_IL",
    type: "website",
  },
};

export default function ConfiguratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
