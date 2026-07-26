import Image from "next/image"
import fs from "fs"
import path from "path"
import AnimatedSection from "./animated-section"

export default function HomeGallery() {
  const galleryDir = path.join(process.cwd(), "public/images/gallery")
  
  let images: string[] = []
  try {
    const files = fs.readdirSync(galleryDir)
    images = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    console.log("Found images in gallery:", images.length, images)
  } catch (error) {
    console.error("Error reading gallery directory:", error)
  }

  if (images.length === 0) return null

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
            Behind The <span className="text-primary">Stunts</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Before the perfect hit, there are hours of sweat, trust, and teamwork. Here's a glimpse into our training sessions.
          </p>
        </AnimatedSection>
        
        <div className="flex flex-wrap justify-center gap-6">
          {images.map((image, index) => (
            <AnimatedSection 
              key={image} 
              direction="up" 
              delay={(index % 3) * 100}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
            >
              <div className="relative w-full overflow-hidden rounded-2xl group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 aspect-[3/4]">
                <Image
                  src={`/images/gallery/${image}`}
                  alt={`Gorilla Stunter Gallery ${index + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white font-heading font-bold text-xl tracking-wider opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    Gorilla Stunter
                  </span>
                  <span className="text-white/80 font-body text-sm mt-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    Elite Cheerleading
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
