function MapPinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C7.31 0 3.5 3.81 3.5 8.5C3.5 14.88 12 24 12 24S20.5 14.88 20.5 8.5C20.5 3.81 16.69 0 12 0ZM12 11.5C10.34 11.5 9 10.16 9 8.5C9 6.84 10.34 5.5 12 5.5C13.66 5.5 15 6.84 15 8.5C15 10.16 13.66 11.5 12 11.5Z" />
    </svg>
  )
}

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 1024 1024" fill="currentColor" fillRule="evenodd">
      <path d="M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328" transform="translate(165 112)" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-cream py-6 sm:py-8 lg:py-10 min-h-[140px] sm:min-h-[160px] lg:min-h-[200px] px-4 sm:px-6 lg:px-[5vw] relative overflow-hidden">
      {/* Mobile: half cheeseburger cutout */}
      <img
        src="/half-cheeseburger.webp"
        alt=""
        width={600}
        height={781}
        loading="lazy"
        decoding="async"
        className="absolute top-0 -right-[12%] h-full w-auto object-contain -scale-x-100 block sm:hidden"
      />
      {/* Tablet/desktop: burger close-up */}
      <img
        src="/hungry-burger.webp"
        alt="Delicious burger"
        width={800}
        height={387}
        loading="lazy"
        decoding="async"
        className="absolute top-0 left-0 hidden h-full w-[20%] object-fill blur-[1px] sm:block md:blur-none lg:blur-[1px]"
      />
      <div className="max-w-[1400px] mx-auto pr-[30%] sm:pr-0 sm:ml-[22%]">
        <p className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-black mb-1">HUNGRY ALREADY?</p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-4 sm:gap-4 lg:gap-6">
          <h2 className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-none text-black flex items-center gap-3 sm:gap-4 lg:gap-6">
            ORDER NOW
            <span className="relative inline-block w-[30px] sm:w-[50px] lg:w-[70px] h-[2px] bg-black align-middle">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 border-r-2 border-t-2 border-black rotate-45" />
            </span>
          </h2>

          <div className="flex items-center gap-4 sm:gap-5 flex-wrap ml-auto md:ml-0 lg:ml-auto">
            <a href="#" className="text-black hover:text-black transition-colors duration-200" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="text-black hover:text-black transition-colors duration-200" aria-label="Facebook">
              <FacebookIcon size={20} />
            </a>
            <a href="#" className="text-black hover:text-black transition-colors duration-200" aria-label="TikTok">
              <TikTokIcon size={20} />
            </a>
            <a href="#" className="text-black hover:text-black transition-colors duration-200" aria-label="Location">
              <MapPinIcon size={16} />
            </a>
            <p className="text-[10px] sm:text-[11px] font-bold font-sans tracking-[0.2em] sm:tracking-[0.25em] text-black sm:ml-4">DINE IN &nbsp;/&nbsp; PICKUP &nbsp;/&nbsp; DELIVERY</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
