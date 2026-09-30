import { aboutUsPromiseConfig } from '@configs/aboutUsPromise'

export type AboutUsPromiseProps = {
  className?: string
}

/**
 * Figma Promise section (151:892).
 * Icons: star, globe, flask-round, heart — 20×20.
 */
export default function AboutUsPromise({ className = '' }: AboutUsPromiseProps) {
  const { heading, description, cards } = aboutUsPromiseConfig

  return (
    <section
      className={['w-full bg-surface-cream', className].filter(Boolean).join(' ')}
      aria-labelledby="about-us-promise-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col items-start gap-10 px-4 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:gap-16 lg:px-page-x lg:py-[96px]">
        <header className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2
            id="about-us-promise-heading"
            className="w-full shrink-0 text-[1.75rem] font-normal leading-[1.04] tracking-[-1.2px] text-ink sm:text-lead lg:w-[325px] lg:text-heading lg:leading-[1.04] lg:tracking-[-1.2px]"
          >
            {heading}
          </h2>
          <p className="w-full shrink-0 text-base font-normal leading-[1.65] text-[#5a6476] lg:w-[412px]">
            {description}
          </p>
        </header>

        <ul className="flex w-full flex-col gap-2 lg:flex-row">
          {cards.map((card) => (
            <li
              key={card.id}
              className={[
                'flex min-w-0 flex-1 flex-col items-start gap-8 overflow-hidden rounded-[16px] p-8 lg:h-[217px]',
                card.backgroundClassName,
              ].join(' ')}
            >
              <img
                src={card.icon}
                alt=""
                width={20}
                height={20}
                decoding="async"
                aria-hidden="true"
              />
              <div className="flex w-full flex-col items-start gap-2 overflow-hidden">
                <p className="text-card-title font-normal leading-normal text-ink-strong lg:whitespace-nowrap">
                  {card.title}
                </p>
                <p className="w-full text-base font-normal leading-[1.3] text-muted-alt">
                  {card.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
