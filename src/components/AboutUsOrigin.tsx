import { aboutUsOriginConfig } from '@configs/aboutUsOrigin'
import ProgressiveImage from '@components/ProgressiveImage'

export type AboutUsOriginProps = {
  className?: string
}

/**
 * Figma Section 6 / Our Origin (151:788).
 * Image frame (151:798): 633×400 visible, radius 16.
 */
export default function AboutUsOrigin({ className = '' }: AboutUsOriginProps) {
  const { eyebrow, heading, paragraphs, year, founded, image } =
    aboutUsOriginConfig

  return (
    <section
      data-reveal
      id="our-story"
      className={['w-full bg-surface-warm', className].filter(Boolean).join(' ')}
      aria-labelledby="about-us-origin-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col items-start gap-10 px-4 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:flex-row lg:gap-20 lg:px-page-x lg:py-[96px]">
        <div className="flex w-full shrink-0 flex-col items-start gap-5 overflow-hidden lg:w-[631px]">
          <span className="text-body-sm font-semibold uppercase tracking-[1.96px] text-primary">
            {eyebrow}
          </span>
          <h2
            id="about-us-origin-heading"
            className="w-full max-w-[354px] text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
          >
            {heading}
          </h2>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="w-full text-base font-normal leading-[1.75] text-muted-alt"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative h-[240px] w-full min-w-0 overflow-hidden rounded-[16px] sm:h-[320px] lg:h-[400px] lg:flex-1">
          <ProgressiveImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="absolute inset-0 size-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
          <div className="relative z-10 flex h-full flex-col items-start justify-between p-6">
            <span className="rounded-sm bg-surface-cream px-4 py-2.5 text-nav font-semibold leading-normal text-[#1a3a0a]">
              {founded}
            </span>
            <p
              className="text-hero font-extrabold leading-none text-surface-cream opacity-[0.12]"
              aria-hidden="true"
            >
              {year}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
