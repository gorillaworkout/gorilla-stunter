"use client"

import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"

export default function SimpleHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background with large centered logo */}
      <div className="absolute inset-0">
        {/* Brighter background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background/85 to-accent/15"></div>
        
        {/* Mobile background enhancement - subtle pattern */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-transparent via-primary/5 to-accent/10"></div>
        
        {/* Large centered logo - desktop only */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-contain logo-background transition-all duration-1000 hover:scale-105 hidden md:block"
          style={{
            backgroundImage: 'url(/new_gs_4.png)',
            backgroundSize: 'min(40vw, 50vh)',
            backgroundPosition: 'center center',
            opacity: 0.8,
          }}
        ></div>
        
        {/* Subtle animated overlay patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-16 h-16 bg-primary/8 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-20 h-20 bg-accent/8 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/3 left-10 w-12 h-12 bg-primary/6 rounded-full blur-lg animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      {/* Content overlay - responsive positioning */}
      <div className="relative z-10 w-full h-full">
        
        {/* Mobile Layout - Logo Top, Text Bottom */}
        <div className="md:hidden h-full w-full flex flex-col px-4 pt-16 pb-8">
          {/* Mobile Logo - Large, Prominent, and High Position */}
          <div className="flex-shrink-0 mb-8 sm:mb-10 flex justify-center">
            <div 
              className="w-64 h-64 sm:w-72 sm:h-72 bg-center bg-no-repeat bg-contain logo-background mobile-logo-prominent transition-all duration-500 relative z-10"
              style={{
                backgroundImage: 'url(/new_gs_4.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
              }}
            ></div>
          </div>
          
          {/* Mobile Content - Below Logo */}
          <div className="text-center animate-fade-in-up w-full max-w-sm mx-auto flex-1">
            <h1 className="font-heading font-black text-2xl sm:text-3xl text-foreground mb-3 sm:mb-4 leading-tight text-responsive">
              <span className="text-primary drop-shadow-lg animate-pulse block">
                GORILLA STUNTER
              </span>
            </h1>
            <p className="font-body text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3 leading-relaxed">
              Elite Cheerleading Stunt Partner Community
            </p>
            <p className="font-body text-xs sm:text-sm text-primary/90 mb-6 sm:mb-8 font-semibold">
              Trained by World-Class Athletes
            </p>
            <WhatsAppButton
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-heading font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
            >
              🥇 Join Our Community
            </WhatsAppButton>
          </div>
        </div>

        {/* Desktop Layout - Left Content Only */}
        <div className="hidden md:flex h-full items-center px-4 lg:px-8 xl:px-12">
          
          {/* Left Half - Text Content */}
          <div className="w-1/2 h-full flex items-center justify-start pr-4 lg:pr-8">
            <div className="animate-fade-in-up text-left max-w-sm lg:max-w-md xl:max-w-lg">
              <h1 className="font-heading font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-foreground mb-6 lg:mb-8 leading-tight text-responsive">
                <span className="text-primary drop-shadow-lg animate-pulse block mb-2">
                  GORILLA
                </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg block">
                  STUNTER
                </span>
              </h1>
              <div className="space-y-3 lg:space-y-4">
                <p className="font-body text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed">
                  Elite Cheerleading Stunt Partner Community
                </p>
                <p className="font-body text-sm lg:text-base xl:text-lg text-primary/90 font-semibold">
                  Trained by World-Class Athletes
                </p>
                <WhatsAppButton
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-heading font-bold text-base lg:text-lg xl:text-xl px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 min-w-[200px] lg:min-w-[240px] xl:min-w-[280px]"
                >
                  🥇 Join Our Community
                </WhatsAppButton>
              </div>
            </div>
          </div>
          
          {/* Right Half - Empty Space for Logo */}
          <div className="w-1/2 h-full">
            {/* This space is intentionally left empty for the centered logo */}
          </div>
          
        </div>
      </div>

      {/* Scroll indicator - mobile optimized */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-primary rounded-full flex justify-center bg-background/30 backdrop-blur-sm">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-muted-foreground mt-1 sm:mt-2 opacity-70 hidden sm:block">Scroll Down</p>
      </div>
    </section>
  )
}
