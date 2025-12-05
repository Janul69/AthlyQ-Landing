"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 shadow-sm bg-white/95 border-border shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AC</span>
            </div>
            <a href='#home' className="font-bold text-lg transition-colors text-foreground">
              AthletyQ
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="transition-all duration-200 font-medium text-foreground/70 hover:text-foreground"
            >
              How it Works
            </a>
            <a
              href="#features"
              className="transition-all duration-200 font-medium text-foreground/70 hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#coaches"
              className="transition-all duration-200 font-medium text-foreground/70 hover:text-foreground"
            >
              Coaches
            </a>
            <a
              href="#testimonials"
              className="transition-all duration-200 font-medium text-foreground/70 hover:text-foreground"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="transition-all duration-200 font-medium text-foreground/70 hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="transition-all duration-200 font-medium text-foreground/70 hover:text-foreground"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded-full transition-all duration-300 bg-transparent border-border text-foreground hover:bg-muted hover:text-black hover:border-foreground/20"
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
              className="block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50"
            >
              How it Works
            </a>
            <a
              href="#features"
              className="block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50"
            >
              Features
            </a>
            <a
              href="#coaches"
              className="block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50"
            >
              Coaches
            </a>
            <a
              href="#testimonials"
              className="block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-2.5 px-2 rounded-lg transition-all duration-200 font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50"
            >
              Contact
            </a>
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                className="flex-1 rounded-full text-sm transition-all duration-300 bg-transparent border-border text-foreground hover:bg-muted hover:border-foreground/20"
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
