export default function StorySection() {
  return (
    <section id="story" className="relative bg-black-brand overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="absolute inset-0">
        <img
          src="/story-bg.webp"
          alt="Burger Shop restaurant"
          width={1950}
          height={807}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.7) 38%, rgba(0,0,0,0.35) 58%, transparent 78%)",
          }}
        />
      </div>

      <div className="relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 pl-5 sm:pl-8 md:pl-16 lg:pl-[10vw] pr-4 sm:pr-6">
        <div className="max-w-[500px]">
          <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.18em] text-white mb-3 sm:mb-4 md:mb-5">
            MORE THAN JUST BURGERS
          </p>
          <h2 className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[0.95] text-white mb-2 sm:mb-3 md:mb-4">
            GOOD FOOD.
            <br />
            REAL PEOPLE.
          </h2>
          <p className="font-serif text-sm sm:text-base md:text-lg font-bold text-white/80 leading-relaxed max-w-[400px] mb-2 sm:mb-3">
            We started Burger Shop with a simple idea &mdash; great burgers, made with real ingredients, served to real people.
          </p>
          <p className="font-serif text-sm sm:text-base md:text-lg font-semibold text-white/80 leading-relaxed max-w-[400px] mb-5 sm:mb-6 md:mb-8">
            No shortcuts. No frozen patties.
            <br />
            Just good food, done right.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base font-semibold tracking-wider text-white/80 border-b border-current pb-px hover:text-red-brand transition-colors duration-200"
          >
            OUR STORY
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 6h16M12 1l5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>

      <p className="font-script text-lg sm:text-xl md:text-2xl text-white/90 leading-tight absolute z-10 -rotate-[10deg] block bottom-8 right-6 origin-bottom-right drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)] sm:bottom-10 sm:right-10 lg:top-2 lg:bottom-auto lg:left-10 lg:right-auto lg:origin-bottom-left lg:drop-shadow-none">
        Local
        <br />
        Burgers
        <br />
        Since 2018
      </p>
    </section>
  )
}
