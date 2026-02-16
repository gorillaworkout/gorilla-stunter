"use client"

import { useState, useCallback } from "react"
import dynamic from "next/dynamic"
import { type Product } from "@/lib/products"

const TShirt3DViewer = dynamic(() => import("@/components/tshirt-3d-viewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-card/50 rounded-2xl">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="font-heading font-semibold text-foreground mt-4 text-sm">
          Loading 3D Viewer...
        </p>
      </div>
    </div>
  ),
})

function ChevronLeft() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function Product3DCarousel({
  products,
  className = "",
}: {
  products: Product[]
  className?: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }, [products.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }, [products.length])

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  if (products.length === 0) return null

  const product = products[currentIndex]

  return (
    <div className={`bg-card/50 border border-border rounded-2xl overflow-hidden ${className}`}>
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-muted/30 to-card">
          <TShirt3DViewer
            color={product.color}
            images={product.images}
            className="h-full"
          />

          {products.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:scale-110"
                aria-label="Previous product"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-200 hover:scale-110"
                aria-label="Next product"
              >
                <ChevronRight />
              </button>
            </>
          )}

          {products.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-card/80 backdrop-blur-sm px-3 py-2 rounded-full border border-border">
              {products.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => goToIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`View ${p.name}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6 lg:p-8 flex flex-col justify-center">
          {product.badge && (
            <span className="inline-block w-fit bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full mb-3">
              {product.badge}
            </span>
          )}

          <h3 className="font-heading font-black text-2xl lg:text-3xl text-foreground mb-2">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-5 h-5 rounded-full border-2 border-border shadow-inner"
              style={{ backgroundColor: product.color }}
            />
            <span className="font-body text-sm text-muted-foreground">{product.colorName}</span>
          </div>

          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="mb-6">
            <h4 className="font-heading font-bold text-sm text-foreground mb-3 uppercase tracking-wider">
              Features
            </h4>
            <ul className="space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
              <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              Drag to rotate
            </div>
            <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
              <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              Scroll to zoom
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
