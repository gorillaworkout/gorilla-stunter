"use client"

import Navigation from "@/components/navigation"
import AnimatedSection from "@/components/animated-section"
import Image from "next/image"
import dynamic from "next/dynamic"
import { PRODUCTS, type Product } from "@/lib/products"

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

function ProductCard({
  product,
  index,
}: {
  product: Product
  index: number
}) {
  const direction = index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"

  return (
    <AnimatedSection direction={direction as "left" | "up" | "right"} delay={index * 100}>
      <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        <div className="relative h-72 overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
            style={{
              background: `radial-gradient(ellipse at center, ${product.color}40 0%, transparent 70%)`,
            }}
          >
            {product.images ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={product.images.front}
                  alt={product.name}
                  width={280}
                  height={280}
                  className="object-contain w-auto h-[85%] drop-shadow-2xl transform group-hover:rotate-3 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="relative">
                <div
                  className="w-36 h-44 rounded-lg shadow-2xl transform group-hover:rotate-3 transition-transform duration-500 relative overflow-hidden"
                  style={{ backgroundColor: product.color }}
                >
                  <div
                    className="absolute inset-x-4 top-6 h-8 rounded opacity-90"
                    style={{ backgroundColor: "#FFD700" }}
                  />
                  <div className="absolute inset-x-6 top-8 flex items-center justify-center">
                    <span className="text-[8px] font-heading font-black tracking-wider text-black">
                      GORILLA STUNTER
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {product.badge && (
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full shadow-lg">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-4 h-4 rounded-full border border-border shadow-inner"
              style={{ backgroundColor: product.color }}
            />
            <span className="text-xs text-muted-foreground font-body">{product.colorName}</span>
          </div>

          <h3 className="font-heading font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative max-w-6xl mx-auto text-center">
          <AnimatedSection direction="up">
            <span className="inline-block font-heading font-bold text-sm text-primary uppercase tracking-[0.2em] mb-4">
              Official Merchandise
            </span>
            <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Gorilla Stunter{" "}
              <span className="text-gradient-gold">Collection</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exclusive Gorilla Stunter merchandise collection. View in interactive 3D,
              zoom in for details, and rotate to see every angle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-4 px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up">
            <Product3DCarousel products={PRODUCTS} />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up" className="mb-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground">
                  Our <span className="text-primary">Collection</span>
                </h2>
                <p className="font-body text-muted-foreground mt-1">
                  {PRODUCTS.length} exclusive designs
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-heading font-black text-2xl text-primary mb-3">GORILLA STUNTER</h3>
          <p className="font-body text-background/70 mb-6 max-w-md mx-auto">
            Official merchandise from Indonesia's elite cheerleading stunt partner community.
          </p>
          <div className="flex justify-center gap-6 font-body text-sm text-background/60">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/about" className="hover:text-primary transition-colors">About</a>
            <a href="/gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="font-body text-background/40 text-sm mt-6">
            Copyright 2024 Gorilla Stunter. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
