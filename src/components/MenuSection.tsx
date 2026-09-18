"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { menuItems, featuredBurgers } from "@/data"

function MenuCard({ burger, index }: { burger: (typeof featuredBurgers)[0]; index: number }) {
  return (
    <a href="#" className="relative block overflow-hidden group flex-1 min-w-0">
      <div className="relative overflow-hidden bg-charcoal">
        <Image
          src={burger.image}
          alt={burger.alt}
          width={1122}
          height={1402}
          sizes="(min-width: 1441px) 350px, (min-width: 1024px) 320px, (min-width: 640px) 33vw, 30vw"
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent flex items-end justify-between p-2 min-[640px]:p-3 min-[1441px]:p-4">
          <span className="font-display text-xs min-[640px]:text-sm min-[1441px]:text-base tracking-wide text-white whitespace-pre-line leading-tight">
            {burger.name}
          </span>
          <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  )
}

export default function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 sm:scroll-mt-24 bg-dark py-10 sm:py-12 md:py-16 lg:py-20 px-4 min-[640px]:px-5 min-[768px]:px-6 min-[1441px]:pl-[180px] min-[1441px]:pr-0 overflow-hidden relative">
      <img
        src="/new-torn.webp"
        alt=""
        width={1080}
        height={1456}
        loading="lazy"
        decoding="async"
        className="absolute top-0 h-full w-auto object-cover pointer-events-none hidden min-[1441px]:block left-0 min-[1441px]:-left-4 min-[1600px]:left-0"
      />
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 min-[1024px]:max-w-[1024px] min-[1441px]:max-w-[1400px] min-[1441px]:grid-cols-[22%_1fr] gap-6 min-[1441px]:gap-8 items-start">
        <div className="pr-4 min-[1441px]:pr-0">
          <div className="flex flex-row min-[1441px]:flex-col-reverse items-start gap-3 sm:gap-4 md:gap-5">
            <h2 className="font-display text-[2.5rem] min-[640px]:text-[3rem] min-[768px]:text-[3.5rem] min-[1441px]:text-[4rem] min-[1700px]:text-[5rem] leading-[0.95] text-white mb-4 sm:mb-5 md:mb-7">
              OUR
              <br />
              MENU
            </h2>
            <div className="relative mt-1 sm:mt-2 -rotate-[8deg] origin-bottom-left inline-block">
              <div className="relative px-10 pt-2 pb-5 sm:px-14 sm:pt-3 sm:pb-6 md:px-18 md:pt-4 md:pb-7">
                <p className="font-script text-base sm:text-xl md:text-2xl text-white/65 leading-tight relative z-10 text-center whitespace-nowrap">
                  Choose
                  <br />
                  your favorite.
                </p>
              </div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M18 45C16 18 50 4 105 6C160 8 190 22 192 45C194 68 160 88 105 86C50 84 20 72 18 45Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.65"
                />
              </svg>
            </div>
          </div>
          <ul className="mb-4 sm:mb-5">
            {menuItems.map((item) => (
              <li key={item.id} className="flex items-baseline gap-2 py-1.5 sm:py-2 border-b border-white/10">
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide text-white whitespace-nowrap">{item.name}</span>
                <span className="flex-1 border-b border-dotted border-white/20 mb-1" />
                <span className="text-[11px] sm:text-xs md:text-sm font-medium text-white whitespace-nowrap">{item.price}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="inline-flex items-center gap-3 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider text-white/80 border-b border-current pb-px hover:text-red-brand transition-colors duration-200">
            VIEW FULL MENU
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 6h16M12 1l5 5-5 5" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
          {featuredBurgers.map((burger, i) => (
            <MenuCard key={burger.id} burger={burger} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
