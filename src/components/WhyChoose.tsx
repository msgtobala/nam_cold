import { whyChooseConfig } from '@configs/whyChoose'

export type WhyChooseProps = {
  className?: string
}

/** Figma Why choose NAM COLD (1:286) — sits under Clinical Timeline */
export default function WhyChoose({ className = '' }: WhyChooseProps) {
  const { ariaLabel, eyebrow, heading, description, cards } = whyChooseConfig

  return (
    <section
      className={['w-full bg-surface', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-10 px-4 py-14 sm:gap-[42px] sm:px-8 sm:py-16 lg:px-[72px] lg:py-section-y">
        <header className="flex w-full flex-col gap-6 overflow-hidden lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-full flex-col gap-3 overflow-hidden lg:w-[760px] lg:shrink-0">
            <span className="text-body-sm font-normal uppercase tracking-[1.68px] text-primary">
              {eyebrow}
            </span>
            <h2
              id="why-choose-heading"
              className="max-w-[503px] text-[1.75rem] font-normal leading-[1.2] text-ink sm:text-lead lg:text-heading"
            >
              {heading}
            </h2>
          </div>
          <p className="w-full max-w-[380px] text-base font-normal leading-[1.4] text-muted lg:shrink-0">
            {description}
          </p>
        </header>

        <ul className="grid w-full grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <li key={card.id} className="min-w-0">
              <article className="flex h-full flex-col items-start gap-4 overflow-hidden rounded-card bg-white p-[26px] shadow-card lg:h-[250px]">
                <div className="relative size-12 shrink-0 overflow-clip">
                  <img
                    src={card.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="absolute inset-0 size-full"
                    decoding="async"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-card-title font-normal text-primary">
                  {card.title}
                </h3>
                <p className="text-body font-normal text-muted">
                  {card.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
