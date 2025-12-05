import { Check, Users, TrendingUp, Award } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Start for <span className="text-accent">Free</span>, Pay Your Coach Directly
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Athletes join AthletyQ for free. Find your perfect coach and pay them directly for their services. No platform fees.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Athletes Card */}
          <div className="relative rounded-3xl border-2 border-accent p-8 space-y-6 bg-gradient-to-br from-accent/5 to-background shadow-lg">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Users className="text-accent" size={24} />
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-accent font-semibold">For Athletes</p>
              <p className="text-5xl font-bold text-foreground mt-3">
                Free
                <span className="text-lg font-semibold text-foreground/60"> forever</span>
              </p>
              <p className="text-foreground/70 mt-3">Join thousands of athletes and find your perfect coach today.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check size={16} className="text-accent" />
                </div>
                <p className="text-foreground/80 leading-tight">Create your athlete profile</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check size={16} className="text-accent" />
                </div>
                <p className="text-foreground/80 leading-tight">Browse and connect with coaches</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check size={16} className="text-accent" />
                </div>
                <p className="text-foreground/80 leading-tight">Access goal tracking tools</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check size={16} className="text-accent" />
                </div>
                <p className="text-foreground/80 leading-tight">Message coaches directly</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Check size={16} className="text-accent" />
                </div>
                <p className="text-foreground/80 leading-tight">Community forum access</p>
              </div>
            </div>

            <button className="w-full rounded-full py-3 text-base font-semibold transition-all duration-200 bg-accent text-white hover:bg-accent/90">
              Join Free Now
            </button>
          </div>

          {/* Coaches Card */}
          <div className="relative rounded-3xl border border-border p-8 space-y-6 bg-background hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Award className="text-primary" size={24} />
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-foreground/60 font-semibold">For Coaches</p>
              <p className="text-5xl font-bold text-foreground mt-3">
                You Set
                <span className="text-lg font-semibold text-foreground/60"> your rates</span>
              </p>
              <p className="text-foreground/70 mt-3">Grow your coaching business and set your own pricing.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-foreground/80 leading-tight">Create professional coach profile</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-foreground/80 leading-tight">Set your own pricing & packages</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-foreground/80 leading-tight">Manage client sessions & progress</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-foreground/80 leading-tight">Video call integration</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={16} className="text-primary" />
                </div>
                <p className="text-foreground/80 leading-tight">Payment processing included</p>
              </div>
            </div>

            <button className="w-full rounded-full py-3 text-base font-semibold transition-all duration-200 border border-border text-foreground hover:border-accent/60 hover:text-accent">
              Apply as Coach
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
