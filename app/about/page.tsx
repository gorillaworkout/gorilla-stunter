import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import StructuredData from "@/components/structured-data"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "About Us - Gorilla Stunter | Elite Cheerleading Stunt Community",
  description:
    "Pelajari tentang misi Gorilla Stunter, komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia. Temukan kisah kami dan tim pelatih elite.",
  keywords:
    "about gorilla stunter, cheerleading history, stunt training philosophy, elite coaches, cheerleading community values, komunitas cheerleading, athlete kelas dunia",
  openGraph: {
    title: "About Us - Gorilla Stunter | Elite Cheerleading Stunt Community",
    description:
      "Pelajari tentang misi Gorilla Stunter, komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia.",
    type: "website",
    url: "https://gorillastunter.gorillaworkout.id/about",
    images: [
      {
        url: "https://gorillastunter.gorillaworkout.id/new_gs_4.png",
        width: 1200,
        height: 630,
        alt: "About Gorilla Stunter - Our Story and Mission",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://gorillastunter.gorillaworkout.id/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <StructuredData
        type="AboutPage"
        title="About Us - Gorilla Stunter"
        description="Pelajari tentang misi Gorilla Stunter, komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia."
        url="https://gorillastunter.gorillaworkout.id/about"
      />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <AnimatedSection animation="slideInDown">
          <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-background via-background to-muted">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="font-heading font-black text-5xl md:text-7xl text-foreground mb-6 leading-tight">
                  About <span className="text-primary">Gorilla Stunter</span>
                </h1>
                <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  We are more than just a cheerleading community. We are a family of elite athletes dedicated to pushing
                  the boundaries of what's possible in cheerleading stunts.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Our Mission</h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                    To create an elite community where cheerleading athletes can develop their stunt skills to the
                    highest level while fostering teamwork, precision, and unwavering commitment to excellence.
                  </p>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    We believe that every athlete has the potential to achieve greatness when provided with the right
                    training, support, and partnership opportunities.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                          className="w-16 h-16 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Passion Driven</h3>
                      <p className="font-body text-muted-foreground">Excellence through dedication</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Story Section */}
        <AnimatedSection animation="slideInLeft">
          <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
                  Our <span className="text-primary">Story</span>
                </h2>
                <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A fresh start in 2025 - founded by passionate cheerleading athletes with a bold vision to revolutionize
                  the stunt training community.
                </p>
              </div>

              <div className="space-y-16">
                <AnimatedSection animation="slideInRight" delay={200}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                          <span className="font-heading font-bold text-primary-foreground">2025</span>
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-foreground">The Vision</h3>
                      </div>
                      <p className="font-body text-lg text-muted-foreground leading-relaxed">
                        Gorilla Stunter was born from a simple but powerful idea: to create the ultimate platform where 
                        cheerleading athletes can connect, learn, and push the boundaries of what's possible in stunts. 
                        Founded by experienced athletes who saw the need for a dedicated stunt partner community.
                      </p>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
                          <svg
                            className="w-12 h-12 text-primary-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <p className="font-body text-muted-foreground">The vision that drives us forward</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slideInLeft" delay={300}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                          <span className="font-heading font-bold text-primary-foreground">Q2</span>
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-foreground">Building Community</h3>
                      </div>
                      <p className="font-body text-lg text-muted-foreground leading-relaxed">
                        Our focus is on building a strong foundation with our first group of dedicated members. 
                        We're developing our partner matching system and establishing training protocols that 
                        prioritize safety, skill development, and meaningful connections between athletes.
                      </p>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center md:order-1">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
                          <svg
                            className="w-12 h-12 text-primary-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <p className="font-body text-muted-foreground">Building our foundation</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slideInRight" delay={400}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                          <span className="font-heading font-bold text-primary-foreground">2026</span>
                        </div>
                        <h3 className="font-heading font-bold text-2xl text-foreground">Expanding Horizons</h3>
                      </div>
                      <p className="font-body text-lg text-muted-foreground leading-relaxed">
                        Our vision for the future: to grow into a thriving community of passionate athletes, expand our 
                        network of certified coaches, and establish Gorilla Stunter as the go-to platform for elite 
                        cheerleading stunt training and partnership matching across the region.
                      </p>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
                          <svg
                            className="w-12 h-12 text-primary-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <p className="font-body text-muted-foreground">Growing our community</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Values Section */}
        <AnimatedSection animation="slideInUp">
          <section className="py-20 px-4 bg-muted">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
                  Our <span className="text-primary">Values</span>
                </h2>
                <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  The principles that guide everything we do and shape our community culture.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatedSection animation="scaleIn" delay={100}>
                  <Card className="bg-background border-border text-center group hover:border-primary transition-colors card-glow-hover">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                        <svg
                          className="w-8 h-8 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">Excellence</h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        We strive for perfection in every stunt, every training session, and every interaction.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={200}>
                  <Card className="bg-background border-border text-center group hover:border-primary transition-colors card-glow-hover">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                        <svg
                          className="w-8 h-8 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">Teamwork</h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        Success in stunting requires absolute trust and coordination between partners.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={300}>
                  <Card className="bg-background border-border text-center group hover:border-primary transition-colors card-glow-hover">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                        <svg
                          className="w-8 h-8 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">Safety</h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        Every technique is taught with safety as the top priority, ensuring athlete wellbeing.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scaleIn" delay={400}>
                  <Card className="bg-background border-border text-center group hover:border-primary transition-colors card-glow-hover">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                        <svg
                          className="w-8 h-8 text-primary-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">Innovation</h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        We continuously develop new techniques and training methods to stay ahead.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Leadership Team Section */}
        <AnimatedSection animation="slideInUp">
          <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
                  Meet Our <span className="text-primary">Leadership</span>
                </h2>
                <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Elite coaches and leaders who bring decades of experience and passion to our community.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <AnimatedSection animation="rotateIn" delay={100}>
                  <Card className="bg-card border-border group hover:border-primary transition-colors card-glow-hover">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                        <span className="font-heading font-black text-2xl text-primary-foreground">RH</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">Renaldy Hardyant</h3>
                      <p className="font-body text-primary font-semibold mb-4">Founder </p>
                      <p className="font-body text-muted-foreground leading-relaxed">
                      Renaldy Hardyant is a distinguished athlete who has competed in the Asia ACIC Championship in Singapore and the ICU World Championship in America. A multiple-time national champion, he has proven his exceptional skill and consistency in the cheerleading world.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="rotateIn" delay={200}>
                  <Card className="bg-card border-border group hover:border-primary transition-colors card-glow-hover">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                        <span className="font-heading font-black text-2xl text-primary-foreground">MD</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">Michael De Fretes</h3>
                      <p className="font-body text-primary font-semibold mb-4">Elite Stunt Coordinator</p>
                      <p className="font-body text-muted-foreground leading-relaxed">
                      Michael De Fretes is a national athlete from FCSI with impressive achievements in cheerleading. He has participated in prestigious competitions such as the Asia Championship and World Championship in Japan, as well as the Cheerleading World Championship and CAIOC Japan.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="rotateIn" delay={300}>
                  <Card className="bg-card border-border group hover:border-primary transition-colors card-glow-hover">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                        <span className="font-heading font-black text-2xl text-primary-foreground">AR</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">Rangga Cornelius</h3>
                      <p className="font-body text-primary font-semibold mb-4">Elite Stunt Coordinator</p>
                      <p className="font-body text-muted-foreground leading-relaxed">
                      Rangga Cornelius is a talented athlete who has represented his team in both the Asia and World Championships from ICU , showcasing his skill and dedication to the sport on an international stage.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection animation="slideInUp">
          <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-black text-4xl md:text-6xl text-primary-foreground mb-6">
                Ready to Join Our Family?
              </h2>
              <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Become part of the Gorilla Stunter legacy. Experience the difference that elite training, passionate
                coaching, and a supportive community can make in your cheerleading journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  size="lg"
                  className="bg-background hover:bg-muted text-foreground font-heading font-bold text-lg px-8 py-4"
                >
                  Start Your Journey
                </WhatsAppButton>
                <WhatsAppButton
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading font-semibold text-lg px-8 py-4 bg-transparent"
                >
                  Contact Us
                </WhatsAppButton>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <footer className="bg-foreground text-background py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <h3 className="font-heading font-black text-3xl text-primary mb-4">GORILLA STUNTER</h3>
                <p className="font-body text-background/80 leading-relaxed mb-6 max-w-md">
                  Elite cheerleading stunt partner community dedicated to excellence, precision, and teamwork. Where
                  champions are forged through dedication and skill.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                    <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                    <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                    <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg text-background mb-4">Quick Links</h4>
                <ul className="space-y-2 font-body text-background/80">
                  <li>
                    <a href="/" className="hover:text-primary transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Training Programs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Competitions
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg text-background mb-4">Contact Info</h4>
                <ul className="space-y-2 font-body text-background/80">
                  <li>Email: info@gorillastunter.com</li>
                  <li>Phone: (62) 851-3352-4900</li>
                                      <li>
                                        Address: Jl. Bulungan No.1, RT.11/RW.7
                    <br />
                   Kramat Pela, Kec. Kby. Baru
                    <br />
                   Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
                    </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-background/20 pt-8 text-center">
              <p className="font-body text-background/60">
                © 2024 Gorilla Stunter. All rights reserved. Built with precision and excellence.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
