import { heroBanner } from '@resources/hero'
import { strings } from '@strings/strings'

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
      className={['relative w-full overflow-hidden bg-[#0b4db3]', className]
        .filter(Boolean)
        .join(' ')}
      aria-label={strings.hero.ariaLabel}
    >
      <img
        src={heroBanner}
        alt={alt}
        width={7544}
        height={3000}
        className="block h-auto w-full"
        decoding="async"
        fetchPriority="high"
      />
    </section>
  )
}
