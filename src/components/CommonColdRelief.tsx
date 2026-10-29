import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import { commonColdReliefConfig } from '@configs/commonColdRelief'
import ProgressiveImage from '@components/ProgressiveImage'

export type CommonColdReliefProps = {
  className?: string
}

/** Figma Common cold relief (1:1038) */
export default function CommonColdRelief({
  className = '',
}: CommonColdReliefProps) {
  const navigate = useNavigate()
  const { label, heading, photography, products, cta, ctaHref } =
    commonColdReliefConfig

  return (
    <section
      data-reveal
      className={['w-full bg-[#fafaf8]', className].filter(Boolean).join(' ')}
      aria-labelledby="common-cold-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col items-center gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:flex-row lg:gap-[72px] lg:px-[120px] lg:py-[104px]">
        <div className="relative aspect-[600/580] w-full overflow-hidden rounded-[24px] lg:h-[580px] lg:w-[600px] lg:shrink-0 lg:aspect-auto">
          <ProgressiveImage
            src={photography.src}
            alt={photography.alt}
            width={photography.width}
            height={photography.height}
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-6 sm:gap-7">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 shrink-0 bg-primary" aria-hidden="true" />
            <span className="text-body-sm font-normal uppercase tracking-[1.96px] text-primary">
              {label}
            </span>
          </div>

          <h2
            id="common-cold-heading"
            className="whitespace-pre-line text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
          >
            {heading}
          </h2>

          <div className="relative h-[140px] w-full overflow-hidden rounded-md sm:h-[160px] lg:h-[180px]">
            <ProgressiveImage
              src={products.src}
              alt={products.alt}
              width={products.width}
              height={products.height}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate(ctaHref)}
          >
            {cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
