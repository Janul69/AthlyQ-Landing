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

  const navBackground = isScrolled
    ? "rgba(255, 255, 255, 0.95)"
    : "rgba(255, 255, 255, 0.95)"

  return (
    <nav 
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 shadow-sm ${
        isScrolled 
          ? "bg-white/95 border-border shadow-md" 
          : "border-transparent"
      }`}
      style={{ background: navBackground }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AC</span>
            </div>
            <span className={`font-bold text-lg transition-colors ${isScrolled ? "text-foreground" : "text-foreground"}`}>
            AthliyQ
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#how-it-works" 
              className={`transition-all duration-200 font-medium ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-foreground/80 hover:text-foreground"}`}
            >
              How it Works
            </a>
            <a 
              href="#coaches" 
              className={`transition-all duration-200 font-medium ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-foreground/80 hover:text-foreground"}`}
            >
              Coaches
            </a>
            <a 
              href="#testimonials" 
              className={`transition-all duration-200 font-medium ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-foreground/80 hover:text-foreground"}`}
            >
              Testimonials
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              className={`rounded-full transition-all duration-300 ${
                isScrolled 
                  ? "bg-transparent border-border text-foreground hover:bg-muted hover:text-black hover:border-foreground/20" 
                  : "bg-transparent border-foreground/20 text-foreground hover:bg-white/40 hover:border-foreground/40"
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
                : "hover:bg-white/40"
            }`}
          >
            {isOpen ? (
              <X size={24} className={isScrolled ? "text-foreground" : "text-foreground"} />
            ) : (
              <Menu size={24} className={isScrolled ? "text-foreground" : "text-foreground"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden pb-4 border-t space-y-3 ${
            isScrolled ? "border-border" : "border-foreground/20"
          }`}>
            <a 
              href="#how-it-works" 
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-foreground hover:bg-muted/50" : "text-foreground/80 hover:text-foreground hover:bg-white/40"
              }`}
            >
              How it Works
            </a>
            <a 
              href="#coaches" 
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-foreground hover:bg-muted/50" : "text-foreground/80 hover:text-foreground hover:bg-white/40"
              }`}
            >
              Coaches
            </a>
            <a 
              href="#testimonials" 
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-foreground hover:bg-muted/50" : "text-foreground/80 hover:text-foreground hover:bg-white/40"
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
                    : "bg-transparent border-foreground/20 text-foreground hover:bg-white/40 hover:border-foreground/40"
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
