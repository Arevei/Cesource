import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { services } from "@/constants/services";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter">
              CESOURCE<span className="font-light text-background/60">TECHNICAL</span>
            </h2>
            <p className="text-background/50 leading-relaxed max-w-xs">
              Engineering excellence and consultancy services for a sustainable
              and innovative world.
            </p>
            <div className="flex items-center gap-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-background/40 mb-8">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-background/40 mb-8">
              Services
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-background/40 mb-8">
              Newsletter
            </h3>
            <p className="text-sm text-background/50 mb-6">
              Stay updated with our latest insights and project updates.
            </p>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-background/5 border-b border-background/20 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 text-background/40 hover:text-background" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Cesource Technical Private Limited. All
            rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-background/30">
            <Link href="/privacy-policy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
