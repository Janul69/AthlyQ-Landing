import { Check } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for athletes exploring remote coaching.",
    features: [
      "Access to community coaches",
      "2 virtual sessions / month",
      "Goal tracking dashboard",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "per month",
    description: "Best for serious athletes ready for personalized coaching.",
    features: [
      "Elite coach matching",
      "Weekly 1:1 virtual sessions",
      "Personalized training plan",
      "Form analysis & feedback",
      "Priority chat support",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Elite",
    price: "$149",
    period: "per month",
    description: "Full performance stack for competitive athletes.",
    features: [
      "Dedicated coaching team",
      "Unlimited virtual sessions",
      "Wellness & nutrition consults",
      "Advanced performance analytics",
      "24/7 priority access",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple Pricing for <span className="text-accent">Every Athlete</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that matches your goals today and scale as you grow. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl border p-8 space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                tier.highlighted ? "border-accent shadow-2xl bg-background" : "border-border bg-background"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold bg-accent text-white">
                  {tier.badge}
                </span>
              )}

              <div>
                <p className="text-sm uppercase tracking-widest text-foreground/60">{tier.name}</p>
                <p className="text-4xl font-bold text-foreground mt-3">
                  {tier.price}
                  <span className="text-lg font-semibold text-foreground/60"> {tier.period}</span>
                </p>
                <p className="text-foreground/70 mt-3">{tier.description}</p>
              </div>

              <div className="space-y-4">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check size={16} className="text-accent" />
                    </div>
                    <p className="text-foreground/80 leading-tight">{feature}</p>
                  </div>
                ))}
              </div>

              <button
                className={`w-full rounded-full py-3 text-base font-semibold transition-all duration-200 ${
                  tier.highlighted
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "border border-border text-foreground hover:border-accent/60 hover:text-accent"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

