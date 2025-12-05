import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      text: "AthletyQ completely transformed my training regimen. Within 6 weeks, my sprint time improved by 12%. The personalized feedback from my coach is invaluable.",
      author: "Alex Rodriguez",
      role: "Track Athlete",
      avatar: "/male-athlete-avatar.jpg",
    },
    {
      text: "Finding the right coach can be daunting. This platform made it effortless. I've gained so much confidence and my game has elevated significantly.",
      author: "Emma Thompson",
      role: "Basketball Player",
      avatar: "/female-athlete-avatar.jpg",
    },
    {
      text: "The performance tracking tools are incredible. I can see my progress in real-time and adjust my training accordingly. Highly recommend to any serious athlete.",
      author: "Liam Chen",
      role: "CrossFit Competitor",
      avatar: "/male-fitness-athlete-avatar.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What Athletes <span className="text-accent">Are Saying</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real stories from real athletes achieving their goals with AthletyQ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl border border-border p-8 space-y-4 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 leading-relaxed text-lg">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
