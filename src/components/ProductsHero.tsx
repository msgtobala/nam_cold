import { productsHeroConfig } from '@configs/productsHero'
import ProgressiveImage from '@components/ProgressiveImage'

export type ProductsHeroProps = {
  className?: string
}

/** Figma Products hero (177:1333) — banner fills a 1442×844 frame */
export default function ProductsHero({ className = '' }: ProductsHeroProps) {
  const { badge, heading, ariaLabel, banner, stats } = productsHeroConfig

  return (
    <section
      data-reveal="load"
      className={['relative w-full overflow-hidden bg-white', className]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <div className="relative w-full lg:aspect-[1442/844]">
        <ProgressiveImage
          data-reveal-media
          src={banner.src}
          alt={banner.alt}
          width={banner.width}
          height={banner.height}
          className="h-[280px] w-full object-cover object-[72%_center] sm:h-[420px] lg:hidden"
          decoding="async"
          fetchPriority="high"
        />

        <div
          className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
          aria-hidden="true"
        >
          <div className="absolute top-[-2.844%] left-[-2.843%] h-[102.844%] w-[102.843%] overflow-hidden">
            <ProgressiveImage
              data-reveal-media
              src={banner.src}
              alt=""
              width={banner.width}
              height={banner.height}
              className="absolute top-[-5.36%] left-[-15.04%] h-[105.36%] w-[123.33%] max-w-none"
              decoding="async"
            />
          </div>
        </div>

        <div data-reveal-item className="relative flex w-full max-w-[540px] flex-col items-start gap-6 px-4 py-10 sm:gap-7 sm:px-8 sm:py-12 lg:absolute lg:top-[22.986%] lg:left-[5.548%] lg:w-[37.448%] lg:max-w-none lg:gap-7 lg:p-0">
          <span className="rounded-full bg-primary px-3.5 py-[7px] text-caption font-semibold tracking-[1.1px] text-white">
            {badge}
          </span>

          <h1 className="text-[1.75rem] font-normal leading-[1.04] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[6rem] lg:tracking-[-1.44px]">
            {heading.split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
     

          <div className="flex items-center gap-6">
            {stats.map((stat, index) => (
              <div key={stat.id} className="flex items-center gap-6">
                {index > 0 ? (
                  <div
                    className="h-8 w-px shrink-0 bg-[#e0e5ee]"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="flex flex-col gap-0.5 whitespace-nowrap leading-normal">
                  <span className="text-[22px] font-bold text-[#0a1838]">
                    {stat.value}
                  </span>
                  <span className="text-nav font-normal leading-[1.25] text-[#8a94a6]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
