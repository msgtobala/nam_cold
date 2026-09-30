import { aboutUsScienceConfig } from '@configs/aboutUsScience'

export type AboutUsScienceProps = {
  className?: string
}

/**
 * Figma Section 7 / Science (151:804).
 * Image (151:812): 1344×520, radius 16.
 */
export default function AboutUsScience({ className = '' }: AboutUsScienceProps) {
  const { index, label, heading, description, image, stats } =
    aboutUsScienceConfig

  return (
    <section
      className={['w-full bg-surface-cream', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="about-us-science-heading"
    >
      <div className="mx-auto flex w-full max-w-page flex-col items-start gap-10 px-4 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:gap-16 lg:px-page-x lg:py-[96px]">
        <header className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row">
          <div className="flex w-full shrink-0 flex-col items-start gap-1.5 lg:w-[140px]">
            <p className="text-caption font-semibold leading-[13px] tracking-[1.54px] text-accent-leaf">
              {index}
            </p>
            <p className="text-caption font-semibold leading-[13px] tracking-[1.54px] text-[#9ca3af]">
              {label}
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-5 overflow-hidden lg:w-[860px]">
            <h2
              id="about-us-science-heading"
              className="w-full max-w-[659px] text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
            >
              {heading}
            </h2>
            <p className="w-full text-base font-normal leading-[1.75] text-muted-alt">
              {description}
            </p>
          </div>
        </header>

        <div className="relative h-[240px] w-full overflow-hidden rounded-[16px] sm:h-[360px] lg:h-[520px]">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="absolute inset-0 size-full object-cover object-center"
            decoding="async"
          />
        </div>

        <ul className="flex w-full flex-col gap-px overflow-hidden rounded-[12px] lg:flex-row">
          {stats.map((stat) => (
            <li
              key={stat.id}
              className="flex min-w-0 flex-1 flex-col items-start gap-2 bg-surface-sand p-9"
            >
              <p className="text-nav font-medium uppercase leading-normal tracking-[1.68px] text-accent-leaf">
                {stat.label}
              </p>
              <p className="text-[1.75rem] font-medium leading-none text-primary sm:text-heading">
                {stat.value}
              </p>
              <p className="w-full text-body-sm font-normal leading-[1.6] text-muted-alt lg:whitespace-nowrap lg:tracking-[-0.02em]">
                {stat.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
