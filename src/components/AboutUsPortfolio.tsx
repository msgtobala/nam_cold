import { aboutUsPortfolioConfig } from '@configs/aboutUsPortfolio'

export type AboutUsPortfolioProps = {
  className?: string
}

/**
 * Figma Section 8 / Portfolio (151:827).
 * Product family image (151:835): 1344×480, radius 16.
 */
export default function AboutUsPortfolio({
  className = '',
}: AboutUsPortfolioProps) {
  const { index, label, heading, description, image, items } =
    aboutUsPortfolioConfig

  return (
    <section
      className={['w-full bg-surface-warm', className]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby="about-us-portfolio-heading"
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
              id="about-us-portfolio-heading"
              className="w-full text-[1.75rem] font-normal leading-[1.3] text-ink sm:text-lead lg:text-heading"
            >
              {heading}
            </h2>
            <p className="w-full text-[15px] font-normal leading-[1.7] text-muted-alt">
              {description}
            </p>
          </div>
        </header>

        <div className="relative h-[240px] w-full overflow-hidden rounded-[16px] sm:h-[320px] lg:h-[480px]">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="absolute inset-0 size-full object-cover object-center"
            decoding="async"
          />
        </div>

        <ul className="flex w-full flex-col gap-2 lg:flex-row">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex min-w-0 flex-1 flex-col items-start gap-2.5 rounded-[12px] border border-solid border-[rgb(31_79_191_/_0.2)] bg-white p-6"
            >
              <p className="text-nav font-normal leading-normal tracking-[1.68px] text-primary">
                {item.number}
              </p>
              <p className="text-base font-medium leading-normal text-primary">
                {item.title}
              </p>
              <p className="w-full text-body-sm font-normal leading-[1.6] text-muted-alt">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
