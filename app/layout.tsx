import type { Metadata } from "next";
import { Piazzolla, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rakibwebstudio.vercel.app";

const piazzolla = Piazzolla({
  subsets: ["latin"],
  variable: "--font-piazzolla",
  weight: ["500", "600", "700"],
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rakib Ahmed — Websites, SEO & Digital Growth",
    template: "%s | Rakib Ahmed",
  },
  description:
    "Rakib Ahmed builds websites, SEO strategies, content systems, and digital growth campaigns that help businesses get found, trusted, and chosen online.",
  keywords: [
    "web developer",
    "SEO specialist",
    "digital marketing consultant",
    "website development",
    "content strategy",
    "Meta advertising",
    "Rakib Ahmed",
  ],
  authors: [{ name: "Rakib Ahmed" }],
  creator: "Rakib Ahmed",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rakib Ahmed",
    title: "Rakib Ahmed — Websites, SEO & Digital Growth",
    description:
      "Websites, SEO, content strategy, and digital growth systems for businesses ready to be found, trusted, and chosen.",
    images: [
      {
        url: "/images/rakib-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Rakib Ahmed, web developer and digital marketer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakib Ahmed — Websites, SEO & Digital Growth",
    description:
      "Websites, SEO, content strategy, and digital growth systems for businesses.",
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
    <html lang="en" className={`${piazzolla.variable} ${plex.variable}`}>
      <body className="font-sans antialiased">
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
                  url: siteUrl,
                  jobTitle: "Web Developer and Digital Marketer",
                  sameAs: ["https://www.linkedin.com/in/rafsaanrakib"],
                },
                {
                  "@type": "ProfessionalService",
                  name: "Rakib Ahmed — Websites, SEO & Digital Growth",
                  url: siteUrl,
                  description:
                    "Web development, SEO, content strategy, and digital marketing services.",
                  founder: { "@type": "Person", name: "Rakib Ahmed" },
                  areaServed: "Worldwide",
                  serviceType: [
                    "Web Development",
                    "SEO",
                    "Content Strategy",
                    "Digital Marketing",
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
