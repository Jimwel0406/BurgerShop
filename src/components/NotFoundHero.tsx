import Link from "next/link"

export default function NotFoundHero() {
  return (
    <section className="relative flex h-[100svh] max-h-[1100px] min-h-[560px] items-start overflow-hidden bg-black-brand sm:items-center">
      {/* Warps the glyph outline so the 404 reads as a hand-cut shape instead
          of a geometric typeface. Filter region is oversized so the displaced
          edges aren't clipped. */}
      <svg aria-hidden="true" className="pointer-events-none absolute h-0 w-0">
        <filter id="rough-edge" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" seed="11" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Hero photograph — burger sits right, the plate's dead space stays left for the type */}
      <img
        src="/404-hero.webp"
        alt=""
        width={1535}
        height={1024}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[74%_center] sm:object-[64%_center] lg:object-center"
      />

      {/* Mobile stacks the type over the food, so the wash is vertical: opaque
          behind the copy, fading out to let the burger read at the bottom */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,12,12,0.97) 0%, rgba(11,12,12,0.96) 44%, rgba(11,12,12,0.76) 62%, rgba(11,12,12,0.44) 100%)",
        }}
      />

      <div className="relative z-10 w-full px-5 pt-28 sm:px-8 sm:pt-0 lg:pl-[7vw] lg:pr-10">
        <div className="max-w-[640px]">
          <h1 className="font-display uppercase">
            <span className="sr-only">404 — That bite doesn&apos;t exist.</span>
            <span
              aria-hidden="true"
              style={{ filter: "url(#rough-edge)" }}
              className="text-distress block text-[clamp(5.5rem,15vw,15rem)] leading-[0.8] text-[#F9F6F2]"
            >
              404
            </span>
            <span
              aria-hidden="true"
              className="mt-5 block text-[clamp(1.9rem,4.6vw,4.75rem)] leading-[0.95] text-white"
            >
              THAT BITE DOESN&apos;T
              <br />
              EXIST.
            </span>
          </h1>

          <p className="mt-6 font-serif text-base font-medium text-white/80 sm:mt-8 sm:text-xl md:text-2xl">
            Looks like this page got flipped off the grill.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10 sm:gap-10">
            <Link
              href="/"
              className="inline-flex items-center gap-6 bg-red-brand/80 px-4 py-2.5 text-[11px] font-semibold tracking-wider text-white transition-colors duration-200 hover:bg-red-brand sm:gap-8 sm:px-6 sm:py-3 sm:text-xs md:py-3.5 md:text-sm"
            >
              BACK TO HOME
              <span className="relative inline-block h-[1.5px] w-5 bg-white align-middle sm:w-6 md:w-8">
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r-[1.5px] border-t-[1.5px] border-white" />
              </span>
            </Link>
            <Link
              href="/#menu"
              className="inline-flex items-center gap-3 border-b border-white/40 pb-1 text-[11px] font-bold tracking-[0.14em] text-white transition-colors duration-200 hover:border-white sm:text-xs"
            >
              VIEW MENU
              <span className="relative inline-block h-[1.5px] w-5 bg-white align-middle">
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r-[1.5px] border-t-[1.5px] border-white" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
