import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETW Israel | Web Design, E-Commerce & Digital Marketing for Israeli Businesses",
  description:
    "Premium web design, e-commerce stores, SEO, and email marketing for Israeli businesses. Built by ETW Agency.",
  metadataBase: new URL("https://etw.co.il"),
  openGraph: {
    title: "ETW Israel | Web Design, E-Commerce & Digital Marketing",
    description:
      "Premium web design, e-commerce stores, SEO, and email marketing for Israeli businesses.",
    url: "https://etw.co.il",
    siteName: "ETW Israel",
    locale: "en_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
