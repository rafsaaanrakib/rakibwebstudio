import type { Metadata } from "next";
import { Archivo, Piazzolla, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/site";

// Type system v3: Archivo grotesque for display + body, IBM Plex Mono for
// labels/meta, Piazzolla serif reserved for pull-quotes only.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const piazzolla = Piazzolla({
  subsets: ["latin"],
  variable: "--font-piazzolla",
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rakib Web Studio — Everything Your Business Needs to Grow",
    template: "%s | Rakib Web Studio",
  },
  description:
    "Rakib Web Studio is a business growth partner: websites, SEO, ads, content, social and video as one growth system for brands and online stores worldwide.",
  keywords: [
    "business growth partner",
    "web development",
    "SEO",
    "video editing",
    "Meta advertising",
    "e-commerce growth",
    "Rakib Ahmed",
    "Rakib Web Studio",
  ],
  authors: [{ name: "Rakib Ahmed" }],
  creator: "Rakib Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Rakib Web Studio",
    title: "Rakib Web Studio — Everything Your Business Needs to Grow",
    description:
      "Strategy, website, SEO, ads, content, social and video — one growth system that turns strangers into customers.",
    images: [
      {
        url: "/images/rakib-portrait.jpg",
        width: 880,
        height: 1100,
        alt: "Rakib Ahmed, founder of Rakib Web Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakib Web Studio — Business Growth Partner",
    description:
      "Everything your business needs to grow, from one partner. Websites, SEO, ads, content, social and video.",
    images: ["/images/rakib-portrait.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${piazzolla.variable} ${plexMono.variable}`}>
      <body className="bg-night font-sans text-porcelain antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Rakib Ahmed",
                  url: site.url,
                  jobTitle: "Business Growth Partner & Web Developer",
                  sameAs: [site.linkedin, site.instagram, site.tiktok, site.x, site.facebook],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Chattogram",
                    addressCountry: "BD",
                  },
                },
                {
                  "@type": "ProfessionalService",
                  name: "Rakib Web Studio",
                  url: site.url,
                  email: site.email,
                  description:
                    "Business growth partner: strategy, websites, SEO, advertising, content, social media and video as one growth system.",
                  founder: { "@type": "Person", name: "Rakib Ahmed" },
                  areaServed: "Worldwide",
                  sameAs: [site.googleProfile, site.linkedin, site.instagram, site.tiktok, site.x, site.facebook],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
