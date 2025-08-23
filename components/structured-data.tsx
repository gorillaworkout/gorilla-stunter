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
      url: "https://gorillastunter.com",
    },
    about: {
      "@type": "SportsOrganization",
      name: "Gorilla Stunter",
      sport: "Cheerleading",
    },
  }

  const specificData = {
    WebPage: {
      ...baseData,
      mainEntity: {
        "@type": "SportsOrganization",
        name: "Gorilla Stunter",
        description: "Elite cheerleading stunt partner community",
      },
    },
    AboutPage: {
      ...baseData,
      mainEntity: {
        "@type": "Organization",
        name: "Gorilla Stunter",
        foundingDate: "1999",
        description: "Elite cheerleading stunt partner community founded in 1999",
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
