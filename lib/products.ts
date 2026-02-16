export interface ProductImages {
  front: string
  back: string
}

export interface Product {
  id: string
  name: string
  description: string
  color: string
  colorName: string
  badge?: string
  features: string[]
  images?: ProductImages
}

export const PRODUCTS: Product[] = [
  {
    id: "gs-og",
    name: "Gorilla Stunter OG Black",
    description:
      "The original Gorilla Stunter release: a jet-black tee featuring the signature meditating gorilla emblem in gold on both front and back. Built to look sharp under lights and stay clean in daily wear—classic, bold, and unmistakably GS.",
    color: "#1a1a1a",
    colorName: "Black / Gold",
    badge: "BEST SELLER",
    features: ["100% Combed Cotton 30s", "Gold emblem print", "Pre-shrunk fabric", "Double-stitched hem"],
    images: {
      front: "/products/gs-og/front.png",
      back: "/products/gs-og/back.png",
    },
  },
  {
    id: "gs-lucuk",
    name: "Gorilla Stunter White Glitter",
    description:
      "Clean white edition with metallic gold Gorilla Stunter logo. Perfect for casual style with a premium cheerleading community vibe.",
    color: "#f5f5f0",
    colorName: "White / Gold",
    features: ["100% Combed Cotton 30s", "Metallic gold print", "Breathable fabric", "Ribbed crew neck"],
    images: {
      front: "/products/gs-lucuk/front.png",
      back: "/products/gs-lucuk/back.png",
    },
  },
  {
    id: "gs-semedi",
    name: "Gorilla Stunter - Zen Mode",
    description:
      "Jet black base with bold gold accents. A meditating gorilla in a white hoodie and orange sunglasses sits centered above the 'GORILLA STUNTER' gold emblem—clean, confident streetwear energy.",
    color: "#1a2744",
    colorName: "Black / Gold",
    badge: "NEW",
    features: ["100% Combed Cotton 30s", "Embossed gold logo", "Reinforced shoulders", "Athletic fit"],
    images: {
      front: "/products/gs-semedi/front.png",
      back: "/products/gs-semedi/back.png",
    },
  },
  // {
  //   id: "gs-maroon-gold",
  //   name: "Gorilla Stunter Maroon Spirit",
  //   description:
  //     "Rich maroon with premium gold foil design. Stand out with this bold colorway that represents power and passion.",
  //   color: "#5c1a1a",
  //   colorName: "Maroon / Gold",
  //   features: ["100% Combed Cotton 30s", "Gold foil print", "Tagless label", "Side-seamed construction"],
  //   images: {
  //     front: "/products/gs-maroon-gold/front.png",
  //     back: "/products/gs-maroon-gold/back.png",
  //   },
  // },
  // {
  //   id: "gs-grey-black",
  //   name: "Gorilla Stunter Stealth Grey",
  //   description:
  //     "Understated grey with black Gorilla Stunter branding. For athletes who let their performance speak louder than their outfit.",
  //   color: "#3a3a3a",
  //   colorName: "Grey / Black",
  //   features: ["Cotton-polyester blend", "Black matte print", "Moisture-wicking", "Regular fit"],
  //   images: {
  //     front: "/products/gs-grey-black/front.png",
  //     back: "/products/gs-grey-black/back.png",
  //   },
  // },
  // {
  //   id: "gs-forest-gold",
  //   name: "Gorilla Stunter Forest Edition",
  //   description:
  //     "Deep forest green with gold Gorilla emblem. A premium limited edition that channels the wild strength of the gorilla spirit.",
  //   color: "#1a3a2a",
  //   colorName: "Forest / Gold",
  //   badge: "LIMITED",
  //   features: ["Premium combed cotton", "Embroidered logo", "Limited run of 100", "Numbered tag"],
  //   images: {
  //     front: "/products/gs-forest-gold/front.png",
  //     back: "/products/gs-forest-gold/back.png",
  //   },
  // },
]
