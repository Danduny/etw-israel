import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETW Israel | עיצוב אתרים, חנויות אונליין ושיווק דיגיטלי",
  description:
    "בניית אתרים, חנויות אונליין, קידום אורגני ושיווק במייל לעסקים בישראל. עיצוב פרימיום, תוצאות אמיתיות.",
  metadataBase: new URL("https://etw.co.il"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ETW Israel | עיצוב אתרים, חנויות אונליין ושיווק דיגיטלי",
    description:
      "בניית אתרים, חנויות אונליין, קידום אורגני ושיווק במייל לעסקים בישראל.",
    url: "https://etw.co.il",
    siteName: "ETW Israel",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
