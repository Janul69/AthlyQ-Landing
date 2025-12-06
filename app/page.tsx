import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import FeaturedCoaches from "@/components/featured-coaches"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import AboutUs from "@/components/about-us"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Features />
      <FeaturedCoaches />
      <Testimonials />
      <Pricing />
      <CTA />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  )
}
