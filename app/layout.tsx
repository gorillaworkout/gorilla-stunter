import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"
import PageTransition from "@/components/page-transition"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Gorilla Stunter - Elite Cheerleading Stunt Community",
  description:
    "Komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia. Bergabunglah dengan Gorilla Stunter untuk mencapai level elite dalam cheerleading.",
  keywords: "cheerleading, stunt, partner stunt, cheerleading community, elite cheerleading, stunt training, komunitas cheerleading, athlete kelas dunia, gorilla stunter",
  authors: [{ name: "Gorilla Stunter" }],
  creator: "Gorilla Stunter",
  publisher: "Gorilla Stunter",
  openGraph: {
    title: "Gorilla Stunter - Elite Cheerleading Stunt Community",
    description: "Komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia.",
    type: "website",
    locale: "en_US",
    url: "https://gorillastunter.com",
    siteName: "Gorilla Stunter",
    images: [
      {
        url: "https://gorillastunter.com/new_gs_4.png",
        width: 1200,
        height: 630,
        alt: "Gorilla Stunter - Elite Cheerleading Stunt Community Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorilla Stunter - Elite Cheerleading Stunt Community",
    description: "Komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia.",
    images: ["https://gorillastunter.com/new_gs_4.png"],
    creator: "@gorillastunter",
    site: "@gorillastunter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://gorillastunter.com",
    languages: {
      "en-US": "https://gorillastunter.com",
    },
  },
  category: "Sports & Fitness",
  classification: "Cheerleading Training Community",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/new_gs_4.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="msapplication-TileColor" content="#FFD700" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* WhatsApp and Telegram specific meta tags */}
        <meta property="og:image" content="https://gorillastunter.com/new_gs_4.png" />
        <meta property="og:image:secure_url" content="https://gorillastunter.com/new_gs_4.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Gorilla Stunter - Elite Cheerleading Stunt Community" />
        
        {/* Additional social media meta tags */}
        <meta name="twitter:image" content="https://gorillastunter.com/new_gs_4.png" />
        <meta name="twitter:image:alt" content="Gorilla Stunter - Elite Cheerleading Stunt Community" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              name: "Gorilla Stunter",
              description:
                "Komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia.",
              url: "https://gorillastunter.com",
              logo: "https://gorillastunter.com/new_gs_4.png",
              image: "https://gorillastunter.com/new_gs_4.png",
              telephone: "+1-555-123-4567",
              email: "info@gorillastunter.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Bulungan No.1, RT.11/RW.7",
                addressLocality: "Kramat Pela, Kec. Kby. Baru",
                addressRegion: "Kota Jakarta Selatan",
                postalCode: "12130",
                addressCountry: "ID",
              },
              sameAs: [
                "https://twitter.com/gorillastunter",
                "https://facebook.com/gorillastunter",
                "https://instagram.com/gorillastunter",
              ],
              sport: "Cheerleading",
              foundingDate: "2025",
              memberOf: {
                "@type": "Organization",
                name: "National Cheerleading Association",
              },
              offers: {
                "@type": "Offer",
                name: "Elite Cheerleading Stunt Training",
                description: "Professional stunt training programs for all skill levels",
                category: "Sports Training",
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        <PageTransition>{children}</PageTransition>
        <ScrollToTop />
      </body>
    </html>
  )
}
