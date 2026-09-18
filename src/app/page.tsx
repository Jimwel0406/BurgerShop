import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import MenuSection from "@/components/MenuSection"
import MealSection from "@/components/MealSection"
import StorySection from "@/components/StorySection"
import Footer from "@/components/Footer"
import { menuItems } from "@/data"
import { SITE_URL } from "@/site"

// built from the same array the price list renders, so schema can never drift from visible content
const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${SITE_URL}/#menu`,
  name: "Burger Shop Menu",
  url: `${SITE_URL}/#menu`,
  inLanguage: "en-US",
  hasMenuSection: {
    "@type": "MenuSection",
    name: "Burgers",
    hasMenuItem: menuItems.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      offers: {
        "@type": "Offer",
        price: item.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
      },
    })),
  },
}

export default function Home() {
  return (
    <>
      {/* Skip link — visually hidden until keyboard-focused */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <MenuSection />
        <MealSection />
        <StorySection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(menuJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  )
}
