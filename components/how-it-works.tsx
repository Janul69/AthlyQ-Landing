import { Calendar, TrendingUp, Search } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Find a Coach",
      description:
        "Browse through our network of certified coaches. Filter by sport, expertise, location, and availability.",
      number: "01",
    },
    {
      icon: Calendar,
      title: "Book a Session",
      description:
        "Schedule one-on-one training sessions that fit your calendar. Start immediately with flexible timing.",
      number: "02",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description:
        "Monitor your improvements with detailed analytics. Get personalized feedback and performance insights.",
      number: "03",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple Steps to
            <br /> <span className="text-accent">Athletic Excellence</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get started in minutes. Our streamlined process connects you with the right coach for your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-accent/30" />
                )}

                <div className="bg-black rounded-2xl border border-border p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="mb-6 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl text-white font-bold text-muted-foreground/20">{step.number}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
