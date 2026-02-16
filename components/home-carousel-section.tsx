"use client"

import dynamic from "next/dynamic"
import { PRODUCTS } from "@/lib/products"

const Product3DCarousel = dynamic(() => import("@/components/product-3d-carousel"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px] bg-card/50 rounded-2xl border border-border">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="font-heading font-semibold text-foreground mt-4 text-sm">
          Loading 3D Viewer...
        </p>
      </div>
    </div>
  ),
})

export default function HomeCarouselSection() {
  return <Product3DCarousel products={PRODUCTS} />
}
