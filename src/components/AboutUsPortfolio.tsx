import { aboutUsPortfolioConfig } from '@configs/aboutUsPortfolio'
import ProgressiveImage from '@components/ProgressiveImage'

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
  const { image, items } = aboutUsPortfolioConfig

  return (
    <section
      data-reveal
      className={['w-full bg-surface-warm', className]
        .filter(Boolean)
        .join(' ')}
      aria-label="Portfolio"
    >
      <div className="mx-auto flex w-full max-w-page flex-col items-start gap-10 px-4 py-14 sm:gap-12 sm:px-8 sm:py-16 lg:gap-16 lg:px-page-x lg:py-[96px]">
        <div className="relative h-[240px] w-full overflow-hidden rounded-[16px] sm:h-[320px] lg:h-[480px]">
          <ProgressiveImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="absolute inset-0 size-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>

        <ul className="flex w-full flex-col gap-2 lg:flex-row">
          {items.map((item) => (
            <li data-reveal-item
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
