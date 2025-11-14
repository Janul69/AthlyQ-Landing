import { Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedCoaches() {
  const coaches = [
    {
      name: "Marcus Johnson",
      sport: "Basketball",
      rating: 4.9,
      reviews: 148,
      bio: "Former NBA trainer with 15+ years of experience in elite athletic performance.",
      image: "/male-basketball-coach-professional-portrait.jpg",
      sessions: 320,
    },
    {
      name: "Sarah Chen",
      sport: "Track & Field",
      rating: 4.95,
      reviews: 203,
      bio: "Olympic sprint coach specializing in acceleration and explosive power development.",
      image: "/female-track-coach-athlete-professional.jpg",
      sessions: 487,
    },
    {
      name: "James Rivera",
      sport: "Strength & Conditioning",
      rating: 4.87,
      reviews: 176,
      bio: "Certified strength coach transforming athletes across all sports with data-driven training.",
      image: "/male-fitness-coach-weightlifting-professional.jpg",
      sessions: 412,
    },
  ]

  return (
    <section id="coaches" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Meet Our <span className="text-accent">Featured Coaches</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Handpicked experts ready to elevate your athletic performance to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300"
            >
              {/* Coach Image */}
              <div className="relative h-72 overflow-hidden bg-muted">
                <img src={coach.image || "/placeholder.svg"} alt={coach.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />

                {/* Sport Badge */}
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {coach.sport}
                </div>
              </div>

              {/* Coach Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{coach.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <MapPin size={16} />
                    <span>Available for online & in-person</span>
                  </div>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed">{coach.bio}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{coach.rating}</span>
                  <span className="text-foreground/60 text-sm">({coach.reviews} reviews)</span>
                </div>

                <Button className="w-full rounded-lg bg-accent hover:bg-accent/90 text-white">
                  View Profile & Book
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full px-8 py-6 text-base bg-transparent">
            Browse All Coaches →
          </Button>
        </div>
      </div>
    </section>
  )
}
