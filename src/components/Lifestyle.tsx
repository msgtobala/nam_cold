import { lifestyleConfig } from '@configs/lifestyle'

export type LifestyleProps = {
  className?: string
}

/** Figma Products lifestyle section (1:1668) */
export default function Lifestyle({ className = '' }: LifestyleProps) {
  const { sleep, situations } = lifestyleConfig

  return (
    <section
      className={['w-full bg-[#fafaf8]', className].filter(Boolean).join(' ')}
      aria-labelledby="lifestyle-sleep-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-14 px-4 py-16 sm:gap-16 sm:px-8 sm:py-20 lg:gap-20 lg:px-20 lg:py-24">
        {/* Sleep deeper hero row */}
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[72px]">
          <div className="flex w-full max-w-[500px] shrink-0 flex-col items-start gap-5 sm:gap-[22px] lg:w-[500px]">
            <span className="text-body-sm font-medium uppercase tracking-[1.4px] text-[#ce723f]">
              {sleep.eyebrow}
            </span>
            <h2
              id="lifestyle-sleep-heading"
              className="max-w-[358px] text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
            >
              {sleep.heading}
            </h2>
            <p className="max-w-[446px] text-body-sm font-normal leading-[1.65] text-[#5a6476] sm:text-base">
              {sleep.description}
            </p>
          </div>

          <div className="relative aspect-[760/500] w-full min-w-0 flex-1 overflow-hidden rounded-[24px] lg:h-[500px] lg:aspect-auto">
            <img
              src={sleep.image.src}
              alt={sleep.image.alt}
              width={sleep.image.width}
              height={sleep.image.height}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Real-life situations cards */}
        <div className="flex w-full flex-col gap-6 sm:gap-8">
          <header className="flex flex-col gap-3">
            <span className="text-body-sm font-medium uppercase tracking-[1.4px] text-primary-bright">
              {situations.eyebrow}
            </span>
            <h2
              id="lifestyle-situations-heading"
              className="text-[1.75rem] font-normal leading-[1.04] tracking-[-0.03em] text-ink sm:text-lead lg:text-heading lg:tracking-[-1.2px]"
            >
              {situations.heading}
            </h2>
          </header>

          <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {situations.cards.map((card) => (
              <li key={card.id} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-card border border-[#e8edf5] bg-white">
                  <div className="relative h-[200px] w-full shrink-0 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      width={1248}
                      height={832}
                      className="absolute inset-0 size-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5 p-5">
                    <h3 className="text-card-title font-medium text-[#0a1838]">
                      {card.title}
                    </h3>
                    <p className="text-body-sm font-normal text-[#5a6476]">
                      {card.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
