import { Video, Heart, Sparkles, BarChart3 } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Video,
      title: "One to One Virtual Sessions",
      description:
        "Connect with elite coaches through personalized virtual training sessions. Get real-time guidance and feedback tailored to your athletic goals.",
      number: "01",
    },
    {
      icon: Heart,
      title: "Wellness Consultations",
      description:
        "Access professional wellness experts for nutrition, recovery, and mental health support. Comprehensive care for your athletic journey.",
      number: "02",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Form Correction",
      description:
        "Perfect your technique with intelligent video analysis. Get instant feedback on your form and movement patterns.",
      number: "03",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track your progress with detailed analytics and insights. Monitor improvements and optimize your training performance.",
      number: "04",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-fade-in">
            Powerful Features for
            <br /> <span className="text-accent">Athletic Excellence</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Everything you need to elevate your performance, all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="relative group">
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent group-hover:from-accent group-hover:to-accent/20 transition-all duration-300" />
                )}

                <div className="bg-background rounded-2xl border border-border p-8 h-full hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:translate-y--2">
                  <div className="mb-6 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-accent/10 transition-colors">{feature.number}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">{feature.description}</p>

                  <div className="mt-6 h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

