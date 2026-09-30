import { productScienceConfig } from '@configs/productScience'
import ProgressiveImage from '@components/ProgressiveImage'

export type ProductScienceProps = {
  className?: string
}

const stepToneClasses = {
  blue: {
    badge: 'bg-[#eaf0ff] text-primary-bright',
  },
  green: {
    badge: 'bg-[#f0fff4] text-[#16a34a]',
  },
} as const

/** Figma Products science section (1:1628) */
export default function ProductScience({ className = '' }: ProductScienceProps) {
  const { eyebrow, heading, description, diagram, steps } = productScienceConfig

  return (
    <section
      data-reveal
      className={['w-full bg-[#fafaf8]', className].filter(Boolean).join(' ')}
      aria-labelledby="product-science-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-10 px-4 py-16 sm:gap-12 sm:px-8 sm:py-20 lg:gap-16 lg:px-20 lg:py-24">
        <header data-reveal-item className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex w-full max-w-[680px] flex-col gap-3">
            <span className="text-caption font-bold tracking-[1.1px] text-primary-bright">
              {eyebrow}
            </span>
            <h2
              id="product-science-heading"
              className="max-w-[472px] text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
            >
              {heading}
            </h2>
          </div>
          <p className="w-full max-w-[543px] text-body-sm font-normal leading-[1.65] text-placeholder sm:text-base">
            {description}
          </p>
        </header>

        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-20">
          <div className="relative aspect-[650/506] w-full overflow-hidden rounded-card lg:h-[506px] lg:w-[650px] lg:shrink-0 lg:aspect-auto">
            <ProgressiveImage
              src={diagram.src}
              alt={diagram.alt}
              width={diagram.width}
              height={diagram.height}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <ol className="flex w-full min-w-0 flex-1 flex-col">
            {steps.map((step) => (
              <li data-reveal-item
                key={step.id}
                className="flex gap-5 border-b border-[#ddd] py-6 sm:gap-6 sm:py-7"
              >
                <span
                  className={[
                    'flex size-12 shrink-0 items-center justify-center rounded-[14px] text-label font-extrabold',
                    stepToneClasses[step.tone].badge,
                  ].join(' ')}
                >
                  {step.number}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <h3 className="text-card-title font-medium text-[#0a1838]">
                    {step.title}
                  </h3>
                  <p className="text-body-sm font-normal leading-[1.65] text-[#5a6476] sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
