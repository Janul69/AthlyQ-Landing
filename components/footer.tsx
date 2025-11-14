import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <span className="font-bold text-lg text-foreground">AthleteCoach</span>
            </div>
            <p className="text-sm text-foreground/60">
              Connecting athletes with elite coaches for personalized training and performance improvement.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Find Coaches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">© 2025 AthleteCoach. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-foreground/60 hover:text-accent transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
