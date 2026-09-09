import { aboutHeaderConfig } from '@configs/aboutHeader'

export type AboutHeaderProps = {
  className?: string
}

/** Figma About Us page hero (1:2736) */
export default function AboutHeader({ className = '' }: AboutHeaderProps) {
  const { ariaLabel, eyebrow, heading, description, hero } = aboutHeaderConfig

  return (
    <section
      className={['w-full bg-[#f8fbff]', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-6 px-4 pb-12 pt-14 sm:gap-6 sm:px-8 sm:pb-16 sm:pt-16 lg:gap-6 lg:px-24 lg:pb-[72px] lg:pt-[76px]">
        <div className="flex w-full flex-col gap-5 overflow-hidden">
          <span className="text-body-sm font-medium uppercase tracking-[1.96px] text-primary">
            {eyebrow}
          </span>
          <h1 className="max-w-[720px] text-[1.75rem] font-normal leading-[1.3] tracking-[0.28px] text-ink-strong">
            {heading}
          </h1>
          <p className="max-w-[520px] text-base font-normal leading-[1.3] text-[#5a6272]">
            {description}
          </p>
        </div>

        <div className="relative h-[240px] w-full overflow-hidden rounded-[24px] sm:h-[340px] lg:h-[429px]">
          <img
            src={hero.src}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            className="absolute inset-0 size-full object-cover object-center"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
