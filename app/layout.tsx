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
    "Professional cheerleading stunt partner community dedicated to excellence, precision, and teamwork. Join the elite Gorilla Stunter family.",
  keywords: "cheerleading, stunt, partner stunt, cheerleading community, elite cheerleading, stunt training",
  authors: [{ name: "Gorilla Stunter" }],
  creator: "Gorilla Stunter",
  publisher: "Gorilla Stunter",
  openGraph: {
    title: "Gorilla Stunter - Elite Cheerleading Stunt Community",
    description: "Professional cheerleading stunt partner community dedicated to excellence, precision, and teamwork.",
    type: "website",
    locale: "en_US",
    url: "https://gorillastunter.com",
    siteName: "Gorilla Stunter",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gorilla Stunter - Elite Cheerleading Stunt Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gorilla Stunter - Elite Cheerleading Stunt Community",
    description: "Professional cheerleading stunt partner community dedicated to excellence, precision, and teamwork.",
    images: ["/twitter-image.jpg"],
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="msapplication-TileColor" content="#FFD700" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsOrganization",
              name: "Gorilla Stunter",
              description:
                "Elite cheerleading stunt partner community dedicated to excellence, precision, and teamwork.",
              url: "https://gorillastunter.com",
              logo: "https://gorillastunter.com/logo.png",
              image: "https://gorillastunter.com/og-image.jpg",
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
