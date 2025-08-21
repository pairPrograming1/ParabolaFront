import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
// import { IntroSection } from "@/components/intro-section"
// import { ServicesSection } from "@/components/services-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
// import { PartnersSection } from "@/components/partners-section"
// import { BlogSection } from "@/components/blog-section"
// import { CTASection } from "@/components/cta-section"
// import { PaymentBanner } from "@/components/payment-banner"
// import { ContactSection } from "@/components/contact-section"
// import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <IntroSection />
      <ServicesSection />
      <PaymentBanner /> */}
      {/* <TestimonialsSection />
      <PartnersSection />
      <BlogSection />
      <CTASection />
      <ContactSection />
      <Footer /> */}
    </main>
  )
}
