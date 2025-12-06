import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-background to-primary/5 overflow-hidden p-12 md:p-16 text-center space-y-8">
          {/* Decorative elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Ready to Achieve Your <span className="text-accent">Athletic Goals?</span>
            </h2>

            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Join thousands of athletes who have transformed their performance. Start your journey with a certified
              coach today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full bg-accent hover:bg-accent/90 text-white px-8 h-12 text-base font-semibold inline-flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="rounded-full px-8 h-12 text-base font-semibold bg-transparent hover:bg-white/90 hover:text-black">
                Schedule a Demo
              </Button>
            </div>

            <p className="text-sm text-foreground/60 mt-6">
              No credit card required. Join free, find your coach in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
