export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://burger-shop-xi.vercel.app").replace(/\/$/, "")

export const SITE_NAME = "Burger Shop"

export const SITE_TITLE = "Burger Shop — Smash Burgers, Made to Order"

export const SITE_DESCRIPTION =
  "Burger Shop is a smash-burger restaurant serving beef patties smashed to order, six burgers from $8.50, plus fries and drinks. Dine in, pickup or delivery."

export const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "A smash burger with melted cheese and bacon, freshly made to order",
}
