import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import FeaturedCoaches from "@/components/featured-coaches"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper"

export default function Home() {
  return (
    <main className="bg-background">
      {/* <SmoothScrollWrapper> */}
      <Navigation />
      <Hero />
      <HowItWorks />
      <FeaturedCoaches />
      <Testimonials />
      <CTA />
      <Footer />
      {/* </SmoothScrollWrapper> */}
      
    </main>
  )
}
