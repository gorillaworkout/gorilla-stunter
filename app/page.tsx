import Navigation from "@/components/navigation"
import SimpleHero from "@/components/simple-hero"
import AnimatedSection from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import StructuredData from "@/components/structured-data"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <StructuredData
        type="WebPage"
        title="Gorilla Stunter - Elite Cheerleading Stunt Community"
        description="Komunitas cheerleading untuk berlatih partner stunt yang dilatih oleh athlete-athlete kelas dunia."
        url="https://gorillastunter.com"
      />
      <Navigation />
      <SimpleHero />

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground mb-6">
              What is <span className="text-primary">Gorilla Stunter?</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are an elite cheerleading stunt partner community that brings together the most dedicated athletes who
              share a passion for precision, excellence, and the art of cheerleading stunts.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection direction="left" delay={100}>
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-all duration-300 group-hover:scale-110">
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
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Elite Training</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Advanced stunt techniques and partner work that pushes the boundaries of what's possible in
                    cheerleading.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-all duration-300 group-hover:scale-110">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Community</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    A supportive network of passionate athletes who share knowledge, techniques, and celebrate
                    achievements together.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300}>
              <Card className="bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-all duration-300 group-hover:scale-110">
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
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Excellence</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Commitment to the highest standards of performance, safety, and sportsmanship in every stunt we
                    execute.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Numbers that speak to our commitment to excellence and the success of our community members.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection direction="left" delay={100}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="font-heading font-black text-5xl md:text-6xl text-primary mb-2 group-hover:text-accent transition-colors">
                  50+
                </div>
                <div className="font-body text-lg text-muted-foreground">Founding Members</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={200}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="font-heading font-black text-5xl md:text-6xl text-primary mb-2 group-hover:text-accent transition-colors">
                  5+
                </div>
                <div className="font-body text-lg text-muted-foreground">Training Programs</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={300}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="font-heading font-black text-5xl md:text-6xl text-primary mb-2 group-hover:text-accent transition-colors">
                  25+
                </div>
                <div className="font-body text-lg text-muted-foreground">Years Combined Experience</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={400}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="font-heading font-black text-5xl md:text-6xl text-primary mb-2 group-hover:text-accent transition-colors">
                  100%
                </div>
                <div className="font-body text-lg text-muted-foreground">Safety Record</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive training programs and community support designed to elevate your cheerleading stunt skills
              to the highest level.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <svg
                      className="w-6 h-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">Advanced Stunt Training</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Master complex stunts with our expert coaches who have decades of competitive experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <svg
                      className="w-6 h-6 text-primary-foreground"
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
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">Partner Matching</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Find your perfect stunt partner through our comprehensive matching system based on skill and
                      compatibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <svg
                      className="w-6 h-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">Performance Analytics</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Track your progress with detailed performance metrics and personalized improvement plans.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-accent transition-colors duration-300">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Elite Training</h3>
                    <p className="font-body text-muted-foreground">Where champions are made</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
              What Our <span className="text-primary">Athletes Say</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hear from our community members about their journey with Gorilla Stunter.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection direction="left" delay={100}>
              <Card className="bg-background border-border hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    "Gorilla Stunter transformed my cheerleading career. The training is intense but incredibly
                    rewarding. I've never felt more confident in my abilities."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="font-heading font-bold text-primary-foreground">SM</span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground">Sollah</div>
                      <div className="font-body text-sm text-muted-foreground">National Champion</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <Card className="bg-background border-border hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    "The partner matching system is genius! I found my perfect stunt partner here and we've been
                    dominating competitions ever since."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="font-heading font-bold text-primary-foreground">MJ</span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground">Indah Tri</div>
                      <div className="font-body text-sm text-muted-foreground">Elite Stunter</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300}>
              <Card className="bg-background border-border hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    "This community is like family. The support, knowledge sharing, and celebration of achievements
                    makes every training session special."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="font-heading font-bold text-primary-foreground">AL</span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground">Rai</div>
                      <div className="font-body text-sm text-muted-foreground">Flyer</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection direction="up">
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-black text-4xl md:text-6xl text-primary-foreground mb-6">
              Ready to Join the Elite?
            </h2>
            <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Take your cheerleading stunts to the next level. Join our community of elite athletes and discover what
              you are truly capable of achieving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton
                size="lg"
                className="bg-background hover:bg-muted text-foreground font-heading font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
              >
                Start Your Journey
              </WhatsAppButton>
              <WhatsAppButton
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading font-semibold text-lg px-8 py-4 bg-transparent transform hover:scale-105 transition-all duration-200"
              >
                Join WhatsApp Group
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
                  <a href="/about" className="hover:text-primary transition-colors">
                    About Us
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
                <li>Phone: (555) 123-4567</li>
                                  <li>
                   Address: Jl. Bulungan No.1, RT.11/RW.7
                    <br />
                   Kramat Pela, Kec. Kby. Baru
                    <br />
                   Kota Jakarta Selatan, DKI Jakarta 12130
                  </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="font-body text-background/60">
              Copyright 2024 Gorilla Stunter. All rights reserved. Built with precision and excellence.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
