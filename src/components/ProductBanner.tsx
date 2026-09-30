import { productBannerConfig } from '@configs/productBanner'
import ProgressiveImage from '@components/ProgressiveImage'

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
      data-reveal
      className={[topGapClassName, 'relative w-full overflow-hidden', className]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <ProgressiveImage
        data-reveal-item
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
