import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ETW Israel | Web Design, Online Stores & Digital Marketing",
  description:
    "Web design, online stores, SEO and email marketing for businesses in Israel. Premium quality, real results.",
  openGraph: {
    title: "ETW Israel | Web Design, Online Stores & Digital Marketing",
    description:
      "Web design, online stores, SEO and email marketing for businesses in Israel.",
    url: "https://etw.co.il/en",
    siteName: "ETW Israel",
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="ltr" lang="en" style={{ fontFamily: "'Inter', sans-serif" }}>
      {children}
    </div>
  );
}
