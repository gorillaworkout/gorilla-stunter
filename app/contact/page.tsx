import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import StructuredData from "@/components/structured-data"
import AnimatedSection from "@/components/animated-section"
import WhatsAppButton from "@/components/whatsapp-button"
import InteractiveMap from "@/components/interactive-map"
import 'leaflet/dist/leaflet.css'

export const metadata: Metadata = {
  title: "Contact Us - Gorilla Stunter | Get in Touch with Elite Cheerleading Community",
  description:
    "Hubungi Gorilla Stunter untuk informasi tentang program pelatihan partner stunt elite kami yang dilatih oleh athlete-athlete kelas dunia. Kami siap membantu Anda mencapai level terbaik.",
  keywords:
    "contact gorilla stunter, cheerleading inquiries, stunt training contact, elite coaching contact, cheerleading community contact, kontak gorilla stunter, komunitas cheerleading",
  openGraph: {
    title: "Contact Us - Gorilla Stunter | Get in Touch with Elite Cheerleading Community",
    description:
      "Hubungi Gorilla Stunter untuk informasi tentang program pelatihan partner stunt elite kami yang dilatih oleh athlete-athlete kelas dunia.",
    type: "website",
    url: "https://gorillastunter.gorillaworkout.id/contact",
    images: [
      {
        url: "https://gorillastunter.gorillaworkout.id/new_gs_4.png",
        width: 1200,
        height: 630,
        alt: "Contact Gorilla Stunter - Get in Touch",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://gorillastunter.gorillaworkout.id/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <StructuredData
        type="ContactPage"
        title="Contact Us - Gorilla Stunter"
        description="Hubungi Gorilla Stunter untuk informasi tentang program pelatihan partner stunt elite kami yang dilatih oleh athlete-athlete kelas dunia."
        url="https://gorillastunter.gorillaworkout.id/contact"
      />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <AnimatedSection animation="slideInDown">
          <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-background via-background to-muted">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="font-heading font-black text-5xl md:text-7xl text-foreground mb-6 leading-tight">
                  Get in <span className="text-primary">Touch</span>
                </h1>
                <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Ready to join the elite? Have questions about our training programs? We're here to help you take your
                  cheerleading stunts to the next level.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Form and Info Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <AnimatedSection animation="slideInLeft">
                <div>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Send Us a Message</h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours. Let us know how we can help you
                    achieve your cheerleading goals.
                  </p>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-heading font-semibold text-foreground">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-heading font-semibold text-foreground">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-heading font-semibold text-foreground">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-heading font-semibold text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="font-heading font-semibold text-foreground">
                        Experience Level
                      </Label>
                      <select
                        id="experience"
                        className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary bg-background text-foreground"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-2 years)</option>
                        <option value="intermediate">Intermediate (2-5 years)</option>
                        <option value="advanced">Advanced (5+ years)</option>
                        <option value="elite">Elite/Professional</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="font-heading font-semibold text-foreground">
                        What are you interested in?
                      </Label>
                      <select
                        id="interest"
                        className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary bg-background text-foreground"
                      >
                        <option value="">Select your interest</option>
                        <option value="membership">Community Membership</option>
                        <option value="training">Training Programs</option>
                        <option value="partner">Partner Matching</option>
                        <option value="coaching">Coaching Opportunities</option>
                        <option value="competitions">Competition Teams</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-heading font-semibold text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your goals and how we can help you..."
                        rows={6}
                        className="border-border focus:border-primary focus:ring-primary resize-none"
                      />
                    </div>

                    <WhatsAppButton
                      size="lg"
                      className="w-full bg-primary hover:bg-accent text-primary-foreground font-heading font-bold text-lg py-4"
                    >
                      Join WhatsApp Group
                    </WhatsAppButton>
                  </form>
                </div>
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection animation="slideInRight">
                <div>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Contact Information</h2>
                  <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                    Multiple ways to reach us. Choose the method that works best for you.
                  </p>

                  <div className="space-y-8">
                    <AnimatedSection animation="scaleIn" delay={100}>
                      <Card className="bg-card border-border hover:border-primary transition-colors group card-glow-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
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
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                                Visit Our Facility
                              </h3>
                                                              <p className="font-body text-muted-foreground leading-relaxed">
                                 Jl. Bulungan No.1, RT.11/RW.7
                                  <br />
                                 Kramat Pela, Kec. Kby. Baru
                                  <br />
                                 Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
                                  <br />
                                 Indonesia
                                </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    <AnimatedSection animation="scaleIn" delay={200}>
                      <Card className="bg-card border-border hover:border-primary transition-colors group card-glow-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
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
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-heading font-bold text-xl text-foreground mb-2">Call Us</h3>
                              <p className="font-body text-muted-foreground leading-relaxed">
                                Main: (+62) 851-3352-4900
                                <br />
                                Training: (+62) 851-3352-4900
                                <br />
                                Emergency: (+62) 851-3352-4900
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    <AnimatedSection animation="scaleIn" delay={300}>
                      <Card className="bg-card border-border hover:border-primary transition-colors group card-glow-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
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
                                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-heading font-bold text-xl text-foreground mb-2">Email Us</h3>
                              <p className="font-body text-muted-foreground leading-relaxed">
                                General: info@gorillastunter.com
                                <br />
                                Training: training@gorillastunter.com
                                <br />
                                Partnerships: partners@gorillastunter.com
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    <AnimatedSection animation="scaleIn" delay={400}>
                      <Card className="bg-card border-border hover:border-primary transition-colors group card-glow-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
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
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-heading font-bold text-xl text-foreground mb-2">Training Hours</h3>
                              <p className="font-body text-muted-foreground leading-relaxed">
                                Monday - Friday: 6:00 AM - 10:00 PM
                                <br />
                                Saturday: 8:00 AM - 8:00 PM
                                <br />
                                Sunday: 10:00 AM - 6:00 PM
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <AnimatedSection animation="slideInUp">
          <section className="py-20 px-4 bg-muted">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h2>
                <p className="font-body text-xl text-muted-foreground leading-relaxed">
                  Quick answers to common questions about joining our elite community.
                </p>
              </div>

              <div className="space-y-6">
                <AnimatedSection animation="slideInLeft" delay={100}>
                  <Card className="bg-background border-border card-glow-hover">
                    <CardContent className="p-8">
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                        What experience level do I need to join?
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        We welcome athletes of all levels, from beginners to elite professionals. Our training programs
                        are designed to meet you where you are and help you progress to the next level safely and
                        effectively.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slideInRight" delay={200}>
                  <Card className="bg-background border-border card-glow-hover">
                    <CardContent className="p-8">
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                        How does the partner matching system work?
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        Our comprehensive matching system considers skill level, experience, training goals, schedule
                        compatibility, and personality traits to pair you with the perfect stunt partner for optimal
                        performance and safety.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slideInLeft" delay={300}>
                  <Card className="bg-background border-border card-glow-hover">
                    <CardContent className="p-8">
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                        What safety measures do you have in place?
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        Safety is our top priority. We maintain a 100% safety record through certified instructors,
                        proper progression techniques, safety equipment, medical staff on-site, and comprehensive
                        insurance coverage for all activities.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slideInRight" delay={400}>
                  <Card className="bg-background border-border card-glow-hover">
                    <CardContent className="p-8">
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                        Can I visit the facility before joining?
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        We encourage prospective members to visit our facility, meet our coaches, and observe training
                        sessions. Contact us to schedule a tour and complimentary trial session.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Map Section */}
        <AnimatedSection animation="slideInUp">
          <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
                  Find <span className="text-primary">Our Location</span>
                </h2>
                <p className="font-body text-xl text-muted-foreground leading-relaxed">
                  Located in the heart of Jakarta City, easily accessible from all major highways.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Getting Here</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground text-xs font-bold">1</span>
                      </div>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">By Car:</strong> Directions to Jl. Bulungan No.1, Kramat Pela, South Jakarta. The area is easily accessible,
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground text-xs font-bold">2</span>
                      </div>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">By Public Transit:</strong> 
                         MRT stop at Blok M Station
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground text-xs font-bold">3</span> 
                      </div>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Airport:</strong> 50 minutes from Soekarno Hatta
                        International Airport via taxi.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <WhatsAppButton
                      size="lg"
                      className="bg-primary hover:bg-accent text-primary-foreground font-heading font-bold text-lg px-8 py-4"
                    >
                      Join Our Community
                    </WhatsAppButton>
                  </div>
                </div>

                <div className="w-full h-full">
                  <InteractiveMap />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection animation="slideInUp">
          <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-black text-4xl md:text-6xl text-primary-foreground mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Don't wait to unlock your potential. Join the Gorilla Stunter family today and experience the difference
                that elite training makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton
                  size="lg"
                  className="bg-background hover:bg-muted text-foreground font-heading font-bold text-lg px-8 py-4"
                >
                  Join WhatsApp Group
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
                    <a href="/about" className="hover:text-primary transition-colors">
                      About Us
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
