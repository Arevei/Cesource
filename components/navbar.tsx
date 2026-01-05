"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || (pathname!=="/" || pathname.startsWith("/services") ) ? "bg-[rgba(44,160,160,1)] py-4 shadow-lg" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
            CESOURCE<span className="font-light tracking-normal ml-1">TECHNICAL</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-white/90">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/#about" },
              { name: "Services", href: "/services" },
              { name: "Sectors", href: "/#sectors" },
              { name: "Contact", href: "/#contact" },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="relative group py-2 scroll-smooth" scroll={true}>
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 text-white">
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-r border-white/20 pr-6">
            <Globe className="w-4 h-4" />
            GLOBAL | EN
          </div>
          <Link  href="/#contact" className="hidden md:flex items-center gap-2 bg-white text-[rgba(44,160,160,1)] px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all hover:scale-105 active:scale-95">
            Let's Talk
          </Link>
          <Menu className="w-6 h-6 cursor-pointer lg:hidden" />
        </div>
      </div>
    </nav>
  )
}
