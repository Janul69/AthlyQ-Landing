import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, #323232ff, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                ✓ Trusted by 10,000+ Athletes
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance"
              style={{ color: "#ffffffff" }}
            >
              Empowering Athletes.{" "}
              <span className="text-black">
                Connecting Coaches.
              </span>
            </h1>

            <p
              className="text-xl text-foreground/70 leading-relaxed max-w-md text-pretty"
              style={{ color: "#ffffffff" }}
            >
              Connect with elite coaches for personalized training, mentorship,
              and performance improvement. Achieve your athletic goals faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="rounded-full bg-accent hover:bg-accent/90 text-white px-8 h-12 text-base font-semibold inline-flex items-center gap-2">
                Get Started Free
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 text-base font-semibold bg-transparent"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-sm text-foreground/60">Expert Coaches</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">10K+</p>
                <p className="text-sm text-foreground/60">Active Athletes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">95%</p>
                <p className="text-sm text-foreground/60">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full min-h-[500px] rounded-2xl overflow-hidden flex items-center justify-center">
            {React.createElement("lottie-player", {
              src: "/animation/man-doing-inclined-press.json",
              background: "transparent",
              speed: "1",
              style: { width: "100%", height: "100%" },
              loop: true,
              autoplay: true,
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
