import { Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"

const teamMembers = [
    {
        id: 1,
        name: "Abisheka Dawlagala",
        role: "CEO & Founder",
        bio: "Former Olympic athlete with 15+ years of coaching experience. Passionate about connecting athletes with the right mentors.",
        image: "/team/WhatsApp Image 2025-11-27 at 10.47.11 PM.jpeg",
        linkedin: "https://www.linkedin.com/in/abisheka-dawlagala-266a37269/",
        twitter: "#",
        email: "sarah@athliyq.com"
    },
    {
        id: 2,
        name: "Janul Dissanayake",
        role: "CTO",
        bio: "Tech innovator building scalable platforms for the sports industry. Previously at Google and Strava.",
        image: "/team/Gemini_Generated_Image_l126w1l126w1l126.png",
        linkedin: "https://www.linkedin.com/public-profile/settings",
        twitter: "#",
        email: "david@athliyq.com"
    },
    {
        id: 3,
        name: "Dhilakshan Kanagendran",
        role: "Head of Product",
        bio: "Product designer focused on creating intuitive experiences for athletes and coaches worldwide.",
        image: "/team/WhatsApp Image 2025-12-17 at 9.55.12 PM.jpeg",
        linkedin: "https://www.linkedin.com/in/dhilakshan-kanagendran-29658a256/",
        twitter: "#",
        email: "emily@athliyq.com"
    },
    {
        id: 4,
        name: "Nivesh Harendra",
        role: "Head of Coaching",
        bio: "Certified sports psychologist and performance coach working with elite athletes for over a decade.",
        image: "/team/Image (7).jfif",
        linkedin: "https://www.linkedin.com/in/niveshharendra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#",
        email: "marcus@athliyq.com"
    },
    {
        id: 5,
        name: "Sithara Wickramanayake",
        role: "Head of Marketing",
        bio: "Marketing strategist with a passion for sports. Building brand awareness and athlete community engagement.",
        image: "/team/WhatsApp Image 2025-12-17 at 10.02.00 PM.jpeg",
        linkedin: "https://www.linkedin.com/in/sithara-wickramanayake-52a61828b/",
        twitter: "#",
        email: "jessica@athliyq.com"
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

                {/* Team Grid - 3 columns on desktop with last 2 centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
                    {teamMembers.slice(0, 3).map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-xl border border-border p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Team Member Photo */}
                            <div className="mb-4">
                                <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Team Member Info - Smaller fonts */}
                            <div className="text-center mb-4">
                                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
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

                {/* Second row with 2 centered cards */}
                <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-5xl mx-auto">
                    {teamMembers.slice(3, 5).map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-xl border border-border p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                        >
                            {/* Team Member Photo */}
                            <div className="mb-4">
                                <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Team Member Info - Smaller fonts */}
                            <div className="text-center mb-4">
                                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
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
