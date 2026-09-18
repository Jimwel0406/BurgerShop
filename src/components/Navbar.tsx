"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollUp, setScrollUp] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // the mobile menu must be dismissable three ways: toggle again, Escape, or tapping outside
  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMobileOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [mobileOpen])

  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const current = window.scrollY
      setScrolled(current > 50)
      if (!isMobile) {
        setScrollUp(current < lastScroll)
      }
      lastScroll = current
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  // absolute paths so these also resolve from routes other than the homepage (e.g. the 404)
  const navItems = [
    { label: "MENU", icon: "/menu-icon.webp", href: "/#menu" },
    { label: "OUR STORY", icon: "/our-story-icon.webp", href: "/#story" },
    { label: "LOCATIONS", icon: "/location-icon.webp", href: "/#order" },
    { label: "ORDER", icon: "/order-icon.webp", href: "/#order" },
  ]

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-8 transition-all duration-300 bg-black/90 backdrop-blur-sm ${scrolled && !scrollUp && !isMobile ? "py-0.5 sm:py-1" : "py-1 sm:py-1.5"}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/#top" className="flex items-center shrink-0" aria-label="Burger Shop Home">
          <img src="/logo.webp" alt="Burger Shop" width={384} height={256} className={`w-auto object-contain transition-all duration-300 ${scrolled && !scrollUp ? "h-10 sm:h-12" : "h-14 sm:h-16 lg:h-20"}`} />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-0.5 text-[10px] lg:text-[11px] font-semibold tracking-[0.16em] text-white hover:text-red-brand transition-colors duration-200"
            >
              <img src={item.icon} alt="" width={256} height={256} className={`object-contain transition-all duration-300 ${scrolled && !scrollUp ? "w-6 h-6 lg:w-8 lg:h-8" : "w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"}`} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <a href="#cart" className="relative flex items-center gap-1.5 sm:gap-2 group mr-2 md:mr-0" aria-label="Shopping cart, 0 items">
            <img src="/cart-icon.webp" alt="" width={256} height={256} className={`object-contain transition-all duration-300 ${scrolled && !scrollUp ? "w-5 h-5 lg:w-6 lg:h-6" : "w-6 h-6 lg:w-8 lg:h-8"}`} />
            <span className="hidden md:inline text-[10px] lg:text-[11px] font-semibold tracking-[0.16em] text-white group-hover:text-red-brand transition-colors duration-200">CART</span>
            <span className="absolute -top-1 -right-1.5 sm:-top-1.5 sm:-right-2 text-[9px] sm:text-[10px] font-semibold text-white">0</span>
          </a>
          <button
            className="md:hidden p-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" className="md:hidden mt-3 pb-3 border-t border-white/10 pt-3 flex flex-col gap-3" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-[0.12em] text-white hover:text-red-brand transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
