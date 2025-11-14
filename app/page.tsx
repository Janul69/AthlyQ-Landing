import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import FeaturedCoaches from "@/components/featured-coaches"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <HowItWorks />
      <FeaturedCoaches />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
