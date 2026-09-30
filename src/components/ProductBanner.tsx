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
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
        className="block h-auto w-full"
        loading="lazy"
        decoding="async"
      />
    </section>
  )
}
