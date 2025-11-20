import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import FeaturedCoaches from "@/components/featured-coaches"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper"

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <SmoothScrollWrapper>
          <Hero />
          <HowItWorks />
          <Features />
          <FeaturedCoaches />
          <Testimonials />
          <Pricing />
          <CTA />
          <Footer />
        </SmoothScrollWrapper>
      </div>
    </main>
  )
}
