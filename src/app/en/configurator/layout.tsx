import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Configurator | ETW Israel",
  description:
    "Build your website brief in 4 simple steps. Choose type, style, extras and get a tailored proposal within 24 hours.",
  openGraph: {
    title: "Website Configurator | ETW Israel",
    description:
      "Build your website brief in 4 simple steps. Get a tailored proposal within 24 hours.",
    url: "https://etw.co.il/en/configurator",
    siteName: "ETW Israel",
    locale: "en_US",
    type: "website",
  },
};

export default function ConfiguratorLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
