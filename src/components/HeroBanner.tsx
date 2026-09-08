import { heroBanner } from '@resources/hero'

export type HeroBannerProps = {
  className?: string
  alt?: string
}

/** Figma hero: 1440×785, full-bleed under the header */
export default function HeroBanner({
  className = '',
  alt = 'NAM COLD OXY — खुलके सांस लो',
}: HeroBannerProps) {
  return (
    <section
      className={['relative w-full overflow-hidden bg-[#7ec8e8]', className]
        .filter(Boolean)
        .join(' ')}
      aria-label="Hero banner"
    >
      <div className="relative w-full aspect-[1440/785]">
        <img
          src={heroBanner}
          alt={alt}
          width={1440}
          height={785}
          className="absolute inset-0 size-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
