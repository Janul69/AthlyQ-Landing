"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Zap, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "how-it-works", "features", "coaches", "testimonials", "pricing", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 shadow-sm bg-white/95 border-border shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-accent fill-accent" strokeWidth={1.5} />
            <a href='#home' className="font-bold text-lg transition-colors text-foreground italic">
              AthletyQ
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className={`transition-all duration-200 font-medium hover:text-foreground relative pb-1 ${activeSection === "how-it-works"
                ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                : "text-foreground/70"
                }`}
            >
              How it Works
            </a>
            <a
              href="#features"
              className={`transition-all duration-200 font-medium hover:text-foreground relative pb-1 ${activeSection === "features"
                ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                : "text-foreground/70"
                }`}
            >
              Features
            </a>
            <a
              href="#coaches"
              className={`transition-all duration-200 font-medium hover:text-foreground relative pb-1 ${activeSection === "coaches"
                ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                : "text-foreground/70"
                }`}
            >
              Coaches
            </a>
            <a
              href="#testimonials"
              className={`transition-all duration-200 font-medium hover:text-foreground relative pb-1 ${activeSection === "testimonials"
                ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                : "text-foreground/70"
                }`}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className={`transition-all duration-200 font-medium hover:text-foreground relative pb-1 ${activeSection === "pricing"
                ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                : "text-foreground/70"
                }`}
            >
              Pricing
            </a>
            {/* Dropdown Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 transition-all duration-200 font-medium hover:text-foreground relative pb-1 ${activeSection === "about" || activeSection === "contact"
                ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                : "text-foreground/70"
                }`}>
                Contact
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Content */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <a
                  href="#about"
                  className="block px-4 py-3 transition-all duration-200 font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-3 transition-all duration-200 font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full transition-all duration-300 bg-transparent border-border text-foreground hover:bg-muted hover:text-black hover:border-foreground/20"
            >
              <a href="https://dev.athletyq.com/login">Sign In</a>
            </Button>
            <Button className="rounded-full bg-accent hover:bg-accent/90 text-white font-semibold px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition hover:bg-muted"
          >
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t space-y-3 border-border">
            <a
              href="#how-it-works"
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium hover:text-foreground hover:bg-muted/50 ${activeSection === "how-it-works" ? "text-accent bg-accent/10" : "text-foreground/70"
                }`}
            >
              How it Works
            </a>
            <a
              href="#features"
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium hover:text-foreground hover:bg-muted/50 ${activeSection === "features" ? "text-accent bg-accent/10" : "text-foreground/70"
                }`}
            >
              Features
            </a>
            <a
              href="#coaches"
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium hover:text-foreground hover:bg-muted/50 ${activeSection === "coaches" ? "text-accent bg-accent/10" : "text-foreground/70"
                }`}
            >
              Coaches
            </a>
            <a
              href="#testimonials"
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium hover:text-foreground hover:bg-muted/50 ${activeSection === "testimonials" ? "text-accent bg-accent/10" : "text-foreground/70"
                }`}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium hover:text-foreground hover:bg-muted/50 ${activeSection === "pricing" ? "text-accent bg-accent/10" : "text-foreground/70"
                }`}
            >
              Pricing
            </a>
            <a
              href="#about"
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium hover:text-foreground hover:bg-muted/50 ${activeSection === "about" ? "text-accent bg-accent/10" : "text-foreground/70"
                }`}
            >
              About Us
            </a>
            <a
              href="#contact"
              className={`block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium hover:text-foreground hover:bg-muted/50 ${activeSection === "contact" ? "text-accent bg-accent/10" : "text-foreground/70"
                }`}
            >
              Contact Us
            </a>
            <div className="flex gap-2 pt-2">
              <Button
                asChild
                variant="outline"
                className="flex-1 rounded-full text-sm transition-all duration-300 bg-transparent border-border text-foreground hover:bg-muted hover:border-foreground/20"
              >
                <a href="https://dev.athletyq.com/login">Sign In</a>
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
