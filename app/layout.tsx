import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://simkus.co.uk"),
  title: {
    default: "Vaidas Simkus — Full-Stack Developer & Cloud Engineer",
    template: "%s | Vaidas Simkus",
  },
  description:
    "Portfolio of Vaidas Simkus — full-stack developer and cloud engineer specialising in Next.js, AWS, React, and modern web application development.",
  keywords: [
    "Vaidas Simkus",
    "Full Stack Developer",
    "Cloud Engineer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Norwich",
    "AWS Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Vaidas Simkus", url: "https://simkus.co.uk" }],
  creator: "Vaidas Simkus",
  publisher: "Vaidas Simkus",
  alternates: {
    canonical: "https://simkus.co.uk",
  },
  openGraph: {
    type: "website",
    url: "https://simkus.co.uk",
    title: "Vaidas Simkus — Full-Stack Developer & Cloud Engineer",
    description:
      "Explore the portfolio of Vaidas Simkus — building modern web applications with React, Next.js, and AWS.",
    siteName: "simkus.co.uk",
    images: [
      {
        url: "https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/og/og-vaidas-simkus.png",
        width: 1200,
        height: 630,
        alt: "Vaidas Simkus — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaidas Simkus — Full-Stack Developer & Cloud Engineer",
    description:
      "Modern portfolio showcasing Next.js, AWS, and full-stack engineering projects.",
    images: ["https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/og/og-vaidas-simkus.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SV3TSGGN1R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SV3TSGGN1R');
          `}
        </Script>

        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>

        {/* Schema.org Person Markup */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vaidas Simkus",
              url: "https://simkus.co.uk",
              image: "https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/profile-picture/mister-v-new.png",
              jobTitle: "Full-Stack Developer & Cloud Engineer",
              sameAs: [
                "https://github.com/mister-vaidas",
                "https://www.linkedin.com/in/vaidas-simkus-7b950a67/",
                "https://x.com/mistersmk",
                "https://www.instagram.com/mistervaidas/",
                "https://www.youtube.com/@VaidasSimkus",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
