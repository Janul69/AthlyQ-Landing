"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AC</span>
            </div>
            <span className="font-bold text-lg text-foreground">AthleteCoach</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition">
              How it Works
            </a>
            <a href="#coaches" className="text-foreground/70 hover:text-foreground transition">
              Coaches
            </a>
            <a href="#testimonials" className="text-foreground/70 hover:text-foreground transition">
              Testimonials
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="rounded-full bg-transparent">
              Sign In
            </Button>
            <Button className="rounded-full bg-accent hover:bg-accent/90">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border space-y-3">
            <a href="#how-it-works" className="block text-foreground/70 hover:text-foreground py-2">
              How it Works
            </a>
            <a href="#coaches" className="block text-foreground/70 hover:text-foreground py-2">
              Coaches
            </a>
            <a href="#testimonials" className="block text-foreground/70 hover:text-foreground py-2">
              Testimonials
            </a>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1 rounded-full text-sm bg-transparent">
                Sign In
              </Button>
              <Button className="flex-1 rounded-full text-sm bg-accent hover:bg-accent/90">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
