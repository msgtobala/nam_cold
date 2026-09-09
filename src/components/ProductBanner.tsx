import { productBannerConfig } from '@configs/productBanner'

export type ProductBannerProps = {
  className?: string
  alt?: string
}

/** Full-bleed NAM COLD OXY promotional banner */
export default function ProductBanner({
  className = '',
  alt = productBannerConfig.alt,
}: ProductBannerProps) {
  const { image, width, height, ariaLabel, topGapClassName } =
    productBannerConfig

  return (
    <section
      className={[topGapClassName, 'relative w-full overflow-hidden', className]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <div className="relative w-full aspect-[1440/682]">
        <img
          src={image}
          alt={alt}
          width={width}
          height={height}
          className="absolute inset-0 size-full object-cover object-center"
          decoding="async"
        />
      </div>
    </section>
  )
}
