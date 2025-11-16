"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 shadow-sm ${
        isScrolled 
          ? "bg-white/95 border-border shadow-md" 
          : "bg-[#323232ff] border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AC</span>
            </div>
            <span className={`font-bold text-lg transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              AthlyQ
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#how-it-works" 
              className={`transition-all duration-200 font-medium ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
            >
              How it Works
            </a>
            <a 
              href="#coaches" 
              className={`transition-all duration-200 font-medium ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
            >
              Coaches
            </a>
            <a 
              href="#testimonials" 
              className={`transition-all duration-200 font-medium ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
            >
              Testimonials
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              className={`rounded-full transition-all duration-300 ${
                isScrolled 
                  ? "bg-transparent border-border text-foreground hover:bg-muted hover:border-foreground/20" 
                  : "bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              }`}
            >
              Sign In
            </Button>
            <Button className="rounded-full bg-accent hover:bg-accent/90 text-white font-semibold px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden p-2 rounded-lg transition ${
              isScrolled 
                ? "hover:bg-muted" 
                : "hover:bg-white/10"
            }`}
          >
            {isOpen ? (
              <X size={24} className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden pb-4 border-t space-y-3 ${
            isScrolled ? "border-border" : "border-white/20"
          }`}>
            <a 
              href="#how-it-works" 
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-foreground hover:bg-muted/50" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              How it Works
            </a>
            <a 
              href="#coaches" 
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-foreground hover:bg-muted/50" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Coaches
            </a>
            <a 
              href="#testimonials" 
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-foreground hover:bg-muted/50" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Testimonials
            </a>
            <div className="flex gap-2 pt-2">
              <Button 
                variant="outline" 
                className={`flex-1 rounded-full text-sm transition-all duration-300 ${
                  isScrolled 
                    ? "bg-transparent border-border text-foreground hover:bg-muted hover:border-foreground/20" 
                    : "bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                }`}
              >
                Sign In
              </Button>
              <Button className="flex-1 rounded-full text-sm bg-accent hover:bg-accent/90 text-white font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
