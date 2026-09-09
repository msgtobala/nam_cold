import Container from '@components/Container'
import { productJourneyConfig } from '@configs/productJourney'

export type ProductJourneyProps = {
  className?: string
}

/** Figma Products relief journey (1:1700) */
export default function ProductJourney({ className = '' }: ProductJourneyProps) {
  const {
    badge,
    titleBefore,
    titleAccent,
    titleAfter,
    description,
    steps,
    timelineImage,
    timelineAlt,
    timelineWidth,
    timelineHeight,
    headingId,
  } = productJourneyConfig

  return (
    <section
      className={[
        'w-full bg-white pt-14 pb-16 sm:pt-16 lg:pt-[56px] lg:pb-20',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby={headingId}
    >
      <Container className="flex flex-col items-center gap-10 lg:gap-12">
        <header className="flex w-full max-w-[800px] flex-col items-center gap-3 text-center">
          <span className="px-4 py-1.5 text-body-sm font-normal tracking-[1.68px] text-primary">
            {badge}
          </span>
          <div className="flex flex-col items-center gap-2">
            <h2
              id={headingId}
              className="text-[1.75rem] font-normal leading-[1.1] text-ink sm:text-lead lg:text-heading lg:leading-[1.04]"
            >
              {titleBefore}
              <span className="text-primary">{titleAccent}</span>
              {titleAfter}
            </h2>
            <p className="max-w-[800px] text-body-sm font-normal text-[#4b5563] sm:text-base">
              {description}
            </p>
          </div>
        </header>

        <div className="flex w-full flex-col gap-6 lg:gap-2">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden">
            <img
              src={timelineImage}
              alt={timelineAlt}
              width={timelineWidth}
              height={timelineHeight}
              className="h-auto w-full object-contain object-center"
              decoding="async"
            />
          </div>

          <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step) => (
              <li
                key={step.id}
                className="mx-auto flex w-full max-w-[204px] flex-col items-center gap-1.5 text-center"
              >
                <p className="w-full text-card-title font-medium text-primary">
                  {step.title}
                </p>
                <p className="w-full text-body-sm font-normal text-[#4b5563]">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
