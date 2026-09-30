import { heroBanner } from '@resources/hero'
import { strings } from '@strings/strings'
import ProgressiveImage from '@components/ProgressiveImage'

export type HeroBannerProps = {
  className?: string
  alt?: string
}

/** Full-width hero. Image is 7544×3000; height follows that ratio so the artwork is not cropped. */
export default function HeroBanner({
  className = '',
  alt = strings.hero.alt,
}: HeroBannerProps) {
  return (
    <section
      data-reveal="load"
      className={['relative w-full overflow-hidden bg-[#0b4db3]', className]
        .filter(Boolean)
        .join(' ')}
      aria-label={strings.hero.ariaLabel}
    >
      <ProgressiveImage
        data-reveal-media
        src={heroBanner}
        alt={alt}
        width={1920}
        height={764}
        className="block h-auto w-full"
        decoding="async"
        fetchPriority="high"
      />
    </section>
  )
}
