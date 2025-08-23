"use client"

import { Button } from "@/components/ui/button"

export default function SimpleHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Placeholder for user's GIF - they can replace this */}
        <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <div className="text-6xl font-bold text-primary/20">GIF</div>
            <p className="text-muted-foreground">Replace this with your GIF</p>
          </div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-primary">GORILLA</span>
            <br />
            STUNTER
          </h1>
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Elite Cheerleading Stunt Partner Community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
            >
              Join Our Community
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
