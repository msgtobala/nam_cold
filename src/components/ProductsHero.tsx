import { productsHeroConfig } from '@configs/productsHero'

export type ProductsHeroProps = {
  className?: string
}

/** Figma Products page hero (1:1174) */
export default function ProductsHero({ className = '' }: ProductsHeroProps) {
  const {
    badge,
    headingLine1,
    headingLine2,
    description,
    ariaLabel,
    background,
    product,
    stats,
  } = productsHeroConfig

  return (
    <section
      className={['relative w-full overflow-hidden', className]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={background.src}
          alt=""
          width={background.width}
          height={background.height}
          className="absolute inset-0 size-full object-cover object-[20%_center]"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[rgba(250,250,248,0.18)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-page flex-col lg:h-[760px] lg:flex-row lg:items-center">
        <div className="relative z-10 flex w-full shrink-0 flex-col items-start gap-6 px-4 py-14 sm:gap-7 sm:px-8 sm:py-16 lg:w-[620px] lg:gap-7 lg:py-0 lg:pl-20 lg:pr-0">
          <span className="rounded-badge bg-[#eaf0ff] px-3.5 py-1.5 text-caption font-bold tracking-[1.1px] text-primary-bright">
            {badge}
          </span>

          <h1 className="max-w-[540px] text-[2.5rem] font-normal leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.5rem] lg:text-[72px] lg:tracking-[-2.16px]">
            <span className="block">{headingLine1}</span>
            <span className="block">{headingLine2}</span>
          </h1>

          <p className="max-w-[460px] text-[15px] font-normal leading-[1.65] text-[#5a6476] sm:text-[17px]">
            {description}
          </p>

          {/* Figma spacer between copy and stats (1:1180) */}
          <div
            className="hidden size-[100px] shrink-0 lg:block"
            aria-hidden="true"
          />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {stats.map((stat, index) => (
              <div key={stat.id} className="flex items-center gap-6">
                {index > 0 ? (
                  <div
                    className="hidden h-8 w-px shrink-0 bg-[#e0e5ee] sm:block"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="flex flex-col gap-0.5 whitespace-nowrap">
                  <span className="text-[1.25rem] font-bold leading-none text-[#0a1838] sm:text-[22px]">
                    {stat.value}
                  </span>
                  <span className="text-nav font-normal text-[#8a94a6]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 aspect-square w-full min-w-0 sm:aspect-auto sm:h-[520px] lg:h-full lg:min-h-0 lg:flex-1 lg:aspect-auto">
          <img
            src={product.src}
            alt={product.alt}
            width={product.width}
            height={product.height}
            className="absolute inset-0 size-full object-cover object-center"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
