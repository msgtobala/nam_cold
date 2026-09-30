import { aboutUsImpactConfig } from '@configs/aboutUsImpact'
import ProgressiveImage from '@components/ProgressiveImage'

export type AboutUsImpactProps = {
  className?: string
}

/**
 * Figma Section 10 / Impact (151:857).
 * Family image (151:881): 932×400, radius 16.
 * Products image (151:887): 400×232, radius 16.
 */
export default function AboutUsImpact({ className = '' }: AboutUsImpactProps) {
  const { eyebrow, heading, wellbeingEyebrow, family, products, range, stats } =
    aboutUsImpactConfig

  return (
    <section
      data-reveal
      className={['w-full bg-white', className].filter(Boolean).join(' ')}
      aria-labelledby="about-us-impact-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col items-start gap-10 px-4 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:gap-16 lg:px-page-x lg:pb-[56px] lg:pt-[96px]">
        <header data-reveal-item className="flex w-full flex-col items-center gap-5 overflow-hidden text-center">
          <p className="text-body-sm font-medium uppercase leading-normal tracking-[1.96px] text-primary">
            {eyebrow}
          </p>
          <h2
            id="about-us-impact-heading"
            className="w-full text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:w-[700px] lg:text-heading lg:leading-[1.3]"
          >
            {heading}
          </h2>
        </header>

        <ul className="flex w-full flex-col gap-2 lg:flex-row">
          {stats.map((stat) => (
            <li data-reveal-item
              key={stat.id}
              className={[
                'flex min-w-0 flex-1 flex-col items-start gap-4 rounded-[16px] p-8 sm:p-12 lg:h-[280px]',
                stat.backgroundClassName,
              ].join(' ')}
            >
              <p className="text-body-sm font-medium uppercase leading-normal text-primary lg:whitespace-nowrap">
                {stat.label}
              </p>
              <p
                className={[
                  'text-[2.5rem] font-medium leading-none sm:text-[64px]',
                  stat.valueClassName,
                ].join(' ')}
              >
                {stat.value}
              </p>
              <p className="w-full max-w-[234px] text-base font-normal leading-[1.6] text-muted-alt">
                {stat.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col items-center gap-3 overflow-hidden">
          <p className="text-body-sm font-medium uppercase leading-normal tracking-[1.96px] text-primary">
            {wellbeingEyebrow}
          </p>
          <div className="flex w-full flex-col items-start gap-3 lg:flex-row">
            <div className="relative h-[240px] w-full min-w-0 overflow-hidden rounded-[16px] sm:h-[320px] lg:h-[400px] lg:flex-1">
              <ProgressiveImage
                src={family.src}
                alt={family.alt}
                width={family.width}
                height={family.height}
                className="absolute inset-0 size-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="relative z-10 flex h-full flex-col items-start justify-end p-5">
                <span className="rounded-[8px] bg-[rgba(13,31,8,0.33)] px-[14px] py-2.5 text-nav font-semibold leading-normal text-surface-cream">
                  {family.badge}
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 overflow-hidden lg:size-[400px] lg:shrink-0">
              <div className="relative h-[200px] w-full overflow-hidden rounded-[16px] sm:h-[232px] lg:h-[232px]">
                <ProgressiveImage
                  src={products.src}
                  alt={products.alt}
                  width={products.width}
                  height={products.height}
                  className="absolute inset-0 size-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-2 overflow-hidden rounded-[16px] bg-primary p-6">
                <p className="text-nav font-medium leading-normal tracking-[1.68px] text-white">
                  {range.eyebrow}
                </p>
                <p className="w-full text-card-title font-medium leading-[1.3] text-surface-cream">
                  {range.title}
                </p>
                <p className="w-full text-body-sm font-normal leading-[1.6] text-white">
                  {range.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
