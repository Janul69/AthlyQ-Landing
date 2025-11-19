import { Sparkles, Camera, Zap, BarChart3 } from "lucide-react"


export default function AIVideoProcessing() {
    const features = [
        {
          icon: Camera,
          title: "Camera Detection",
          description: "Activate your camera and start your workout routine."
        },
        {
          icon: Zap,
          title: "Real-Time Analysis",
          description: "AI analyzes your form, detecting improper angles and positions instantly."
        },
        {
          icon: BarChart3,
          title: "Instant Feedback",
          description: "Receive immediate form-correction suggestions to improve your technique."
        }
      ]
    
      return (
        <section className="py-20 md:py-32 bg-background" id="ai-video-processing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance animate-fade-in">
                AI-Powered Workout
                <br /> <span className="text-accent">Form Correction</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-fade-in-up delay-100">
                Perfect your technique with intelligent video analysis. Simply turn on your camera, perform your workout, and let AI guide you to flawless form.
              </p>
            </div>
    
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="relative group">
                    {index < features.length - 1 && (
                      <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent via-accent/40 to-transparent group-hover:from-accent group-hover:to-accent/20 transition-all duration-300" />
                    )}
                    <div className="bg-background rounded-2xl border border-border p-8 h-full hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="mb-6 relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-accent/10 transition-colors">
                          {`0${index + 1}`}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {feature.description}
                      </p>
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

