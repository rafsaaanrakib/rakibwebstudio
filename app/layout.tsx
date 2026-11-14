import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/data/site";

// Type system v3: Archivo grotesque for display + body, IBM Plex Mono for
// labels/meta, Piazzolla serif reserved for pull-quotes only.
// Fonts are SELF-HOSTED (app/fonts/*.woff2, downloaded from Google Fonts)
// instead of next/font/google: the Google loader fetches font CSS at build
// time and fails the whole build when that fetch returns nothing — which is
// exactly what broke the Vercel preview build on 2026-11-14
// ("Cannot read properties of null (reading '1')" in next/font). Local
// files make the build deterministic on every host. Same fonts, same
// weights, same CSS variables — no visual change.
const archivo = localFont({
  src: "./fonts/archivo-latin.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

const piazzolla = localFont({
  src: [
    {
      path: "./fonts/piazzolla-latin-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/piazzolla-latin-italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-piazzolla",
  display: "swap",
});

const plexMono = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono-latin-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rakib Web Studio — Everything Your Business Needs to Grow",
    template: "%s | Rakib Web Studio",
  },
  description:
    "Everything your business needs to grow: websites, SEO, ads, content, social and video as one system, worldwide.",
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
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "Rakib Web Studio — Blog RSS" }],
    },
  },
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
        <SmoothScroll />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${site.gaId}');`}
        </Script>
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
                  email: site.contactEmail,
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
