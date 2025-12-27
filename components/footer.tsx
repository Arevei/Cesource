import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter">
              CESOURCE<span className="font-light text-white/60">TECHNICAL</span>
            </h2>
            <p className="text-white/50 leading-relaxed max-w-xs">
              Engineering excellence and consultancy services for a sustainable and innovative world.
            </p>
            <div className="flex items-center gap-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <Link key={idx} href="#" className="hover:text-[rgba(44,160,160,1)] transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Industries</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="#" className="hover:text-[rgba(44,160,160,1)] transition-colors">
                  Urban Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[rgba(44,160,160,1)] transition-colors">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[rgba(44,160,160,1)] transition-colors">
                  Climate Change
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[rgba(44,160,160,1)] transition-colors">
                  Innovation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Services</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="#" className="hover:text-[rgba(44,160,160,1)] transition-colors">
                  Consultancy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[rgba(44,160,160,1)] transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[rgba(44,160,160,1)] transition-colors">
                  Risk Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[rgba(44,160,160,1)] transition-colors">
                  Investigation & Surveys
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Newsletter</h3>
            <p className="text-sm text-white/50 mb-6">Stay updated with our latest insights and project updates.</p>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white/5 border-b border-white/20 py-3 focus:outline-none focus:border-[rgba(44,160,160,1)] transition-colors text-sm"
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 text-white/40 hover:text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Cesource Technical Private Limited. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/30">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
