import { statHeroConfig } from '@configs/statHero'
import ProgressiveImage from '@components/ProgressiveImage'

export type StatHeroProps = {
  className?: string
}

/** Fast Action banner — replaces the previous text-based “Relief in 25 seconds” block */
export default function StatHero({ className = '' }: StatHeroProps) {
  const { ariaLabel, alt, banner } = statHeroConfig

  return (
    <section
      data-reveal
      className={['relative w-full overflow-hidden', className]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <div className="relative w-full aspect-[1920/742]">
        <ProgressiveImage
          src={banner.src}
          alt={alt}
          width={banner.width}
          height={banner.height}
          className="absolute inset-0 size-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
