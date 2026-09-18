export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] sm:h-[90vh] max-h-[500px] sm:max-h-none min-h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-new.webp"
          alt="Juicy smash burger with melted cheese and bacon"
          width={1671}
          height={941}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,12,12,1) 0%, rgba(11,12,12,0.92) 12%, rgba(11,12,12,0.55) 30%, rgba(11,12,12,0.15) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 px-5 sm:px-8 lg:pl-[6vw] max-w-[500px]">
        <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.22em] text-white mb-3 sm:mb-4">
          REAL INGREDIENTS. BOLDER FLAVORS.
        </p>
        <h1 className="font-montserrat font-black text-[2.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.8] text-white mb-3 sm:mb-4">
          BURGERS
          <br />
          DONE
          <br />
          <span style={{ lineHeight: "1", whiteSpace: "nowrap" }}>RIGHT<span style={{ display: "inline-block", width: "0.22em", height: "0.22em", background: "white", marginLeft: "0.04em", verticalAlign: "baseline", transform: "translateY(-0.02em)" }}></span></span>
        </h1>
        <p className="font-serif text-sm sm:text-base md:text-lg font-medium text-white/80 leading-relaxed mb-5 sm:mb-6 max-w-[340px]">
          <span className="block sm:inline">Freshly smashed.</span>
          <span className="block sm:inline"> Always made to order.</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline">Simple ingredients.</span>
          <span className="block sm:inline"> Big flavor.</span>
        </p>
        <a
          href="#menu"
          className="inline-flex items-center gap-6 sm:gap-8 bg-red-brand/80 text-white text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider px-4 sm:px-6 py-2.5 sm:py-3 md:py-3.5 hover:bg-red-brand transition-colors duration-200 mt-2"
        >
          VIEW OUR MENU
          <span className="relative inline-block w-5 sm:w-6 md:w-8 h-[1.5px] bg-white align-middle">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-r-[1.5px] border-t-[1.5px] border-white rotate-45" />
          </span>
        </a>
      </div>
    </section>
  )
}
