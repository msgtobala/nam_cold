import { Link } from 'react-router-dom'
import { aboutUsHeroConfig } from '@configs/aboutUsHero'
import ProgressiveImage from '@components/ProgressiveImage'

export type AboutUsHeroProps = {
  className?: string
}

/**
 * Figma About Us hero (151:770).
 * Image frame (151:782): 758×560, radius 20, x 636, y 80.
 */
export default function AboutUsHero({ className = '' }: AboutUsHeroProps) {
  const {
    ariaLabel,
    eyebrow,
    heading,
    description,
    primaryCta,
    primaryCtaHref,
    secondaryCta,
    secondaryCtaHref,
    hero,
  } = aboutUsHeroConfig

  return (
    <section
      data-reveal="load"
      className={['w-full bg-surface-warm', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
    >
      <div className="mx-auto flex w-full max-w-page flex-col items-start gap-8 px-4 py-14 sm:gap-10 sm:px-8 sm:py-16 lg:h-[720px] lg:flex-row lg:items-center lg:gap-0 lg:py-header lg:pl-page-x lg:pr-[46px]">
        <div data-reveal-item className="flex w-full shrink-0 flex-col gap-8 overflow-hidden lg:w-[588px]">
          <div className="flex w-full flex-col gap-4 overflow-hidden">
            <span className="text-body-sm font-medium uppercase tracking-[1.96px] text-primary">
              {eyebrow}
            </span>
            <h1 className="w-full max-w-[496px] text-[1.75rem] font-normal leading-[1.2] text-ink sm:text-lead lg:text-display">
              {heading}
            </h1>
          </div>
          <p className="w-full max-w-[460px] text-base font-normal leading-[1.3] text-muted-alt">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={primaryCtaHref}
              className="inline-flex h-10 items-center rounded-full bg-primary px-6 text-label font-semibold leading-none text-surface-warm transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {primaryCta}
            </Link>
            <Link
              to={secondaryCtaHref}
              className="inline-flex h-10 items-center rounded-full border border-solid border-border-sand px-6 text-label font-medium leading-none text-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>

        <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-card sm:h-[360px] lg:h-[560px] lg:w-[758px]">
          <ProgressiveImage
            data-reveal-media
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            className="absolute inset-0 size-full object-cover object-center"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
