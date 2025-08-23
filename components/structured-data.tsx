import Script from "next/script"

interface StructuredDataProps {
  type: "WebPage" | "AboutPage" | "ContactPage"
  title: string
  description: string
  url: string
}

export default function StructuredData({ type, title, description, url }: StructuredDataProps) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "Gorilla Stunter",
      url: "https://gorillastunter.gorillaworkout.id",
    },
    about: {
      "@type": "SportsOrganization",
      name: "Gorilla Stunter",
      sport: "Cheerleading",
      description: "Komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia",
      logo: "https://gorillastunter.gorillaworkout.id/new_gs_4.png",
    },
  }

  const specificData = {
    WebPage: {
      ...baseData,
      mainEntity: {
        "@type": "SportsOrganization",
        name: "Gorilla Stunter",
        description: "Komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia",
        logo: "https://gorillastunter.gorillaworkout.id/new_gs_4.png",
      },
    },
    AboutPage: {
      ...baseData,
      mainEntity: {
        "@type": "Organization",
        name: "Gorilla Stunter",
        foundingDate: "2025",
        description: "Komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia, didirikan tahun 2025",
        founder: {
          "@type": "Person",
          name: "Renaldy Hardyant",
          jobTitle: "Founder",
        },
      },
    },
    ContactPage: {
      ...baseData,
      mainEntity: {
        "@type": "ContactPage",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-555-123-4567",
          email: "info@gorillastunter.com",
          contactType: "Customer Service",
          availableLanguage: "English",
        },
      },
    },
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(specificData[type]),
      }}
    />
  )
}
