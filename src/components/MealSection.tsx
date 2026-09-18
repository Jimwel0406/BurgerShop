export default function MealSection() {
  return (
    <section id="order" className="bg-cream text-black-brand overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <div className="relative">
          <div className="overflow-hidden">
            <picture>
              <source media="(min-width: 1024px)" srcSet="/french-fries-new.webp" />
              <img
                src="/french-fries-mobile.webp"
                alt="Crispy golden french fries in a black tray"
                width={1670}
                height={942}
                loading="lazy"
                decoding="async"
                className="w-full h-full min-h-[250px] sm:min-h-[300px] lg:min-h-[500px] object-cover object-left lg:[object-fit:unset]"
              />
            </picture>
          </div>
        </div>

        <div className="relative px-5 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center">
          <img src="/paint-brush.webp" alt="" width={768} height={377} loading="lazy" decoding="async" className="absolute left-[60%] top-[70%] w-64 sm:w-80 md:w-96 lg:w-48 lg:left-[-1rem] lg:top-[-1rem] -z-0 pointer-events-none" />

          <p className="relative text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.18em] text-black-brand mb-3 sm:mb-4 z-10">
            MAKE IT A MEAL
          </p>
          <h2 className="relative font-display text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] 2xl:text-[5rem] leading-[0.95] text-black-brand mb-2 sm:mb-3 md:mb-4 z-10">
            GOOD FOOD
            <br />
            GOES FURTHER.
          </h2>
          <p className="relative text-sm sm:text-base lg:text-lg font-bold text-black-brand leading-relaxed max-w-[420px] mb-5 sm:mb-6 md:mb-8 z-10" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Add crispy fries and a drink to any burger
            <br className="hidden sm:block" />
            and turn a great meal into the perfect one.
          </p>
          <a href="#" className="relative inline-flex items-center gap-6 sm:gap-8 bg-black-brand text-white text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 hover:bg-red-brand transition-colors duration-200 z-10 w-fit">
            BUILD YOUR MEAL
            <span className="relative inline-block w-5 sm:w-6 md:w-8 h-[1.5px] bg-white align-middle">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 border-r-[1.5px] border-t-[1.5px] border-white rotate-45" />
            </span>
          </a>

          <div className="hidden min-[1440px]:block absolute -bottom-6 -right-4 w-64 min-[1440px]:w-96 z-10">
            <img
              src="/cola-cup-new.webp"
              alt="Cold cola drink with Burger Shop branding"
              width={768}
              height={960}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
