import Link from "next/link"

export default function NotFoundHero() {
  return (
    <section className="relative flex h-[100svh] max-h-[1100px] min-h-[560px] items-start overflow-hidden bg-black-brand sm:items-center">
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

      {/* Desktop scrim: fades left-to-right off the empty plate, leaving the food untouched */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(to right, rgba(11,12,12,1) 0%, rgba(11,12,12,0.96) 24%, rgba(11,12,12,0.79) 40%, rgba(11,12,12,0.36) 55%, transparent 72%)",
        }}
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
              className="text-distress block text-[clamp(5.5rem,15vw,15rem)] leading-[0.8] text-offwhite"
            >
              404
            </span>
            <span
              aria-hidden="true"
              className="text-distress-soft mt-3 block text-[clamp(1.9rem,4.6vw,4.75rem)] leading-[0.95] text-white"
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
              className="inline-flex items-center gap-6 bg-red-brand px-7 py-4 text-[11px] font-bold tracking-[0.14em] text-white transition-colors duration-200 hover:bg-red-hover sm:gap-8 sm:text-xs"
            >
              BACK TO HOME
              <span className="relative inline-block h-[1.5px] w-5 bg-white align-middle sm:w-6">
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
