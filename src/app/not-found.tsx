import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import NotFoundHero from "@/components/NotFoundHero"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "That bite doesn't exist. The page you're looking for isn't on the menu — head back to the Burger Shop homepage or browse the burgers.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      {/* Skip link — visually hidden until keyboard-focused */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <NotFoundHero />
      </main>
      <Footer />
    </>
  )
}
