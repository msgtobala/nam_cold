import { useNavigate } from 'react-router-dom'
import Button from '@components/Button'
import { nightCongestionConfig } from '@configs/nightCongestion'
import ProgressiveImage from '@components/ProgressiveImage'

export type NightCongestionProps = {
  className?: string
}

/** Figma Night congestion (1:1078) */
export default function NightCongestion({
  className = '',
}: NightCongestionProps) {
  const navigate = useNavigate()
  const {
    label,
    heading,
    description,
    cta,
    ctaHref,
    recommendation,
    sleep,
    moonGlow,
  } = nightCongestionConfig

  return (
    <section
      data-reveal
      className={['relative w-full overflow-hidden bg-footer-deep', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="night-congestion-heading"
    >
      <div className="relative mx-auto flex w-full max-w-page flex-col items-center gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:flex-row lg:gap-[72px] lg:px-[120px] lg:py-[104px]">
        <div className="flex w-full max-w-[520px] shrink-0 flex-col items-start gap-6 sm:gap-7 lg:w-[520px]">
          <div className="flex items-center gap-2">
            <span
              className="h-0.5 w-6 shrink-0 bg-accent-amber"
              aria-hidden="true"
            />
            <span className="text-body-sm font-medium uppercase tracking-[1.96px] text-accent-amber">
              {label}
            </span>
          </div>

          <h2
            id="night-congestion-heading"
            className="max-w-[408px] text-[1.75rem] font-normal leading-[1.3] text-white sm:text-lead lg:text-heading"
          >
            {heading}
          </h2>

          <p className="text-body-sm font-normal leading-[1.6] text-[#c8d8ee] sm:text-base">
            {description}
          </p>

          <div className="flex w-full items-center gap-[18px] overflow-hidden rounded-card border border-white/10 bg-white/[0.06] p-4 sm:p-5">
            <div className="relative h-[100px] w-20 shrink-0 overflow-hidden rounded-[10px] bg-white">
              <ProgressiveImage
                src={recommendation.product.src}
                alt={recommendation.product.alt}
                width={recommendation.product.width}
                height={recommendation.product.height}
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
              <span className="text-[10px] font-bold tracking-[1.2px] text-accent-amber">
                {recommendation.badge}
              </span>
              <span className="text-card-title font-bold text-white">
                {recommendation.title}
              </span>
              <span className="text-label font-normal text-subtle">
                {recommendation.subtitle}
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="tertiary"
            onClick={() => navigate(ctaHref)}
          >
            {cta}
          </Button>
        </div>

        <div className="relative w-full min-w-0 flex-1 pt-10 sm:pt-12 lg:pt-14">
          {/* Moon peeks from behind the top-right of the sleep photo */}
          <div
            className="pointer-events-none absolute top-0 right-2 z-0 size-[140px] sm:right-4 sm:size-[180px] lg:right-0 lg:size-[220px]"
            aria-hidden="true"
          >
            <ProgressiveImage
              src={moonGlow}
              alt=""
              width={420}
              height={420}
              className="absolute inset-[-45%] size-[190%] max-w-none"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="relative z-10 aspect-[608/600] w-full overflow-hidden rounded-[24px] lg:h-[600px] lg:aspect-auto">
            <ProgressiveImage
              src={sleep.src}
              alt={sleep.alt}
              width={sleep.width}
              height={sleep.height}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
