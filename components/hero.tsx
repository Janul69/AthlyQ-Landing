import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                ✓ Trusted by 10,000+ Athletes
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Empowering Athletes. <span className="text-accent">Connecting Coaches.</span>
            </h1>

            <p className="text-xl text-foreground/70 leading-relaxed max-w-md text-pretty">
              Connect with elite coaches for personalized training, mentorship, and performance improvement. Achieve
              your athletic goals faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="rounded-full bg-accent hover:bg-accent/90 text-white px-8 h-12 text-base font-semibold inline-flex items-center gap-2">
                Get Started Free
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="rounded-full px-8 h-12 text-base font-semibold bg-transparent">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-sm text-foreground/60">Expert Coaches</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">10K+</p>
                <p className="text-sm text-foreground/60">Active Athletes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">95%</p>
                <p className="text-sm text-foreground/60">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/athlete-and-coach-training-together-in-gym.jpg"
              alt="Athlete and coach training"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent rounded-2xl" />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
              <p className="text-sm font-semibold text-foreground mb-2">Performance Metrics</p>
              <div className="flex gap-4">
                <div>
                  <p className="text-2xl font-bold text-accent">+24%</p>
                  <p className="text-xs text-foreground/60">Speed Improvement</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <p className="text-2xl font-bold text-accent">8 Weeks</p>
                  <p className="text-xs text-foreground/60">Average Time to Goal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
