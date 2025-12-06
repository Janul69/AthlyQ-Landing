import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "CEO & Founder",
        bio: "Former Olympic athlete with 15+ years of coaching experience. Passionate about connecting athletes with the right mentors.",
        image: "/team/sarah.jpg",
        linkedin: "#",
        twitter: "#",
        email: "sarah@athliyq.com"
    },
    {
        id: 2,
        name: "David Park",
        role: "CTO",
        bio: "Tech innovator building scalable platforms for the sports industry. Previously at Google and Strava.",
        image: "/team/david.jpg",
        linkedin: "#",
        twitter: "#",
        email: "david@athliyq.com"
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Head of Product",
        bio: "Product designer focused on creating intuitive experiences for athletes and coaches worldwide.",
        image: "/team/emily.jpg",
        linkedin: "#",
        twitter: "#",
        email: "emily@athliyq.com"
    },
    {
        id: 4,
        name: "Marcus Johnson",
        role: "Head of Coaching",
        bio: "Certified sports psychologist and performance coach working with elite athletes for over a decade.",
        image: "/team/marcus.jpg",
        linkedin: "#",
        twitter: "#",
        email: "marcus@athliyq.com"
    },
    {
        id: 5,
        name: "Jessica Taylor",
        role: "Head of Marketing",
        bio: "Marketing strategist with a passion for sports. Building brand awareness and athlete community engagement.",
        image: "/team/jessica.jpg",
        linkedin: "#",
        twitter: "#",
        email: "jessica@athliyq.com"
    },
    {
        id: 6,
        name: "Ryan Martinez",
        role: "Community Manager",
        bio: "Former collegiate athlete dedicated to fostering connections between coaches and athletes worldwide.",
        image: "/team/ryan.jpg",
        linkedin: "#",
        twitter: "#",
        email: "ryan@athliyq.com"
    },
]

export default function AboutUs() {
    return (
        <section id="about" className="py-20 md:py-32 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                            ✓ Our Team
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                        Meet the Team Behind <span className="text-[#0f60fa]">AthletyQ</span>
                    </h2>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        We're a diverse team of athletes, coaches, and tech enthusiasts united by one mission:
                        to empower every athlete to reach their full potential through personalized coaching.
                    </p>
                </div>

                {/* Team Grid - 4 columns on desktop with last 2 centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className={`bg-white rounded-xl border border-border p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === 4 ? 'lg:col-start-2' : ''
                                }`}
                        >
                            {/* Team Member Photo - Smaller */}
                            <div className="mb-4">
                                <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                                    {/* Placeholder - will show actual image when provided */}
                                    <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-accent">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Team Member Info - Smaller fonts */}
                            <div className="text-center mb-4">
                                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                                <p className="text-xs font-semibold text-accent mb-2">{member.role}</p>
                                <p className="text-xs text-foreground/70 leading-relaxed line-clamp-3">{member.bio}</p>
                            </div>

                            {/* Social Links - Smaller */}
                            <div className="flex items-center justify-center gap-2 pt-3 border-t border-border">
                                <a
                                    href={member.linkedin}
                                    className="p-1.5 rounded-lg hover:bg-accent/10 transition-colors group"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="size-4 text-foreground/60 group-hover:text-accent transition-colors" />
                                </a>
                                <a
                                    href={member.twitter}
                                    className="p-1.5 rounded-lg hover:bg-accent/10 transition-colors group"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="size-4 text-foreground/60 group-hover:text-accent transition-colors" />
                                </a>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="p-1.5 rounded-lg hover:bg-accent/10 transition-colors group"
                                    aria-label="Email"
                                >
                                    <Mail className="size-4 text-foreground/60 group-hover:text-accent transition-colors" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mission Statement
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-border bg-white p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Our Mission
                        </h3>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            At AthliyQ, we believe every athlete deserves access to world-class coaching.
                            We're building a platform that breaks down barriers and connects athletes with
                            the perfect coaches to help them achieve their goals—whether they're training
                            for their first 5K or competing at the Olympic level.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
